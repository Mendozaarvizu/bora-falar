/* Cartões (revisão espaçada) e treino de escuta */
(function () {
  const PT = window.PT;
  const { h, md, shuffle, pick, norm, stripAcc, ICON } = PT;
  const DAY = 864e5, NEW_PER_DAY = 30, KNOWN_DAYS = 60;
  const sod = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d.getTime(); };

  /* ---------- revisão espaçada ---------- */
  function wordMap() {
    const m = {};
    for (const L of PT.allLessons()) for (const [w, e, d, x, pt] of L.v) m[`${L.id}:${w}`] = { w, e, d, x, pt, group: L.t };
    for (const [k, c] of Object.entries(PT.S.custom)) m[k] = { ...c, group: "Das conversas" };
    return m;
  }
  function schedule(c, g) {
    const o = { ef: c.ef || 2.5, reps: c.reps || 0, lapses: c.lapses || 0, iv: c.iv || 0 };
    if (g === 1) {
      if (!c.n) o.lapses++;
      o.reps = 0; o.iv = 0; o.ef = Math.max(1.3, o.ef - 0.2); o.due = Date.now() + 60e3;
      return o;
    }
    if (g === 2) { o.iv = o.reps === 0 ? 1 : Math.max(1, Math.round(o.iv * 1.2)); o.ef = Math.max(1.3, o.ef - 0.15); }
    if (g === 3) o.iv = o.reps === 0 ? 1 : o.reps === 1 ? 3 : Math.max(o.iv + 1, Math.round(o.iv * o.ef));
    if (g === 4) { o.iv = o.reps === 0 ? 3 : o.reps === 1 ? 6 : Math.max(o.iv + 2, Math.round(o.iv * o.ef * 1.3)); o.ef = Math.min(3, o.ef + 0.15); }
    o.reps++;
    o.due = sod() + o.iv * DAY;
    return o;
  }
  const ivLabel = (o) => (o.iv === 0 ? "1 min" : o.iv < 30 ? `${o.iv} d` : `${Math.round(o.iv / 30)} m`);

  PT.srs = {
    wordMap,
    addLesson(L) {
      let n = 0;
      for (const dir of ["r", "p"]) for (const v of L.v) {
        const id = `${L.id}:${v[0]}|${dir}`;
        if (!PT.S.cards[id]) { PT.S.cards[id] = { n: 1 }; n++; }
      }
      return n;
    },
    addCustom(words) {
      let n = 0;
      for (const x of words) {
        if (!x || !x.w || !x.d) continue;
        const k = "c:" + String(x.w).toLowerCase().slice(0, 60);
        if (PT.S.custom[k]) continue;
        PT.S.custom[k] = { w: String(x.w).slice(0, 60), e: String(x.e || "💬").slice(0, 8), d: String(x.d).slice(0, 200), x: String(x.x || "").slice(0, 200) };
        for (const dir of ["r", "p"]) PT.S.cards[`${k}|${dir}`] = { n: 1 };
        n++;
      }
      PT.save();
      return n;
    },
    counts() {
      const now = Date.now(), cards = Object.entries(PT.S.cards);
      const introduced = PT.today().nw || 0;
      const due = cards.filter(([, c]) => !c.n && c.due <= now).length;
      const fresh = Math.min(cards.filter(([, c]) => c.n).length, Math.max(0, NEW_PER_DAY - introduced));
      const words = new Set(cards.filter(([, c]) => !c.n && c.reps > 0).map(([id]) => id.split("|")[0])).size;
      return { due, fresh, total: cards.length, words };
    },
    queue() {
      const now = Date.now(), cards = Object.entries(PT.S.cards);
      const due = cards.filter(([, c]) => !c.n && c.due <= now).sort((a, b) => a[1].due - b[1].due).map(([id]) => id);
      const nw = cards.filter(([, c]) => c.n).map(([id]) => id);
      const limit = Math.max(0, NEW_PER_DAY - (PT.today().nw || 0));
      const fresh = [...nw.filter((id) => id.endsWith("|r")), ...nw.filter((id) => id.endsWith("|p"))].slice(0, limit);
      return [...due, ...fresh].slice(0, 60);
    },
    strength(key) {
      const c = PT.S.cards[key + "|r"], d = PT.S.cards[key + "|p"];
      const iv = Math.min((c && c.iv) || 0, (d && d.iv) || 0), reps = ((c && c.reps) || 0) + ((d && d.reps) || 0);
      return iv >= 21 ? 3 : iv >= 4 ? 2 : reps > 0 ? 1 : 0;
    }
  };

  /* ---------- sessão genérica ---------- */
  function runSession(o) {
    PT.focus((root) => {
      const items = o.make();
      const st = { i: 0, ok: 0, xp: 0, onEnter: null, onNum: null, onSpace: null };
      const bar = h("div", { class: "bar good" }, h("i"));
      const counter = h("span", { class: "combo num", style: "color:var(--ink-3)" });
      const body = h("div", { class: "stack" });
      root.append(h("div", { class: "stack" },
        h("div", { class: "lesson-top" }, h("button", { class: "icon-btn", "aria-label": "Sair", html: ICON.close, onclick: () => PT.go(o.back, o.backArg) }), bar, counter),
        h("div", { class: "label" }, o.title), body));
      const onKey = (e) => {
        const typing = e.target.matches && e.target.matches("input, textarea");
        if (e.key === "Enter" && st.onEnter) { e.preventDefault(); st.onEnter(); }
        else if (e.key === " " && !typing && st.onSpace) { e.preventDefault(); st.onSpace(); }
        else if (!typing && /^[1-5]$/.test(e.key) && st.onNum) st.onNum(Number(e.key));
      };
      document.addEventListener("keydown", onKey);
      PT.cleanup = () => document.removeEventListener("keydown", onKey);
      const next = () => {
        st.onEnter = st.onNum = st.onSpace = null;
        if (st.i >= items.length) return end();
        bar.firstChild.style.width = `${(st.i / items.length) * 100}%`;
        counter.textContent = `${st.i + 1}/${items.length}`;
        PT.put(body);
        o.render(items[st.i], body, (r) => { if (r.ok) st.ok++; st.xp += r.xp || 0; st.i++; next(); }, st, items);
      };
      const end = () => {
        bar.firstChild.style.width = "100%";
        counter.textContent = "";
        if (st.xp) PT.confetti(80);
        PT.put(body, h("div", { class: "results" },
          PT.wave(),
          h("h1", {}, o.doneTitle || "Treino completo!"),
          h("div", { class: "xp-big num" }, `+${st.xp} XP`),
          o.summary ? o.summary(st, items) : h("p", { class: "muted" }, `${st.ok} de ${items.length} certos.`),
          h("div", { class: "stack", style: "width:100%;gap:10px" },
            o.again === false ? null : h("button", { class: "btn block", onclick: () => runSession(o) }, "Mais uma rodada"),
            h("button", { class: "btn ghost block", onclick: () => PT.go(o.back, o.backArg) }, "Voltar"))));
      };
      if (!items.length) { body.append(h("p", { class: "muted" }, "Nada por aqui agora."), h("button", { class: "btn ghost", onclick: () => PT.go(o.back) }, "Voltar")); return; }
      next();
    });
  }

  PT.runSession = (o) => runSession(o);
  PT.feedbackBar = (...a) => feedbackBar(...a);
  function feedbackBar(ok, lines, onNext, st) {
    const cont = h("button", { class: "btn block " + (ok ? "good" : "bad"), onclick: onNext }, "Continuar");
    st.onEnter = onNext;
    setTimeout(() => cont.focus({ preventScroll: true }), 10);
    return h("div", { class: "feedback " + (ok ? "ok" : "no") },
      h("div", { class: "verdict" }, ok ? pick(PT.PRAISE) : pick(PT.OOPS)), lines, cont);
  }

  /* ---------- revisão de cartões ---------- */
  PT.startReview = function () {
    runSession({
      title: "Revisão de cartões", back: "cartoes", doneTitle: "Revisão feita!", again: false,
      make: () => PT.srs.queue(),
      summary: (st) => h("p", { class: "muted" }, `${st.i} cartões revisados${st.known ? ` (${st.known} ${st.known === 1 ? "palavra que você já sabia" : "palavras que você já sabia"})` : ""}. As palavras voltam na hora certa, antes de você esquecer.`),
      render(id, body, done, st, items) {
        const [key, dir] = id.split("|");
        const v = wordMap()[key];
        if (!v) { done({ ok: true }); return; }
        const card = h("div", { class: "panel flash" });
        const front = () => {
          PT.put(card, ...(dir === "r"
            ? [h("div", { class: "label" }, "O que quer dizer?"), h("div", { class: "row", style: "justify-content:center" }, h("div", { class: "word-hero" }, v.w), PT.speakBtn(v.w))]
            : [h("div", { class: "label" }, "Qual é a palavra?"), h("div", { class: "big-emoji" }, v.e), h("p", { style: "font-size:1.1rem;max-width:34ch" }, v.d)]));
          if (dir === "r" && !PT.isAbbrev(v.w)) setTimeout(() => PT.speak(v.w), 200);
        };
        const reveal = h("button", { class: "btn block" }, "Mostrar resposta");
        const foot = h("div", { class: "feedback" }, reveal);
        const back = () => {
          PT.put(card, 
            h("div", { class: "big-emoji" }, v.e),
            h("div", { class: "row", style: "justify-content:center" }, h("div", { class: "word-hero" }, v.w), PT.speakBtn(v.w)),
            h("p", { style: "font-size:1.05rem;max-width:34ch" }, v.d),
            v.x ? h("div", { class: "vocab-card" }, h("div", { class: "exm" }, PT.speakBtn(v.x), h("span", {}, v.x))) : null,
            v.pt && PT.S.settings.ptNotes ? h("div", { class: "pt-note", html: "🇵🇹 " + md(v.pt) }) : null);
          if (dir === "p" && !PT.isAbbrev(v.w)) PT.speak(v.w);
          const c = PT.S.cards[id] || { n: 1 };
          const names = ["De novo", "Difícil", "Bom", "Fácil"], cls = ["bad", "ghost", "good", "gold"];
          const grade = (g) => {
            const wasNew = !!c.n;
            PT.S.cards[id] = schedule(c, g);
            if (wasNew) PT.today().nw = (PT.today().nw || 0) + 1;
            PT.S.stats.reviews++;
            PT.gain(2, { r: 1 });
            if (g === 1) items.splice(Math.min(items.length, st.i + 4), 0, id);
            done({ ok: g > 1, xp: 2 });
          };
          // "Já sei": a palavra vira dominada nos dois sentidos e só volta daqui a KNOWN_DAYS dias.
          const known = () => {
            const isNew = (cid) => !!(PT.S.cards[cid] || {}).n;
            let freed = isNew(id) ? 1 : 0;
            for (let j = items.length - 1; j > st.i; j--) {
              if (items[j].split("|")[0] !== key) continue;
              if (isNew(items[j])) freed++;
              items.splice(j, 1);
            }
            for (const d of ["r", "p"]) {
              const cid = `${key}|${d}`;
              if (PT.S.cards[cid]) PT.S.cards[cid] = { ef: 2.5, reps: 3, lapses: 0, iv: KNOWN_DAYS, due: sod() + KNOWN_DAYS * DAY };
            }
            // As palavras novas que saíram da sessão dão lugar às próximas, para a cota do dia não diminuir.
            const inSession = new Set(items);
            const pool = Object.keys(PT.S.cards).filter((cid) => PT.S.cards[cid].n && !inSession.has(cid));
            items.push(...[...pool.filter((cid) => cid.endsWith("|r")), ...pool.filter((cid) => cid.endsWith("|p"))].slice(0, freed));
            st.known = (st.known || 0) + 1;
            PT.save();
            done({ ok: true });
          };
          PT.put(foot, h("div", { class: "grades" }, [1, 2, 3, 4].map((g) =>
            h("button", { class: `btn ${cls[g - 1]}`, onclick: () => grade(g) }, names[g - 1], h("small", {}, ivLabel(schedule(c, g))))),
            h("button", { class: "btn known", title: "Você já conhece esta palavra: ela vira dominada e só volta para revisão daqui a 2 meses.", onclick: known }, "Já sei", h("small", {}, ivLabel({ iv: KNOWN_DAYS })))));
          st.onNum = (n) => (n === 5 ? known() : grade(n)); st.onSpace = null; st.onEnter = () => grade(3);
        };
        reveal.onclick = back;
        st.onSpace = back; st.onEnter = back;
        front();
        body.append(card, foot);
      }
    });
  };

  PT.views.cartoes = function (root) {
    const c = PT.srs.counts(), m = wordMap(), n = c.due + c.fresh;
    const keys = [...new Set(Object.keys(PT.S.cards).map((id) => id.split("|")[0]))].filter((k) => m[k]);
    const groups = {};
    for (const k of keys) (groups[m[k].group] = groups[m[k].group] || []).push(k);
    const mastered = keys.filter((k) => PT.srs.strength(k) === 3).length;
    root.append(h("div", { class: "stack" },
      h("div", {}, h("h1", {}, "Cartões"), h("p", { class: "muted" }, "Revisão espaçada: cada palavra volta na hora certa, antes de você esquecer.")),
      c.total ? h("section", { class: "panel stack" },
        h("div", { class: "stat-row" },
          h("div", { class: "stat" }, h("b", {}, c.due), h("span", {}, "para revisar")),
          h("div", { class: "stat" }, h("b", {}, c.fresh), h("span", {}, "novos hoje")),
          h("div", { class: "stat" }, h("b", {}, mastered), h("span", {}, "dominadas"))),
        n ? h("button", { class: "btn block", onclick: PT.startReview }, `Revisar agora · ${n}`)
          : h("p", { class: "muted", style: "text-align:center" }, "Tudo em dia! Volte amanhã ou faça uma lição nova."),
        h("p", { class: "small muted" }, "Atalhos: espaço mostra a resposta, 1–4 escolhe a nota e 5 é “Já sei”, para palavras que você já conhece."))
        : h("section", { class: "panel stack" },
          h("p", {}, "Você ainda não tem cartões. Cada lição completa adiciona as palavras dela aqui."),
          h("button", { class: "btn", onclick: () => PT.go("trilha") }, "Ir para a trilha")),
      // As palavras de cada lição ficam escondidas até você abrir o grupo, para não entregar as respostas.
      keys.length ? h("div", { class: "stack", style: "gap:8px" }, Object.entries(groups).map(([g, ks]) => h("details", { class: "wgroup" },
        h("summary", {},
          h("span", { class: "stack", style: "gap:0;flex:1;min-width:0" }, h("h3", {}, g), h("small", { class: "muted" }, `${ks.length} ${ks.length === 1 ? "palavra" : "palavras"}`)),
          h("span", { class: "dots", "aria-hidden": "true" }, ks.map((k) => h("i", { class: "s" + PT.srs.strength(k) }))),
          h("span", { class: "chev", "aria-hidden": "true", html: ICON.chev })),
        h("div", { class: "words" }, ks.map((k) => h("button", { class: "wchip s" + PT.srs.strength(k), type: "button", "data-say": m[k].w, title: m[k].d }, h("i"), h("span", {}, m[k].e), m[k].w)))))) : null,
      keys.length ? h("p", { class: "small muted" }, "● amarelo: aprendendo · ● verde claro: firme · ● verde: dominada. Toque numa lição para ver as palavras e numa palavra para ouvir.") : null
    ));
  };

  /* ---------- escuta ---------- */
  function sentencePool() {
    const all = PT.allLessons(), done = all.filter((l) => (PT.S.lessons[l.id] || {}).done);
    const src = done.length >= 2 ? done : all;
    const list = src.flatMap((l) => [...l.v.map((v) => v[3]), ...l.s.map((s) => s[0])]);
    return [...new Set(list)].filter((s) => !PT.isAbbrev(s) && s.split(" ").length <= 9);
  }

  PT.startPairs = function () {
    runSession({
      title: "Pares mínimos", back: "ouvir",
      make: () => shuffle(PT.PAIRS).slice(0, 10).map((p) => ({ p, target: Math.random() < 0.5 ? 0 : 1 })),
      render(it, body, done, st) {
        const [a, b, hint] = it.p, word = it.p[it.target];
        let answered = false;
        const opts = [a, b].map((w, i) => h("button", { class: "opt", style: "justify-content:center;font-size:1.5rem;font-weight:700;min-height:84px" }, w));
        const choose = (i) => {
          if (answered) return;
          answered = true;
          const ok = i === it.target;
          opts.forEach((o, j) => { o.disabled = true; if (j === it.target) o.classList.add("right"); else if (j === i) o.classList.add("wrong"); });
          if (ok) { PT.S.stats.listenOk++; PT.gain(3, { o: 1 }); } else PT.gain(0, { o: 1 });
          body.append(feedbackBar(ok, h("div", { class: "stack", style: "gap:8px" },
            h("p", {}, "A diferença: ", h("strong", {}, hint)),
            h("div", { class: "row" }, h("button", { class: "say", "data-say": a, html: ICON.speak + PT.esc(a) }), h("button", { class: "say", "data-say": b, html: ICON.speak + PT.esc(b) }))),
            () => done({ ok, xp: ok ? 3 : 0 }), st));
        };
        opts.forEach((o, i) => (o.onclick = () => choose(i)));
        st.onNum = (n) => n <= 2 && choose(n - 1);
        setTimeout(() => PT.speak(word), 250);
        body.append(h("div", { class: "prompt" }, "Qual você ouviu?"),
          h("div", { class: "row", style: "justify-content:center;gap:16px" }, PT.speakBtn(word, { lg: true }), PT.speakBtn(word, { slow: true })),
          h("div", { class: "grid2" }, opts));
      }
    });
  };

  PT.startDictation = function () {
    runSession({
      title: "Ditado", back: "ouvir",
      make: () => shuffle(sentencePool()).slice(0, 8),
      render(text, body, done, st) {
        const input = h("input", { class: "type-in", id: "dict-in", type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", placeholder: "Escreva a frase…" });
        const check = h("button", { class: "btn block", disabled: true }, "Verificar");
        input.oninput = () => (check.disabled = !input.value.trim());
        const foot = h("div", { class: "feedback" }, check);
        const doCheck = () => {
          if (check.disabled) return;
          input.disabled = true;
          const a = norm(input.value), b = norm(text);
          const exact = a === b, close = !exact && stripAcc(a) === stripAcc(b);
          const ok = exact || close, xp = exact ? 5 : close ? 3 : 0;
          if (ok) { PT.S.stats.dictOk++; PT.S.stats.listenOk++; }
          PT.gain(xp, { o: 1 });
          const typed = new Set(a.split(" ").map(stripAcc));
          const marked = text.split(" ").map((w) => (typed.has(stripAcc(norm(w))) ? h("span", {}, w + " ") : h("strong", { style: "color:var(--bad)" }, w + " ")));
          foot.replaceWith(feedbackBar(ok, h("div", { class: "stack", style: "gap:6px" },
            close ? h("p", { class: "small" }, "Quase perfeito! Cuidado com os acentos.") : null,
            h("div", { class: "row", style: "flex-wrap:nowrap" }, PT.speakBtn(text), h("p", {}, ok ? text : marked))),
            () => done({ ok, xp }), st));
        };
        check.onclick = doCheck;
        st.onEnter = doCheck;
        setTimeout(() => { PT.speak(text); input.focus({ preventScroll: true }); }, 250);
        body.append(h("div", { class: "prompt" }, "Ouça e escreva"),
          h("div", { class: "row", style: "justify-content:center;gap:16px" }, PT.speakBtn(text, { lg: true }), PT.speakBtn(text, { slow: true })),
          input, foot);
      }
    });
  };

  PT.startRepeat = function () {
    runSession({
      title: "Repita comigo", back: "ouvir", doneTitle: "Boa conversa com o espelho!",
      make: () => shuffle(PT.PHRASES).slice(0, 8),
      summary: (st, items) => h("p", { class: "muted" }, `${items.length} frases praticadas em voz alta.`),
      render([text, ctx], body, done, st) {
        const grade = (xp, ok) => { PT.gain(xp, { o: 1 }); done({ ok, xp }); };
        st.onNum = (n) => n <= 3 && grade(4 - n, n === 1);
        setTimeout(() => PT.speak(text), 250);
        body.append(
          h("div", { class: "ctx" }, "💭 ", ctx),
          h("div", { class: "panel flash", style: "min-height:220px" },
            h("div", { class: "word-hero", style: "font-size:1.7rem" }, text),
            h("div", { class: "row", style: "justify-content:center;gap:16px" }, PT.speakBtn(text, { lg: true }), PT.speakBtn(text, { slow: true })),
            h("p", { class: "muted small", style: "max-width:36ch" }, "Ouça, depois fale em voz alta. Tente copiar a melodia da frase, não só as palavras.")),
          h("div", { class: "grid2", style: "grid-template-columns:repeat(3,1fr)" },
            h("button", { class: "btn good", onclick: () => grade(3, true) }, "Consegui!"),
            h("button", { class: "btn ghost", onclick: () => grade(2, false) }, "Mais ou menos"),
            h("button", { class: "btn ghost", onclick: () => grade(1, false) }, "Difícil")));
      }
    });
  };

  PT.views.ouvir = function (root) {
    const tts = PT.tts;
    const warn = !tts.ok ? "Este navegador não tem voz. Tente abrir no Chrome, Safari ou Edge."
      : !tts.voice ? "Não encontrei uma voz em português neste aparelho. O áudio pode sair com sotaque estranho. Instale a voz 'Português (Brasil)' nas configurações do sistema."
        : null;
    root.append(h("div", { class: "stack" },
      h("div", {}, h("h1", {}, "Ouvir"), h("p", { class: "muted" }, "Treine o ouvido e a boca com a pronúncia do Brasil.")),
      warn ? h("div", { class: "notice" }, warn) : null,
      h("div", { class: "grid2" },
        h("button", { class: "tile", onclick: PT.startPairs, disabled: !tts.ok }, h("span", { class: "e" }, "👂"), h("b", {}, "Pares mínimos"), h("span", { class: "small muted" }, "avó ou avô? pão ou pau?")),
        h("button", { class: "tile", onclick: PT.startDictation, disabled: !tts.ok }, h("span", { class: "e" }, "✍️"), h("b", {}, "Ditado"), h("span", { class: "small muted" }, "Ouça frases e escreva")),
        h("button", { class: "tile", onclick: PT.startRepeat, disabled: !tts.ok }, h("span", { class: "e" }, "🗣️"), h("b", {}, "Repita comigo"), h("span", { class: "small muted" }, "Frases do dia a dia em voz alta")),
        h("div", { class: "tile", style: "cursor:default" }, h("span", { class: "e" }, "🎚️"), h("b", {}, "Velocidade"), h("span", { class: "small muted" }, "Todo áudio tem um botão de tartaruga para ouvir devagar."))),
      h("p", { class: "small muted" }, "O microfone não funciona dentro desta página. No “Repita comigo”, você fala em voz alta e dá a sua própria nota."),

      PT.bonusCard()
    ));
  };
})();
