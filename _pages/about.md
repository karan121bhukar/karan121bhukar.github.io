---
permalink: /
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<div class="home-top">
  <div class="home-hero">
    <p class="home-hero__eyebrow">Incoming MSCS · NYU Courant · Fall 2026</p>
    <h1 class="home-hero__title"><span class="hero-l1">From ML at scale</span><span class="hero-rotline">to <span class="rotate" data-words="embodied AI|robot learning|reinforcement learning|test-time scaling">embodied AI</span>.</span></h1>
    <p class="home-hero__sub">Reinforcement learning, robot learning, and test-time scaling — building models that don't just predict, but act.</p>
  </div>

  <div class="home-robot" aria-hidden="true">
    <svg class="robot" viewBox="0 0 260 250" role="img" aria-label="Animated line drawing of a robotic arm performing a pick-and-place loop between two bins">
      <!-- reach envelope -->
      <path class="r-arc" d="M44 212 A122 122 0 0 1 234 98" />
      <!-- floor + base -->
      <line class="r-floor" x1="38" y1="226" x2="226" y2="226" />
      <path class="r-base" d="M104 226 L156 226 L148 208 L112 208 Z" />
      <!-- shoulder pivot -->
      <g transform="translate(130 208)">
        <g class="r-upper">
          <animateTransform attributeName="transform" type="rotate" dur="7s" repeatCount="indefinite"
            calcMode="spline" keyTimes="0;0.5;1" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" values="-12;18;-12" />
          <line x1="0" y1="0" x2="0" y2="-92" />
          <circle class="r-joint" cx="0" cy="0" r="7.5" />
          <!-- elbow pivot -->
          <g transform="translate(0 -92)">
            <g class="r-fore">
              <animateTransform attributeName="transform" type="rotate" dur="7s" repeatCount="indefinite" begin="-2.3s"
                calcMode="spline" keyTimes="0;0.5;1" keySplines="0.45 0 0.55 1;0.45 0 0.55 1" values="22;-30;22" />
              <line x1="0" y1="0" x2="76" y2="0" />
              <circle class="r-joint" cx="0" cy="0" r="6.5" />
              <!-- wrist + gripper -->
              <g transform="translate(76 0)">
                <g class="r-grip-top">
                  <animateTransform attributeName="transform" type="rotate" dur="7s" repeatCount="indefinite"
                    calcMode="spline" keyTimes="0;0.35;0.6;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" values="0;0;-18;0" />
                  <line x1="0" y1="0" x2="18" y2="-10" />
                </g>
                <g class="r-grip-bot">
                  <animateTransform attributeName="transform" type="rotate" dur="7s" repeatCount="indefinite"
                    calcMode="spline" keyTimes="0;0.35;0.6;1" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" values="0;0;18;0" />
                  <line x1="0" y1="0" x2="18" y2="10" />
                </g>
                <circle class="r-joint r-joint--end" cx="0" cy="0" r="5.5" />
              </g>
            </g>
          </g>
        </g>
      </g>
      <!-- bins (stations) + the object being moved -->
      <circle class="r-station" cx="216" cy="106" r="10" />
      <circle class="r-station" cx="60" cy="124" r="10" />
      <circle class="r-object" cx="216" cy="106" r="5.5" />
    </svg>
  </div>
</div>

I'm an incoming **MSCS student at [NYU Courant](https://cs.nyu.edu/)** (Fall 2026). I come from several years of building machine learning systems at scale, and I'm now focused on **embodied AI** — bringing modern ML/DL to agents that have to act in the physical world.

**What I'm working toward.** I want to study how the methods that made large-scale ML work — reinforcement learning, large pretrained models, and learning from messy real-world data — transfer to robots. I'm especially interested in:

- **Reinforcement learning** for robot control and manipulation
- **Test-time scaling** for embodied agents — spending inference-time compute and search to make robot policies more capable and reliable
- The intersection of **large pretrained / foundation models** (vision-language-action models, world models) and **embodied decision-making**

**Where I'm coming from.** Most recently I was an **Applied Scientist at [Amazon](https://www.amazon.science/)**, training transformer-based small language models for multilingual search query understanding in production. Before that, as a Research Engineer at [IBM Research](https://research.ibm.com/labs/india), I worked on **end-to-end deep reinforcement learning** for conversation disentanglement (AAAI 2023), domain-specialized language models for logs, and large-scale log analytics — work published at ICSE, AAAI, IEEE CLOUD, and ICPE, with several granted U.S. patents. I did my B.Tech in Computer Science at [IIT Hyderabad](https://www.iith.ac.in/) (2018–2022), including research on autonomous-driving benchmarks in [Lab 1055](https://lab1055.github.io/).

The common thread across everything I've done is turning research into something that actually runs. I want to do that for embodied systems next.

You can reach me at **[choudhary121karan@gmail.com](mailto:choudhary121karan@gmail.com)**, read my [CV](/cv/), or browse [publications and patents](/publications/).

News
======
<style>
  ul.news-list { list-style: none; padding-left: 0; margin: 0; }
  ul.news-list li {
    display: flex;
    gap: 0.75em;
    padding: 0.5em 0;
    border-bottom: 1px solid var(--global-border-color);
  }
  ul.news-list li:last-child { border-bottom: none; }
  .news-date {
    flex: 0 0 5em;
    font-weight: 600;
    color: var(--global-base-color);
    white-space: nowrap;
  }
  .news-body { flex: 1 1 auto; min-width: 0; }
  @media (max-width: 480px) {
    ul.news-list li { flex-direction: column; gap: 0.1em; }
    .news-date { flex-basis: auto; }
  }
</style>
<ul class="news-list">
  <li><span class="news-date">Fall 2026</span><span class="news-body">Starting the <strong>MSCS</strong> program at <strong>NYU Courant</strong>; moving toward embodied AI.</span></li>
  <li><span class="news-date">Nov 2025</span><span class="news-body">Paper on scalable LLM-based log analysis accepted at <strong>AAAI 2026</strong>.</span></li>
  <li><span class="news-date">Sep 2025</span><span class="news-body">Patent <strong>US12536061B1</strong> granted (explainability-driven alert suppression).</span></li>
  <li><span class="news-date">Apr 2025</span><span class="news-body">Patent <strong>US12277025B2</strong> granted (dynamic alert-noise reduction).</span></li>
  <li><span class="news-date">Oct 2024</span><span class="news-body">Joined <strong>Amazon</strong> as an Applied Scientist on multilingual search query understanding.</span></li>
</ul>

<p style="margin-top: 0.75em;"><a href="/news/">See all news →</a></p>
