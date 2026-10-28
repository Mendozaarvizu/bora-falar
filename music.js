/* Música de fundo: liga/desliga, escolha de faixa e volume próprio */
(function () {
  const PT = window.PT;
  const { h, $ } = PT;

  // Cada faixa é dividida em partes (limite de tamanho por arquivo); elas tocam em sequência e em loop.
  const TRACKS = [
    { id: "bossa", e: "🎸", t: "Bossa nova", d: "Clássicos brasileiros para relaxar", parts: ["music/bossa-1.mp4", "music/bossa-2.mp4", "music/bossa-3.mp4"] },
    { id: "ambiente", e: "🌤️", t: "Ambiente calmo", d: "Música suave para se concentrar", parts: ["music/ambiente-1.mp4", "music/ambiente-2.mp4"] }
  ];
  const POS_KEY = "borafalar.music.pos";
  const audio = new Audio();
  audio.preload = "none";
  let trackId = null, part = 0, seekTo = 0, failed = false, lastSave = 0, gesture = null, pop = null;

  const cfg = () => {
    const s = PT.S.settings;
    if (!s.music || typeof s.music !== "object") s.music = { on: false, track: "bossa", vol: 0.4 };
    return s.music;
  };
  const track = () => TRACKS.find((t) => t.id === cfg().track) || TRACKS[0];
  const playing = () => !audio.paused && !audio.ended;

  /* ---------- onde cada faixa parou (conveniência deste navegador) ---------- */
  const readPos = () => { try { return JSON.parse(localStorage.getItem(POS_KEY) || "{}"); } catch (e) { return {}; } };
  function savePos() {
    if (!trackId) return;
    try {
      const m = readPos();
      m[trackId] = { p: part, t: Math.floor(audio.currentTime || 0) };
      localStorage.setItem(POS_KEY, JSON.stringify(m));
    } catch (e) { /* sem armazenamento local */ }
  }

  /* ---------- tocar ---------- */
  // O volume é do elemento de áudio, então não mexe no volume do computador nem na voz do app.
  const applyVolume = () => { audio.volume = Math.max(0, Math.min(1, cfg().vol)); };
  function load() {
    const t = track();
    if (trackId === t.id && audio.getAttribute("src")) return;
    savePos();
    const pos = readPos()[t.id] || {};
    trackId = t.id;
    part = Math.min(pos.p || 0, t.parts.length - 1);
    seekTo = pos.t || 0;
    failed = false;
    audio.src = t.parts[part];
  }
  function play() {
    load();
    applyVolume();
    const p = audio.play();
    if (p && p.catch) p.then(disarm, (e) => {
      if (e && e.name === "NotAllowedError") arm();
      else if (!(e && e.name === "AbortError")) { failed = true; render(); }
    });
    render();
  }
  function stop() { audio.pause(); savePos(); render(); }

  // O navegador só deixa tocar som depois de um toque: se a música estava ligada, ela começa no primeiro toque na página.
  function arm() {
    if (gesture) return;
    gesture = (e) => {
      if (e.target && e.target.closest && e.target.closest("#music-btn, .music-pop")) return;
      disarm();
      if (cfg().on) play();
    };
    document.addEventListener("pointerdown", gesture, true);
    document.addEventListener("keydown", gesture, true);
    render();
  }
  function disarm() {
    if (!gesture) return;
    document.removeEventListener("pointerdown", gesture, true);
    document.removeEventListener("keydown", gesture, true);
    gesture = null;
    render();
  }

  audio.addEventListener("loadedmetadata", () => {
    if (seekTo > 0 && seekTo < (audio.duration || Infinity) - 5) { try { audio.currentTime = seekTo; } catch (e) { /* começa do início */ } }
    seekTo = 0;
  });
  audio.addEventListener("ended", () => {
    const t = track();
    part = (part + 1) % t.parts.length;
    seekTo = 0;
    audio.src = t.parts[part];
    if (cfg().on) play();
  });
  audio.addEventListener("timeupdate", () => { const now = Date.now(); if (now - lastSave > 5000) { lastSave = now; savePos(); } });
  audio.addEventListener("playing", () => { failed = false; render(); });
  audio.addEventListener("pause", render);
  audio.addEventListener("error", () => { if (audio.getAttribute("src")) { failed = true; render(); } });
  window.addEventListener("pagehide", savePos);

  /* ---------- ações ---------- */
  function setOn(v) {
    cfg().on = v;
    PT.save();
    if (v) play(); else { disarm(); stop(); }
  }
  function chooseTrack(id) {
    if (cfg().track === id) return;
    savePos();
    cfg().track = id;
    PT.save();
    if (cfg().on) { audio.pause(); play(); } else render();
  }

  /* ---------- interface ---------- */
  function statusText() {
    const c = cfg(), t = track();
    if (failed) return "Não foi possível tocar esta música agora. Tente de novo em instantes.";
    if (!c.on) return "Música desligada.";
    if (gesture) return "Toque em qualquer lugar da página para a música começar.";
    if (playing()) return `Tocando agora: ${t.t}${t.parts.length > 1 ? ` · parte ${part + 1} de ${t.parts.length}` : ""}`;
    return "Carregando a música…";
  }
  function render() {
    const c = cfg(), btn = $("#music-btn");
    if (btn) {
      btn.classList.toggle("on", c.on);
      btn.classList.toggle("playing", c.on && playing());
      btn.setAttribute("aria-label", c.on ? "Música de fundo: ligada" : "Música de fundo: desligada");
    }
    if (!pop) return;
    pop.querySelector(".switch").setAttribute("aria-checked", String(c.on));
    pop.querySelector(".switch-label").textContent = c.on ? "Ligada" : "Desligada";
    pop.querySelectorAll(".track").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.id === c.track)));
    pop.querySelector(".music-status").textContent = statusText();
  }
  function onOutside(e) {
    if (pop && !pop.contains(e.target) && !e.target.closest("#music-btn")) closePop();
  }
  function onKey(e) { if (e.key === "Escape") { closePop(); $("#music-btn").focus(); } }
  function closePop() {
    if (!pop) return;
    pop.remove();
    pop = null;
    $("#music-btn").setAttribute("aria-expanded", "false");
    document.removeEventListener("pointerdown", onOutside, true);
    document.removeEventListener("keydown", onKey);
  }
  function openPop() {
    const c = cfg();
    const sw = h("button", { class: "switch", type: "button", role: "switch", id: "music-switch", "aria-checked": String(c.on), "aria-label": "Música de fundo" }, h("span"));
    sw.onclick = () => setOn(!cfg().on);
    const vol = h("input", { type: "range", id: "music-vol", min: "0", max: "100", step: "1", value: String(Math.round(c.vol * 100)), "aria-label": "Volume da música" });
    const out = h("output", { class: "num", for: "music-vol" }, `${Math.round(c.vol * 100)}%`);
    vol.oninput = () => { cfg().vol = Number(vol.value) / 100; applyVolume(); out.textContent = `${vol.value}%`; PT.save(); };
    pop = h("div", { class: "music-pop", role: "dialog", "aria-label": "Música de fundo" },
      h("div", { class: "row", style: "flex-wrap:nowrap" },
        h("div", { style: "flex:1" }, h("h3", {}, "Música de fundo"), h("span", { class: "small muted switch-label" }, c.on ? "Ligada" : "Desligada")),
        sw),
      h("div", { class: "stack", style: "gap:8px" },
        h("span", { class: "label" }, "Faixa"),
        TRACKS.map((t) => h("button", { class: "track", type: "button", "data-id": t.id, "aria-pressed": String(t.id === c.track), onclick: () => chooseTrack(t.id) },
          h("span", { class: "e", "aria-hidden": "true" }, t.e),
          h("span", { class: "stack", style: "gap:0" }, h("b", {}, t.t), h("small", { class: "muted" }, t.d)),
          h("span", { class: "check", "aria-hidden": "true" }, "✓")))),
      h("div", { class: "stack", style: "gap:6px" },
        h("span", { class: "label" }, "Volume da música"),
        h("div", { class: "vol-row" }, h("span", { "aria-hidden": "true" }, "🔈"), vol, h("span", { "aria-hidden": "true" }, "🔊"), out),
        h("p", { class: "small muted" }, "Vale só para a música. A voz do app segue o volume do computador.")),
      h("p", { class: "small music-status", role: "status" }, statusText()));
    $(".top-inner").append(pop);
    $("#music-btn").setAttribute("aria-expanded", "true");
    document.addEventListener("pointerdown", onOutside, true);
    document.addEventListener("keydown", onKey);
    sw.focus({ preventScroll: true });
  }

  PT.music = {
    audio,
    refresh() { render(); },
    init() {
      const btn = $("#music-btn");
      if (!btn) return;
      btn.onclick = () => (pop ? closePop() : openPop());
      render();
      if (cfg().on) play();
    }
  };
})();
