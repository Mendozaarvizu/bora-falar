/* Conversa com a IA */
(function () {
  const PT = window.PT;
  const { h, md, esc, ICON } = PT;

  let sampleP = null, aiOff = false;
  const getSample = () => sampleP || (sampleP = window.claude && typeof window.claude.use === "function" ? window.claude.use("sample").catch(() => null) : Promise.resolve(null));
  const OFF_CODES = ["not_granted", "sampling_disabled", "not_declared", "capability_disabled", "capability_removed"];
  function errCopy(e) {
    const c = e && e.code;
    if (OFF_CODES.includes(c)) { aiOff = true; return "A conversa com IA não está disponível aqui. As outras partes do app funcionam normalmente."; }
    if (c === "rate_limited") return "Muitas mensagens seguidas. Espere um pouquinho e tente de novo.";
    if (c === "session_expired") return "Sua sessão expirou. Entre de novo no Claude e volte aqui.";
    if (c === "refused") return "A IA não quis responder isso. Tente dizer de outro jeito.";
    if (c === "invalid_json" || c === "empty_completion") return "A resposta veio estranha. Tente de novo.";
    return "A conexão falhou. Tente de novo.";
  }

  const KEY = "borafalar.chat.";
  const load = (id) => { try { return JSON.parse(localStorage.getItem(KEY + id) || "null"); } catch (e) { return null; } };
  const store = (id, c) => { try { localStorage.setItem(KEY + id, JSON.stringify(c)); } catch (e) { /* sem armazenamento */ } };
  const drop = (id) => { try { localStorage.removeItem(KEY + id); } catch (e) { /* nada */ } };

  function studyWords() {
    const m = PT.srs.wordMap();
    const ks = [...new Set(Object.keys(PT.S.cards).map((id) => id.split("|")[0]))].filter((k) => m[k]);
    return ks.slice(-40).map((k) => m[k].w).join(", ") || "saudações, família, comida";
  }
  // Como a IA fala e corrige em cada nível do QECR. O nível vem da trilha (PT.currentLevel).
  const STYLE = {
    A1: {
      talk: "Use só o presente, ir + verbo (vou viajar) e o passado mais comum (fui, fiz, comi, gostei). Frases curtas, de até 8 palavras, e no máximo 2 frases por resposta. Vocabulário do dia a dia: família, casa, comida, rotina, números, horas, compras. Faça perguntas simples, de sim ou não ou de escolha (você prefere praia ou montanha?). Nada de gíria além de tá, pra, a gente e né.",
      fix: "Corrija no máximo 2 erros por mensagem: os que atrapalham o sentido e os básicos (gênero, ser e estar, conjugação no presente). Ignore detalhes de estilo."
    },
    A2: {
      talk: "Use o presente, o passado (perfeito e imperfeito), ir + verbo, o imperativo simples e comparações. Frases curtas e no máximo 3 frases por resposta, com vocabulário frequente. Pode usar expressões comuns e um pouco de gíria leve, que dê para entender pelo contexto.",
      fix: "Corrija até 3 erros por mensagem, começando pelos mais importantes."
    },
    B1: {
      talk: "Use todos os tempos do indicativo e o subjuntivo mais comum (espero que, quando você puder, se eu fosse). Use conectores (porque, então, mas, mesmo assim). No máximo 4 frases por resposta. Pergunte opiniões e experiências e peça para o aluno explicar o porquê.",
      fix: "Corrija todos os erros de gramática e, quando ajudar, mostre um jeito mais natural de dizer."
    },
    B2: {
      talk: "Fale com naturalidade, como com um amigo brasileiro: subjuntivo, expressões idiomáticas e gíria comum. Até 5 frases por resposta. Traga pontos de vista diferentes e debata com o aluno.",
      fix: "Corrija todos os erros, inclusive de naturalidade, de registro e de expressões."
    },
    C1: {
      talk: "Fale como com um falante nativo: ritmo natural, expressões idiomáticas, ironia leve e referências culturais brasileiras. Respostas do tamanho que a conversa pedir.",
      fix: "Corrija tudo o que um nativo estranharia, mesmo os detalhes."
    },
    C2: {
      talk: "Fale como com um falante nativo culto: nuances, mudanças de registro, humor e referências culturais. Respostas do tamanho que a conversa pedir.",
      fix: "Corrija tudo o que um nativo estranharia, mesmo os detalhes mínimos de estilo."
    }
  };
  // Uma cena de um caminho opcional (ex.: Berlitz 4, do A2) nunca fica abaixo do nível desse caminho.
  const level = (scene) => {
    const cur = PT.currentLevel(), T = scene && PT.TRACKS.find((t) => t.scenes.includes(scene));
    const tl = T && PT.LEVELS.find((x) => x.id === T.lvl);
    return tl && PT.LEVELS.indexOf(tl) > PT.LEVELS.indexOf(cur) ? tl : cur;
  };
  const style = (L) => STYLE[L.id] || STYLE.A2;
  // Para "Mais simples": um nível abaixo, nunca abaixo do A1.
  const easier = (L) => PT.LEVELS[Math.max(0, PT.LEVELS.indexOf(L) - 1)].id;

  function rules(scene) {
    const name = PT.S.settings.name, L = level(scene), st = style(L);
    return `Você é um parceiro de conversa para um aluno de português do Brasil de nível ${L.id} (${L.t}) do Quadro Europeu Comum de Referência (QECR). O aluno fala espanhol.${name ? ` O nome do aluno é ${name}.` : ""} Você não sabe o gênero do aluno: evite formas marcadas por gênero até ele indicar.

PERSONAGEM E CENA: ${scene.role}

REGRAS:
1. Responda SEMPRE e SOMENTE em português do Brasil. Nunca use inglês nem espanhol, mesmo que o aluno escreva em outra língua (nesse caso, peça com carinho para ele tentar em português).
2. Fale como uma pessoa real nessa cena: natural, informal, com expressões brasileiras comuns (a gente, tá, pra, né).
3. Nível ${L.id}: ${st.talk} Quase sempre termine com uma pergunta para a conversa continuar.
4. Palavras que o aluno está estudando (use algumas quando fizer sentido): ${studyWords()}.
5. Depois da sua fala, escreva uma linha só com ### e, abaixo dela, a correção da ÚLTIMA mensagem do aluno, em português simples. ${st.fix}
   - Para cada erro: ❌ trecho errado → ✅ forma certa — explicação curta (máximo 12 palavras).
   - Se o erro vier do espanhol, escreva "portunhol" na explicação.
   - Se estiver tudo certo: ✅ Perfeito! E, se ajudar, uma linha 💡 com um jeito mais natural de dizer.
   - Nunca traduza. Explique só com português simples.

Formato exato:
<sua fala no personagem>
###
<correções>`;
  }
  const split = (text) => {
    const i = text.indexOf("###");
    return i < 0 ? { reply: text.replace(/#+\s*$/, "").trim(), fix: "" } : { reply: text.slice(0, i).trim(), fix: text.slice(i + 3).trim() };
  };
  const transcript = (msgs, scene) => msgs.map((m) => `${m.role === "user" ? "ALUNO" : scene.who.toUpperCase()}: ${m.content}`).join("\n");

  /* ---------- lista de cenas ---------- */
  const allScenes = () => PT.SCENES.concat(PT.TRACKS.flatMap((T) => T.scenes));
  function sceneBtn(s) {
    const saved = load(s.id), n = saved ? saved.msgs.filter((m) => m.role === "user").length : 0;
    return h("button", { class: "scene", onclick: () => PT.startChat(s.id) },
      h("span", { class: "e", "aria-hidden": "true" }, s.e),
      h("span", { class: "stack", style: "gap:4px" }, h("b", {}, s.t), h("span", { class: "small muted" }, s.d),
        n ? h("span", { class: "small", style: "color:var(--accent);font-weight:700" }, `Continuar conversa · ${n} ${n === 1 ? "mensagem" : "mensagens"} suas`) : null));
  }
  PT.views.conversa = function (root) {
    const note = h("div", { class: "notice", hidden: true });
    const L = level(), next = PT.LEVELS[PT.LEVELS.indexOf(L) + 1];
    root.append(h("div", { class: "stack" },
      h("div", {}, h("h1", {}, "Conversa"), h("p", { class: "muted" }, "Converse com a IA num cenário real. Ela responde só em português e corrige cada mensagem sua.")),
      h("div", { class: "lv-line", style: `--lv:${L.c}` },
        h("span", { class: "lv-chip" }, `${L.id} · ${L.t}`),
        h("span", { class: "small muted" }, `A IA fala e corrige no seu nível da trilha.${next && !L.partial && L.units.length ? ` Quando você completar o ${L.id}, ela passa para o ${next.id}.` : ""}`)),
      note,
      h("div", { class: "stack", style: "gap:10px" }, PT.SCENES.map(sceneBtn)),
      // As cenas dos caminhos opcionais (ex.: as revisões do Berlitz 4) ficam num grupo à parte, fechado.
      PT.TRACKS.filter((T) => T.scenes.length).map((T) => h("details", { class: "wgroup scene-group", style: `--lv:${T.c}` },
        h("summary", {},
          h("span", { style: "font-size:1.5rem", "aria-hidden": "true" }, T.e),
          h("span", { class: "stack", style: "gap:2px;flex:1;min-width:0" }, h("b", {}, `Cenas do ${T.short}`), h("span", { class: "small muted" }, `As situações das revisões do livro ${T.t}. Você faz um papel e a IA faz o outro.`)),
          h("span", { class: "chev", "aria-hidden": "true", html: ICON.chev })),
        h("div", { class: "stack scene-list" }, T.scenes.map(sceneBtn)))),
      h("p", { class: "small muted" }, "Cada mensagem vale 5 XP. Ao terminar, peça uma avaliação e leve as palavras novas para os seus cartões.")));
    getSample().then((s) => {
      if (!s || aiOff) { note.textContent = "A conversa com IA precisa ser aberta no Claude. Aqui ela não está disponível, mas lições, cartões e escuta funcionam normalmente."; note.hidden = false; }
    });
  };

  /* ---------- tela de conversa ---------- */
  // "from" diz para onde o botão Voltar leva (a trilha, quando a cena foi aberta numa unidade de revisão).
  PT.startChat = function (id, from) {
    const scene = allScenes().find((s) => s.id === id);
    if (!scene) return;
    PT.focus((root) => chat(root, scene, from || "conversa"));
  };

  function chat(root, scene, from) {
    let convo = load(scene.id) || { msgs: [{ role: "assistant", content: scene.open }], evaluated: false };
    let busy = false, ctl = null, gone = false;
    const list = h("div", { class: "chat", "aria-live": "polite" });
    const sugs = h("div", { class: "sugs" });
    const ta = h("textarea", { id: "chat-in", rows: "1", placeholder: "Escreva em português…", "aria-label": "Sua mensagem" });
    const send = h("button", { class: "btn", "aria-label": "Enviar" }, "Enviar");
    const helpBtn = h("button", { class: "btn ghost sm" }, "💡 Me ajuda");
    const endBtn = h("button", { class: "btn ghost sm" }, "🏁 Terminar e avaliar");
    const status = h("p", { class: "small", style: "color:var(--bad)", hidden: true });

    root.append(h("div", { class: "stack" },
      h("div", { class: "row", style: "flex-wrap:nowrap" },
        h("button", { class: "icon-btn", "aria-label": "Voltar", html: ICON.back, onclick: () => { if (ctl) ctl.abort(); PT.go(from); } }),
        h("span", { style: "font-size:1.8rem" }, scene.e),
        h("div", { style: "flex:1;min-width:0" }, h("h2", {}, scene.t), h("div", { class: "small muted" }, `com ${scene.who} · nível ${level(scene).id}`)),
        h("button", { class: "link small", onclick: () => PT.confirm("Recomeçar a conversa?", "As mensagens desta conversa vão sumir.", "Recomeçar", () => { drop(scene.id); PT.startChat(scene.id, from); }) }, "Recomeçar")),
      h("div", { class: "ctx" }, "🎬 ", scene.d),
      list,
      h("div", { class: "composer" }, status, sugs,
        h("div", { class: "row" }, ta, send),
        h("div", { class: "row", style: "gap:8px" }, helpBtn, endBtn))));
    PT.cleanup = () => { gone = true; if (ctl) ctl.abort(); };

    const save = () => store(scene.id, convo);
    const scrollEnd = () => requestAnimationFrame(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }));
    const say = (msg, text) => { status.hidden = !text; status.textContent = text || ""; };

    function fixBlock(fix) {
      const ok = /Perfeito/i.test(fix) && !/❌/.test(fix);
      return h("div", { class: "fix" + (ok ? " ok" : "") }, fix.split("\n").filter((l) => l.trim()).map((l) => h("p", { html: md(l.trim()) })));
    }
    function msgEl(m, i) {
      if (m.role === "user") return h("div", { class: "msg me" }, h("div", { class: "b" }, m.content), m.fix ? fixBlock(m.fix) : null);
      const simple = m.simple ? h("div", { class: "simple" }, m.simple) : null;
      const simBtn = h("button", { type: "button" }, "Mais simples");
      simBtn.onclick = () => simplify(m, simBtn);
      return h("div", { class: "msg ai" }, h("span", { class: "who" }, scene.who), h("div", { class: "b" }, m.content),
        h("div", { class: "acts" }, h("button", { type: "button", onclick: (e) => PT.speak(m.content, { btn: e.currentTarget }) }, "🔊 Ouvir"), m.simple ? null : simBtn), simple);
    }
    function draw() { PT.put(list, ...convo.msgs.map(msgEl)); }

    async function callAI() {
      const sample = await getSample();
      if (!sample || aiOff) { say(null, "A conversa com IA não está disponível aqui."); return; }
      busy = true; ctl = new AbortController();
      send.textContent = "Parar";
      const bubble = h("div", { class: "b" }, h("span", { class: "thinking", "aria-label": "Pensando" }, h("i"), h("i"), h("i")));
      const holder = h("div", { class: "msg ai" }, h("span", { class: "who" }, scene.who), bubble);
      list.append(holder); scrollEnd();
      const turns = [{ role: "user", content: rules(scene) }, ...convo.msgs.slice(-16).map((m) => ({ role: m.role, content: m.content }))];
      try {
        const { text } = await sample(turns, { cache: false, modelTier: "quick", signal: ctl.signal, onText: ({ text }) => { bubble.textContent = split(text).reply || "…"; } });
        const { reply, fix } = split(text);
        const lastUser = [...convo.msgs].reverse().find((m) => m.role === "user");
        if (lastUser && fix) lastUser.fix = fix;
        convo.msgs.push({ role: "assistant", content: reply || "…" });
        save(); say(null, "");
      } catch (e) {
        if (e && e.code === "cancelled") {
          const part = e.text ? split(e.text).reply : "";
          if (part) { convo.msgs.push({ role: "assistant", content: part }); save(); }
        } else {
          say(null, errCopy(e));
        }
      } finally {
        busy = false; ctl = null; send.textContent = "Enviar";
        if (gone) return; // a pessoa já saiu da conversa: não mexe na tela nova
        draw(); scrollEnd();
        const last = convo.msgs[convo.msgs.length - 1];
        if (last.role === "user" && !aiOff) {
          PT.put(status, document.createTextNode(status.textContent + " "), h("button", { class: "link", onclick: () => { say(null, ""); callAI(); } }, "Tentar de novo"));
        }
      }
    }
    function submit() {
      if (busy) { if (ctl) ctl.abort(); return; }
      const text = ta.value.trim();
      if (!text) return;
      ta.value = ""; ta.style.height = "";
      PT.put(sugs);
      convo.msgs.push({ role: "user", content: text.slice(0, 1000) });
      save(); draw();
      PT.S.stats.msgs++;
      PT.gain(5, { c: 1 });
      callAI();
    }
    async function simplify(m, btn) {
      const sample = await getSample();
      if (!sample) return;
      btn.disabled = true; btn.textContent = "Pensando…";
      try {
        const target = easier(level(scene));
        const how = target === "A1" ? "bem simples (nível A1), com palavras muito comuns e frases de até 6 palavras" : `mais simples (nível ${target}), com palavras mais comuns e frases mais curtas`;
        const { text } = await sample(`Reescreva esta fala em português do Brasil ${how}. Não traduza para outra língua. Responda só com a fala reescrita.\n\nFala: "${m.content}"`, { modelTier: "quick" });
        m.simple = text.trim(); save(); draw();
      } catch (e) { btn.disabled = false; btn.textContent = "Mais simples"; say(null, errCopy(e)); }
    }
    async function help() {
      const sample = await getSample();
      if (!sample || busy) return;
      helpBtn.disabled = true;
      PT.put(sugs, h("span", { class: "small muted" }, "Pensando em ideias…"));
      try {
        const arr = await sample.json(`Cena: ${scene.role}\n\nConversa até agora:\n${transcript(convo.msgs.slice(-8), scene)}\n\nSugira 3 respostas curtas (máximo 12 palavras cada) que o ALUNO poderia mandar agora, em português do Brasil natural, que um aluno de nível ${level(scene).id} do QECR consiga escrever. Responda só com um array JSON de 3 strings.`, { modelTier: "quick", cache: false });
        const list3 = (Array.isArray(arr) ? arr : []).map(String).filter(Boolean).slice(0, 3);
        PT.put(sugs, ...list3.map((s) => h("button", { type: "button", onclick: () => { ta.value = s; ta.focus(); } }, s)));
      } catch (e) { PT.put(sugs); say(null, errCopy(e)); }
      finally { helpBtn.disabled = false; }
    }
    async function evaluate() {
      const n = convo.msgs.filter((m) => m.role === "user").length;
      if (n < 3) { PT.toast("✋", "Mande pelo menos 3 mensagens antes de pedir a avaliação."); return; }
      const sample = await getSample();
      if (!sample || aiOff) return;
      const box = h("div", { class: "stack" }, h("h2", {}, "Avaliação"), h("p", { class: "muted" }, h("span", { class: "thinking" }, h("i"), h("i"), h("i")), " A professora está lendo a conversa… (pode levar até um minuto)"));
      const close = PT.modal(box);
      try {
        const r = await sample.json(`Você é professor de português do Brasil. Avalie as mensagens do ALUNO nesta conversa. O aluno está no nível ${level(scene).id} do QECR e fala espanhol: compare com o que se espera de um aluno ${level(scene).id} e escreva tudo em português ${level(scene).id === "A1" ? "muito simples" : "simples"}, sem traduções.
Responda só com JSON neste formato:
{"resumo": "2 frases de avaliação geral, com carinho", "bom": ["até 3 pontos fortes"], "melhorar": ["até 3 pontos para melhorar, cada um com o exemplo certo"], "palavras": [{"w": "palavra ou expressão útil", "e": "um emoji", "d": "definição simples em português", "x": "frase curta de exemplo"}]}
Em "palavras", inclua de 3 a 5 palavras ou expressões úteis para esta cena, adequadas ao nível ${level(scene).id}, que o aluno ainda não usa bem.

Conversa:
${transcript(convo.msgs.slice(-30), scene)}`, { cache: false });
        const words = Array.isArray(r.palavras) ? r.palavras.filter((x) => x && x.w && x.d).slice(0, 5) : [];
        let xpNote = null;
        if (!convo.evaluated) {
          convo.evaluated = true; save();
          PT.S.stats.evals++;
          PT.gain(20);
          xpNote = h("p", { class: "small", style: "color:var(--gold-deep);font-weight:700" }, "+20 XP pela conversa completa");
        }
        const add = h("button", { class: "btn block" }, `Adicionar ${words.length} palavras aos cartões`);
        add.onclick = () => { const k = PT.srs.addCustom(words); add.disabled = true; add.textContent = k ? `${k} palavras adicionadas ✓` : "Essas palavras já estavam nos cartões"; };
        PT.put(box, 
          h("div", { class: "row" }, h("h2", { style: "margin-right:auto" }, "Avaliação"), h("button", { class: "icon-btn", "aria-label": "Fechar", html: ICON.close, onclick: () => close() })),
          xpNote,
          r.resumo ? h("p", {}, String(r.resumo)) : null,
          Array.isArray(r.bom) && r.bom.length ? h("div", { class: "stack", style: "gap:6px" }, h("div", { class: "label" }, "Pontos fortes"), r.bom.slice(0, 3).map((x) => h("p", {}, "✅ " + x))) : null,
          Array.isArray(r.melhorar) && r.melhorar.length ? h("div", { class: "stack", style: "gap:6px" }, h("div", { class: "label" }, "Para melhorar"), r.melhorar.slice(0, 3).map((x) => h("p", {}, "🎯 " + x))) : null,
          words.length ? h("div", { class: "stack", style: "gap:8px" }, h("div", { class: "label" }, "Palavras para levar"),
            words.map((x) => h("div", { class: "row", style: "flex-wrap:nowrap;align-items:flex-start" }, h("span", { style: "font-size:1.5rem" }, String(x.e || "💬")),
              h("div", {}, h("b", {}, String(x.w)), h("p", { class: "small muted" }, String(x.d)), x.x ? h("p", { class: "small", style: "font-style:italic" }, String(x.x)) : null))), add) : null,
          h("div", { class: "grid2" },
            h("button", { class: "btn ghost", onclick: () => close() }, "Continuar"),
            h("button", { class: "btn ghost", onclick: () => { close(); drop(scene.id); PT.go(from); } }, "Nova conversa")));
      } catch (e) {
        PT.put(box, h("h2", {}, "Avaliação"), h("p", {}, errCopy(e)), h("button", { class: "btn ghost", onclick: () => close() }, "Fechar"));
      }
    }

    send.onclick = submit;
    helpBtn.onclick = help;
    endBtn.onclick = evaluate;
    ta.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); submit(); } });
    ta.addEventListener("input", () => { ta.style.height = ""; ta.style.height = Math.min(140, ta.scrollHeight) + "px"; });
    draw();
    const last = convo.msgs[convo.msgs.length - 1];
    if (last.role === "user") callAI();
    getSample().then((s) => { if (!s) { say(null, "A conversa com IA precisa ser aberta no Claude."); send.disabled = helpBtn.disabled = endBtn.disabled = true; } });
    scrollEnd();
  }

  PT.boot();
})();
