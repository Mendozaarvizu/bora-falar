/* Bônus: Laboratório de sons (fonética com o AFI) */
(function () {
  const PT = window.PT;
  const { h, md, esc, ICON, shuffle, pick } = PT;
  let lastTab = "trilha";

  /* ---------- peças pequenas ---------- */
  const hasPT = () => !!(PT.tts.ok && PT.tts.voicePT);
  // palavra com botão de ouvir e a transcrição embaixo
  function ipaWord(w, ipa, pt) {
    const canPlay = PT.tts.ok && (!pt || hasPT());
    const btn = canPlay
      ? h("button", { class: "say", type: "button", [pt ? "data-say-pt" : "data-say"]: w, html: ICON.speak + esc(w) })
      : h("span", { class: "say", style: "border-style:solid" }, w);
    return h("span", { class: "ipaw" }, btn, ipa ? h("span", { class: "ipa" }, `[${ipa}]`) : null);
  }
  const say = (w, pt) => ipaWord(w, null, pt);
  const note = (flag, text) => h("div", { class: "pt-note", html: `${flag} ${md(text)}` });

  PT.bonusCard = () => h("button", { class: "bonus", type: "button", onclick: () => PT.go("sons") },
    h("span", { class: "ipa-mark", "aria-hidden": "true" }, "[ˈsõj̃s]"),
    h("span", { class: "stack", style: "gap:2px" },
      h("span", { class: "label" }, "Bônus"),
      h("b", { style: "font-size:1.05rem" }, "Laboratório de sons"),
      h("small", {}, "Uma trilha de pronúncia para treinar o ouvido e gravar a sua voz, e o guia de todos os sons do Brasil e de Portugal.")));

  /* ---------- desenhos ---------- */
  function vowelChart() {
    const nodes = PT.VOWELS.map((v) =>
      `<g class="vnode${v.round ? " round" : ""}${v.ptOnly ? " pto" : ""}" data-v="${v.s}" tabindex="0" role="button" aria-label="${esc(v.n)}"><circle cx="${v.x}" cy="${v.y}" r="15"/><text x="${v.x}" y="${v.y}">${v.s}</text></g>`).join("");
    return `<svg viewBox="0 0 350 222" role="group" aria-label="Quadro das vogais do português">
      <text class="ax" x="110" y="20">frente</text>
      <text class="ax" x="222" y="20" text-anchor="middle">centro</text>
      <text class="ax" x="330" y="20" text-anchor="end">trás</text>
      <polygon class="tz" points="110,30 330,30 330,210 200,210"/>
      <line class="guide" x1="140" y1="90" x2="330" y2="90"/>
      <line class="guide" x1="170" y1="150" x2="330" y2="150"/>
      <line class="guide" x1="220" y1="30" x2="265" y2="210"/>
      <text class="ax" x="102" y="34" text-anchor="end">alta</text>
      <text class="ax" x="132" y="94" text-anchor="end">meio alta</text>
      <text class="ax" x="162" y="154" text-anchor="end">meio baixa</text>
      <text class="ax" x="192" y="214" text-anchor="end">baixa</text>
      ${nodes}
    </svg>`;
  }
  // corte lateral da cabeça, olhando para a esquerda
  function mouth(place, nasal) {
    const p = place && PT.PLACES[place];
    return `<svg viewBox="0 0 260 230" class="mouth" role="img" aria-label="Corte da cabeça${p ? ": o som é feito em " + esc(p.t) : ""}${nasal ? ", com o ar saindo pelo nariz" : ""}">
      <path class="skin" d="M168 6 C130 6 104 16 94 36 C90 44 88 50 84 56 L44 74 C38 77 40 84 48 85 L60 86 C58 92 54 96 50 100 C49 103 51 106 57 108 C51 110 48 114 50 118 C52 122 58 124 60 128 C58 138 58 148 64 154 C78 162 110 164 128 170 C132 190 134 210 134 228 L214 228 C214 206 222 188 236 172 C254 152 258 120 256 96 C252 44 220 6 168 6 Z"/>
      <path class="air${nasal ? " nose-on" : ""}" d="M62 88 C72 74 100 60 136 60 C166 60 186 70 190 92 L190 116 C186 106 180 98 170 90 C156 80 140 76 120 76 C100 76 80 82 66 90 Z"/>
      <path class="air" d="M58 106 L66 100 C80 92 100 84 122 84 C145 84 165 88 178 94 C186 98 190 104 190 114 L190 206 L174 206 L174 180 C172 160 168 140 160 130 C140 124 110 126 84 124 L64 118 Z"/>
      <path class="tongue" d="M68 114 C74 106 90 100 112 96 C132 92 150 96 160 106 C168 116 170 136 170 160 C170 170 168 176 164 178 C150 170 130 150 100 132 C86 126 74 122 68 118 Z"/>
      <path class="skin" d="M150 86 C164 88 176 96 178 106 C179 112 175 116 171 113 C166 106 160 98 148 92 Z"/>
      <path class="tooth" d="M62 98 L68 98 L66 107 L61 106 Z"/>
      <path class="tooth" d="M61 110 L66 109 L68 118 L62 118 Z"/>
      <path class="fold" d="M176 188 L183 185 L190 188"/>
      <text class="ax" x="112" y="48" text-anchor="middle">nariz</text>
      <text class="ax" x="120" y="118" text-anchor="middle">língua</text>
      <text class="ax" x="4" y="112">lábios</text>
      <text class="ax" x="202" y="200">garganta</text>
      ${p ? `<circle class="ring" cx="${p.x}" cy="${p.y}" r="9"/><circle class="hot" cx="${p.x}" cy="${p.y}" r="4.5"/>` : ""}
    </svg>`;
  }

  /* ---------- abas ---------- */
  const TABS = [["trilha", "Trilha de sons"], ["intro", "O que é o AFI"], ["vogais", "Vogais"], ["nasais", "Nasais"], ["consoantes", "Consoantes"], ["brpt", "Brasil × Portugal"], ["desafio", "Desafio"]];
  const PANES = {};
  PANES.trilha = () => PT.soundPath();

  PANES.intro = () => h("div", { class: "stack" },
    h("section", { class: "panel explain" },
      h("h2", {}, "Um símbolo para cada som"),
      h("p", {}, "O AFI (Alfabeto Fonético Internacional) tem um símbolo para cada som que a boca humana faz. Com ele, você vê exatamente como uma palavra soa, mesmo quando a escrita engana."),
      h("p", {}, "Por exemplo, o ", h("strong", {}, "o"), " de ", say("avó"), " e o de ", say("avô"), " são sons diferentes: ", h("span", { class: "ipa" }, "[ɔ]"), " e ", h("span", { class: "ipa" }, "[o]"), ". E o ", h("strong", {}, "e"), " de ", say("leite"), " soa ", h("span", { class: "ipa" }, "[i]"), ": ", h("span", { class: "ipa" }, "[ˈlejtʃi]"), ".")),
    h("section", { class: "panel stack" },
      h("h2", {}, "Como ler"),
      h("div", { class: "stack", style: "gap:10px" },
        h("p", {}, h("span", { class: "ipa", style: "font-weight:700" }, "[ ]"), "  Os colchetes mostram a pronúncia: casa = ", h("span", { class: "ipa" }, "[ˈkazɐ]"), "."),
        h("p", {}, h("span", { class: "ipa", style: "font-weight:700" }, "ˈ"), "  Vem antes da sílaba forte: café = ", h("span", { class: "ipa" }, "[kaˈfɛ]"), "."),
        h("p", {}, h("span", { class: "ipa", style: "font-weight:700" }, "◌̃"), "  O til em cima marca um som nasal: pão = ", h("span", { class: "ipa" }, "[ˈpɐ̃w̃]"), "."),
        h("p", {}, h("span", { class: "ipa", style: "font-weight:700" }, "j  w"), "  São semivogais: um [i] e um [u] curtinhos, que se juntam a outra vogal. pai = ", h("span", { class: "ipa" }, "[ˈpaj]"), ", mau = ", h("span", { class: "ipa" }, "[ˈmaw]"), "."))),
    h("section", { class: "panel stack" },
      h("h2", {}, "Seu corpo é o laboratório"),
      h("p", { html: md("**Vozeado ou surdo?** Ponha a mão no pescoço e diga [zzzz]. Agora diga [ssss]. No [z] a garganta vibra: é um som **vozeado**. No [s], não vibra: é **surdo**.") }),
      h("p", { html: md("**Nasal ou oral?** Tampe o nariz com os dedos e diga “pão”. A voz muda: é **nasal**. Agora diga “pau”: nada muda, é **oral**.") }),
      h("p", { html: md("**Use um espelho.** Os lábios mostram muito: redondos no [u] e no [o], esticados no [i] e no [e].") })),
    h("p", { class: "small muted" }, "A pronúncia do Brasil aqui é a mais comum no Sudeste (São Paulo e Rio). A de Portugal é a de Lisboa. As notas mostram variações regionais."),
    h("button", { class: "btn block", onclick: () => show("vogais") }, "Começar pelas vogais"));

  PANES.vogais = () => {
    const chart = h("div", { class: "vchart", html: vowelChart() });
    const detail = h("div");
    const choose = (s, speak) => {
      const v = PT.VOWELS.find((x) => x.s === s);
      chart.querySelectorAll(".vnode").forEach((g) => g.classList.toggle("on", g.dataset.v === s));
      PT.put(detail, h("section", { class: "panel stack" },
        h("div", { class: "row", style: "flex-wrap:nowrap" },
          h("div", { class: "sym-big" }, `[${v.s}]`),
          h("div", {}, h("h2", {}, v.n), h("div", { class: "tag-list", style: "margin-top:6px" },
            h("span", { class: "tag" }, "língua: " + v.tongue), h("span", { class: "tag" }, "lábios: " + v.lips),
            v.ptOnly ? h("span", { class: "tag flag-tag" }, "🇵🇹 só em Portugal") : null))),
        h("div", { class: "ex-row" }, v.ex.map(([w, i]) => ipaWord(w, i, v.ptOnly))),
        h("div", {}, h("div", { class: "label" }, "Como fazer"), h("p", { html: md(v.how) })),
        note("💡", v.note)));
      if (speak && PT.tts.ok && (!v.ptOnly || hasPT())) PT.speak(v.ex[0][0], { pt: v.ptOnly });
    };
    chart.querySelectorAll(".vnode").forEach((g) => {
      g.addEventListener("click", () => choose(g.dataset.v, true));
      g.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); choose(g.dataset.v, true); } });
    });
    choose("i", false);
    return h("div", { class: "stack" },
      h("p", { class: "muted" }, "O quadro mostra onde a língua fica em cada vogal: em cima ou embaixo, na frente ou atrás. Toque num símbolo."),
      h("section", { class: "panel stack", style: "gap:8px" }, chart,
        h("p", { class: "small muted" }, "Contorno dourado: lábios redondos. Tracejado: só em Portugal.")),
      detail,
      h("section", { class: "panel stack" },
        h("h2", {}, "Vogais sem força"),
        h("p", { class: "muted" }, "Fora da sílaba forte, as vogais mudam. Aqui está uma das maiores diferenças entre os dois países."),
        PT.REDUCTION.map(([t, w, br, pt]) => h("div", { class: "stack", style: "gap:6px" },
          h("div", { class: "label" }, t),
          h("div", { class: "cmp" },
            h("div", {}, h("span", { class: "small" }, "🇧🇷 " + w), h("span", { class: "ipa" }, `[${br}]`)),
            h("div", {}, h("span", { class: "small" }, "🇵🇹 " + w), h("span", { class: "ipa" }, `[${pt}]`)))))));
  };

  PANES.nasais = () => h("div", { class: "stack" },
    h("section", { class: "panel stack" },
      h("h2", {}, "Como fazer um som nasal"),
      h("div", { class: "cons-detail" },
        h("div", { class: "mouth-box", html: mouth(null, true) }),
        h("div", { class: "stack", style: "gap:10px" },
          h("p", { html: md("1. Faça a vogal normal, por exemplo [a].") }),
          h("p", { html: md("2. Relaxe o **céu da boca mole** (véu palatino) para ele descer.") }),
          h("p", { html: md("3. O ar sai pela boca **e** pelo nariz ao mesmo tempo. A parte dourada do desenho é o caminho extra do ar.") }),
          h("p", {}, "Teste: tampe o nariz e diga ", say("pão"), ". A voz muda. Com ", say("pau"), ", nada muda.")))),
    h("section", { class: "panel stack" },
      h("h2", {}, "Três regras"),
      h("p", { html: md("**M** ou **N** no fim da sílaba não soam como consoante: só deixam a vogal nasal. campo [ˈkɐ̃pu], sim [ˈsĩ].") }),
      h("p", { html: md("Não feche a boca no final: bom é [ˈbõ], sem um [m] forte.") }),
      h("p", { html: md("No Brasil, a vogal forte antes de **m**, **n** ou **nh** também fica nasal: cama [ˈkɐ̃mɐ], banana [bɐˈnɐ̃nɐ]. 🇵🇹 Em Portugal, bem menos.") })),
    h("div", { class: "nasal-grid" }, PT.NASALS.map((n) => h("section", { class: "panel tight stack", style: "gap:8px" },
      h("div", { class: "row" }, h("div", { class: "sym-big", style: "font-size:2rem" }, `[${n.s}]`), h("b", {}, n.n)),
      h("div", { class: "ex-row" }, n.ex.map((w) => say(w))),
      h("p", { class: "small", html: md(n.how) }),
      n.pt ? note("🇵🇹", n.pt) : null))));

  PANES.consoantes = () => {
    const detail = h("div");
    const chips = [];
    const choose = (s, scroll) => {
      const c = PT.CONSONANTS.find((x) => x.s === s), pl = PT.PLACES[c.p];
      chips.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.s === s)));
      const group = PT.CONS_GROUPS.find((g) => g[0] === c.g);
      PT.put(detail, h("section", { class: "panel" }, h("div", { class: "cons-detail" },
        h("div", { class: "mouth-box", html: mouth(c.p, c.nasal) }),
        h("div", { class: "stack", style: "gap:12px" },
          h("div", { class: "row", style: "flex-wrap:nowrap" },
            h("div", { class: "sym-big" }, `[${c.s}]`),
            h("div", {}, h("h2", {}, c.n || group[1].replace(/ \(.*\)/, "")), h("div", { class: "small muted" }, "Letras: " + c.l))),
          h("div", { class: "tag-list" },
            h("span", { class: "tag" }, "onde: " + pl.t),
            h("span", { class: "tag" }, c.v ? "garganta vibra" : "garganta não vibra"),
            h("span", { class: "tag" }, c.nasal ? "ar pelo nariz" : "ar pela boca"),
            c.brOnly ? h("span", { class: "tag flag-tag" }, "🇧🇷 Brasil") : null,
            c.ptOnly ? h("span", { class: "tag flag-tag" }, "🇵🇹 só em Portugal") : null),
          h("div", { class: "ex-row" }, c.ex.map((w) => say(w, c.ptOnly))),
          c.ptOnly && !hasPT() ? h("p", { class: "small muted" }, "Para ouvir este som, instale uma voz de Portugal (por exemplo, Joana) nas configurações do sistema.") : null,
          h("div", {}, h("div", { class: "label" }, "Como fazer"), h("p", { html: md(c.how) })),
          c.br ? note("🇧🇷", c.br) : null,
          c.pt ? note("🇵🇹", c.pt) : null))));
      if (scroll) detail.scrollIntoView({ block: "nearest", behavior: "smooth" });
    };
    const groups = PT.CONS_GROUPS.map(([id, t, d]) => h("section", { class: "stack", style: "gap:8px" },
      h("div", {}, h("h3", {}, t), h("p", { class: "small muted" }, d)),
      h("div", { class: "symchips" }, PT.CONSONANTS.filter((c) => c.g === id).map((c) => {
        const b = h("button", { class: "symchip", type: "button", "data-s": c.s, "aria-pressed": "false", "aria-label": c.n || c.s },
          c.s, c.brOnly ? h("small", {}, "🇧🇷") : c.ptOnly ? h("small", {}, "🇵🇹") : null);
        b.onclick = () => choose(c.s, true);
        chips.push(b);
        return b;
      }))));
    choose("tʃ", false);
    return h("div", { class: "stack" },
      h("p", { class: "muted" }, "Toque num som para ver onde ele é feito e como fazer. O ponto vermelho no desenho mostra o lugar."),
      detail, groups);
  };

  PANES.brpt = () => h("div", { class: "stack" },
    h("section", { class: "panel explain" },
      h("h2", {}, "Mesma língua, outra música"),
      h("p", {}, "O português do Brasil tem vogais claras e um ritmo mais “cantado”: cada sílaba aparece. O de Portugal é mais rápido e fechado: as vogais sem força quase somem e as consoantes ficam juntas."),
      h("p", {}, "Por isso, telefone no Brasil tem quatro sílabas bem claras, e em Portugal pode soar quase como [tlɨˈfɔn]."),
      !hasPT() ? h("p", { class: "small muted" }, "Para ouvir a pronúncia de Portugal, instale uma voz “Português (Portugal)”, como a Joana, nas configurações do sistema. Por enquanto, só o lado do Brasil toca.") : null),
    PT.BRPT.map(([t, w, br, pt, ex]) => h("section", { class: "panel tight stack", style: "gap:10px" },
      h("div", { class: "row" }, h("div", { style: "flex:1" }, h("div", { class: "label" }, t), h("h3", { style: "font-size:1.2rem;margin-top:2px" }, w))),
      h("div", { class: "cmp" },
        h("div", {}, h("span", { class: "small" }, "🇧🇷 Brasil"), h("span", { class: "ipa" }, `[${br}]`), PT.tts.ok ? h("button", { class: "say", "data-say": w, html: ICON.speak + "ouvir" }) : null),
        h("div", {}, h("span", { class: "small" }, "🇵🇹 Portugal"), h("span", { class: "ipa" }, `[${pt}]`), hasPT() ? h("button", { class: "say", "data-say-pt": w, html: ICON.speak + "ouvir" }) : null)),
      h("p", { class: "small", html: md(ex) }))));

  PANES.desafio = () => h("div", { class: "stack" },
    h("section", { class: "panel explain" },
      h("h2", {}, "Desafio AFI"),
      h("p", {}, "10 perguntas de três tipos:"),
      h("p", { html: md("**Que palavra é esta?** Leia a transcrição e escolha a palavra.") }),
      PT.tts.ok ? h("p", { html: md("**Qual é a transcrição?** Ouça a palavra e escolha o AFI certo.") }) : null,
      h("p", { html: md("**Brasil ou Portugal?** Descubra de onde é a pronúncia.") }),
      h("p", { class: "small muted" }, `Cada acerto vale 3 XP. Você já acertou ${PT.S.stats.ipaOk || 0}. Com 20 acertos, ganha a conquista “Foneticista”.`)),
    h("button", { class: "btn block", onclick: PT.startIpaQuiz }, "Começar desafio"));

  let paneEl = null, tabBtns = [];
  function show(id) {
    lastTab = id;
    tabBtns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.t === id)));
    const active = tabBtns.find((b) => b.dataset.t === id);
    if (active) active.scrollIntoView({ block: "nearest", inline: "nearest" });
    PT.put(paneEl, PANES[id]());
  }

  PT.views.sons = function (root, arg) {
    paneEl = h("div");
    tabBtns = TABS.map(([id, label]) => h("button", { type: "button", "data-t": id, onclick: () => show(id) }, label));
    root.append(h("div", { class: "stack" },
      h("div", {},
        h("button", { class: "link small", style: "text-decoration:none", onclick: () => PT.go("ouvir") }, "← Ouvir"),
        h("div", { class: "label", style: "margin-top:8px" }, "Bônus · Fonética"),
        h("h1", {}, "Laboratório de sons")),
      h("div", { class: "tabs seg", role: "tablist" }, tabBtns),
      paneEl));
    show(PANES[arg] ? arg : lastTab);
  };

  /* ---------- desafio ---------- */
  function makeQuestion() {
    const W = PT.IPA_WORDS, types = PT.tts.ok ? ["read", "hear", "where"] : ["read", "where"];
    const type = pick(types);
    if (type === "where") {
      const [w, br, pt] = pick(W.filter((x) => x[1] !== x[2]));
      const side = Math.random() < 0.5 ? "br" : "pt";
      return { type, w, br, pt, shown: side === "br" ? br : pt, answer: side === "br" ? 0 : 1, opts: ["🇧🇷 Brasil", "🇵🇹 Portugal"] };
    }
    const [w, br, pt] = pick(W);
    const others = shuffle(W.filter((x) => x[0] !== w && x[1] !== br)).slice(0, 3);
    const all = shuffle([[w, br, pt], ...others]);
    return { type, w, br, pt, answer: all.findIndex((x) => x[0] === w), opts: all.map((x) => (type === "read" ? x[0] : `[${x[1]}]`)) };
  }
  PT.startIpaQuiz = function () {
    PT.runSession({
      title: "Desafio AFI", back: "sons", backArg: "desafio", doneTitle: "Desafio completo!",
      make: () => Array.from({ length: 10 }, makeQuestion),
      render(q, body, done, st) {
        let answered = false;
        const opts = q.opts.map((o, i) => h("button", { class: "opt" + (q.type === "hear" ? " ipa" : ""), type: "button", style: q.type === "where" ? "justify-content:center;font-weight:700;min-height:70px" : null },
          q.type === "where" ? null : h("span", { class: "k" }, i + 1), o));
        const choose = (i) => {
          if (answered || !opts[i]) return;
          answered = true;
          const ok = i === q.answer;
          opts.forEach((o, j) => { o.disabled = true; if (j === q.answer) o.classList.add("right"); else if (j === i) o.classList.add("wrong"); });
          if (ok) PT.S.stats.ipaOk = (PT.S.stats.ipaOk || 0) + 1;
          PT.gain(ok ? 3 : 0, { o: 1 });
          body.append(PT.feedbackBar(ok, h("div", { class: "row", style: "flex-wrap:nowrap" },
            PT.tts.ok ? PT.speakBtn(q.w) : null,
            h("p", {}, h("strong", {}, q.w), "  🇧🇷 ", h("span", { class: "ipa" }, `[${q.br}]`), "  🇵🇹 ", h("span", { class: "ipa" }, `[${q.pt}]`))),
            () => done({ ok, xp: ok ? 3 : 0 }), st));
        };
        opts.forEach((o, i) => (o.onclick = () => choose(i)));
        st.onNum = (n) => choose(n - 1);
        if (q.type === "read") body.append(h("div", { class: "prompt" }, "Que palavra é esta?"), h("div", { class: "sym-big", style: "font-size:2.6rem;text-align:center;padding:18px 0" }, `[${q.br}]`), h("div", { class: "grid2" }, opts));
        if (q.type === "hear") {
          PT.speakSoon(q.w);
          body.append(h("div", { class: "prompt" }, "Qual é a transcrição?"),
            h("div", { class: "row", style: "justify-content:center;gap:16px" }, PT.speakBtn(q.w, { lg: true }), PT.speakBtn(q.w, { slow: true })),
            h("div", { class: "opts" }, opts));
        }
        if (q.type === "where") body.append(h("div", { class: "prompt" }, "Brasil ou Portugal?"),
          h("div", { style: "text-align:center;padding:10px 0" }, h("div", { class: "word-hero" }, q.w), h("div", { class: "sym-big", style: "font-size:2.2rem;margin-top:10px" }, `[${q.shown}]`)),
          h("div", { class: "grid2" }, opts));
      }
    });
  };
})();
