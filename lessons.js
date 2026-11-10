/* Trilha e lições */
(function () {
  const PT = window.PT;
  const { h, md, shuffle, pick, norm, stripAcc, ICON } = PT;

  /* ---------- trilha ---------- */
  // Quais níveis ficam abertos é uma conveniência deste navegador; sem escolha salva, abre o nível atual.
  const OPEN_KEY = "borafalar.trilha.niveis";
  const readOpen = () => { try { return JSON.parse(localStorage.getItem(OPEN_KEY) || "{}"); } catch (e) { return {}; } };
  function saveOpen(id, open) {
    try { const m = readOpen(); m[id] = open; localStorage.setItem(OPEN_KEY, JSON.stringify(m)); } catch (e) { /* sem armazenamento local */ }
  }
  // Num nível com caminho opcional, qual caminho aparece (principal ou opcional) também é deste navegador.
  const PATH_KEY = "borafalar.trilha.caminho";
  const readPath = () => { try { return JSON.parse(localStorage.getItem(PATH_KEY) || "{}"); } catch (e) { return {}; } };
  function savePath(lv, id) {
    try { const m = readPath(); m[lv] = id; localStorage.setItem(PATH_KEY, JSON.stringify(m)); } catch (e) { /* sem armazenamento local */ }
  }
  const isDone = (l) => !!(PT.S.lessons[l.id] || {}).done;
  const unitLabel = (u) => (u.track ? `${u.lvl} · ${u.track.short}` : u.lvl);
  // O seu nível no QECR: o primeiro nível que ainda não está completo. Um nível só com parte das unidades
  // prontas ("partial") segura você nele; um nível sem unidades quer dizer que você já passou do anterior.
  PT.currentLevel = () => PT.LEVELS.find((L) => L.partial || !L.units.length || L.units.some((u) => u.lessons.some((l) => !isDone(l)))) || PT.LEVELS[PT.LEVELS.length - 1];

  PT.views.trilha = function (root) {
    const nl = PT.nextLesson(), saved = readOpen(), cur = PT.currentLevel();
    const main = PT.mainLessons(), mainDone = main.filter(isDone).length;
    root.append(h("div", { class: "stack" },
      h("div", {}, h("h1", {}, "Trilha"),
        h("p", { class: "muted" }, `Organizada pelos níveis do Quadro Europeu Comum de Referência, do A1 ao C2. ${mainDone} de ${main.length} lições completas na trilha principal${PT.TRACKS.length ? ", e há caminhos opcionais em alguns níveis" : ""}. Você pode fazer em qualquer ordem.`)),
      PT.LEVELS.map((L) => levelSection(L, L.id in saved ? saved[L.id] : L === cur, nl, cur)),
      PT.soundCard ? PT.soundCard() : null));
  };

  function levelSection(L, open, nl, cur) {
    const lessons = L.units.flatMap((u) => u.lessons), soon = !lessons.length;
    const done = lessons.filter(isDone).length;
    const before = PT.LEVELS[PT.LEVELS.indexOf(L) - 1];
    const det = h("details", { class: "cefr" + (soon ? " soon" : ""), style: `--lv:${L.c}` },
      h("summary", {},
        h("span", { class: "lv-badge", "aria-hidden": "true" }, L.id),
        h("span", { class: "lv-text" },
          h("span", { class: "lv-top" }, h("span", { class: "lv-name" }, `${L.id} · ${L.t}`),
            soon ? h("span", { class: "lv-soon" }, "Em breve") : h("span", { class: "lv-count" }, `${done}/${lessons.length}`)),
          h("span", { class: "lv-desc" }, L.d),
          soon ? null : h("span", { class: "bar lv-bar", role: "img", "aria-label": `${done} de ${lessons.length} lições` }, h("i", { style: `width:${Math.round((done / lessons.length) * 100)}%` })),
          (L.tracks || []).map((T) => { const tl = PT.trackLessons(T); return h("span", { class: "lv-extra" }, `${T.e} Caminho opcional ${T.short} · ${tl.filter(isDone).length}/${tl.length}`); })),
        h("span", { class: "chev", "aria-hidden": "true", html: ICON.chev })),
      h("div", { class: "lv-body" },
        !soon && before && before.units.length && cur === before ? h("p", { class: "small muted", style: "text-align:center" }, `Dica: termine o ${before.id} antes. Mas você pode fazer qualquer lição.`) : null,
        pathPicker(L, h("div", { class: "lv-path" },
          h("div", { class: "lv-can" }, h("div", { class: "label" }, soon ? `No ${L.id}, você vai aprender a:` : `No fim do ${L.id}, você consegue:`), h("ul", {}, L.can.map((c) => h("li", {}, c)))),
          L.units.map((u, i) => unitSection(u, i, nl)),
          soon ? h("div", { class: "lv-note" }, `🚧 O nível ${L.id} ainda está em construção.`)
            : L.partial ? h("div", { class: "lv-note" }, `🚧 Mais unidades do ${L.id} em breve.`) : null), done, lessons.length)));
    det.open = open;
    det.addEventListener("toggle", () => saveOpen(L.id, det.open));
    return det;
  }

  // Um nível com caminhos opcionais ganha uma escolha no topo: a trilha principal ou um caminho opcional.
  function pathPicker(L, mainBox, done, total) {
    const tracks = L.tracks || [];
    if (!tracks.length) return mainBox;
    const boxes = [["main", mainBox], ...tracks.map((T) => [T.id, trackSection(T, L)])];
    const want = readPath()[L.id];
    let sel = boxes.some(([id]) => id === want) ? want : "main";
    const btns = boxes.map(([id]) => {
      const T = tracks.find((t) => t.id === id), tl = T ? PT.trackLessons(T) : null;
      return h("button", { type: "button", "data-path": id, style: T ? `--tk:${T.c}` : "" },
        h("span", { class: "pp-name" }, T ? `${T.e} ${T.short}` : "Trilha principal"),
        h("span", { class: "pp-sub" }, T ? `opcional · ${tl.filter(isDone).length}/${tl.length}` : `${done}/${total} lições`));
    });
    const show = () => {
      boxes.forEach(([id, box]) => (box.hidden = id !== sel));
      btns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.path === sel)));
    };
    btns.forEach((b) => (b.onclick = () => { sel = b.dataset.path; savePath(L.id, sel); show(); }));
    show();
    return h("div", { class: "stack", style: "gap:22px" },
      h("div", { class: "path-pick", role: "group", "aria-label": `Caminho do ${L.id}` }, btns),
      boxes.map(([, box]) => box));
  }

  function trackSection(T, L) {
    const ls = PT.trackLessons(T), done = ls.filter(isDone).length;
    const tnl = ls.find((l) => !isDone(l)) || {};
    return h("div", { class: "lv-path", style: `--lv:${T.c}` },
      h("div", { class: "track-intro" },
        h("div", { class: "row", style: "flex-wrap:nowrap;align-items:center" },
          h("span", { class: "track-e", "aria-hidden": "true" }, T.e),
          h("div", { style: "flex:1;min-width:0" }, h("div", { class: "label" }, `Caminho opcional · ${L.id}`), h("h2", {}, T.t)),
          h("span", { class: "lv-count" }, `${done}/${ls.length}`)),
        h("p", { class: "small" }, T.d),
        h("p", { class: "small muted" }, `Não conta para completar o ${L.id} nem muda o nível da conversa com a IA. Faça como alternativa ou como reforço da trilha principal: as palavras vão para os seus cartões do mesmo jeito.`),
        h("span", { class: "bar lv-bar", role: "img", "aria-label": `${done} de ${ls.length} lições` }, h("i", { style: `width:${Math.round((done / ls.length) * 100)}%` }))),
      h("div", { class: "lv-can" }, h("div", { class: "label" }, "Com este caminho, você aprende a:"), h("ul", {}, T.can.map((c) => h("li", {}, c)))),
      T.units.map((u, i) => unitSection(u, i, tnl)));
  }

  function unitSection(u, i, nl) {
    const S = PT.S, done = u.lessons.filter(isDone).length;
    const scenes = (u.scenes || []).map((id) => u.track.scenes.find((s) => s.id === id)).filter(Boolean);
    return h("section", { class: "unit", style: `--u:${u.c}` },
      h("div", { class: "unit-head" }, h("span", { class: "e", "aria-hidden": "true" }, u.e),
        h("div", {}, h("div", { class: "label" }, u.track ? `${u.track.short} · Capítulo ${u.n} · ${done}/${u.lessons.length}` : `${u.lvl} · Unidade ${i + 1} · ${done}/${u.lessons.length}`), h("h2", {}, u.t),
          u.d ? h("div", { class: "unit-d" }, u.d) : null)),
      h("div", { class: "path" }, u.lessons.map((l, j) => {
        const st = S.lessons[l.id] || {}, isNext = nl.id === l.id && !st.done;
        const off = [0, 56, 0, -56][(j + i) % 4];
        return h("button", { class: "node" + (st.done ? " done" : "") + (isNext ? " next" : ""), style: `transform:translateX(${off}px)`, onclick: () => lessonSheet(l, u) },
          isNext ? h("span", { class: "go" }, "Começar") : null,
          h("span", { class: "disc", "aria-hidden": "true" }, l.e),
          h("span", { class: "name" }, l.t),
          h("span", { class: "stars", "aria-label": st.done ? `${st.stars} estrelas` : "" }, st.done ? "★".repeat(st.stars) + "☆".repeat(3 - st.stars) : ""));
      })),
      scenes.length ? h("div", { class: "unit-scenes" },
        h("div", { class: "label" }, "🎭 Cenas para praticar com a IA"),
        scenes.map((s) => h("button", { class: "scene", onclick: () => PT.startChat(s.id, "trilha") },
          h("span", { class: "e", "aria-hidden": "true" }, s.e),
          h("span", { class: "stack", style: "gap:4px" }, h("b", {}, s.t), h("span", { class: "small muted" }, `com ${s.who}`))))) : null);
  }

  function lessonSheet(l, u) {
    const st = PT.S.lessons[l.id] || {};
    const close = PT.modal(h("div", { class: "stack", style: `--u:${u.c}` },
      h("div", { class: "row" },
        h("span", { style: "font-size:2.6rem;line-height:1" }, l.e),
        h("div", { style: "flex:1" }, h("div", { class: "label" }, `${unitLabel(u)} · ${u.t}`), h("h2", {}, l.t)),
        h("button", { class: "icon-btn", "aria-label": "Fechar", html: ICON.close, onclick: () => close() })),
      st.done ? h("p", { class: "muted" }, `${"★".repeat(st.stars)}${"☆".repeat(3 - st.stars)} · feita ${st.done}× · praticar de novo vale XP.`) : h("p", { class: "muted" }, "Explicação, 8 palavras novas e cerca de 14 exercícios."),
      h("div", { class: "words" }, l.v.map((v) => h("span", { class: "wchip" }, h("span", {}, v[1]), v[0]))),
      h("button", { class: "btn block", onclick: () => { close(); PT.startLesson(l.id); } }, st.done ? "Praticar de novo" : "Começar"),
      st.done ? h("button", { class: "btn ghost block", onclick: () => { close(); PT.startLesson(l.id, { explain: true }); } }, "📖 Rever a explicação") : null
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
      PT.speakSoon(it.v.w);
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
      PT.speakSoon(it.v.w);
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
      PT.speakSoon(s.s);
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
      PT.speakSoon(it.text);
      setTimeout(() => input.focus({ preventScroll: true }), 250);
      return {
        el: h("div", { class: "stack" }, h("div", { class: "prompt" }, "Escreva o que você ouviu"),
          h("div", { class: "row", style: "justify-content:center;gap:16px" }, PT.speakBtn(it.text, { lg: true }), PT.speakBtn(it.text, { slow: true })), input),
        check() {
          input.disabled = true;
          const r = PT.dictCheck(input.value, it.text);
          const note = r === "accent" ? "Quase perfeito! Confira os acentos e os hifens: " + it.text
            : r === "typo" ? "Quase! Tem uma letra errada. O certo é: " + it.text : null;
          return { ok: r !== "wrong", correct: it.text, say: it.text, note };
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
  // o.explain: mostra a explicação e as palavras de novo, mesmo numa lição já feita.
  PT.startLesson = function (id, o) {
    const L = PT.allLessons().find((l) => l.id === id);
    if (L) PT.focus((root) => runLesson(root, L, o || {}));
  };

  function runLesson(root, L, o) {
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
      if (PT.keysOff(e)) return;
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
        h("div", {}, h("div", { class: "label" }, `${unitLabel(L.unit)} · ${L.unit.t} · lição`), h("h1", {}, L.t)),
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
      const was = S.lessons[L.id] || prev;
      S.lessons[L.id] = { stars: Math.max(was.stars || 0, stars), done: (was.done || 0) + 1 };
      S.stats.bestCombo = Math.max(S.stats.bestCombo, st.best);
      const added = PT.srs.addLesson(L);
      const bonus = (practice ? 8 : 15) + (perfect ? 10 : 0);
      st.xp += bonus;
      PT.gain(bonus, { l: 1 });
      if (perfect) PT.award("perfeito");
      PT.confetti(perfect ? 180 : 110);
      // Na primeira vez, a lição pode abrir temas (ou partes novas) na gramática.
      const gram = !practice && !L.unit.track && PT.gramNewFor ? PT.gramNewFor(L.id) : [];

      // A próxima lição continua no mesmo caminho: na trilha principal ou no caminho opcional.
      const pool = L.unit.track ? PT.trackLessons(L.unit.track) : PT.mainLessons(), nl = pool.find((l) => !(S.lessons[l.id] || {}).done);
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
        gram.length ? h("button", { class: "gunlock", type: "button", onclick: () => (gram.length === 1 ? PT.go("gram", gram[0].id) : PT.go("estudo")) },
          h("span", { class: "label" }, "📘 Novo na gramática"),
          h("b", {}, gram.map((T) => T.t).join(" · ")),
          h("small", {}, "A explicação completa desta lição, com tabelas e mais exemplos.")) : null,
        h("div", { class: "stack", style: "width:100%;gap:10px" },
          nl ? h("button", { class: "btn block", onclick: () => PT.startLesson(nl.id) }, `Próxima: ${nl.t}`) : null,
          h("button", { class: "btn ghost block", onclick: () => PT.go("trilha") }, "Voltar à trilha"))));
    }

    practice && !o.explain ? startEx() : explain();
  }
})();
