(function () {
  const roleProfiles = {
    "public-health-leadership": {
      title: "Public health leadership pathway",
      score: "High strategic fit",
      summary: "Best fit for surveillance quality, program improvement, data governance, evidence translation, and cross-functional leadership.",
      steps: [
        "Define the public health decision, audience, and operational constraint.",
        "Map available data sources, quality risks, and reporting deadlines.",
        "Create a concise action brief with recommended next steps and stakeholders.",
      ],
      links: [
        ["Public Health Leadership & Practice", "/public-health-focus/"],
        ["Translation to Practice", "/public-health-focus/translation-to-practice/"],
        ["Experience", "/about/experience/"],
      ],
    },
    "faculty-search": {
      title: "Faculty and academic pathway",
      score: "Strong teaching and academic fit",
      summary: "Best fit for applied public health instruction, curriculum support, cancer surveillance teaching, and learner-centered assessment.",
      steps: [
        "Clarify the teaching audience, course level, and competency expectations.",
        "Review teaching philosophy, public health coursework, and applied artifacts.",
        "Frame the opportunity around workforce preparation, equity-aware communication, and assessment.",
      ],
      links: [
        ["Teaching Philosophy", "/academic-portfolio/teaching-philosophy/"],
        ["Coursework & Applied Artifacts", "/academic-portfolio/coursework/"],
        ["Academic Portfolio", "/academic-portfolio/"],
      ],
    },
    "research-collaboration": {
      title: "Research collaboration pathway",
      score: "High translational research fit",
      summary: "Best fit for lymphoma research, cancer genomics, clinical data coordination, multi-omics, and reproducible analytic workflows.",
      steps: [
        "Identify the research question, cohort/data source, and expected product.",
        "Separate exploratory, analytic, documentation, and dissemination needs.",
        "Review publications, presentations, and data coordination experience.",
      ],
      links: [
        ["Publications & Presentations", "/academic-portfolio/presentations-papers/"],
        ["Research Interests", "/public-health-focus/research-interests/"],
        ["Biography", "/about/biography/"],
      ],
    },
    "industry-partnership": {
      title: "Organization and analytics partnership pathway",
      score: "Strong applied analytics fit",
      summary: "Best fit for data quality, clinical analytics translation, innovation planning, reporting workflows, and public health-facing strategy.",
      steps: [
        "Define the workflow pain point, data maturity level, and users affected.",
        "Identify whether the need is analytics, governance, training, or translation.",
        "Scope a pilot that produces a concrete decision aid or workflow improvement.",
      ],
      links: [
        ["Experience", "/about/experience/"],
        ["Practice Interests", "/public-health-focus/practice-interests/"],
        ["Contact", "/contact/"],
      ],
    },
    "student-learner": {
      title: "Study and mentoring pathway",
      score: "Strong learning support fit",
      summary: "Best fit for learners interested in public health, epidemiology, surveillance, teaching artifacts, and career translation.",
      steps: [
        "Start with the topic area and the skill you want to build.",
        "Review the teaching artifacts and public health focus pages.",
        "Use the prompt templates to turn a topic into learning objectives or a study plan.",
      ],
      links: [
        ["CPH 705 Teaching Project", "/academic-portfolio/coursework/cph-705/cancer-surveillance-modular-analysis/"],
        ["MPH Competencies", "/public-health-focus/mph-competencies/"],
        ["Certifications & Microcredentials", "/academic-portfolio/certifications/"],
      ],
    },
  };

  const topicLabels = {
    "cancer-surveillance": "Cancer surveillance and registry quality",
    epidemiology: "Epidemiology and population health",
    bioinformatics: "Bioinformatics and translational analytics",
    teaching: "Teaching, curriculum, and workforce training",
    "grants-projects": "Grant and project development",
    "data-systems": "Data systems, governance, and reporting",
  };

  const stageLabels = {
    1: "Idea",
    2: "Scoping",
    3: "Active",
    4: "Scale",
  };

  const capabilityLabels = {
    strategy: "strategy",
    analysis: "analysis",
    training: "training",
    documentation: "documentation",
    translation: "translation",
    "innovation-planning": "innovation planning",
  };

  const evidenceItems = [
    {
      title: "Experience",
      url: "/about/experience/",
      description: "Current role, data coordination, bioinformatics background, leadership evidence, and applied skills.",
      tags: ["leadership", "practice", "research"],
    },
    {
      title: "Public Health Leadership & Practice",
      url: "/public-health-focus/",
      description: "Cancer surveillance, epidemiology-informed practice, data systems, and translation priorities.",
      tags: ["leadership", "practice"],
    },
    {
      title: "Teaching Philosophy",
      url: "/academic-portfolio/teaching-philosophy/",
      description: "Applied, inclusive, assessment-driven teaching approach for public health and data-intensive topics.",
      tags: ["teaching"],
    },
    {
      title: "Publications & Presentations",
      url: "/academic-portfolio/presentations-papers/",
      description: "Scholarly evidence across lymphoma, genomics, computational biology, and translational research.",
      tags: ["research"],
    },
    {
      title: "Cancer Surveillance Teaching Project",
      url: "/academic-portfolio/coursework/cph-705/cancer-surveillance-modular-analysis/",
      description: "Instructional materials and teaching artifacts for cancer surveillance fundamentals.",
      tags: ["teaching", "practice"],
    },
    {
      title: "Translation to Practice",
      url: "/public-health-focus/translation-to-practice/",
      description: "How evidence becomes decisions, workflows, communication, and practical public health action.",
      tags: ["leadership", "practice"],
    },
    {
      title: "Research Interests",
      url: "/public-health-focus/research-interests/",
      description: "Research direction connecting cancer surveillance, epidemiology, data quality, and translational analytics.",
      tags: ["research", "practice"],
    },
    {
      title: "Service",
      url: "/academic-portfolio/service/",
      description: "Academic and professional service orientation tied to quality, mentoring, and team contribution.",
      tags: ["leadership", "teaching"],
    },
  ];

  const promptTemplates = {
    briefing:
      "Act as a public health strategy reviewer. Using only de-identified information, create a concise leadership brief with: context, audience, decision needed, evidence available, risks/limitations, recommended next steps, and questions to resolve.",
    course:
      "Act as a public health instructional designer. For this topic and learner group, draft measurable learning objectives, one applied activity, one assessment idea, a rubric outline, and equity/accessibility considerations.",
    triage:
      "Act as a collaboration scoping partner. Convert this opportunity into: problem statement, stakeholders, likely deliverables, data or evidence needed, risks, timeline assumptions, and first five questions for a kickoff meeting.",
  };

  function relativeUrl(path) {
    return path;
  }

  function selectedCapabilities(root) {
    return Array.from(root.querySelectorAll("[data-portal-capability]:checked")).map((input) => input.value);
  }

  function buildBrief(root) {
    const role = root.querySelector("[data-portal-role]").value;
    const topic = root.querySelector("[data-portal-topic]").value;
    const stage = root.querySelector("[data-portal-stage]").value;
    const context = root.querySelector("[data-portal-context]").value.trim();
    const capabilities = selectedCapabilities(root);
    const profile = roleProfiles[role];

    return [
      "Collaboration brief",
      "",
      `Audience/pathway: ${profile.title}`,
      `Topic: ${topicLabels[topic]}`,
      `Stage: ${stageLabels[stage]}`,
      `Capabilities requested: ${capabilities.map((item) => capabilityLabels[item]).join(", ") || "not specified"}`,
      "",
      "Strategic fit:",
      profile.summary,
      "",
      "Suggested next steps:",
      ...profile.steps.map((step, index) => `${index + 1}. ${step}`),
      "",
      "Context supplied by visitor:",
      context || "No additional context supplied.",
      "",
      "Safety note: Please do not include protected health information, identifiable patient details, or confidential organizational material in email.",
    ].join("\n");
  }

  function updatePortal(root) {
    const role = root.querySelector("[data-portal-role]").value;
    const profile = roleProfiles[role];
    const brief = buildBrief(root);

    root.querySelector("[data-portal-output-title]").textContent = profile.title;
    root.querySelector("[data-portal-score]").textContent = profile.score;

    const steps = root.querySelector("[data-portal-steps]");
    steps.innerHTML = "";
    profile.steps.forEach((step) => {
      const li = document.createElement("li");
      li.textContent = step;
      steps.appendChild(li);
    });

    const links = root.querySelector("[data-portal-links]");
    links.innerHTML = "";
    profile.links.forEach(([label, url]) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = relativeUrl(url);
      a.textContent = label;
      li.appendChild(a);
      links.appendChild(li);
    });

    root.querySelector("[data-portal-brief]").textContent = brief;

    const email = root.querySelector("[data-portal-email]");
    const subject = encodeURIComponent(`Website collaboration inquiry - ${profile.title}`);
    const body = encodeURIComponent(`Hello Dr. Shah,\n\n${brief}\n\nThank you,`);
    email.href = `mailto:abraufshah@gmail.com?subject=${subject}&body=${body}`;
  }

  function copyText(text, button) {
    const done = () => {
      const original = button.textContent;
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = original;
      }, 1600);
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
      return;
    }

    fallbackCopy(text, done);
  }

  function fallbackCopy(text, done) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    done();
  }

  function setupPortal() {
    const root = document.querySelector("[data-portal-app]");
    if (!root) return;

    root.addEventListener("input", () => updatePortal(root));
    root.addEventListener("change", () => updatePortal(root));
    root.querySelector("[data-portal-copy]").addEventListener("click", (event) => {
      copyText(buildBrief(root), event.currentTarget);
    });

    updatePortal(root);
  }

  function renderEvidence(filter = "all", query = "") {
    const container = document.querySelector("[data-evidence-results]");
    if (!container) return;

    const normalizedQuery = query.trim().toLowerCase();
    const results = evidenceItems.filter((item) => {
      const inFilter = filter === "all" || item.tags.includes(filter);
      const haystack = `${item.title} ${item.description} ${item.tags.join(" ")}`.toLowerCase();
      return inFilter && (!normalizedQuery || haystack.includes(normalizedQuery));
    });

    container.innerHTML = "";

    if (!results.length) {
      const empty = document.createElement("p");
      empty.textContent = "No matching evidence found. Try another keyword or filter.";
      container.appendChild(empty);
      return;
    }

    results.forEach((item) => {
      const article = document.createElement("article");
      article.className = "portal-evidence-card";

      const title = document.createElement("h3");
      const link = document.createElement("a");
      link.href = relativeUrl(item.url);
      link.textContent = item.title;
      title.appendChild(link);

      const description = document.createElement("p");
      description.textContent = item.description;

      const tags = document.createElement("div");
      tags.className = "portal-evidence-tags";
      item.tags.forEach((tag) => {
        const pill = document.createElement("span");
        pill.textContent = tag;
        tags.appendChild(pill);
      });

      article.append(title, description, tags);
      container.appendChild(article);
    });
  }

  function setupEvidence() {
    const root = document.querySelector("[data-evidence-app]");
    if (!root) return;

    let filter = "all";
    const search = root.querySelector("[data-evidence-search]");

    root.querySelectorAll("[data-evidence-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        filter = button.dataset.evidenceFilter;
        root.querySelectorAll("[data-evidence-filter]").forEach((item) => item.classList.remove("is-active"));
        button.classList.add("is-active");
        renderEvidence(filter, search.value);
      });
    });

    search.addEventListener("input", () => renderEvidence(filter, search.value));
    renderEvidence();
  }

  function setupPrompts() {
    document.querySelectorAll("[data-prompt]").forEach((button) => {
      button.addEventListener("click", () => {
        const prompt = promptTemplates[button.dataset.prompt];
        if (prompt) copyText(prompt, button);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupPortal();
    setupEvidence();
    setupPrompts();
  });
})();
