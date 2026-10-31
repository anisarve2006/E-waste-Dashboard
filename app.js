/**
 * EWEM Dashboard — Application Logic
 * Interactive Circuit Visualizer, Reactive Filtering, Modal Manager, and Timeline Engine
 */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  // Helpers
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => Array.from(context.querySelectorAll(selector));
  const pad = (num) => String(num).padStart(2, "0");

  // State
  const state = {
    type: "all",
    theme: "all",
    query: "",
    currentModalId: 0
  };

  // Map theme assignments for quick lookup
  const themeMap = new Map();
  THEMES.forEach((theme) => {
    theme.assignments.forEach((id) => themeMap.set(id, theme.id));
  });

  /* ==========================================================================
     1. Theme Toggle & Scroll Progress
     ========================================================================== */
  const html = document.documentElement;
  const themeToggle = $("#themeToggle");
  const scrollProgress = $("#scrollProgress");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = html.dataset.theme;
      const next = current === "dark" ? "light" : "dark";
      html.dataset.theme = next;
      localStorage.setItem("ewem-theme", next);
    });
  }

  // Scroll Progress & Sticky Header Scrolled State Handler
  const siteHead = $("#siteHead");
  window.addEventListener("scroll", () => {
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    if (scrollProgress) {
      scrollProgress.style.width = `${scrolled}%`;
    }
    if (siteHead) {
      if (window.scrollY > 20) {
        siteHead.classList.add("is-scrolled");
      } else {
        siteHead.classList.remove("is-scrolled");
      }
    }
  }, { passive: true });

  // Mobile menu toggle
  const mobileNavToggle = $("#mobileNavToggle");
  const siteNav = $("#siteNav");
  if (mobileNavToggle && siteNav) {
    mobileNavToggle.addEventListener("click", () => {
      siteNav.classList.toggle("is-mobile-open");
    });
    $$(".site-nav a").forEach((a) => {
      a.addEventListener("click", () => siteNav.classList.remove("is-mobile-open"));
    });
  }

  /* ==========================================================================
     2. 3D Sustainability Globe Hotspots & Interactive Kinetic Physics
     ========================================================================== */
  function initGlobeHotspots() {
    $$(".globe-spot").forEach((spot) => {
      const id = Number(spot.dataset.id);
      spot.addEventListener("click", () => {
        openModal(id);
      });
      spot.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(id);
        }
      });
    });

    // Interactive 3D Cursor Physics (Rotate, Move & Zoom on Hover)
    const visualWrap = $(".hero__visual-wrap");
    const globeStage = $(".hero__globe-stage");

    if (visualWrap && globeStage && window.matchMedia("(pointer: fine)").matches) {
      let isInteracting = false;
      let targetRotX = 0;
      let targetRotY = 0;
      let targetTransX = 0;
      let targetTransY = 0;
      let currentRotX = 0;
      let currentRotY = 0;
      let currentTransX = 0;
      let currentTransY = 0;
      let rafId = null;

      function updateMotion() {
        if (!isInteracting) return;
        currentRotX += (targetRotX - currentRotX) * 0.1;
        currentRotY += (targetRotY - currentRotY) * 0.1;
        currentTransX += (targetTransX - currentTransX) * 0.1;
        currentTransY += (targetTransY - currentTransY) * 0.1;

        globeStage.style.transform = `perspective(1000px) translate3d(${currentTransX.toFixed(2)}px, ${currentTransY.toFixed(2)}px, 0) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg) scale(1.03)`;
        rafId = requestAnimationFrame(updateMotion);
      }

      visualWrap.addEventListener("mouseenter", () => {
        isInteracting = true;
        globeStage.classList.add("is-interactive");
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(updateMotion);
      });

      visualWrap.addEventListener("mousemove", (e) => {
        const rect = visualWrap.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;

        targetRotY = normX * 14;
        targetRotX = -normY * 14;
        targetTransX = normX * 18;
        targetTransY = normY * 18;
      });

      visualWrap.addEventListener("mouseleave", () => {
        isInteracting = false;
        cancelAnimationFrame(rafId);
        globeStage.style.transform = "";
        globeStage.classList.remove("is-interactive");
      });
    }
  }

  /* ==========================================================================
     3. Project Archive Rendering & Reactive Filtering
     ========================================================================== */
  const archiveGrid = $("#archiveGrid");
  const filterCount = $("#filterCount");
  const emptyState = $("#emptyState");
  const searchInput = $("#archiveSearch");
  const filterReset = $("#filterReset");
  const emptyReset = $("#emptyReset");

  function matchesFilter(item) {
    // Assessment filter
    if (state.type !== "all" && item.type.toLowerCase() !== state.type) {
      return false;
    }

    // Theme filter
    if (state.theme !== "all") {
      const itemTheme = themeMap.get(item.id);
      if (itemTheme !== state.theme) {
        return false;
      }
    }

    // Query search
    if (state.query.trim()) {
      const q = state.query.toLowerCase().trim();
      const searchable = [
        item.title,
        item.kicker,
        item.description,
        ...(item.tags || []),
        ...(item.group || []),
        ...item.files.map((f) => `${f.label} ${f.kind} ${f.meta || ""}`)
      ].join(" ").toLowerCase();

      if (!searchable.includes(q)) {
        return false;
      }
    }

    return true;
  }

  function renderArchive() {
    if (!archiveGrid) return;

    const filtered = ASSIGNMENTS.filter(matchesFilter);

    if (filterCount) {
      filterCount.textContent = filtered.length;
    }

    if (filtered.length === 0) {
      archiveGrid.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
      return;
    }

    if (emptyState) emptyState.style.display = "none";

    archiveGrid.innerHTML = filtered.map((item) => {
      const hasLiveLink = item.files.some((f) => f.kind === "LINK");
      const fileCount = item.files.filter((f) => f.kind !== "LINK").length;
      const isIsa = item.type === "ISA";

      return `
        <article class="card reveal-init" data-id="${item.id}" role="button" tabindex="0" aria-label="View ${item.title}">
          <div class="card__cover-wrap">
            <img class="card__cover-img" src="${item.cover.src}" alt="${item.cover.alt}" loading="lazy" 
                 onerror="this.onerror=null; this.src='https://preet8808.github.io/preet-ewem-dashboard/${item.cover.src}';" />
            <div class="card__badges">
              <span class="badge-id">${pad(item.id)}</span>
              <span class="badge-type ${isIsa ? 'badge-type--isa' : 'badge-type--ese'}">${item.type}</span>
            </div>
            <span class="card__open-pill">
              <span>View Record</span>
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 10h12M11 5l5 5-5 5"/>
              </svg>
            </span>
          </div>

          <div class="card__body">
            <p class="card__kicker">${item.kicker}</p>
            <h3 class="card__title">${item.title}</h3>
            <p class="card__desc">${item.description}</p>
            
            <div class="card__tags">
              ${item.tags.slice(0, 4).map((tag) => `<span class="tag-sticker">${tag}</span>`).join("")}
            </div>

            <div class="card__foot">
              <span class="card__date">
                <i class="status-dot" aria-hidden="true"></i>
                <span>${item.dateLabel || 'In-Class'}</span>
              </span>
              <span>
                ${fileCount > 0 ? `${fileCount} file${fileCount > 1 ? 's' : ''}` : ''}
                ${hasLiveLink ? (fileCount > 0 ? ' · ' : '') + '⚡ Live App' : ''}
              </span>
            </div>
          </div>
        </article>
      `;
    }).join("");

    // Attach click listeners to cards
    $$(".card", archiveGrid).forEach((card) => {
      const id = Number(card.dataset.id);
      card.addEventListener("click", () => openModal(id));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(id);
        }
      });
    });

    // Re-bind scroll reveal for newly rendered cards
    if (typeof initScrollReveal === "function") {
      initScrollReveal();
    }
  }

  // Filter Event Listeners
  $$("[data-filter-type]").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$("[data-filter-type]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      state.type = btn.dataset.filterType;
      renderArchive();
    });
  });

  $$("[data-filter-theme]").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$("[data-filter-theme]").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      state.theme = btn.dataset.filterTheme;
      renderArchive();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.query = e.target.value;
      renderArchive();
    });
  }

  function resetAllFilters() {
    state.type = "all";
    state.theme = "all";
    state.query = "";
    if (searchInput) searchInput.value = "";
    $$("[data-filter-type]").forEach((b) => b.classList.toggle("is-active", b.dataset.filterType === "all"));
    $$("[data-filter-theme]").forEach((b) => b.classList.toggle("is-active", b.dataset.filterTheme === "all"));
    renderArchive();
  }

  if (filterReset) filterReset.addEventListener("click", resetAllFilters);
  if (emptyReset) emptyReset.addEventListener("click", resetAllFilters);

  /* ==========================================================================
     4. Sequence & Timeline Rendering
     ========================================================================== */
  const timelineTrack = $("#timelineTrack");

  function renderTimeline() {
    if (!timelineTrack) return;

    // Group assignments by month
    const months = [
      { key: "2026-07", label: "Jul 2026", title: "State Baseline & Generation Ledgers" },
      { key: "2026-08", label: "Aug 2026", title: "Capacity Gaps & Plasma Smelting Reactor" },
      { key: "2026-09", label: "Sep 2026", title: "EPR Compliance, Green Buildings & SWaCH" },
      { key: "2026-10", label: "Oct 2026", title: "AI Recommender Architecture & IEEE Paper" },
      { key: null, label: "Core", title: "In-Class Foundational Blueprints" }
    ];

    timelineTrack.innerHTML = months.map((m) => {
      const items = ASSIGNMENTS.filter((a) => a.date === m.key);
      if (items.length === 0) return "";

      return `
        <div class="timeline-month-block reveal-init">
          <div class="timeline-month-header">
            <div class="timeline-month-badge">${m.label.replace(" 2026", "")}</div>
            <h3 class="timeline-month-title">${m.title}</h3>
          </div>

          <div class="timeline-items-list">
            ${items.map((item) => `
              <div class="timeline-item-card" data-id="${item.id}" role="button" tabindex="0">
                <div class="timeline-item-info">
                  <span class="timeline-item-kicker">${item.type} ${pad(item.id)} · ${item.kicker}</span>
                  <h4 class="timeline-item-title">${item.title}</h4>
                  <div class="timeline-item-tags">
                    ${item.tags.slice(0, 3).map((t) => `<span>#${t}</span>`).join(" · ")}
                  </div>
                </div>
                <div class="btn btn--ghost" style="padding: 0.5rem 0.9rem; font-size: 0.82rem;">
                  Open Record →
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");

    $$(".timeline-item-card", timelineTrack).forEach((card) => {
      const id = Number(card.dataset.id);
      card.addEventListener("click", () => openModal(id));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(id);
        }
      });
    });
  }

  /* ==========================================================================
     5. Live Projects Grid Rendering
     ========================================================================== */
  const liveProjectsGrid = $("#liveProjectsGrid");

  function renderLiveProjects() {
    if (!liveProjectsGrid) return;

    liveProjectsGrid.innerHTML = PROJECTS.map((p) => `
      <article class="live-card live-card--${p.accent} reveal-init">
        <div>
          <div class="live-card__head">
            <span class="live-card__cat">${p.category}</span>
            <span class="live-card__badge">${p.badge}</span>
          </div>

          <h3 class="live-card__title" style="margin-top: 0.85rem;">${p.title}</h3>
          <p class="live-card__subtitle">${p.subtitle}</p>
          <p class="live-card__desc" style="margin-top: 0.75rem;">${p.description}</p>
        </div>

        <div>
          <div class="live-card__stats" style="margin-bottom: 1.25rem;">
            <span>⚡ ${p.stats}</span>
          </div>
          <a class="live-card__btn" href="${p.url}" target="_blank" rel="noopener noreferrer">
            <span>${p.cta}</span>
            <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M5 15 15 5M7 5h8v8"/>
            </svg>
          </a>
        </div>
      </article>
    `).join("");
  }

  /* ==========================================================================
     6. Themes Section Rendering
     ========================================================================== */
  const themesGrid = $("#themesGrid");

  function renderThemes() {
    if (!themesGrid) return;

    themesGrid.innerHTML = THEMES.map((theme) => `
      <div class="theme-card theme-card--${theme.colorToken} reveal-init">
        <span class="theme-card__num">${theme.number}</span>
        <div>
          <span class="theme-card__tagline">${theme.tagline}</span>
          <h3 class="theme-card__title">${theme.title}</h3>
        </div>
        <p class="theme-card__desc">${theme.description}</p>
        
        <div style="background: var(--canvas-alt); padding: 0.75rem; border-radius: var(--radius-sm); font-size: 0.82rem; color: var(--ink-secondary);">
          <strong>Key Takeaway:</strong> ${theme.keyInsight}
        </div>

        <div class="theme-card__pills">
          ${theme.assignments.map((id) => {
            const item = ASSIGNMENTS.find((a) => a.id === id);
            if (!item) return "";
            return `
              <button class="theme-pill-chip" type="button" data-modal-id="${item.id}">
                ${item.type} ${pad(item.id)}: ${item.title.split(" ")[0]}
              </button>
            `;
          }).join("")}
        </div>
      </div>
    `).join("");

    $$(".theme-pill-chip", themesGrid).forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.modalId);
        openModal(id);
      });
    });
  }

  /* ==========================================================================
     7. Resource & Evidence Library Table
     ========================================================================== */
  const resourcesTableBody = $("#resourcesTableBody");

  function renderResourceLibrary() {
    if (!resourcesTableBody) return;

    const allFiles = [];
    ASSIGNMENTS.forEach((item) => {
      item.files.forEach((f) => {
        allFiles.push({
          ...f,
          assignmentId: item.id,
          assignmentTitle: item.title,
          assignmentType: item.type
        });
      });
    });

    resourcesTableBody.innerHTML = allFiles.map((file) => {
      const isLink = file.kind === "LINK";
      const kindClass = `file-kind--${file.kind.toLowerCase()}`;
      const isBrowserViewable = ["PDF", "JPEG", "MP4"].includes(file.kind);

      const actionHtml = isLink ? `
        <a class="btn-action btn-action--link" href="${file.url}" target="_blank" rel="noopener noreferrer">
          <span>Launch Tool</span>
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 15 15 5M7 5h8v8"/></svg>
        </a>
      ` : `
        <div class="table-actions">
          <a class="btn-action btn-action--primary" href="${file.path}" target="_blank" rel="noopener noreferrer" title="Open or preview document">
            <span>${isBrowserViewable ? 'View ↗' : 'Open ↗'}</span>
          </a>
          <a class="btn-action btn-action--secondary" href="${file.path}" download title="Download ${file.label}">
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 3v10m0 0l-4-4m4 4l4-4M4 17h12"/></svg>
            <span>Download</span>
          </a>
        </div>
      `;

      return `
        <tr>
          <td>
            <strong>${file.label}</strong>
            ${file.note ? `<br><small style="color: var(--muted);">${file.note}</small>` : ''}
          </td>
          <td>
            <button class="link-button" type="button" onclick="document.dispatchEvent(new CustomEvent('open-assignment', { detail: ${file.assignmentId} }))" 
                    style="color: var(--violet); font-weight: 600; text-align: left; cursor: pointer;">
              ${file.assignmentType} ${pad(file.assignmentId)} · ${file.assignmentTitle}
            </button>
          </td>
          <td>
            <span class="file-kind-badge ${kindClass}">${file.kind}</span>
          </td>
          <td style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--muted);">
            ${file.meta || 'Live Cloud Asset'}
          </td>
          <td>
            ${actionHtml}
          </td>
        </tr>
      `;
    }).join("");
  }

  document.addEventListener("open-assignment", (e) => {
    openModal(e.detail);
  });

  /* ==========================================================================
     8. Detail Modal Manager
     ========================================================================== */
  const modal = $("#detailModal");
  const modalClose = $("#modalClose");
  const modalCover = $("#modalCover");
  const modalId = $("#modalId");
  const modalType = $("#modalType");
  const modalDate = $("#modalDate");
  const modalStatus = $("#modalStatus");
  const modalKicker = $("#modalKicker");
  const modalTitle = $("#modalTitle");
  const modalDesc = $("#modalDesc");
  const modalTags = $("#modalTags");
  const modalMetricsBox = $("#modalMetricsBox");
  const modalVideoWrap = $("#modalVideoWrap");
  const modalVideo = $("#modalVideo");
  const modalFilesList = $("#modalFilesList");
  const modalFilesCount = $("#modalFilesCount");
  const modalCounter = $("#modalCounter");
  const modalPrevBtn = $("#modalPrevBtn");
  const modalNextBtn = $("#modalNextBtn");

  function openModal(id) {
    const item = ASSIGNMENTS.find((a) => a.id === id);
    if (!item || !modal) return;

    state.currentModalId = id;

    // Cover image
    if (modalCover) {
      modalCover.src = item.cover.src;
      modalCover.alt = item.cover.alt;
      modalCover.onerror = () => {
        modalCover.src = `https://preet8808.github.io/preet-ewem-dashboard/${item.cover.src}`;
      };
    }

    // Header Meta
    if (modalId) modalId.textContent = pad(item.id);
    if (modalType) {
      modalType.textContent = item.type;
      modalType.className = `badge-type ${item.type === 'ISA' ? 'badge-type--isa' : 'badge-type--ese'}`;
    }
    if (modalDate) modalDate.textContent = item.dateLabel || "In-Class Core";
    if (modalStatus) modalStatus.textContent = item.status || "Submitted";

    if (modalKicker) modalKicker.textContent = item.kicker;
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalDesc) modalDesc.textContent = item.description;

    // Tags
    if (modalTags) {
      if (item.tags && item.tags.length > 0) {
        modalTags.style.display = "flex";
        modalTags.innerHTML = item.tags.map((t) => `<span class="tag-sticker">${t}</span>`).join("");
      } else {
        modalTags.style.display = "none";
      }
    }

    // Modal Counter
    if (modalCounter) {
      const idx = ASSIGNMENTS.findIndex((a) => a.id === id);
      modalCounter.textContent = `${pad(idx + 1)} / ${pad(ASSIGNMENTS.length)}`;
    }

    // Key metrics callout box
    if (modalMetricsBox) {
      if (item.keyMetrics && item.keyMetrics.length > 0) {
        modalMetricsBox.style.display = "grid";
        modalMetricsBox.innerHTML = item.keyMetrics.map((km) => `
          <div class="modal-metric-item">
            <span class="modal-metric-label">${km.label}</span>
            <span class="modal-metric-val">${km.value}</span>
          </div>
        `).join("");
      } else {
        modalMetricsBox.style.display = "none";
      }
    }

    // Video Player check (e.g. for E-Waste Week A07)
    const videoFile = item.files.find((f) => f.video);
    if (modalVideoWrap && modalVideo) {
      if (videoFile) {
        modalVideoWrap.style.display = "block";
        modalVideo.src = videoFile.path || videoFile.remoteUrl;
      } else {
        modalVideoWrap.style.display = "none";
        modalVideo.pause();
        modalVideo.removeAttribute("src");
      }
    }

    // Files list
    if (modalFilesList) {
      const filesCount = item.files ? item.files.length : 0;
      if (modalFilesCount) {
        modalFilesCount.textContent = `${filesCount} ${filesCount === 1 ? 'Artifact' : 'Artifacts'}`;
      }

      modalFilesList.innerHTML = item.files.map((f) => {
        const isLink = f.kind === "LINK";
        const isBrowserViewable = ["PDF", "JPEG", "MP4"].includes(f.kind);

        const actionsHtml = isLink ? `
          <a class="btn-action btn-action--link" href="${f.url}" target="_blank" rel="noopener noreferrer">
            <span>Launch Tool</span>
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 15 15 5M7 5h8v8"/></svg>
          </a>
        ` : `
          <div class="table-actions">
            <a class="btn-action btn-action--primary" href="${f.path}" target="_blank" rel="noopener noreferrer">
              <span>${isBrowserViewable ? 'View ↗' : 'Open ↗'}</span>
            </a>
            <a class="btn-action btn-action--secondary" href="${f.path}" download title="Download ${f.label}">
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 3v10m0 0l-4-4m4 4l4-4M4 17h12"/></svg>
              <span>Download</span>
            </a>
          </div>
        `;

        return `
          <div class="modal-file-row">
            <div class="modal-file-info">
              <span class="file-kind-badge file-kind--${f.kind.toLowerCase()}">${f.kind}</span>
              <div>
                <strong style="font-size: 0.94rem; display: block; color: var(--ink);">${f.label}</strong>
                <small style="color: var(--muted); font-family: var(--font-mono); font-size: 0.76rem;">
                  ${f.meta || f.note || 'Available Resource'}
                </small>
              </div>
            </div>

            <div class="modal-file-actions">
              ${actionsHtml}
            </div>
          </div>
        `;
      }).join("");
    }

    // Open Modal
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    if (modalVideo) {
      modalVideo.pause();
    }
  }

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }

  // Previous & Next navigation
  if (modalPrevBtn) {
    modalPrevBtn.addEventListener("click", () => {
      const prevId = (state.currentModalId - 1 + ASSIGNMENTS.length) % ASSIGNMENTS.length;
      openModal(prevId);
    });
  }

  if (modalNextBtn) {
    modalNextBtn.addEventListener("click", () => {
      const nextId = (state.currentModalId + 1) % ASSIGNMENTS.length;
      openModal(nextId);
    });
  }

  // Keyboard controls
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.classList.contains("is-open")) {
      closeModal();
    }
    if (modal && modal.classList.contains("is-open")) {
      if (e.key === "ArrowLeft") {
        const prevId = (state.currentModalId - 1 + ASSIGNMENTS.length) % ASSIGNMENTS.length;
        openModal(prevId);
      }
      if (e.key === "ArrowRight") {
        const nextId = (state.currentModalId + 1) % ASSIGNMENTS.length;
        openModal(nextId);
      }
    }
    // Press '/' to search
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
  });

  /* ==========================================================================
     9. Scroll Reveal, Spotlight Physics & Animated Metric Counters
     ========================================================================== */
  let revealObserver = null;

  function initScrollReveal() {
    // Attach reveal-init to section headers and ticker if not present
    $$(".section__header, .resource-table-wrap, .ticker").forEach((el) => {
      el.classList.add("reveal-init");
    });

    if (!("IntersectionObserver" in window)) {
      $$(".reveal-init").forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: "0px 0px -40px 0px"
      });
    }

    $$(".reveal-init:not(.is-revealed)").forEach((el) => {
      revealObserver.observe(el);
    });
  }

  // Interactive Cursor Spotlight Tracker for Cards
  function initSpotlightTracker() {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.addEventListener("pointermove", (e) => {
      const card = e.target.closest(".card, .live-card, .theme-card, .metric-card, .timeline-item-card");
      if (card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    }, { passive: true });
  }

  // Hero Metric Count-Up Animation on Page Load
  function initMetricCountUp() {
    const metrics = [
      { id: "metricSubmissions", target: 11 },
      { id: "metricTools", target: 4 },
      { id: "metricThemes", target: 3 }
    ];

    metrics.forEach(({ id, target }) => {
      const el = $(`#${id}`);
      if (!el) return;

      const duration = 1400;
      const startTime = performance.now();

      function animateCount(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * target);

        el.textContent = current < 10 ? `0${current}` : `${current}`;

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        } else {
          el.textContent = target < 10 ? `0${target}` : `${target}`;
        }
      }

      requestAnimationFrame(animateCount);
    });
  }

  /* ==========================================================================
     10. Initialize All Modules
     ========================================================================== */
  initGlobeHotspots();
  renderArchive();
  renderTimeline();
  renderLiveProjects();
  renderThemes();
  renderResourceLibrary();
  initScrollReveal();
  initSpotlightTracker();
  initMetricCountUp();
});

