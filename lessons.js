/* Trilha e lições */
(function () {
  const PT = window.PT;
  const { h, md, shuffle, pick, norm, stripAcc, ICON } = PT;

  /* ---------- trilha ---------- */
  PT.views.trilha = function (root) {
    const S = PT.S, nl = PT.nextLesson();
    root.append(h("div", { class: "stack" },
      h("div", {}, h("h1", {}, "Trilha"), h("p", { class: "muted" }, `${PT.lessonsDone()} de ${PT.allLessons().length} lições completas. Você pode fazer em qualquer ordem.`)),
      PT.UNITS.map((u, i) => {
        const done = u.lessons.filter((l) => (S.lessons[l.id] || {}).done).length;
        return h("section", { class: "unit", style: `--u:${u.c}` },
          h("div", { class: "unit-head" }, h("span", { class: "e", "aria-hidden": "true" }, u.e),
            h("div", {}, h("div", { class: "label" }, `Unidade ${i + 1} · ${done}/${u.lessons.length}`), h("h2", {}, u.t))),
          h("div", { class: "path" }, u.lessons.map((l, j) => {
            const st = S.lessons[l.id] || {}, isNext = nl.id === l.id && !st.done;
            const off = [0, 56, 0, -56][(j + i) % 4];
            return h("button", { class: "node" + (st.done ? " done" : "") + (isNext ? " next" : ""), style: `transform:translateX(${off}px)`, onclick: () => lessonSheet(l, u) },
              isNext ? h("span", { class: "go" }, "Começar") : null,
              h("span", { class: "disc", "aria-hidden": "true" }, l.e),
              h("span", { class: "name" }, l.t),
              h("span", { class: "stars", "aria-label": st.done ? `${st.stars} estrelas` : "" }, st.done ? "★".repeat(st.stars) + "☆".repeat(3 - st.stars) : ""));
          })));
      })));
  };

  function lessonSheet(l, u) {
    const st = PT.S.lessons[l.id] || {};
    const close = PT.modal(h("div", { class: "stack", style: `--u:${u.c}` },
      h("div", { class: "row" },
        h("span", { style: "font-size:2.6rem;line-height:1" }, l.e),
        h("div", { style: "flex:1" }, h("div", { class: "label" }, u.t), h("h2", {}, l.t)),
        h("button", { class: "icon-btn", "aria-label": "Fechar", html: ICON.close, onclick: () => close() })),
      st.done ? h("p", { class: "muted" }, `${"★".repeat(st.stars)}${"☆".repeat(3 - st.stars)} · feita ${st.done}× · praticar de novo vale XP.`) : h("p", { class: "muted" }, "Explicação, 8 palavras novas e cerca de 14 exercícios."),
      h("div", { class: "words" }, l.v.map((v) => h("span", { class: "wchip" }, h("span", {}, v[1]), v[0]))),
      h("button", { class: "btn block", onclick: () => { close(); PT.startLesson(l.id); } }, st.done ? "Praticar de novo" : "Começar")
    ));
  }

  /* ---------- exercícios ---------- */
  function optionList(labels, api, emoji) {
    let sel = -1, locked = false;
    const btns = labels.map((o, i) => h("button", { class: "opt" + (emoji ? " emoji" : ""), type: "button" }, emoji ? null : h("span", { class: "k" }, i + 1), o));
    const choose = (i) => {
      if (locked || !btns[i]) return;
      sel = i;
      btns.forEach((b, j) => b.classList.toggle("sel", j === i));
      api.setReady(true);
    };
    btns.forEach((b, i) => (b.onclick = () => choose(i)));
    return {
      el: h("div", { class: "opts" + (emoji && labels.length === 4 ? " four-emoji" : "") }, btns),
      choose: (n) => choose(n - 1),
      get sel() { return sel; },
      mark(right) { locked = true; btns.forEach((b, j) => { if (j === right) b.classList.add("right"); else if (j === sel) b.classList.add("wrong"); b.disabled = true; }); }
    };
  }
  const others = (V, v, n = 3) => shuffle(V.filter((x) => x.w !== v.w)).slice(0, n);

  const RENDER = {
    "pick-word"(it, api) {
      const opts = shuffle([it.v, ...others(it.V, it.v)]);
      const ol = optionList(opts.map((o) => o.w), api);
      return {
        el: h("div", { class: "stack" }, h("div", { class: "prompt" }, "Qual é a palavra?"),
          h("div", { class: "big-emoji", "aria-hidden": "true" }, it.v.e), h("p", { style: "text-align:center;font-size:1.1rem" }, it.v.d), ol.el),
        choose: ol.choose,
        check() { const right = opts.indexOf(it.v); ol.mark(right); return { ok: ol.sel === right, correct: it.v.w, say: it.v.w }; }
      };
    },
    "pick-def"(it, api) {
      const opts = shuffle([it.v, ...others(it.V, it.v)]);
      const ol = optionList(opts.map((o) => o.d), api);
      setTimeout(() => PT.speak(it.v.w), 250);
      return {
        el: h("div", { class: "stack" }, h("div", { class: "prompt" }, "O que quer dizer?"),
          h("div", { class: "row", style: "justify-content:center" }, h("div", { class: "word-hero" }, it.v.w), PT.speakBtn(it.v.w)), ol.el),
        choose: ol.choose,
        check() { const right = opts.indexOf(it.v); ol.mark(right); return { ok: ol.sel === right, correct: it.v.d, say: it.v.w }; }
      };
    },
    listen(it, api) {
      const opts = shuffle([it.v, ...others(it.V, it.v)]);
      const ol = optionList(opts.map((o) => o.w), api);
      setTimeout(() => PT.speak(it.v.w), 250);
      return {
        el: h("div", { class: "stack" }, h("div", { class: "prompt" }, "O que você ouviu?"),
          h("div", { class: "row", style: "justify-content:center;gap:16px" }, PT.speakBtn(it.v.w, { lg: true }), PT.speakBtn(it.v.w, { slow: true })), ol.el),
        choose: ol.choose,
        check() { const right = opts.indexOf(it.v); ol.mark(right); return { ok: ol.sel === right, correct: it.v.w, say: it.v.w }; }
      };
    },
    fill(it, api) {
      const s = it.s, opts = shuffle([s.blank, ...s.dis]);
      const ol = optionList(opts, api);
      const i = s.s.indexOf(s.blank);
      return {
        el: h("div", { class: "stack" }, h("div", { class: "prompt" }, "Complete a frase"),
          h("div", { class: "ctx" }, "💭 ", s.ctx),
          h("p", { style: "font-size:1.35rem;font-weight:700" }, s.s.slice(0, i), h("span", { class: "blank" }, "   "), s.s.slice(i + s.blank.length)), ol.el),
        choose: ol.choose,
        check() { const right = opts.indexOf(s.blank); ol.mark(right); return { ok: ol.sel === right, correct: s.s, say: s.s }; }
      };
    },
    order(it, api) {
      const s = it.s;
      const words = s.s.replace(/[.,!?;:]/g, "").split(/\s+/).filter(Boolean);
      const extra = shuffle(it.L.s.flatMap((x) => x[0].replace(/[.,!?;:]/g, "").split(/\s+/)).filter((w) => !words.some((x) => norm(x) === norm(w)))).slice(0, 2);
      const pool = shuffle([...words, ...extra]).map((w, i) => ({ w, i }));
      const answer = [];
      const line = h("div", { class: "answer-line", "aria-label": "Sua frase" });
      const bank = h("div", { class: "tiles" });
      let locked = false;
      const draw = () => {
        PT.put(line, ...answer.map((p) => h("button", { class: "tile-w", type: "button", onclick: () => { if (locked) return; answer.splice(answer.indexOf(p), 1); draw(); } }, p.w)));
        PT.put(bank, ...pool.map((p) => h("button", { class: "tile-w" + (answer.includes(p) ? " used" : ""), type: "button", tabindex: answer.includes(p) ? "-1" : null, onclick: () => { if (locked || answer.includes(p)) return; answer.push(p); draw(); } }, p.w)));
        api.setReady(answer.length > 0);
      };
      draw();
      setTimeout(() => PT.speak(s.s), 250);
      return {
        el: h("div", { class: "stack" }, h("div", { class: "prompt" }, "Monte a frase"),
          h("div", { class: "row", style: "flex-wrap:nowrap;align-items:flex-start" }, PT.tts.ok ? PT.speakBtn(s.s) : null, h("div", { class: "ctx" }, "💭 ", s.ctx)),
          line, bank),
        check() { locked = true; return { ok: norm(answer.map((p) => p.w).join(" ")) === norm(s.s), correct: s.s, say: s.s }; }
      };
    },
    dictate(it, api) {
      const input = h("input", { class: "type-in", id: "dictate-in", type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", placeholder: "Escreva aqui…" });
      input.oninput = () => api.setReady(input.value.trim().length > 0);
      setTimeout(() => { PT.speak(it.text); input.focus({ preventScroll: true }); }, 250);
      return {
        el: h("div", { class: "stack" }, h("div", { class: "prompt" }, "Escreva o que você ouviu"),
          h("div", { class: "row", style: "justify-content:center;gap:16px" }, PT.speakBtn(it.text, { lg: true }), PT.speakBtn(it.text, { slow: true })), input),
        check() {
          input.disabled = true;
          const a = norm(input.value), b = norm(it.text);
          if (a === b) return { ok: true, correct: it.text, say: it.text };
          if (stripAcc(a) === stripAcc(b)) return { ok: true, correct: it.text, say: it.text, note: "Quase perfeito! Cuidado com os acentos." };
          return { ok: false, correct: it.text, say: it.text };
        }
      };
    },
    match(it, api) {
      const left = shuffle(it.items), right = shuffle(it.items);
      let selL = null, selR = null, done = 0, mistakes = 0;
      const lb = left.map((v) => h("button", { class: "opt", type: "button" }, v.w));
      const rb = right.map((v) => h("button", { class: "opt emoji", type: "button", style: "font-size:1.9rem" }, v.e));
      const tryPair = () => {
        if (selL == null || selR == null) return;
        const a = left[selL], b = right[selR], A = lb[selL], B = rb[selR];
        if (a === b) {
          A.classList.remove("sel"); B.classList.remove("sel"); A.classList.add("right", "done"); B.classList.add("right", "done");
          PT.speak(a.w); done++;
          if (done === it.items.length) setTimeout(() => api.autoDone(mistakes <= 1), 350);
        } else {
          mistakes++;
          A.classList.add("wrong"); B.classList.add("wrong");
          setTimeout(() => { A.classList.remove("wrong", "sel"); B.classList.remove("wrong", "sel"); }, 450);
        }
        selL = selR = null;
      };
      lb.forEach((b, i) => (b.onclick = () => { lb.forEach((x) => x.classList.remove("sel")); b.classList.add("sel"); selL = i; tryPair(); }));
      rb.forEach((b, i) => (b.onclick = () => { rb.forEach((x) => x.classList.remove("sel")); b.classList.add("sel"); selR = i; tryPair(); }));
      return {
        el: h("div", { class: "stack" }, h("div", { class: "prompt" }, "Junte os pares"),
          h("div", { class: "match" }, h("div", { class: "opts" }, lb), h("div", { class: "opts" }, rb))),
        check() { return { ok: mistakes <= 1 }; }
      };
    }
  };

  function buildExercises(L) {
    const V = L.v.map(([w, e, d, x, pt]) => ({ w, e, d, x, pt }));
    const audio = PT.tts.ok;
    const kinds = shuffle(["pick-word", "pick-word", "pick-word", "pick-def", "pick-def", "pick-def", audio ? "listen" : "pick-word", audio ? "listen" : "pick-def"]);
    const first = shuffle(V.map((v, i) => ({ type: kinds[i] === "listen" && PT.isAbbrev(v.w) ? "pick-word" : kinds[i], v, V })));
    const rest = [];
    if (new Set(V.map((v) => v.e)).size === V.length) rest.push({ type: "match", items: shuffle(V).slice(0, 4) });
    shuffle(L.s).forEach((x, i) => rest.push({ type: i % 2 ? "order" : "fill", s: { s: x[0], blank: x[1], dis: x[2], ctx: x[3] }, L }));
    if (audio) {
      const pool = V.filter((v) => !PT.isAbbrev(v.x) && v.x.split(" ").length <= 7);
      if (pool.length) rest.push({ type: "dictate", text: pick(pool).x });
    }
    return [...first, ...shuffle(rest)];
  }

  /* ---------- lição ---------- */
  PT.startLesson = function (id) {
    const L = PT.allLessons().find((l) => l.id === id);
    if (L) PT.focus((root) => runLesson(root, L));
  };

  function runLesson(root, L) {
    const S = PT.S, prev = S.lessons[L.id] || {}, practice = !!prev.done;
    const st = { queue: buildExercises(L), idx: 0, total: 0, first: 0, errors: 0, combo: 0, best: 0, xp: 0, retried: new Set() };
    const bar = h("div", { class: "bar" }, h("i"));
    const combo = h("div", { class: "combo", "aria-live": "polite" });
    const closeBtn = h("button", { class: "icon-btn", "aria-label": "Sair da lição", html: ICON.close });
    const top = h("div", { class: "lesson-top" }, closeBtn, bar, combo);
    const body = h("div", { class: "stack" });
    root.append(h("div", { class: "stack", style: `--u:${L.unit.c}` }, top, body));
    let onEnter = null, onNum = null, inEx = false;

    closeBtn.onclick = () => {
      if (inEx && st.idx > 0) PT.confirm("Sair da lição?", "Você perde o progresso desta lição (o XP que já ganhou fica).", "Sair", () => PT.go("trilha"));
      else PT.go("trilha");
    };
    const onKey = (e) => {
      const typing = e.target.matches && e.target.matches("input, textarea");
      if (e.key === "Enter" && onEnter) { e.preventDefault(); onEnter(); }
      else if (!typing && /^[1-4]$/.test(e.key) && onNum) onNum(Number(e.key));
    };
    document.addEventListener("keydown", onKey);
    PT.cleanup = () => document.removeEventListener("keydown", onKey);
    const setBar = (f) => (bar.firstChild.style.width = `${Math.round(f * 100)}%`);

    function explain() {
      setBar(0);
      const next = h("button", { class: "btn block" }, "Ver as palavras");
      next.onclick = words;
      onEnter = words;
      PT.put(body, 
        h("div", {}, h("div", { class: "label" }, `${L.unit.t} · lição`), h("h1", {}, L.t)),
        h("div", { class: "panel explain" }, L.ex.map((p) => h("p", { html: md(p) }))),
        L.pt && S.settings.ptNotes ? h("div", { class: "pt-note", html: "🇵🇹 " + md(L.pt) }) : null,
        next,
        h("button", { class: "link", style: "align-self:center", onclick: startEx }, "Pular para os exercícios"));
    }
    function words() {
      let i = 0;
      const show = () => {
        const [w, e, d, x, pt] = L.v[i];
        setBar((i / L.v.length) * 0.08);
        const next = h("button", { class: "btn", style: "flex:1" }, i === L.v.length - 1 ? "Começar exercícios" : "Próxima");
        next.onclick = () => { if (i < L.v.length - 1) { i++; show(); } else startEx(); };
        onEnter = () => next.click();
        PT.put(body, 
          h("div", { class: "label", style: "text-align:center" }, `Palavra ${i + 1} de ${L.v.length}`),
          h("div", { class: "panel vocab-card" },
            h("div", { class: "big-emoji", "aria-hidden": "true" }, e),
            h("div", { class: "row", style: "justify-content:center" }, h("div", { class: "word-hero" }, w), PT.speakBtn(w)),
            h("p", { class: "def" }, d),
            h("div", { class: "exm" }, PT.speakBtn(x), h("span", {}, x)),
            pt && S.settings.ptNotes ? h("div", { class: "pt-note", html: "🇵🇹 " + md(pt) }) : null),
          h("div", { class: "row", style: "flex-wrap:nowrap" },
            i > 0 ? h("button", { class: "btn ghost", onclick: () => { i--; show(); } }, "Anterior") : null, next));
        if (!PT.isAbbrev(w)) PT.speak(w);
      };
      show();
    }
    function startEx() { inEx = true; show(); }

    function show() {
      if (st.idx >= st.queue.length) return finishLesson();
      const it = st.queue[st.idx];
      setBar(0.08 + (st.idx / st.queue.length) * 0.92);
      let ready = false, checked = false;
      const checkBtn = h("button", { class: "btn block", disabled: true }, "Verificar");
      const foot = h("div", { class: "feedback" }, checkBtn);
      const api = { setReady(v) { ready = v; checkBtn.disabled = !v; }, autoDone(ok) { if (!checked) result({ ok }); } };
      const ex = RENDER[it.type](it, api);
      PT.put(body, ex.el, foot);
      if (it.type === "match") checkBtn.hidden = true;
      const doCheck = () => { if (ready && !checked) result(ex.check()); };
      checkBtn.onclick = doCheck;
      onEnter = () => (checked ? nextItem() : doCheck());
      onNum = (n) => { if (!checked && ex.choose) ex.choose(n); };

      function result(r) {
        checked = true;
        const firstTime = !it.retry;
        S.stats.answers++;
        if (firstTime) st.total++;
        if (r.ok) {
          if (firstTime) st.first++;
          st.combo++; st.best = Math.max(st.best, st.combo);
          S.stats.correct++;
          const gain = 2 + (st.combo >= 5 ? 1 : 0);
          st.xp += gain;
          PT.gain(gain);
          if (st.combo === 10) PT.award("combo10");
        } else {
          st.combo = 0; st.errors++;
          if (!it.retry) st.queue.push({ ...it, retry: true });
        }
        combo.textContent = st.combo >= 3 ? `🔥 ${st.combo}` : "";
        const cont = h("button", { class: "btn block " + (r.ok ? "good" : "bad"), onclick: nextItem }, "Continuar");
        foot.className = "feedback " + (r.ok ? "ok" : "no");
        PT.put(foot, 
          h("div", { class: "row", style: "flex-wrap:nowrap" },
            h("div", { style: "flex:1" },
              h("div", { class: "verdict" }, r.ok ? pick(PT.PRAISE) : pick(PT.OOPS)),
              r.note ? h("p", { class: "small" }, r.note) : null,
              !r.ok && r.correct ? h("p", {}, "Resposta certa: ", h("strong", {}, r.correct)) : null,
              r.ok && st.combo >= 3 ? h("p", { class: "small" }, `${st.combo} seguidas!`) : null),
            r.say ? PT.speakBtn(r.say) : null),
          cont);
        cont.focus({ preventScroll: true });
        if (!r.ok && r.say) PT.speak(r.say);
      }
    }
    function nextItem() { st.idx++; show(); }

    function finishLesson() {
      inEx = false; onEnter = null; onNum = null;
      setBar(1);
      const acc = st.total ? st.first / st.total : 1;
      const stars = acc >= 0.95 ? 3 : acc >= 0.8 ? 2 : 1;
      const perfect = st.errors === 0;
      S.lessons[L.id] = { stars: Math.max(prev.stars || 0, stars), done: (prev.done || 0) + 1 };
      S.stats.bestCombo = Math.max(S.stats.bestCombo, st.best);
      const added = PT.srs.addLesson(L);
      const bonus = (practice ? 8 : 15) + (perfect ? 10 : 0);
      st.xp += bonus;
      PT.gain(bonus, { l: 1 });
      if (perfect) PT.award("perfeito");
      PT.confetti(perfect ? 180 : 110);

      const all = PT.allLessons(), nl = all.find((l) => !(S.lessons[l.id] || {}).done);
      PT.put(body, h("div", { class: "results" },
        PT.wave(),
        h("div", { class: "label" }, practice ? "Prática completa" : "Lição completa"),
        h("h1", {}, perfect ? "Sem nenhum erro!" : stars === 3 ? "Excelente!" : stars === 2 ? "Muito bem!" : "Lição feita!"),
        h("div", { class: "stars-big", "aria-label": `${stars} de 3 estrelas` }, [1, 2, 3].map((n) => h("span", { class: n <= stars ? "" : "off" }, "⭐"))),
        h("div", { class: "xp-big num" }, `+${st.xp} XP`),
        h("div", { class: "stat-row" },
          h("div", { class: "stat" }, h("b", {}, `${Math.round(acc * 100)}%`), h("span", {}, "acertos de primeira")),
          h("div", { class: "stat" }, h("b", {}, st.best), h("span", {}, "melhor sequência")),
          h("div", { class: "stat" }, h("b", {}, added), h("span", {}, "cartões novos"))),
        added ? h("p", { class: "muted small" }, "As palavras desta lição já estão nos seus cartões de revisão.") : null,
        h("div", { class: "stack", style: "width:100%;gap:10px" },
          nl ? h("button", { class: "btn block", onclick: () => PT.startLesson(nl.id) }, `Próxima: ${nl.t}`) : null,
          h("button", { class: "btn ghost block", onclick: () => PT.go("trilha") }, "Voltar à trilha"))));
    }

    practice ? startEx() : explain();
  }
})();
