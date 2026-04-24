---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
  .cv-pdf-actions { margin: 0.5em 0 1em 0; }
  .cv-pdf-frame {
    width: 100%;
    /* Pin to viewport so the PDF viewer's own scroll handles paging,
       preventing the outer page from competing for wheel events. */
    height: calc(100vh - 120px);
    min-height: 600px;
    border: 1px solid #ccc;
    /* Tell the browser this subtree is self-contained for layout/paint,
       which helps with scroll perf. */
    contain: strict;
  }
</style>

<p class="cv-pdf-actions">
  <a href="{{ base_path }}/files/karan-bhukar-cv.pdf" target="_blank" rel="noopener">Open CV in a new tab</a> ·
  <a href="{{ base_path }}/files/karan-bhukar-cv.pdf" download>Download PDF</a>
</p>

<iframe
  class="cv-pdf-frame"
  src="{{ base_path }}/files/karan-bhukar-cv.pdf#view=FitH&toolbar=1"
  title="Karan Bhukar — CV"
  loading="lazy">
  <p>Your browser does not support embedded PDFs. <a href="{{ base_path }}/files/karan-bhukar-cv.pdf">Download the CV</a>.</p>
</iframe>
