/* Trilha de sons: lições de pronúncia com exercícios de ouvido e gravação da própria voz */
(function () {
  const PT = window.PT;
  const { h, md, ICON, shuffle, pick } = PT;
  const hasPT = () => !!(PT.tts.ok && PT.tts.voicePT);
  const lessons = () => PT.SOUND_UNITS.flatMap((u) => u.lessons.map((l) => ((l.unit = u), l)));
  const stOf = (l) => PT.S.lessons[l.id] || {};
  const isDone = (l) => !!stOf(l).done;
  const wait = (ms) => new Promise((r) => setTimeout(r, ms));
  const SVG = {
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/></svg>',
    stop: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>'
  };

  /* ---------- gravador ----------
     Grava com o microfone e toca de volta pelo Web Audio (sem arquivo, nada sai do aparelho).
     A gravação vive só enquanto o exercício está na tela. */
  const Rec = (() => {
    let stream = null, ctx = null, src = null, el = null, live = null, wasMuted = null;
    const blocked = () => { try { const fp = document.featurePolicy || document.permissionsPolicy; return !!(fp && fp.allowsFeature && !fp.allowsFeature("microphone")); } catch (e) { return false; } };
    const can = () => !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder) && !blocked();
    function audio() {
      const C = window.AudioContext || window.webkitAudioContext;
      if (!ctx && C) ctx = new C();
      if (ctx && ctx.state === "suspended") ctx.resume();
      return ctx;
    }
    // A música de fundo cala enquanto o microfone está aberto, para não entrar na gravação.
    function music(off) {
      const m = PT.music && PT.music.audio;
      if (!m) return;
      if (off) { if (wasMuted == null) { wasMuted = m.muted; m.muted = true; } }
      else if (wasMuted != null) { m.muted = wasMuted; wasMuted = null; }
    }
    function stopPlay() {
      if (src) { try { src.onended = null; src.stop(); } catch (e) { /* já parou */ } src = null; }
      if (el) { try { el.pause(); } catch (e) { /* nada */ } el = null; }
    }
    function trim(buf) {
      const d = buf.getChannelData(0), n = d.length, sr = buf.sampleRate;
      let peak = 0, a = -1, b = -1;
      for (let i = 0; i < n; i++) { const v = Math.abs(d[i]); if (v > peak) peak = v; }
      const th = Math.max(0.015, peak * 0.08);
      for (let i = 0; i < n; i++) if (Math.abs(d[i]) > th) { a = i; break; }
      for (let i = n - 1; i >= 0; i--) if (Math.abs(d[i]) > th) { b = i; break; }
      if (a < 0) return { peak, from: 0, len: buf.duration };
      const from = Math.max(0, a / sr - 0.12), to = Math.min(buf.duration, b / sr + 0.2);
      return { peak, from, len: Math.max(0.2, to - from) };
    }
    async function start(onLevel) {
      if (live) return live;
      stopPlay(); PT.hush();
      if (!stream || !stream.active) stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
      const ac = audio();
      music(true);
      let raf = 0, node = null;
      if (ac && onLevel) {
        try {
          const an = ac.createAnalyser(); an.fftSize = 512;
          node = ac.createMediaStreamSource(stream); node.connect(an);
          const data = new Uint8Array(an.fftSize);
          const loop = () => { an.getByteTimeDomainData(data); let p = 0; for (const v of data) p = Math.max(p, Math.abs(v - 128)); onLevel(Math.min(1, p / 70)); raf = requestAnimationFrame(loop); };
          loop();
        } catch (e) { /* sem medidor */ }
      }
      const mr = new MediaRecorder(stream), chunks = [];
      mr.ondataavailable = (e) => { if (e.data && e.data.size) chunks.push(e.data); };
      const stopped = new Promise((res) => { mr.onstop = res; mr.onerror = res; });
      mr.start();
      const me = live = {
        async stop() {
          if (live === me) live = null;
          cancelAnimationFrame(raf);
          if (node) { try { node.disconnect(); } catch (e) { /* nada */ } }
          if (mr.state !== "inactive") mr.stop();
          await stopped;
          music(false);
          const blob = new Blob(chunks, { type: mr.mimeType || "audio/webm" });
          const take = { blob, buf: null, from: 0, len: 0, peak: 1 };
          if (!blob.size) { take.peak = 0; return take; }
          try {
            const ab = await blob.arrayBuffer();
            take.buf = await new Promise((res, rej) => { const p = ac.decodeAudioData(ab, res, rej); if (p && p.catch) p.catch(rej); });
            Object.assign(take, trim(take.buf));
          } catch (e) { take.buf = null; }
          return take;
        }
      };
      return me;
    }
    function play(take) {
      stopPlay(); PT.hush();
      return new Promise((res) => {
        try {
          if (take.buf) {
            const ac = audio(), s = ac.createBufferSource();
            s.buffer = take.buf; s.connect(ac.destination);
            s.onended = () => { if (src === s) src = null; res(true); };
            src = s; s.start(0, take.from, take.len);
          } else {
            const url = URL.createObjectURL(take.blob), a = new Audio(url);
            const end = (ok) => { URL.revokeObjectURL(url); if (el === a) el = null; res(ok); };
            a.onended = () => end(true); a.onerror = () => end(false);
            el = a; a.play().catch(() => end(false));
          }
        } catch (e) { res(false); }
      });
    }
    function close() {
      if (live) { const l = live; live = null; l.stop().catch(() => {}); }
      stopPlay(); music(false);
      if (stream) { stream.getTracks().forEach((t) => t.stop()); stream = null; }
    }
    return { can, start, play, stopPlay, close, get busy() { return !!live; } };
  })();
  PT.rec = Rec;

  /* ---------- trilha ---------- */
  PT.soundCard = function () {
    const ls = lessons(), done = ls.filter(isDone).length;
    return h("button", { class: "bonus", type: "button", onclick: () => PT.go("sons", "trilha") },
      h("span", { class: "ipa-mark", "aria-hidden": "true" }, "[ɐ̃w̃]"),
      h("span", { class: "stack", style: "gap:2px" },
        h("span", { class: "label" }, `Trilha de sons · ${done}/${ls.length}`),
        h("b", { style: "font-size:1.05rem" }, "Pronúncia passo a passo"),
        h("small", {}, "Aprenda cada som do português, treine o ouvido e grave a sua voz para comparar.")));
  };

  PT.soundPath = function () {
    const ls = lessons(), done = ls.filter(isDone).length, next = ls.find((l) => !isDone(l)) || {};
    return h("div", { class: "stack", style: "gap:22px" },
      h("section", { class: "panel stack", style: "gap:10px" },
        h("div", { class: "row", style: "flex-wrap:nowrap;align-items:center" },
          h("div", { style: "flex:1;min-width:0" }, h("div", { class: "label" }, "Pronúncia passo a passo"), h("h2", {}, "Trilha de sons")),
          h("span", { class: "lv-count" }, `${done}/${ls.length}`)),
        h("p", { class: "muted" }, "Cada lição ensina um som: você lê como fazer, treina o ouvido e depois grava a sua voz para comparar com o modelo. Primeiro o som do Brasil; a última lição de cada unidade mostra como é em Portugal."),
        h("span", { class: "bar", role: "img", "aria-label": `${done} de ${ls.length} lições` }, h("i", { style: `width:${Math.round((done / ls.length) * 100)}%` })),
        !PT.tts.ok ? h("p", { class: "small muted" }, "Este navegador não tem voz em português: os exercícios de ouvir ficam de fora.") : null,
        PT.tts.ok && !hasPT() ? h("p", { class: "small muted" }, "🇵🇹 Sem uma voz de Portugal instalada (por exemplo, Joana), as lições “Em Portugal” mostram só a transcrição, sem áudio.") : null,
        !Rec.can() ? h("p", { class: "small muted" }, "🎙 Não dá para gravar a voz neste navegador. Nos exercícios de fala, ouça o modelo e repita em voz alta.") : null),
      PT.SOUND_UNITS.map((u, i) => {
        const ud = u.lessons.filter(isDone).length;
        return h("section", { class: "unit", style: `--u:${u.c}` },
          h("div", { class: "unit-head" }, h("span", { class: "e", "aria-hidden": "true" }, u.e),
            h("div", {}, h("div", { class: "label" }, `Sons · Unidade ${i + 1} · ${ud}/${u.lessons.length}`), h("h2", {}, u.t), h("div", { class: "unit-d" }, u.d))),
          h("div", { class: "path" }, u.lessons.map((l, j) => {
            const st = stOf(l), isNext = next.id === l.id;
            const off = [0, 56, 0, -56][(j + i) % 4];
            return h("button", { class: "node" + (st.done ? " done" : "") + (isNext ? " next" : ""), style: `transform:translateX(${off}px)`, onclick: () => sheet(l) },
              isNext ? h("span", { class: "go" }, "Começar") : null,
              h("span", { class: "disc", "aria-hidden": "true" }, l.e),
              h("span", { class: "name" }, l.t),
              h("span", { class: "stars", "aria-label": st.done ? `${st.stars} estrelas` : "" }, st.done ? "★".repeat(st.stars) + "☆".repeat(3 - st.stars) : ""));
          })));
      }),
      h("div", { class: "lv-note" }, "🚧 Próximas unidades: " + PT.SOUND_SOON.map(([e, t]) => `${e} ${t}`).join(" · ")));
  };

  function sheet(l) {
    const st = stOf(l), says = l.say.length;
    const close = PT.modal(h("div", { class: "stack", style: `--u:${l.unit.c}` },
      h("div", { class: "row" },
        h("span", { style: "font-size:2.6rem;line-height:1" }, l.e),
        h("div", { style: "flex:1" }, h("div", { class: "label" }, `Trilha de sons · ${l.unit.t}`), h("h2", {}, l.t)),
        h("button", { class: "icon-btn", "aria-label": "Fechar", html: ICON.close, onclick: () => close() })),
      h("div", { class: "sym-big", style: "text-align:left;font-size:1.9rem" }, l.sym),
      st.done ? h("p", { class: "muted" }, `${"★".repeat(st.stars)}${"☆".repeat(3 - st.stars)} · feita ${st.done}× · praticar de novo vale XP.`)
        : h("p", { class: "muted" }, l.pt ? `Explicação, exercícios de Brasil × Portugal e ${says} gravações da sua voz.` : `Explicação, exercícios de ouvido e ${says} gravações da sua voz.`),
      h("button", { class: "btn block", onclick: () => { close(); PT.startSound(l.id); } }, st.done ? "Praticar de novo" : "Começar")));
  }

  /* ---------- exercícios ---------- */
  const take = (arr, n) => { const out = []; let pool = []; while (out.length < n && arr.length) { if (!pool.length) pool = shuffle(arr); out.push(pool.pop()); } return out; };
  function build(L) {
    const items = [{ type: "intro" }];
    const audio = PT.tts.ok;
    if (L.pt) {
      const ws = shuffle(L.where);
      ws.slice(0, 5).forEach((w) => items.push({ type: "where", w, side: Math.random() < 0.5 ? 1 : 2 }));
      ws.slice(5, 8).forEach((w) => items.push({ type: "ptpick", w }));
      if (hasPT()) L.say.forEach((text) => items.push({ type: "say", text }));
      return items;
    }
    const ear = [];
    if (audio) {
      take(L.pairs, 3).forEach((p) => ear.push({ type: "which", p, target: Math.random() < 0.5 ? 0 : 1 }));
      take(L.pairs, 2).forEach((p) => { const a = Math.random() < 0.5 ? 0 : 1; ear.push({ type: "same", p, a, b: Math.random() < 0.5 ? a : 1 - a }); });
    }
    take(L.cats, audio ? 4 : 7).forEach((c) => ear.push({ type: "sort", cat: c }));
    const used = new Set();
    ear.filter((x) => x.type === "sort").forEach((x) => { const free = x.cat.words.filter((w) => !used.has(w)); x.word = pick(free.length ? free : x.cat.words); used.add(x.word); });
    items.push(...shuffle(ear));
    const ws = shuffle(L.ipa);
    items.push({ type: "ipa", mode: "read", w: ws[0] }, { type: "ipa", mode: audio ? "hear" : "read", w: ws[1] });
    L.say.forEach((text) => items.push({ type: "say", text }));
    return items;
  }

  PT.startSound = function (id) {
    const L = lessons().find((l) => l.id === id);
    if (!L) return;
    const prev = stOf(L), practice = !!prev.done, pt = !!L.pt;
    const score = { n: 0, ok: 0, rec: 0 };
    let alive = true, result = null;
    const ipaOf = {};
    (L.ipa || []).forEach(([w, i]) => (ipaOf[w] = i));
    (L.where || []).forEach(([w, br, p]) => (ipaOf[w] = p));
    const mdL = (s) => {
      const x = md(s);
      if (!pt) return x;
      return hasPT() ? x.replace(/data-say=/g, "data-say-pt=") : x.replace(/<button class="say" data-say="([^"]*)">.*?<\/button>/g, "<strong>$1</strong>");
    };
    const say = (text, o = {}) => PT.speak(text, { ...o, pt });
    // botão de ouvir que roda uma função (uma palavra, ou duas em sequência)
    const playBtn = (fn, o = {}) => {
      const b = h("button", { class: "speak" + (o.lg ? " lg" : ""), type: "button", "aria-label": o.slow ? "Ouvir devagar" : "Ouvir", html: o.slow ? ICON.slow : ICON.speak });
      b.onclick = async (e) => { e.stopPropagation(); b.classList.add("playing"); try { await fn(); } finally { b.classList.remove("playing"); } };
      return b;
    };
    const listenRow = (text) => h("div", { class: "row", style: "justify-content:center;gap:16px" }, playBtn(() => say(text), { lg: true }), playBtn(() => say(text, { slow: true }), { slow: true }));
    const sayChip = (w) => (PT.tts.ok && (!pt || hasPT()) ? h("button", { class: "say", type: "button", [pt ? "data-say-pt" : "data-say"]: w, html: ICON.speak + PT.esc(w) }) : h("strong", {}, w));
    const both = ([w, br, p]) => h("div", { class: "stack", style: "gap:8px" },
      h("strong", {}, w),
      h("div", { class: "cmp" },
        h("div", {}, h("span", { class: "small" }, "🇧🇷 Brasil"), h("span", { class: "ipa" }, `[${br}]`), PT.tts.ok ? h("button", { class: "say", type: "button", "data-say": w, html: ICON.speak + "ouvir" }) : null),
        h("div", {}, h("span", { class: "small" }, "🇵🇹 Portugal"), h("span", { class: "ipa" }, `[${p}]`), hasPT() ? h("button", { class: "say", type: "button", "data-say-pt": w, html: ICON.speak + "ouvir" }) : null)));

    // pergunta de escolha: marca certo/errado, dá XP e mostra a explicação
    function ask(body, done, st, q) {
      let answered = false;
      const btns = q.labels.map((lab, i) => h("button", { class: "opt" + (q.ipa ? " ipa" : ""), type: "button", style: q.center ? "justify-content:center;text-align:center;font-weight:700;min-height:66px" : null },
        q.center ? null : h("span", { class: "k" }, i + 1), lab));
      const choose = (i) => {
        if (answered || !btns[i]) return;
        answered = true;
        const ok = i === q.answer;
        btns.forEach((b, j) => { b.disabled = true; if (j === q.answer) b.classList.add("right"); else if (j === i) b.classList.add("wrong"); });
        score.n++; if (ok) score.ok++;
        PT.S.stats.answers++; if (ok) PT.S.stats.correct++;
        if (ok && q.ear) PT.S.stats.listenOk = (PT.S.stats.listenOk || 0) + 1;
        PT.gain(ok ? 2 : 0, { o: 1 });
        body.append(PT.feedbackBar(ok, q.after(), () => done({ ok, xp: ok ? 2 : 0 }), st));
      };
      btns.forEach((b, i) => (b.onclick = () => choose(i)));
      st.onNum = (n) => choose(n - 1);
      body.append(h("div", { class: "prompt" }, q.prompt), ...(q.head || []), h("div", { class: q.grid ? "grid2" : "opts" }, btns));
    }

    const RENDER = {
      intro(it, body, done, st) {
        const go = () => done({ ok: true, xp: 0 });
        st.onEnter = go;
        body.append(
          h("div", {}, h("div", { class: "label" }, `${L.unit.t} · lição de som`), h("h1", {}, L.t), h("div", { class: "sym-big", style: "text-align:left;font-size:2rem;margin-top:6px" }, L.sym)),
          h("div", { class: "panel explain" }, L.ex.map((p) => h("p", { html: mdL(p) }))),
          pt && !hasPT() ? h("div", { class: "pt-note" }, "🇵🇹 Este aparelho não tem uma voz de Portugal. Você vai ver as transcrições, mas sem áudio e sem os exercícios de gravação. Para ouvir, instale uma voz “Português (Portugal)”, como a Joana, nas configurações do sistema.") : null,
          h("button", { class: "btn block", onclick: go }, "Começar os exercícios"));
      },
      which(it, body, done, st) {
        const [a, b] = it.p, target = it.p[it.target];
        PT.speakSoon(target);
        ask(body, done, st, {
          prompt: "Qual das duas você ouviu?", ear: true, center: true, grid: true,
          head: [listenRow(target)], labels: [a, b], answer: it.target,
          after: () => h("p", {}, "Era ", sayChip(target), ". Compare: ", sayChip(a), " × ", sayChip(b))
        });
      },
      same(it, body, done, st) {
        const x = it.p[it.a], y = it.p[it.b];
        const seq = async () => { if (!(await say(x)) || !alive) return; await wait(380); if (alive) await say(y); };
        const t = setTimeout(() => { if (alive && st.i === it.at) seq(); }, 300);
        it.at = st.i;
        ask(body, done, st, {
          prompt: "As duas palavras são iguais ou diferentes?", ear: true, center: true, grid: true,
          head: [h("div", { class: "row", style: "justify-content:center" }, playBtn(seq, { lg: true }))],
          labels: ["Iguais", "Diferentes"], answer: x === y ? 0 : 1,
          after: () => { clearTimeout(t); return h("p", {}, x === y ? "Foi a mesma palavra duas vezes: " : "Foram duas palavras: ", sayChip(x), x === y ? null : " × ", x === y ? null : sayChip(y)); }
        });
      },
      sort(it, body, done, st) {
        const w = it.word;
        if (PT.tts.ok) PT.speakSoon(w);
        ask(body, done, st, {
          prompt: "Que som tem a sílaba forte?", ear: true,
          head: [h("div", { class: "row", style: "justify-content:center" }, h("div", { class: "word-hero" }, w), PT.tts.ok ? playBtn(() => say(w)) : null, PT.tts.ok ? playBtn(() => say(w, { slow: true }), { slow: true }) : null)],
          labels: L.cats.map((c) => h("span", {}, h("span", { class: "ipa", style: "font-weight:700" }, c.label), h("span", { class: "small muted" }, "  " + c.hint))),
          answer: L.cats.indexOf(it.cat),
          after: () => h("p", {}, sayChip(w), " tem ", h("strong", { class: "ipa" }, it.cat.label), ", ", it.cat.hint, ".")
        });
      },
      ipa(it, body, done, st) {
        const [w, ipa] = it.w, read = it.mode === "read";
        const opts = shuffle([it.w, ...shuffle(L.ipa.filter((x) => x[0] !== w && x[1] !== ipa)).slice(0, 3)]);
        if (!read) PT.speakSoon(w);
        ask(body, done, st, {
          prompt: read ? "Que palavra é esta?" : "Qual é a transcrição?", ipa: !read, grid: read, ear: !read,
          head: [read ? h("div", { class: "sym-big", style: "font-size:2.6rem;text-align:center;padding:14px 0" }, `[${ipa}]`) : listenRow(w)],
          labels: opts.map((x) => (read ? x[0] : `[${x[1]}]`)), answer: opts.indexOf(it.w),
          after: () => h("p", {}, sayChip(w), "  ", h("span", { class: "ipa" }, `[${ipa}]`))
        });
      },
      where(it, body, done, st) {
        const [w] = it.w;
        ask(body, done, st, {
          prompt: "Brasil ou Portugal?", center: true, grid: true,
          head: [h("div", { style: "text-align:center;padding:6px 0" }, h("div", { class: "word-hero" }, w), h("div", { class: "sym-big", style: "font-size:2.2rem;margin-top:10px" }, `[${it.w[it.side]}]`))],
          labels: ["🇧🇷 Brasil", "🇵🇹 Portugal"], answer: it.side - 1, after: () => both(it.w)
        });
      },
      ptpick(it, body, done, st) {
        const [w, br, p] = it.w, opts = shuffle([br, p]);
        ask(body, done, st, {
          prompt: "Como se diz em Portugal?", ipa: true,
          head: [h("div", { class: "word-hero", style: "padding:6px 0" }, w)],
          labels: opts.map((x) => `[${x}]`), answer: opts.indexOf(p), after: () => both(it.w)
        });
      },
      say(it, body, done, st) {
        const text = it.text, long = text.includes(" "), ipa = ipaOf[text];
        let mine = null, rec = null, timer = 0, busy = false;
        const status = h("div", { class: "rec-status", "aria-live": "polite" });
        const meter = h("div", { class: "rec-meter", "aria-hidden": "true" }, h("i"));
        const recBtn = h("button", { class: "rec-btn", type: "button" });
        const mineBtn = h("button", { class: "btn ghost sm", type: "button", disabled: true }, "▶ Minha voz");
        const cmpBtn = h("button", { class: "btn ghost sm", type: "button", disabled: true }, "Modelo, depois eu");
        const good = h("button", { class: "btn good", type: "button", style: "flex:1", disabled: true }, "👍 Ficou parecido");
        const more = h("button", { class: "btn ghost", type: "button", style: "flex:1", disabled: true }, "Ainda não");
        const setRec = (on) => { recBtn.classList.toggle("on", on); recBtn.innerHTML = (on ? SVG.stop : SVG.mic) + `<span>${on ? "Parar" : mine ? "Gravar de novo" : "Gravar"}</span>`; };
        const finish = (ok) => {
          clearTimeout(timer); Rec.stopPlay();
          if (rec) { const r = rec; rec = null; r.stop().catch(() => {}); }
          const xp = ok ? 2 : 1;
          PT.gain(xp);
          done({ ok: true, xp });
        };
        const noMic = (msg) => {
          status.textContent = msg;
          recBtn.hidden = meter.hidden = mineBtn.hidden = cmpBtn.hidden = true;
          good.textContent = "Repeti em voz alta"; good.disabled = false; more.hidden = true;
        };
        async function stopRec() {
          if (!rec || busy) return;
          busy = true; clearTimeout(timer);
          const r = rec; rec = null;
          setRec(false); recBtn.disabled = true; status.textContent = "Preparando…";
          const t = await r.stop();
          busy = false; recBtn.disabled = false; meter.firstChild.style.width = "0";
          if (!alive) return;
          if (!t.blob.size || t.peak < 0.01) { status.textContent = "Não ouvi nada. Chegue mais perto do microfone e grave de novo."; return; }
          mine = t; score.rec++;
          setRec(false);
          mineBtn.disabled = cmpBtn.disabled = good.disabled = more.disabled = false;
          status.textContent = "Gravado. Ouça e compare com o modelo.";
          await Rec.play(mine);
        }
        recBtn.onclick = async () => {
          if (busy) return;
          if (rec) return stopRec();
          busy = true; status.textContent = "Abrindo o microfone…";
          try {
            rec = await Rec.start((v) => { meter.firstChild.style.width = `${Math.round(v * 100)}%`; });
            busy = false;
            if (!alive || st.i !== it.at) { const r = rec; rec = null; r.stop().catch(() => {}); return; }
            setRec(true); status.textContent = "Gravando… fale agora e toque em Parar.";
            timer = setTimeout(stopRec, long ? 9000 : 5000);
          } catch (e) {
            busy = false; rec = null;
            const n = e && e.name;
            noMic(n === "NotAllowedError" || n === "SecurityError" ? "O microfone está bloqueado para esta página. Libere nas permissões do navegador, ou ouça o modelo e repita em voz alta."
              : n === "NotFoundError" ? "Não encontrei um microfone. Ouça o modelo e repita em voz alta."
              : "Não consegui gravar aqui. Ouça o modelo e repita em voz alta.");
          }
        };
        mineBtn.onclick = () => { if (mine && !rec) Rec.play(mine); };
        cmpBtn.onclick = async () => { if (!mine || rec) return; Rec.stopPlay(); if (!(await say(text)) || !alive) return; await wait(300); if (alive && st.i === it.at && !rec) Rec.play(mine); };
        good.onclick = () => finish(true);
        more.onclick = () => finish(false);
        it.at = st.i;
        setRec(false);
        setTimeout(() => { if (alive && st.i === it.at && !rec) say(text); }, 350); // com a voz certa (Brasil ou Portugal)
        body.append(
          h("div", { class: "prompt" }, "Sua vez: ouça, grave e compare"),
          h("div", { style: "text-align:center" },
            h("div", { class: "word-hero", style: long ? "font-size:1.5rem;line-height:1.3" : null }, text),
            ipa ? h("div", { class: "say-ipa" }, `[${ipa}]`) : null),
          h("div", { class: "row", style: "justify-content:center;gap:16px" }, playBtn(() => { Rec.stopPlay(); return say(text); }, { lg: true }), playBtn(() => { Rec.stopPlay(); return say(text, { slow: true }); }, { slow: true })),
          h("div", { class: "rec" }, recBtn, meter, status, h("div", { class: "rec-row" }, mineBtn, cmpBtn)),
          h("p", { class: "small muted", style: "text-align:center" }, "Você é o juiz: ouça as duas vozes e decida. A gravação fica só neste aparelho e some quando você continua."),
          h("div", { class: "feedback" }, h("div", { class: "row", style: "flex-wrap:nowrap" }, more, good)));
        if (!Rec.can()) noMic("Não dá para gravar neste navegador. Ouça o modelo e repita em voz alta.");
        else status.textContent = "Ouça o modelo e toque em Gravar.";
      }
    };

    PT.runSession({
      title: `Trilha de sons · ${L.t}`, back: "sons", backArg: "trilha", again: false,
      make: () => build(L),
      render: (it, body, done, st, items) => RENDER[it.type](it, body, done, st, items),
      // roda uma vez, antes da tela final: guarda a lição e dá o bônus
      finish(st) {
        const acc = score.n ? score.ok / score.n : 1;
        const stars = acc >= 0.9 ? 3 : acc >= 0.7 ? 2 : 1, perfect = score.ok === score.n;
        const was = PT.S.lessons[L.id] || {};
        PT.S.lessons[L.id] = { stars: Math.max(was.stars || 0, stars), done: (was.done || 0) + 1 };
        const bonus = (practice ? 5 : 10) + (perfect ? 5 : 0);
        st.xp += bonus;
        PT.gain(bonus, { l: 1 });
        if (perfect) PT.award("perfeito");
        result = { stars, perfect };
      },
      doneTitle: practice ? "Prática completa!" : "Lição de som completa!",
      summary() {
        const nl = lessons().find((l) => !isDone(l));
        return h("div", { class: "stack", style: "width:100%;gap:14px;align-items:center" },
          h("div", { class: "stars-big", "aria-label": `${result.stars} de 3 estrelas` }, [1, 2, 3].map((n) => h("span", { class: n <= result.stars ? "" : "off" }, "⭐"))),
          h("p", { class: "muted" }, `${score.ok} de ${score.n} certos${score.rec ? ` · ${score.rec} ${score.rec === 1 ? "gravação" : "gravações"} da sua voz` : ""}.`),
          nl ? h("button", { class: "btn block", onclick: () => PT.startSound(nl.id) }, `Próxima: ${nl.t}`) : null);
      }
    });
    // ao sair: solta o microfone e para qualquer áudio
    const base = PT.cleanup;
    PT.cleanup = () => { alive = false; if (base) base(); Rec.close(); };
  };
})();
