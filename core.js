/* Núcleo: utilidades, estado, salvamento, voz, gamificação, navegação, início e perfil */
(function () {
  const PT = window.PT;

  /* ---------- utilidades ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  function h(tag, props, ...kids) {
    const el = document.createElement(tag);
    if (props) for (const [k, v] of Object.entries(props)) {
      if (v == null || v === false) continue;
      if (k === "class") el.className = v;
      else if (k === "text") el.textContent = v;
      else if (k === "html") el.innerHTML = v;
      else if (k === "style") el.style.cssText = v;
      else if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? "" : v);
    }
    for (const kid of kids.flat(Infinity)) {
      if (kid == null || kid === false) continue;
      el.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
    }
    return el;
  }
  // replaceChildren sem os nulos (senão aparece "null" na tela)
  PT.put = (el, ...kids) => el.replaceChildren(...kids.flat(Infinity).filter((k) => k != null && k !== false));
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ICON = {
    speak: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
    slow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 16c0-5 3.5-9 8-9s6 3 6 6-2 3-4 3H4z"/><path d="M18 13h2.5a1.5 1.5 0 0 0 0-3H19"/><path d="M7 16v3M13 16v3"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg>'
  };
  PT.wave = function () {
    const el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    el.setAttribute("class", "wave wave-big");
    el.setAttribute("preserveAspectRatio", "none");
    el.setAttribute("aria-hidden", "true");
    el.innerHTML = '<rect width="100%" height="100%" fill="url(#wv)"/>';
    return el;
  };
  function md(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\[\[(.+?)\]\]/g, (m, t) => `<button class="say" data-say="${t}">${ICON.speak}${t}</button>`);
  }
  const shuffle = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const stripAcc = (s) => s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const norm = (s) => String(s).toLowerCase().replace(/[.,!?¿¡;:"“”()—–…]/g, " ").replace(/\s+/g, " ").trim();
  const ABBR = { vc: "você", tb: "também", pq: "porque", bjs: "beijos", td: "tudo", hj: "hoje", blz: "beleza", msg: "mensagem", obg: "obrigado", abs: "abraços" };
  const isAbbrev = (s) => /\b(vc|tb|pq|bjs|td|hj|blz|msg|obg|abs)\b|k{3,}/i.test(s);

  const pad = (n) => String(n).padStart(2, "0");
  const dayKey = (d = new Date()) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const dayNum = (key) => { const [y, m, d] = key.split("-").map(Number); return Math.round(Date.UTC(y, m - 1, d) / 864e5); };
  const keyOf = (n) => new Date(n * 864e5).toISOString().slice(0, 10);
  const todayNum = () => dayNum(dayKey());

  Object.assign(PT, { $, h, esc, md, ICON, shuffle, pick, stripAcc, norm, isAbbrev, dayKey, dayNum, keyOf, todayNum });

  /* ---------- estado ---------- */
  const KEY = "borafalar.v1";
  function fresh() {
    return {
      v: 1, xp: 0, days: {}, lessons: {}, cards: {}, custom: {}, badges: {},
      stats: { answers: 0, correct: 0, reviews: 0, listenOk: 0, dictOk: 0, msgs: 0, evals: 0, bestCombo: 0, ipaOk: 0 },
      settings: { goal: 150, rate: 1, voice: "", ptNotes: true, name: "", night: false, music: { on: false, track: "bossa", vol: 0.4 } },
      lastActive: null, updatedAt: 0
    };
  }
  function hydrate(o) {
    const f = fresh();
    if (!o || typeof o !== "object") return f;
    return { ...f, ...o, stats: { ...f.stats, ...(o.stats || {}) }, settings: { ...f.settings, ...(o.settings || {}) } };
  }
  function readLocal() { try { return JSON.parse(localStorage.getItem(KEY) || "null"); } catch (e) { return null; } }
  function writeLocal() { try { localStorage.setItem(KEY, JSON.stringify(PT.S)); } catch (e) { /* sem armazenamento local */ } }
  PT.S = hydrate(readLocal());

  // Junta o progresso de dois aparelhos sem perder nada
  function merge(a, b) {
    const newer = (a.updatedAt || 0) >= (b.updatedAt || 0) ? a : b;
    const out = hydrate(JSON.parse(JSON.stringify(newer)));
    out.xp = Math.max(a.xp || 0, b.xp || 0);
    out.days = {};
    for (const k of new Set([...Object.keys(a.days || {}), ...Object.keys(b.days || {})])) {
      const x = (a.days || {})[k] || {}, y = (b.days || {})[k] || {}, d = {};
      for (const f of new Set([...Object.keys(x), ...Object.keys(y)])) d[f] = Math.max(x[f] || 0, y[f] || 0);
      out.days[k] = d;
    }
    out.lessons = { ...(b.lessons || {}) };
    for (const [k, v] of Object.entries(a.lessons || {})) {
      const w = out.lessons[k];
      out.lessons[k] = !w ? v : { stars: Math.max(v.stars || 0, w.stars || 0), done: Math.max(v.done || 0, w.done || 0) };
    }
    out.cards = { ...(b.cards || {}) };
    for (const [k, v] of Object.entries(a.cards || {})) {
      const w = out.cards[k];
      if (!w || (v.reps || 0) > (w.reps || 0) || ((v.reps || 0) === (w.reps || 0) && (v.due || 0) > (w.due || 0))) out.cards[k] = v;
    }
    out.custom = { ...(b.custom || {}), ...(a.custom || {}) };
    out.badges = { ...(a.badges || {}) };
    for (const [k, v] of Object.entries(b.badges || {})) out.badges[k] = Math.min(v, out.badges[k] || Infinity);
    for (const k of Object.keys(out.stats)) out.stats[k] = Math.max((a.stats || {})[k] || 0, (b.stats || {})[k] || 0);
    out.updatedAt = Date.now();
    return out;
  }

  const sync = { ref: null, cloud: false, timer: null, writing: false, again: false };
  PT.sync = sync;
  PT.save = function (now) {
    PT.S.updatedAt = Date.now();
    writeLocal();
    clearTimeout(sync.timer);
    sync.timer = setTimeout(flush, now ? 0 : 1500);
  };
  async function flush() {
    if (!sync.ref) return;
    if (sync.writing) { sync.again = true; return; }
    sync.writing = true;
    try { await sync.ref.set(JSON.parse(JSON.stringify(PT.S))); sync.cloud = true; }
    catch (e) {
      if (e && e.code === "unavailable") setTimeout(flush, 2500 + Math.random() * 2500);
      else if (e && (e.code === "revoked" || e.code === "invalid_argument")) { sync.cloud = false; sync.ref = null; }
    } finally {
      sync.writing = false;
      if (sync.again) { sync.again = false; flush(); }
    }
  }
  async function connect() {
    const cl = window.claude;
    if (!cl || typeof cl.use !== "function") return;
    try {
      const [user, db] = await Promise.all([cl.use("user"), cl.use("db")]);
      if (!user || !db) return;
      const uid = await user.id();
      if (!uid) return;
      sync.ref = db.doc("data/users/" + uid + "/progress");
      const snap = await sync.ref.get();
      if (snap.exists) {
        PT.S = merge(PT.S, JSON.parse(JSON.stringify(snap.data())));
        writeLocal();
        PT.applyTheme();
        if (PT.music) PT.music.refresh();
        PT.loadVoices();
        if (!document.body.classList.contains("focus")) PT.go(PT.tab || "inicio");
        PT.updateHeader();
      }
      sync.cloud = true;
      flush();
    } catch (e) { sync.cloud = false; }
  }
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") { clearTimeout(sync.timer); flush(); } });

  // Dia por padrão; noite só quando a pessoa escolhe no Ajustes
  PT.applyTheme = () => document.documentElement.setAttribute("data-mode", PT.S.settings.night ? "night" : "day");

  /* ---------- voz ---------- */
  const tts = { ok: "speechSynthesis" in window, voices: [], voice: null, voicePT: null };
  PT.tts = tts;
  PT.loadVoices = function () {
    if (!tts.ok) return;
    let all = [];
    try { all = speechSynthesis.getVoices() || []; } catch (e) { /* sem vozes */ }
    tts.voices = all.filter((v) => /^pt/i.test(v.lang));
    const pref = PT.S.settings.voice;
    const br = tts.voices.filter((v) => /pt[-_]BR/i.test(v.lang));
    tts.voice = tts.voices.find((v) => v.voiceURI === pref)
      || br.find((v) => /Luciana|Google|Francisca|Thalita|Natural/i.test(v.name))
      || br[0] || tts.voices[0] || null;
    // voz de Portugal, só para comparar no Laboratório de sons
    tts.voicePT = tts.voices.find((v) => /pt[-_]PT/i.test(v.lang)) || null;
  };
  PT.speak = function (text, opts = {}) {
    return new Promise((resolve) => {
      if (!tts.ok) return resolve(false);
      const btn = opts.btn;
      const done = (ok) => { if (btn) btn.classList.remove("playing"); resolve(ok); };
      try {
        speechSynthesis.cancel();
        const said = String(text).replace(/\b(vc|tb|pq|bjs|td|hj|blz|msg|obg|abs)\b/gi, (m) => ABBR[m.toLowerCase()]).replace(/k{3,}/gi, "rá rá rá");
        const u = new SpeechSynthesisUtterance(said);
        const voice = opts.pt && tts.voicePT ? tts.voicePT : tts.voice;
        u.lang = voice ? voice.lang : "pt-BR";
        if (voice) u.voice = voice;
        u.rate = (opts.slow ? 0.62 : 0.95) * (PT.S.settings.rate || 1);
        u.onend = () => done(true);
        u.onerror = () => done(false);
        if (btn) btn.classList.add("playing");
        speechSynthesis.speak(u);
      } catch (e) { done(false); }
    });
  };
  PT.speakBtn = function (text, o = {}) {
    const b = h("button", { class: "speak" + (o.lg ? " lg" : ""), type: "button", "aria-label": o.slow ? "Ouvir devagar" : "Ouvir", html: o.slow ? ICON.slow : ICON.speak });
    b.addEventListener("click", (e) => { e.stopPropagation(); PT.speak(typeof text === "function" ? text() : text, { slow: o.slow, btn: b }); });
    return b;
  };
  document.addEventListener("click", (e) => {
    const s = e.target.closest("[data-say], [data-say-pt]");
    if (s) { e.preventDefault(); if (s.dataset.sayPt) PT.speak(s.dataset.sayPt, { pt: true }); else PT.speak(s.dataset.say); }
  });

  /* ---------- gamificação ---------- */
  PT.levelOf = (xp) => { let L = 1; while (xp >= 50 * L * (L + 1)) L++; return L; };
  PT.levelBase = (L) => 50 * (L - 1) * L;
  PT.levelName = (L) => PT.LEVEL_NAMES[Math.min(L, PT.LEVEL_NAMES.length) - 1];
  PT.today = () => {
    const k = dayKey();
    const d = PT.S.days[k] || (PT.S.days[k] = { xp: 0, l: 0, r: 0, o: 0, c: 0 });
    return d;
  };
  const active = (n) => ((PT.S.days[keyOf(n)] || {}).xp || 0) >= 10;
  PT.streak = () => {
    let d = todayNum(), n = 0;
    if (!active(d)) d--;
    while (active(d)) { n++; d--; }
    return n;
  };
  PT.allLessons = () => PT.UNITS.flatMap((u) => u.lessons.map((l) => ({ ...l, unit: u })));
  PT.lessonsDone = () => Object.values(PT.S.lessons).filter((x) => x.done > 0).length;

  const pending = [];
  PT.gain = function (xp, counts = {}) {
    const S = PT.S, k = dayKey(), t = PT.today();
    if (S.lastActive && S.lastActive !== k && dayNum(k) - dayNum(S.lastActive) - 1 >= 3) PT.award("saudade");
    const goal = S.settings.goal, hadGoal = t.xp >= goal, lv0 = PT.levelOf(S.xp);
    S.xp += xp; t.xp += xp;
    for (const [c, v] of Object.entries(counts)) t[c] = (t[c] || 0) + v;
    S.lastActive = k;
    const hr = new Date().getHours();
    if (hr >= 23) PT.award("coruja");
    if (hr < 7) PT.award("madrugador");
    if (!hadGoal && t.xp >= goal) {
      PT.toast("🎯", "Meta do dia batida! Que orgulho!");
      PT.confetti(160);
      PT.award("meta");
    }
    const lv = PT.levelOf(S.xp);
    if (lv > lv0) pending.push({ type: "level", lv });
    PT.checkBadges();
    PT.save();
    PT.updateHeader();
    if (!document.body.classList.contains("focus")) PT.flushPending();
  };
  PT.checkBadges = function () {
    const S = PT.S, n = PT.lessonsDone(), st = S.stats, sk = PT.streak(), lv = PT.levelOf(S.xp);
    const rules = {
      primeira: n >= 1, cinco: n >= 5, trilha: n >= PT.allLessons().length,
      dias3: sk >= 3, dias7: sk >= 7, dias30: sk >= 30,
      cartoes50: st.reviews >= 50, cartoes500: st.reviews >= 500,
      ouvido: st.listenOk >= 25, ditado: st.dictOk >= 20,
      papo1: st.msgs >= 1, papo50: st.msgs >= 50, avaliacao: st.evals >= 1, foneticista: (st.ipaOk || 0) >= 20,
      nivel5: lv >= 5, nivel10: lv >= 10
    };
    for (const [id, ok] of Object.entries(rules)) if (ok) PT.award(id);
  };
  PT.award = function (id) {
    if (PT.S.badges[id]) return;
    const b = PT.BADGES.find((x) => x.id === id);
    if (!b) return;
    PT.S.badges[id] = Date.now();
    PT.toast(b.e, "Conquista: " + b.t);
    PT.confetti(70);
    PT.save();
  };
  PT.flushPending = function () {
    const p = pending.shift();
    if (!p) return;
    if (p.type === "level") {
      PT.confetti(200);
      const close = PT.modal(h("div", { class: "stack", style: "align-items:center;text-align:center" },
        h("div", { class: "label" }, "Subiu de nível!"),
        h("div", { class: "level-hero", style: "flex-direction:column" },
          h("div", { class: "lv", style: "width:110px;height:110px;font-size:3rem;border-radius:30px" }, p.lv),
          h("h1", {}, PT.levelName(p.lv))),
        h("p", { class: "muted" }, "Continue assim. Cada dia de estudo conta!"),
        h("button", { class: "btn block", onclick: () => close() }, "Bora continuar!")
      ), { onClose: () => PT.flushPending() });
    }
  };

  /* ---------- toasts, confete e modais ---------- */
  PT.toast = function (emoji, text, ms = 2800) {
    const t = h("div", { class: "toast" }, h("span", { class: "e" }, emoji), h("span", {}, text));
    $("#toasts").append(t);
    setTimeout(() => t.remove(), ms);
  };
  let parts = [], raf = 0;
  PT.confetti = function (n = 120) {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = $("#confetti"), ctx = c.getContext("2d"), dpr = window.devicePixelRatio || 1;
    c.width = innerWidth * dpr; c.height = innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const cols = ["#D9481C", "#F2B01E", "#0B7A57", "#2F5BD3", "#9B3FB5", "#FFFFFF"];
    for (let i = 0; i < n; i++) parts.push({
      x: innerWidth / 2 + (Math.random() - 0.5) * 160, y: innerHeight * 0.4,
      vx: (Math.random() - 0.5) * 14, vy: -Math.random() * 13 - 5, w: Math.random() * 7 + 5, hh: Math.random() * 5 + 3,
      c: pick(cols), a: Math.random() * 6, va: (Math.random() - 0.5) * 0.4
    });
    if (raf) return;
    const step = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      parts = parts.filter((p) => p.y < innerHeight + 20);
      for (const p of parts) {
        p.vy += 0.32; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.a += p.va;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.a); ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.hh / 2, p.w, p.hh); ctx.restore();
      }
      if (parts.length) raf = requestAnimationFrame(step);
      else { raf = 0; ctx.clearRect(0, 0, innerWidth, innerHeight); }
    };
    raf = requestAnimationFrame(step);
  };
  PT.modal = function (content, o = {}) {
    const back = h("div", { class: "modal-back" });
    const box = h("div", { class: "modal", role: "dialog", "aria-modal": "true" }, content);
    back.append(box);
    let closed = false;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    function close() {
      if (closed) return; closed = true;
      back.remove(); document.removeEventListener("keydown", onKey);
      if (o.onClose) o.onClose();
    }
    back.addEventListener("click", (e) => { if (e.target === back) close(); });
    document.addEventListener("keydown", onKey);
    document.body.append(back);
    const f = box.querySelector("button, input, select, textarea");
    if (f) setTimeout(() => f.focus({ preventScroll: true }), 30);
    return close;
  };
  // Confirmação dentro da página (o visualizador bloqueia confirm())
  PT.confirm = function (title, text, yes, onYes) {
    const close = PT.modal(h("div", { class: "stack" },
      h("h2", {}, title), h("p", { class: "muted" }, text),
      h("div", { class: "grid2" },
        h("button", { class: "btn ghost", onclick: () => close() }, "Cancelar"),
        h("button", { class: "btn bad", onclick: () => { close(); onYes(); } }, yes))));
  };

  /* ---------- cabeçalho e navegação ---------- */
  PT.updateHeader = function () {
    const S = PT.S, t = PT.today(), goal = S.settings.goal, sk = PT.streak();
    const st = $("#chip-streak");
    st.querySelector(".num").textContent = sk;
    st.classList.toggle("on", sk > 0);
    const frac = Math.min(1, t.xp / goal), C = 2 * Math.PI * 8;
    $("#chip-goal").innerHTML = `<svg class="ring" viewBox="0 0 22 22" style="transform:rotate(-90deg)"><circle class="track" cx="11" cy="11" r="8"/><circle class="fill" cx="11" cy="11" r="8" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - frac)}"/></svg><span>${t.xp}<span class="muted goal-max">/${goal}</span></span>`;
    $("#chip-level").textContent = "Nv " + PT.levelOf(S.xp);
  };
  PT.views = {};
  PT.go = function (tab, arg) {
    if (PT.cleanup) { try { PT.cleanup(); } catch (e) { /* nada */ } PT.cleanup = null; }
    document.body.classList.remove("focus");
    if (!PT.views[tab]) tab = "inicio";
    PT.tab = tab;
    const v = $("#view");
    PT.put(v);
    PT.views[tab](v, arg);
    const navTab = tab === "sons" ? "ouvir" : tab;
    document.querySelectorAll(".nav button").forEach((b) => { if (b.dataset.tab === navTab) b.setAttribute("aria-current", "page"); else b.removeAttribute("aria-current"); });
    try { if (location.hash.slice(1) !== tab) history.replaceState(null, "", "#" + tab); } catch (e) { /* sem histórico */ }
    window.scrollTo(0, 0);
    PT.updateHeader();
    PT.flushPending();
  };
  PT.focus = function (render) {
    if (PT.cleanup) { try { PT.cleanup(); } catch (e) { /* nada */ } PT.cleanup = null; }
    document.body.classList.add("focus");
    const v = $("#view");
    PT.put(v);
    render(v);
    window.scrollTo(0, 0);
  };

  /* ---------- ajustes ---------- */
  PT.openSettings = function () {
    const S = PT.S;
    const seg = (opts, cur, set) => h("div", { class: "seg" }, opts.map(([val, label]) => {
      const b = h("button", { type: "button", "aria-pressed": String(val === cur) }, label);
      b.onclick = () => { set(val); b.parentNode.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b))); PT.save(); PT.updateHeader(); };
      return b;
    }));
    const name = h("input", { id: "set-name", type: "text", maxlength: "30", value: S.settings.name, placeholder: "Como quer ser chamado?" });
    name.oninput = () => { S.settings.name = name.value.trim(); PT.save(); };
    let voiceField;
    if (tts.voices.length) {
      const sel = h("select", { id: "set-voice" }, tts.voices.map((v) => h("option", { value: v.voiceURI, selected: tts.voice && v.voiceURI === tts.voice.voiceURI }, `${v.name} (${v.lang})`)));
      sel.onchange = () => { S.settings.voice = sel.value; PT.loadVoices(); PT.save(); PT.speak("Oi! Tudo bem com você?"); };
      voiceField = h("div", { class: "field" }, h("span", { class: "label" }, "Voz"), h("div", { class: "row", style: "flex-wrap:nowrap" }, sel, PT.speakBtn("Oi! Tudo bem com você?")));
    } else {
      voiceField = h("div", { class: "notice" }, tts.ok
        ? "Não encontrei uma voz em português neste aparelho. Instale uma voz em português (Brasil) nas configurações do sistema para ouvir a pronúncia certa."
        : "Este navegador não fala. Os exercícios de áudio ficam escondidos.");
    }
    const resetBox = h("div", {});
    const resetBtn = h("button", { class: "link", type: "button", style: "color:var(--bad)" }, "Apagar todo o progresso");
    resetBtn.onclick = () => {
      PT.put(resetBox, h("div", { class: "notice stack", style: "gap:10px" },
        h("b", {}, "Tem certeza? Isso apaga XP, cartões e conquistas."),
        h("div", { class: "grid2" },
          h("button", { class: "btn ghost sm", onclick: () => PT.put(resetBox, resetBtn) }, "Cancelar"),
          h("button", { class: "btn bad sm", onclick: () => { const keep = PT.S.settings; PT.S = fresh(); PT.S.settings = keep; PT.save(true); close(); PT.go("inicio"); PT.toast("🧹", "Progresso apagado."); } }, "Apagar tudo"))));
    };
    resetBox.append(resetBtn);
    const close = PT.modal(h("div", { class: "stack" },
      h("div", { class: "row" }, h("h2", { style: "margin-right:auto" }, "Ajustes"), h("button", { class: "icon-btn", "aria-label": "Fechar", html: ICON.close, onclick: () => close() })),
      h("label", { class: "field" }, h("span", { class: "label" }, "Seu nome (opcional)"), name),
      h("div", { class: "field" }, h("span", { class: "label" }, "Aparência"),
        seg([[false, "☀️ Dia"], [true, "🌙 Noite"]], S.settings.night, (v) => { S.settings.night = v; PT.applyTheme(); })),
      h("div", { class: "field" }, h("span", { class: "label" }, "Meta diária"),
        seg([[50, "Leve · 50"], [100, "Normal · 100"], [150, "Sério · 150"], [250, "Intenso · 250"]], S.settings.goal, (v) => (S.settings.goal = v)),
        h("span", { class: "small muted" }, "Para 30 minutos por dia, 150 XP é um bom alvo.")),
      voiceField,
      h("div", { class: "field" }, h("span", { class: "label" }, "Velocidade da voz"),
        seg([[0.8, "Mais devagar"], [1, "Normal"], [1.15, "Mais rápida"]], S.settings.rate, (v) => (S.settings.rate = v))),
      h("div", { class: "field" }, h("span", { class: "label" }, "Diferenças de Portugal 🇵🇹"),
        seg([[true, "Mostrar"], [false, "Esconder"]], S.settings.ptNotes, (v) => (S.settings.ptNotes = v))),
      h("div", { class: "notice" }, sync.cloud
        ? "☁️ Seu progresso fica salvo na sua conta e aparece em qualquer aparelho."
        : "💾 Seu progresso fica salvo só neste navegador."),
      resetBox
    ));
  };

  /* ---------- início ---------- */
  function greeting() {
    const hr = new Date().getHours();
    const g = hr < 12 ? "Bom dia" : hr < 18 ? "Boa tarde" : "Boa noite";
    return PT.S.settings.name ? `${g}, ${PT.S.settings.name}!` : `${g}!`;
  }
  PT.nextLesson = function () {
    const all = PT.allLessons();
    return all.find((l) => !(PT.S.lessons[l.id] || {}).done)
      || all.slice().sort((a, b) => (PT.S.lessons[a.id].stars || 0) - (PT.S.lessons[b.id].stars || 0))[0];
  };
  function weekStrip() {
    const tn = todayNum(), goal = PT.S.settings.goal;
    return h("div", { class: "week" }, Array.from({ length: 7 }, (_, i) => {
      const n = tn - 6 + i, d = PT.S.days[keyOf(n)] || {}, xp = d.xp || 0;
      const wd = new Date(n * 864e5).getUTCDay();
      return h("div", { class: "d" + (i === 6 ? " today" : "") },
        h("span", { class: "dot" + (xp >= goal ? " met" : xp >= 10 ? " act" : ""), title: `${xp} XP` }, xp >= goal ? "★" : ""),
        PT.WEEKDAYS[wd]);
    }));
  }
  PT.views.inicio = function (root) {
    const S = PT.S, t = PT.today(), goal = S.settings.goal, sk = PT.streak();
    const frac = Math.min(1, t.xp / goal), C = 2 * Math.PI * 42;
    const phrase = PT.PHRASES[todayNum() % PT.PHRASES.length];
    const nl = PT.nextLesson();
    const counts = PT.srs ? PT.srs.counts() : { due: 0, fresh: 0, total: 0 };
    const reviewN = counts.due + counts.fresh;

    const plan = [
      { done: t.l >= 1, what: "Fazer uma lição", min: "≈ 8 min", go: () => PT.startLesson(nl.id) },
      { done: t.r >= 20 || (t.r > 0 && reviewN === 0), what: counts.total ? "Revisar os cartões" : "Revisar os cartões (faça uma lição antes)", min: "≈ 7 min", go: () => PT.go("cartoes") },
      { done: t.o >= 10, what: "Treinar o ouvido", min: "≈ 6 min", go: () => PT.go("ouvir") },
      { done: t.c >= 6, what: "Conversar com a IA", min: "≈ 10 min", go: () => PT.go("conversa") }
    ];
    const earned = PT.BADGES.filter((b) => S.badges[b.id]).sort((a, b) => S.badges[b.id] - S.badges[a.id]).slice(0, 3);

    root.append(h("div", { class: "stack" },
      h("div", { class: "hello" },
        h("h1", {}, greeting()),
        h("div", { class: "phrase" }, PT.speakBtn(phrase[0]),
          h("div", {}, h("div", { class: "label" }, "Frase do dia"), h("q", {}, phrase[0]), h("div", { class: "small muted" }, phrase[1])))),

      h("section", { class: "panel goal", "aria-label": "Meta de hoje" },
        h("div", { class: "big-ring", html: `<svg viewBox="0 0 100 100"><circle class="track" cx="50" cy="50" r="42"/><circle class="fill" cx="50" cy="50" r="42" stroke-dasharray="${C}" stroke-dashoffset="${C * (1 - frac)}"/></svg><div class="mid"><div>${t.xp}<small>de ${goal} XP</small></div></div>` }),
        h("div", {},
          h("h2", {}, t.xp >= goal ? "Meta batida! 🎉" : `Faltam ${goal - t.xp} XP hoje`),
          h("p", { class: "muted small" }, sk > 0 ? `🔥 ${sk} ${sk === 1 ? "dia seguido" : "dias seguidos"}. Não perca a sequência!` : "Estude hoje para começar uma sequência."),
          weekStrip())),

      h("section", { class: "next-card", style: `--u:${nl.unit.c}` },
        h("div", {},
          h("div", { class: "label" }, (S.lessons[nl.id] || {}).done ? "Praticar de novo" : `Próxima lição · ${nl.unit.t}`),
          h("h2", {}, nl.t),
          h("button", { class: "btn", onclick: () => PT.startLesson(nl.id) }, (S.lessons[nl.id] || {}).done ? "Praticar" : "Começar lição")),
        h("div", { class: "e", "aria-hidden": "true" }, nl.e)),

      h("section", { class: "panel" },
        h("div", { class: "row", style: "margin-bottom:6px" }, h("h2", { style: "margin-right:auto" }, "Plano de hoje"), h("span", { class: "label" }, "≈ 30 min")),
        h("ul", { class: "plan" }, plan.map((p) => h("li", { class: p.done ? "done" : "" },
          h("span", { class: "tick", "aria-hidden": "true" }, "✓"),
          h("button", { class: "link what", style: "text-align:left;color:inherit;text-decoration:none;font-weight:400", onclick: p.go }, p.what),
          h("span", { class: "small muted" }, p.min))))),

      h("div", { class: "grid2" },
        h("button", { class: "tile", onclick: () => (reviewN ? PT.startReview() : PT.go("cartoes")) }, h("span", { class: "e" }, "🃏"), h("b", {}, "Revisar cartões"), h("span", { class: "small muted" }, reviewN ? `${reviewN} para hoje` : "Nada para hoje")),
        h("button", { class: "tile", onclick: () => PT.startDictation() }, h("span", { class: "e" }, "✍️"), h("b", {}, "Ditado rápido"), h("span", { class: "small muted" }, "Ouça e escreva")),
        h("button", { class: "tile", onclick: () => PT.startPairs() }, h("span", { class: "e" }, "👂"), h("b", {}, "Pares mínimos"), h("span", { class: "small muted" }, "avó ou avô?")),
        h("button", { class: "tile", onclick: () => PT.go("conversa") }, h("span", { class: "e" }, "💬"), h("b", {}, "Conversar"), h("span", { class: "small muted" }, "Pratique com a IA"))),

      PT.bonusCard ? PT.bonusCard() : null,

      h("section", { class: "stack", style: "gap:10px" },
        h("div", { class: "row" }, h("h2", { style: "margin-right:auto" }, "Conquistas"), h("button", { class: "link", onclick: () => PT.go("perfil") }, "Ver todas")),
        earned.length
          ? h("div", { class: "badges" }, earned.map((b) => h("div", { class: "badge" }, h("span", { class: "e" }, b.e), h("b", {}, b.t))))
          : h("p", { class: "muted small" }, `Nenhuma ainda. Complete a primeira lição para ganhar “${PT.BADGES[0].t}”.`))
    ));
  };

  /* ---------- perfil ---------- */
  PT.views.perfil = function (root) {
    const S = PT.S, L = PT.levelOf(S.xp), base = PT.levelBase(L), next = PT.levelBase(L + 1);
    const words = PT.srs ? PT.srs.counts().words : 0;
    const tn = todayNum(), goal = S.settings.goal;
    const heat = h("div", { class: "heat", "aria-label": "Últimos 28 dias" }, Array.from({ length: 28 }, (_, i) => {
      const xp = ((S.days[keyOf(tn - 27 + i)] || {}).xp) || 0;
      return h("i", { class: xp >= goal ? "l3" : xp >= goal / 2 ? "l2" : xp >= 10 ? "l1" : "", title: `${keyOf(tn - 27 + i)}: ${xp} XP` });
    }));
    const sorted = PT.BADGES.slice().sort((a, b) => (S.badges[b.id] ? 1 : 0) - (S.badges[a.id] ? 1 : 0));
    root.append(h("div", { class: "stack" },
      h("section", { class: "panel stack" },
        h("div", { class: "level-hero" }, h("div", { class: "lv" }, L),
          h("div", { style: "flex:1" }, h("div", { class: "label" }, "Nível " + L), h("h1", {}, PT.levelName(L)),
            h("p", { class: "small muted num" }, `${S.xp} XP · faltam ${next - S.xp} para o nível ${L + 1}`))),
        h("div", { class: "bar" }, h("i", { style: `width:${((S.xp - base) / (next - base)) * 100}%` }))),
      h("div", { class: "stat-row" },
        h("div", { class: "stat" }, h("b", {}, S.xp), h("span", {}, "XP total")),
        h("div", { class: "stat" }, h("b", {}, PT.streak()), h("span", {}, "dias seguidos")),
        h("div", { class: "stat" }, h("b", {}, words), h("span", {}, "palavras"))),
      h("section", { class: "panel stack", style: "gap:10px" },
        h("h2", {}, "Últimos 28 dias"), heat,
        h("p", { class: "small muted" }, "Dourado forte: meta batida. Claro: estudou um pouco.")),
      h("section", { class: "stack", style: "gap:10px" },
        h("h2", {}, `Conquistas · ${Object.keys(S.badges).length}/${PT.BADGES.length}`),
        h("div", { class: "badges" }, sorted.map((b) => h("div", { class: "badge" + (S.badges[b.id] ? "" : " off") }, h("span", { class: "e" }, b.e), h("b", {}, b.t), h("small", {}, b.d))))),
      h("button", { class: "btn ghost block", onclick: PT.openSettings }, "Ajustes")
    ));
  };

  /* ---------- início do app ---------- */
  PT.applyTheme();
  PT.boot = function () {
    document.querySelectorAll(".nav button").forEach((b) => (b.onclick = () => PT.go(b.dataset.tab)));
    $("#brand").onclick = () => PT.go("inicio");
    $("#chip-level").onclick = () => PT.go("perfil");
    $("#btn-settings").onclick = PT.openSettings;
    PT.loadVoices();
    if (tts.ok) { try { speechSynthesis.addEventListener("voiceschanged", PT.loadVoices); } catch (e) { speechSynthesis.onvoiceschanged = PT.loadVoices; } }
    PT.go((location.hash || "").slice(1) || "inicio");
    if (PT.music) PT.music.init();
    connect();
  };
})();
