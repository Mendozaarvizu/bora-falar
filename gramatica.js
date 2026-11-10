/* Aba "Sons e gramática": o Laboratório de sons e a gramática, que cresce com a trilha principal */
(function () {
  const PT = window.PT;
  const { h, md, ICON } = PT;

  /* ---------- o que já foi liberado ---------- */
  const done = (id) => !!(PT.S.lessons[id] || {}).done;
  const lessonOf = (id) => PT.mainLessons().find((l) => l.id === id);
  const open = (T) => T.parts.filter((p) => done(p.from));
  const keyOf = (T, p) => `${T.id}:${T.parts.indexOf(p)}`;
  // Quais partes você já abriu é uma conveniência deste navegador (serve só para a etiqueta "Novo").
  const SEEN_KEY = "borafalar.gram.vistos";
  const readSeen = () => { try { return JSON.parse(localStorage.getItem(SEEN_KEY) || "{}"); } catch (e) { return {}; } };
  const markSeen = (keys) => { try { const m = readSeen(); keys.forEach((k) => (m[k] = 1)); localStorage.setItem(SEEN_KEY, JSON.stringify(m)); } catch (e) { /* sem armazenamento local */ } };
  const fresh = (T, seen) => open(T).filter((p) => !seen[keyOf(T, p)]);

  // Temas que ganham conteúdo com esta lição (para avisar no fim da lição).
  PT.gramNewFor = (lessonId) => PT.GRAM.filter((T) => T.parts.some((p) => p.from === lessonId));
  PT.gramCount = () => ({ open: PT.GRAM.filter((T) => open(T).length).length, total: PT.GRAM.length });

  /* ---------- a aba ---------- */
  PT.views.estudo = function (root) {
    const seen = readSeen(), c = PT.gramCount();
    const partsOpen = PT.GRAM.reduce((n, T) => n + open(T).length, 0), partsAll = PT.GRAM.reduce((n, T) => n + T.parts.length, 0);
    root.append(h("div", { class: "stack", style: "gap:26px" },
      h("div", {}, h("h1", {}, "Sons e gramática"), h("p", { class: "muted" }, "O que está por trás das lições: como o português soa e como ele funciona.")),

      h("section", { class: "stack", style: "gap:12px" },
        h("div", {}, h("h2", {}, "Laboratório de sons"), h("p", { class: "muted small" }, "A trilha de pronúncia e o guia de todos os sons, do Brasil e de Portugal.")),
        PT.soundCard(),
        h("div", { class: "grid2" },
          h("button", { class: "tile", onclick: () => PT.go("sons", "intro") }, h("span", { class: "e" }, "🔤"), h("b", {}, "Guia dos sons"), h("span", { class: "small muted" }, "O AFI, as vogais, as nasais e as consoantes")),
          h("button", { class: "tile", onclick: () => PT.go("sons", "brpt") }, h("span", { class: "e" }, "🌍"), h("b", {}, "Brasil × Portugal"), h("span", { class: "small muted" }, "As diferenças de pronúncia, lado a lado")))),

      h("section", { class: "stack", style: "gap:14px" },
        h("div", {},
          h("div", { class: "row", style: "flex-wrap:nowrap;align-items:baseline" }, h("h2", { style: "flex:1" }, "Gramática"), h("span", { class: "lv-count" }, `${c.open}/${c.total} temas`)),
          h("p", { class: "muted small" }, "Cada tema aparece quando você faz a lição da trilha principal que ensina aquilo, e ganha mais partes conforme você avança. Aqui a explicação é mais completa, com tabelas e mais exemplos."),
          h("span", { class: "bar", style: "margin-top:10px", role: "img", "aria-label": `${partsOpen} de ${partsAll} partes liberadas` }, h("i", { style: `width:${Math.round((partsOpen / partsAll) * 100)}%` }))),
        c.open === 0 ? h("div", { class: "lv-note" }, "Ainda não tem nada aqui. Faça a primeira lição da trilha e a gramática começa a aparecer.") : null,
        PT.GRAM_GROUPS.map(([gid, title]) => {
          const ts = PT.GRAM.filter((T) => T.g === gid);
          return h("div", { class: "stack", style: "gap:8px" },
            h("div", { class: "label" }, title),
            ts.map((T) => card(T, seen)));
        })),

      h("p", { class: "small muted", style: "text-align:center" }, "A gramática acompanha a trilha principal. Os caminhos opcionais não liberam temas.")));
  };

  function card(T, seen) {
    const op = open(T), nw = fresh(T, seen).length;
    if (!op.length) {
      // a lição mais cedo da trilha entre as que abrem este tema
      const order = PT.mainLessons().map((l) => l.id);
      const L = lessonOf(T.parts.map((p) => p.from).sort((x, y) => order.indexOf(x) - order.indexOf(y))[0]);
      return h("button", { class: "gcard locked", type: "button", onclick: () => lockedSheet(T, L) },
        h("span", { class: "e", "aria-hidden": "true" }, "🔒"),
        h("span", { class: "gtxt" }, h("b", {}, T.t), h("small", {}, L ? `Depois da lição “${L.t}” · ${L.unit.lvl}` : "Em breve")));
    }
    return h("button", { class: "gcard", type: "button", onclick: () => PT.go("gram", T.id) },
      h("span", { class: "e", "aria-hidden": "true" }, T.e),
      h("span", { class: "gtxt" }, h("b", {}, T.t), h("small", {}, T.d)),
      h("span", { class: "gmeta" },
        nw ? h("span", { class: "gnew" }, nw === op.length ? "Novo" : `+${nw}`) : null,
        h("span", { class: "gcount num" }, `${op.length}/${T.parts.length}`)));
  }

  function lockedSheet(T, L) {
    const close = PT.modal(h("div", { class: "stack" },
      h("div", { class: "row" },
        h("span", { style: "font-size:2.2rem;line-height:1" }, T.e),
        h("div", { style: "flex:1" }, h("div", { class: "label" }, "Gramática · ainda fechado"), h("h2", {}, T.t)),
        h("button", { class: "icon-btn", "aria-label": "Fechar", html: ICON.close, onclick: () => close() })),
      h("p", { class: "muted" }, T.d),
      L ? h("p", {}, "Este tema abre quando você fizer a lição ", h("strong", {}, `“${L.t}”`), ` (${L.unit.lvl} · ${L.unit.t}).`) : null,
      L ? h("button", { class: "btn block", onclick: () => { close(); PT.startLesson(L.id); } }, "Fazer essa lição agora") : null));
  }

  /* ---------- um tema ---------- */
  const table = (rows) => h("div", { class: "gtable-wrap" }, h("table", { class: "gtable" },
    h("thead", {}, h("tr", {}, rows[0].map((c) => h("th", { scope: "col", html: md(c) })))),
    h("tbody", {}, rows.slice(1).map((r) => h("tr", {}, r.map((c, i) => h(i === 0 ? "th" : "td", i === 0 ? { scope: "row", html: md(c) } : { html: md(c) })))))));
  const example = (s) => h("div", { class: "gex" }, PT.tts.ok ? PT.speakBtn(s) : null, h("span", {}, s));

  PT.views.gram = function (root, id) {
    const T = PT.GRAM.find((x) => x.id === id);
    if (!T || !open(T).length) return PT.go("estudo");
    const seen = readSeen(), op = open(T);
    const group = (PT.GRAM_GROUPS.find((g) => g[0] === T.g) || [])[1];
    const locked = T.parts.filter((p) => !done(p.from));
    root.append(h("div", { class: "stack", style: "gap:18px" },
      h("div", {},
        h("button", { class: "link small", style: "text-decoration:none", onclick: () => PT.go("estudo") }, "← Sons e gramática"),
        h("div", { class: "label", style: "margin-top:8px" }, `Gramática · ${group}`),
        h("div", { class: "row", style: "flex-wrap:nowrap;align-items:center" }, h("span", { style: "font-size:2.2rem;line-height:1", "aria-hidden": "true" }, T.e), h("h1", {}, T.t)),
        h("p", { class: "muted", style: "margin-top:6px" }, T.d)),
      op.map((p) => {
        const L = lessonOf(p.from), isNew = !seen[keyOf(T, p)];
        return h("section", { class: "panel stack gpart" },
          h("div", {},
            h("div", { class: "row", style: "flex-wrap:nowrap;align-items:center" }, h("h2", { style: "flex:1" }, p.h), isNew ? h("span", { class: "gnew" }, "Novo") : null),
            L ? h("div", { class: "small muted" }, `Da lição “${L.t}”`) : null),
          h("div", { class: "explain" }, p.p.map((x) => h("p", { html: md(x) }))),
          p.table ? table(p.table) : null,
          p.ex && p.ex.length ? h("div", { class: "stack", style: "gap:6px" }, h("div", { class: "label" }, "Exemplos"), p.ex.map(example)) : null,
          p.es ? h("div", { class: "pt-note gnote", html: "🇪🇸 <strong>Para quem fala espanhol:</strong> " + md(p.es) }) : null,
          p.pt && PT.S.settings.ptNotes ? h("div", { class: "pt-note gnote", html: "🇵🇹 <strong>Em Portugal:</strong> " + md(p.pt) }) : null);
      }),
      locked.length ? h("div", { class: "lv-note", style: "text-align:left" },
        h("div", { style: "font-weight:700;color:var(--ink-2);margin-bottom:6px" }, "🔒 Este tema ainda vai crescer:"),
        locked.map((p) => { const L = lessonOf(p.from); return h("div", {}, `${p.h}${L ? ` · depois da lição “${L.t}”` : ""}`); })) : null,
      h("button", { class: "btn ghost block", onclick: () => PT.go("estudo") }, "Voltar para a gramática")));
    markSeen(op.map((p) => keyOf(T, p)));
  };
})();
