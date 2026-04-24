---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

You can also [download the full CV as a PDF](/files/karan-bhukar-cv.pdf).

Education
======
* **B.Tech in Computer Science and Engineering**, Indian Institute of Technology Hyderabad, 2018 – 2022
  * CGPA: **9.04 / 10.00**
  * Key coursework: Reinforcement Learning, Machine Learning, Deep Learning for Vision, Optimization, Fraud Analytics, AI & Humanity, Database Systems, Networks, Probability in Computing, Combinatorics, Complexity Theory, Communication Complexity, Data Structures & Algorithms, Operating Systems, Compilers, Programming Languages Principles, Artificial Intelligence, Random Processes, Linear Algebra, Probability, Transforms, Computer Architecture, Discrete Math, Digital Signal Processing.

Work experience
======
* **Oct 2024 – Present: Applied Scientist**
  * Amazon, Bengaluru, India
  * Multilingual Search Query Understanding at Scale
    * Unified spell-correction and music-entity slotting in a single encoder–decoder model, replacing edit-distance / n-gram and BiLSTM-CRF pipelines.
    * Shipped one multilingual model for US / CA / MX / BR, robust to English–Spanish–Portuguese code-switching.
    * Built an LLM + catalog-metadata + engagement-driven data generation pipeline; trained on ~5B sequences spanning 100M+ unique entities.
    * Scaled 300M–1B-parameter variants on H100 clusters (hybrid FSDP + DDP, model parallelism).
    * Delivered ~20% F1 lift over a BERT + BiLSTM-CRF baseline on query slotting.

* **Jun 2022 – Oct 2024: Research Engineer**
  * IBM Research, Gurgaon, India
  * Mentors: Harshit Kumar, Dinesh Raghu
  * *BERTOps — pretrain-to-production log analytics* (ICPE 2025, IEEE CLOUD 2023, U.S. patent)
    * Built a domain-specialized masked-LM for semi-structured IT logs that captures template regularities general LLMs miss.
    * Released labeled datasets and a unified benchmark covering Log Format Detection, Golden Signal Classification, and Fault Category Prediction, including the first public labels for GSC / FCP.
    * Productized the models into an interactive log-analytics tool; optimized a CPU-only variant for inference over millions of log lines via templatization.
    * At production scale, processed 1.04B log lines (877 GB) across 1,376 support cases, saving ~8K engineer-minutes; rolled out to 100+ internal software-support teams.
  * *Dynamic alert suppression on observability platforms* (ICSE 2024, COMSNETS 2024, U.S. patent)
    * Designed **Dynamic-X-Y**, an unsupervised alert-suppression policy learner that uses moving-average envelopes over historical alert streams and applies per-signal dynamic thresholds at runtime.
    * Improved accuracy over strong baselines by **+7.39%** on log-anomaly datasets and **+35.7%** on metric-anomaly datasets.
    * Built a train-to-deploy pipeline that learns per-signal X-in-Y suppression thresholds from historical alerts and pushes them as runtime policies via AI Model Management.
    * Cut non-actionable incident notifications by ~90% in internal deployments while preserving critical alerting.

* **Jul 2021 – Sep 2021: Research Intern (IBM Blue Scholar)**
  * IBM Research, Gurgaon, India
  * Mentors: Harshit Kumar, Ajay Gupta, Dinesh Raghu
  * *Reinforcement learning for conversation disentanglement* (AAAI 2023, patents in US, CN, JP)
    * Framed conversation disentanglement as end-to-end RL optimizing a global conversation-level objective over local link predictions.
    * Designed a global clustering-based reward and a policy that sequentially assigns messages to threads.
    * Translated the research into applied systems, resulting in two patent applications (one pursued internationally and one US-only).

* **Jul 2021 – Sep 2021: Machine Learning Intern**
  * ServiceNow, Gurgaon, India
  * *Multilingual lexical normalization for noisy IT incidents*
    * Built a probabilistic spell-correction + word-segmentation module (noisy-channel + segmentation scoring) adapted to IT-incident jargon.
    * Added multilingual normalization (EN / FR / ES / DE) via language-specific frequency models and dictionaries.
    * Integrated the normalizer into production; improved downstream classification accuracy by **+5%** absolute.

* **Jan 2020 – Dec 2021: Undergraduate Researcher**
  * Lab 1055 — Machine Learning and Vision Lab, IIT Hyderabad
  * Mentors: Prof. Vineeth N. Balasubramanian, Prof. C. V. Jawahar
  * *AutoNUE'21 — domain adaptation & semantic segmentation benchmarks for IDD* (CVPR Workshop)
    * Defined and baselined five benchmarks: supervised, semi-supervised, weakly-supervised, unsupervised domain adaptation, and semantic segmentation for the workshop challenge.
    * Set up a cross-domain training setup (Mapillary, Cityscapes, BDD, GTA) evaluated on IDD Level-3 (26 classes) to measure adaptation to Indian roads.
    * Released public baseline code and data-prep pipelines for reproducible training, evaluation, and leaderboard submission.

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Awards
======
* **Outstanding Technical Achievement Award (OTAA)**, IBM Research, 2024. IBM Research's highest distinction for technical excellence; recognizing innovative work that enabled multi-million-dollar business growth.
* **Inventor Award**, IBM Research, 2024. For end-to-end ownership of a project that matured into a major internal product.
* **Patent Award**, IBM Research, 2023. For successfully authoring and filing a first U.S. patent with the USPTO.
* **IBM Research Blue Scholar Internship**, 2021. Selected among 50 from 10,000+ applicants.
* **JEE Advanced All-India Rank 651 / 150,000**, 2018.
* **JEE Main All-India Rank 358 / 1,500,000**, 2018.
* **KVPY Fellowship**, Department of Science & Technology, Government of India, 2018 (top 2,000 / 100,000+).
* **NTSE Scholarship, Rank 5 in Rajasthan**, NCERT, 2016 (of 100,000+ applicants).

Service and leadership
======
* **Reviewer**, AAAI 2024 — research track.
* **Internship Mentor**, 2024 — mentored Shivangi Shreya, CS Master's student at IIT Madras.
* **Volunteer**, COLING 2020 & NeurIPS 2021 — assisted with online conference organization during COVID.
