/* ==========================================================================
   custom.js — interactive enhancements (progressive, degrades without JS)
   1. Scroll-reveal      2. Rotating hero word     3. Command palette
   4. Cursor-tracking robotic arm (IK)             5. RL gridworld (404)
   ========================================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  ready(function () {
    initScrollReveal();
    initRotatingWord();
    initCommandPalette();
    initRobotArm();
    initGridworld();
  });

  /* ---- 1. Scroll reveal (re-triggers on re-entry) ---------------------- */
  function initScrollReveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    var targets = [];
    function add(el) {
      if (!el) return;
      var tag = el.tagName.toLowerCase();
      if (tag === "style" || tag === "script") return;
      if (el.classList.contains("reveal")) return;
      el.classList.add("reveal");
      targets.push(el);
    }

    // Single-layout pages keep the title outside .page__content.
    add(document.querySelector(".page__title"));
    // Covers single pages (.page__content) and listing pages (.archive).
    var nodes = document.querySelectorAll(".page__content > *, .archive > *");
    Array.prototype.forEach.call(nodes, add);
    if (!targets.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        e.target.classList.toggle("is-visible", e.isIntersecting);
      });
    }, { threshold: 0.06, rootMargin: "0px 0px -30px 0px" });

    var vh = window.innerHeight || document.documentElement.clientHeight;
    targets.forEach(function (el, i) {
      el.style.transitionDelay = Math.min(i * 40, 220) + "ms";
      // Reveal anything already on screen immediately (no load flash).
      var r = el.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) el.classList.add("is-visible");
      io.observe(el);
    });
  }

  /* ---- 2. Rotating hero word ------------------------------------------- */
  function initRotatingWord() {
    var el = document.querySelector(".home-hero__title .rotate");
    if (!el) return;
    var words = (el.getAttribute("data-words") || "").split("|").filter(Boolean);
    if (words.length < 2 || reduceMotion) return;

    var wi = 0, ci = words[0].length, deleting = true;
    // start by holding the first word, then deleting
    function tick() {
      var word = words[wi];
      if (deleting) {
        ci--;
        el.textContent = word.substring(0, ci);
        if (ci <= 0) { deleting = false; wi = (wi + 1) % words.length; }
        schedule(38);
      } else {
        ci++;
        el.textContent = words[wi].substring(0, ci);
        if (ci >= words[wi].length) { deleting = true; schedule(1700); }
        else schedule(70);
      }
    }
    function schedule(ms) { setTimeout(tick, ms); }
    setTimeout(tick, 1700);
  }

  /* ---- 3. Command palette ---------------------------------------------- */
  function initCommandPalette() {
    var items = [
      { label: "Home", kind: "page", url: "/" },
      { label: "News", kind: "page", url: "/news/" },
      { label: "Publications & Patents", kind: "page", url: "/publications/" },
      { label: "Talks", kind: "page", url: "/talks/" },
      { label: "Teaching", kind: "page", url: "/teaching/" },
      { label: "Demos", kind: "page", url: "/demos/" },
      { label: "CV", kind: "page", url: "/cv/" },
      { label: "Email", kind: "contact", url: "mailto:choudhary121karan@gmail.com" },
      { label: "Google Scholar", kind: "profile", url: "https://scholar.google.com/citations?user=_Nj-vxcAAAAJ" },
      { label: "GitHub", kind: "profile", url: "https://github.com/karan121bhukar" },
      { label: "LinkedIn", kind: "profile", url: "https://www.linkedin.com/in/karan-bhukar" }
    ];

    var fab = document.createElement("button");
    fab.className = "cmdk-fab";
    fab.type = "button";
    fab.innerHTML = 'Jump to <kbd>/</kbd>';
    fab.setAttribute("aria-label", "Open navigation palette");
    document.body.appendChild(fab);

    var overlay = document.createElement("div");
    overlay.className = "cmdk-overlay";
    overlay.innerHTML =
      '<div class="cmdk-panel" role="dialog" aria-modal="true" aria-label="Navigate">' +
      '<input class="cmdk-input" type="text" placeholder="Jump to\u2026  (type to filter)" aria-label="Filter destinations" autocomplete="off" spellcheck="false">' +
      '<ul class="cmdk-list" role="listbox"></ul>' +
      "</div>";
    document.body.appendChild(overlay);

    var input = overlay.querySelector(".cmdk-input");
    var list = overlay.querySelector(".cmdk-list");
    var active = 0, filtered = items.slice();

    function render() {
      list.innerHTML = "";
      filtered.forEach(function (it, i) {
        var li = document.createElement("li");
        li.className = "cmdk-item" + (i === active ? " is-active" : "");
        li.setAttribute("role", "option");
        li.innerHTML = '<span>' + it.label + '</span><span class="cmdk-kind">' + it.kind + "</span>";
        li.addEventListener("mouseenter", function () { active = i; paint(); });
        li.addEventListener("click", function () { go(it); });
        list.appendChild(li);
      });
    }
    function paint() {
      Array.prototype.forEach.call(list.children, function (li, i) {
        li.classList.toggle("is-active", i === active);
      });
      var el = list.children[active];
      if (el) el.scrollIntoView({ block: "nearest" });
    }
    function filter() {
      var q = input.value.trim().toLowerCase();
      filtered = items.filter(function (it) { return it.label.toLowerCase().indexOf(q) !== -1; });
      active = 0; render();
    }
    function go(it) {
      if (!it) return;
      if (/^(https?:|mailto:)/.test(it.url)) window.location.href = it.url;
      else window.location.href = it.url;
    }
    function open() {
      filtered = items.slice(); active = 0; input.value = "";
      render();
      overlay.classList.add("is-open");
      setTimeout(function () { input.focus(); }, 20);
    }
    function close() { overlay.classList.remove("is-open"); }
    function isOpen() { return overlay.classList.contains("is-open"); }

    fab.addEventListener("click", open);
    input.addEventListener("input", filter);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });

    document.addEventListener("keydown", function (e) {
      var typing = /^(input|textarea|select)$/i.test(document.activeElement.tagName) ||
        document.activeElement.isContentEditable;

      if (!isOpen()) {
        if (e.key === "/" && !typing) { e.preventDefault(); open(); }
        else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); open(); }
        return;
      }
      if (e.key === "Escape") { close(); }
      else if (e.key === "ArrowDown") { e.preventDefault(); active = Math.min(active + 1, filtered.length - 1); paint(); }
      else if (e.key === "ArrowUp") { e.preventDefault(); active = Math.max(active - 1, 0); paint(); }
      else if (e.key === "Enter") { e.preventDefault(); go(filtered[active]); }
    });

    render();
  }

  /* ---- 4. Autonomous pick-and-place robotic arm (2-link IK) ------------ */
  function initRobotArm() {
    var svg = document.querySelector(".home-robot .robot");
    if (!svg) return;
    var upper = svg.querySelector(".r-upper");
    var fore = svg.querySelector(".r-fore");
    var gtop = svg.querySelector(".r-grip-top");
    var gbot = svg.querySelector(".r-grip-bot");
    var object = svg.querySelector(".r-object");
    if (!upper || !fore) return;

    // Remove the SMIL fallback animation so JS takes full control.
    Array.prototype.forEach.call(svg.querySelectorAll("animateTransform"), function (n) {
      n.parentNode.removeChild(n);
    });

    var S = { x: 130, y: 208 }, L1 = 92, L2 = 76;
    var DEG = 180 / Math.PI;
    var A = { x: 216, y: 106 }, B = { x: 60, y: 124 };
    var cur = { t1: -6, t2: 18, g: 1 };

    function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }
    function lerp(a, b, f) { return a + (b - a) * f; }
    function easeInOut(e) { return e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2; }

    function applyIK(T, g) {
      var dx = T.x - S.x, dy = T.y - S.y;
      var d = clamp(Math.hypot(dx, dy), Math.abs(L1 - L2) + 8, L1 + L2 - 4);
      var phi = Math.atan2(dy, dx);
      var Tx = S.x + Math.cos(phi) * d, Ty = S.y + Math.sin(phi) * d;
      var cosA = clamp((L1 * L1 + d * d - L2 * L2) / (2 * L1 * d), -1, 1);
      var ang = Math.acos(cosA);
      var psi1 = phi - ang;
      var t1 = psi1 * DEG + 90;
      var Ex = S.x + L1 * Math.cos(psi1), Ey = S.y + L1 * Math.sin(psi1);
      var foreAng = Math.atan2(Ty - Ey, Tx - Ex) * DEG;
      var t2 = foreAng - t1;
      cur.t1 = lerp(cur.t1, t1, 0.25);
      cur.t2 = lerp(cur.t2, t2, 0.25);
      cur.g = lerp(cur.g, g, 0.2);
      upper.setAttribute("transform", "rotate(" + cur.t1.toFixed(2) + ")");
      fore.setAttribute("transform", "rotate(" + cur.t2.toFixed(2) + ")");
      if (gtop) gtop.setAttribute("transform", "rotate(" + (-18 * cur.g).toFixed(2) + ")");
      if (gbot) gbot.setAttribute("transform", "rotate(" + (18 * cur.g).toFixed(2) + ")");
    }
    function setObject(p) {
      if (!object) return;
      object.setAttribute("cx", p.x.toFixed(1));
      object.setAttribute("cy", p.y.toFixed(1));
    }

    if (reduceMotion) { applyIK(A, 0); setObject(A); return; }

    // State machine: grab at src -> carry (arc) to dst -> release -> swap.
    var src = A, dst = B, phase = "grab", tP = 0, last = performance.now();
    var GRAB = 520, CARRY = 1650, RELEASE = 520;

    function frame(now) {
      var dt = now - last; last = now; tP += dt;
      var T, g;
      if (phase === "grab") {
        T = src; g = 1 - clamp(tP / GRAB, 0, 1); setObject(src);
        if (tP >= GRAB) { phase = "carry"; tP = 0; }
      } else if (phase === "carry") {
        var e = easeInOut(clamp(tP / CARRY, 0, 1));
        T = { x: src.x + (dst.x - src.x) * e, y: src.y + (dst.y - src.y) * e - 38 * Math.sin(Math.PI * e) };
        g = 0; setObject(T);
        if (tP >= CARRY) { phase = "release"; tP = 0; }
      } else {
        T = dst; g = clamp(tP / RELEASE, 0, 1); setObject(dst);
        if (tP >= RELEASE) { var tmp = src; src = dst; dst = tmp; phase = "grab"; tP = 0; }
      }
      applyIK(T, g);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ---- 5. RL gridworld (404 page) -------------------------------------- */
  function initGridworld() {
    var host = document.getElementById("gridworld");
    if (!host) return;
    var N = 7, cells = [], grid, agent, goal, path, stepIdx, timer;
    host.style.setProperty("--gw-n", N);

    var frag = document.createDocumentFragment();
    for (var i = 0; i < N * N; i++) {
      var c = document.createElement("div");
      c.className = "gw-cell";
      frag.appendChild(c);
      cells.push(c);
    }
    host.appendChild(frag);

    function idx(x, y) { return y * N + x; }
    function neighbors(x, y) {
      return [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]].filter(function (p) {
        return p[0] >= 0 && p[0] < N && p[1] >= 0 && p[1] < N;
      });
    }
    function bfs(start, gl) {
      var q = [start], prev = {}, seen = {};
      seen[idx(start[0], start[1])] = 1;
      while (q.length) {
        var c = q.shift();
        if (c[0] === gl[0] && c[1] === gl[1]) break;
        neighbors(c[0], c[1]).forEach(function (n) {
          var id = idx(n[0], n[1]);
          if (!seen[id] && !grid[id]) { seen[id] = 1; prev[id] = c; q.push(n); }
        });
      }
      var gid = idx(gl[0], gl[1]);
      if (!(gid in prev) && !(gl[0] === start[0] && gl[1] === start[1])) return null;
      var p = [gl], cp = gl;
      while (!(cp[0] === start[0] && cp[1] === start[1])) {
        var pv = prev[idx(cp[0], cp[1])];
        if (!pv) return null;
        p.unshift(pv); cp = pv;
      }
      return p;
    }
    function setup() {
      grid = new Array(N * N);
      for (var k = 0; k < N * N; k++) grid[k] = Math.random() < 0.20 ? 1 : 0;
      agent = [0, 0]; goal = [N - 1, N - 1];
      grid[idx(0, 0)] = 0; grid[idx(N - 1, N - 1)] = 0;
      path = bfs(agent, goal);
      if (!path) return setup();
      stepIdx = 0; render();
    }
    function render() {
      for (var y = 0; y < N; y++) for (var x = 0; x < N; x++) {
        cells[idx(x, y)].className = "gw-cell" + (grid[idx(x, y)] ? " is-wall" : "");
      }
      for (var s = 0; s <= stepIdx && s < path.length; s++) {
        cells[idx(path[s][0], path[s][1])].classList.add("is-trail");
      }
      cells[idx(goal[0], goal[1])].classList.add("is-goal");
      var a = path[Math.min(stepIdx, path.length - 1)];
      cells[idx(a[0], a[1])].classList.add("is-agent");
    }
    function tick() {
      if (stepIdx < path.length - 1) { stepIdx++; render(); timer = setTimeout(tick, 300); }
      else { timer = setTimeout(function () { setup(); tick(); }, 1500); }
    }
    setup();
    if (!reduceMotion) timer = setTimeout(tick, 650);
  }
})();
