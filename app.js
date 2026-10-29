// GST Complete Course Handbook - Main Application Logic (Mobile-First Hinglish)
(function () {
  // State
  let currentChapterIndex = 0;
  let currentFilter = "all";
  const chapters = COURSE_DATA.chapters || [];

  // DOM Elements
  const sidebarNav = document.getElementById("sidebarNav");
  const chapterArticle = document.getElementById("chapterArticle");
  const contentBreadcrumb = document.getElementById("contentBreadcrumb");
  const tocList = document.getElementById("tocList");
  const prevChapterBtn = document.getElementById("prevChapterBtn");
  const nextChapterBtn = document.getElementById("nextChapterBtn");
  const prevChapterTitle = document.getElementById("prevChapterTitle");
  const nextChapterTitle = document.getElementById("nextChapterTitle");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const appSidebar = document.getElementById("appSidebar");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const globalSearchInput = document.getElementById("globalSearchInput");
  const searchResultsDropdown = document.getElementById("searchResultsDropdown");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const imageLightbox = document.getElementById("imageLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxCaption = document.getElementById("lightboxCaption");
  const filterPills = document.querySelectorAll(".filter-pill");
  const mobileChapterSelect = document.getElementById("mobileChapterSelect");
  const mobileSearchBtn = document.getElementById("mobileSearchBtn");
  const mobileSearchOverlay = document.getElementById("mobileSearchOverlay");
  const mobileSearchInput = document.getElementById("mobileSearchInput");
  const closeMobileSearchBtn = document.getElementById("closeMobileSearchBtn");
  const mobileSearchResults = document.getElementById("mobileSearchResults");
  const sidebarCloseBtn = document.getElementById("sidebarCloseBtn");

  // 1. Theme Initialization
  const savedTheme = localStorage.getItem("gst_theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("theme-dark");
  }
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("theme-dark");
    const isDark = document.body.classList.contains("theme-dark");
    localStorage.setItem("gst_theme", isDark ? "dark" : "light");
  });

  // 2. Mobile Drawer
  function toggleDrawer(open) {
    if (open === undefined) open = !appSidebar.classList.contains("open");
    appSidebar.classList.toggle("open", open);
    drawerBackdrop.classList.toggle("active", open);
  }
  mobileMenuBtn.addEventListener("click", () => toggleDrawer());
  drawerBackdrop.addEventListener("click", () => toggleDrawer(false));
  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener("click", () => toggleDrawer(false));
  }

  // 3. Mobile Chapter Dropdown Initial Population
  function initMobileChapterSelect() {
    mobileChapterSelect.innerHTML = "";
    chapters.forEach((ch, idx) => {
      const opt = document.createElement("option");
      opt.value = idx;
      opt.textContent = `Ch ${ch.num}: ${ch.title.replace(/^Chapter\s+\d+:\s*/i, "")}`;
      mobileChapterSelect.appendChild(opt);
    });
    mobileChapterSelect.addEventListener("change", (e) => {
      loadChapter(parseInt(e.target.value, 10));
    });
  }
  initMobileChapterSelect();

  // 4. Mobile Search Overlay
  mobileSearchBtn.addEventListener("click", () => {
    mobileSearchOverlay.classList.remove("hidden");
    mobileSearchInput.value = "";
    mobileSearchResults.innerHTML = "";
    setTimeout(() => mobileSearchInput.focus(), 100);
  });
  closeMobileSearchBtn.addEventListener("click", () => {
    mobileSearchOverlay.classList.add("hidden");
  });

  // 5. Module Filter
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.dataset.filter;
      renderSidebar();
    });
  });

  // 6. Render Sidebar with FontAwesome Icons
  function renderSidebar() {
    sidebarNav.innerHTML = "";
    
    const modulesMap = {};
    chapters.forEach((ch, idx) => {
      if (currentFilter !== "all" && String(ch.modNum) !== currentFilter) {
        return;
      }
      if (!modulesMap[ch.modNum]) {
        modulesMap[ch.modNum] = {
          title: ch.modTitle,
          num: ch.modNum,
          chapters: []
        };
      }
      modulesMap[ch.modNum].chapters.push({ chapter: ch, index: idx });
    });

    Object.values(modulesMap).forEach((mod) => {
      const group = document.createElement("div");
      group.className = "sidebar-module-group";

      const header = document.createElement("div");
      header.className = "sidebar-module-header";
      header.innerHTML = `<i class="fa-solid fa-folder-closed"></i> Module ${mod.num}`;
      group.appendChild(header);

      mod.chapters.forEach(({ chapter, index }) => {
        const item = document.createElement("a");
        item.className = "nav-item" + (index === currentChapterIndex ? " active" : "");
        item.href = `#${chapter.id}`;
        item.innerHTML = `
          <i class="fa-solid ${chapter.icon || 'fa-file-lines'} nav-icon"></i>
          <span class="nav-item-num">Ch ${chapter.num}:</span>
          <span class="nav-item-title">${escapeHtml(chapter.title.replace(/^Chapter\s+\d+:\s*/i, ""))}</span>
        `;
        item.addEventListener("click", (e) => {
          e.preventDefault();
          loadChapter(index);
          toggleDrawer(false);
          window.location.hash = chapter.id;
        });
        group.appendChild(item);
      });

      sidebarNav.appendChild(group);
    });
  }

  // 7. Enhanced Markdown Parser with Mobile Scrollable Tables & Callouts
  function markdownToHtml(md) {
    if (!md) return "";
    let html = "";
    const lines = md.split("\n");
    let inTable = false;
    let tableRows = [];
    let inList = false;

    function flushTable() {
      if (!inTable) return;
      inTable = false;
      if (tableRows.length === 0) return;
      
      let tableHtml = '<div class="table-wrapper">';
      tableHtml += '<div class="table-scroll-hint"><i class="fa-solid fa-arrows-left-right"></i> Table ko baayein/daayein scroll karein</div>';
      tableHtml += '<table>';
      const isHeaderRow = (r) => r.every(c => c.trim().startsWith("---") || c.trim().startsWith(":---"));
      
      let headerPassed = false;
      tableRows.forEach((row, rIdx) => {
        if (isHeaderRow(row)) {
          headerPassed = true;
          return;
        }
        if (rIdx === 0 && !headerPassed) {
          tableHtml += "<thead><tr>";
          row.forEach(c => tableHtml += `<th>${inlineFormat(c.trim())}</th>`);
          tableHtml += "</tr></thead><tbody>";
        } else {
          tableHtml += "<tr>";
          row.forEach(c => tableHtml += `<td>${inlineFormat(c.trim())}</td>`);
          tableHtml += "</tr>";
        }
      });
      tableHtml += "</tbody></table></div>";
      html += tableHtml;
      tableRows = [];
    }

    function flushList() {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
    }

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();

      // Table line
      if (line.startsWith("|") && line.endsWith("|")) {
        flushList();
        inTable = true;
        const cells = line.split("|").slice(1, -1);
        tableRows.push(cells);
        continue;
      } else if (inTable) {
        flushTable();
      }

      if (!line) {
        flushList();
        continue;
      }

      // Horizontal Rule
      if (line === "---" || line === "***") {
        flushList();
        html += '<hr class="section-divider" />';
        continue;
      }

      // Headings
      if (line.startsWith("#### ")) {
        flushList();
        const text = line.substring(5).trim();
        html += `<h4>${inlineFormat(text)}</h4>`;
        continue;
      }
      if (line.startsWith("### ")) {
        flushList();
        const text = line.substring(4).trim();
        const slug = slugify(text);
        html += `<h3 id="${slug}"><i class="fa-solid fa-angle-right head-icon"></i> ${inlineFormat(text)}</h3>`;
        continue;
      }
      if (line.startsWith("## ")) {
        flushList();
        const text = line.substring(3).trim();
        const slug = slugify(text);
        html += `<h2 id="${slug}"><i class="fa-solid fa-bookmark head-icon"></i> ${inlineFormat(text)}</h2>`;
        continue;
      }
      if (line.startsWith("# ")) {
        flushList();
        const text = line.substring(2).trim();
        const slug = slugify(text);
        html += `<h2 id="${slug}">${inlineFormat(text)}</h2>`;
        continue;
      }

      // Lists
      if (line.startsWith("- ") || line.startsWith("* ") || /^\d+\.\s/.test(line)) {
        if (!inList) {
          html += '<ul class="feature-list">';
          inList = true;
        }
        const text = line.replace(/^[-*]\s+|\d+\.\s+/, "");
        html += `<li><i class="fa-solid fa-circle-check list-check"></i> <span>${inlineFormat(text)}</span></li>`;
        continue;
      } else {
        flushList();
      }

      // Blockquotes / Special Callouts
      if (line.startsWith("> ")) {
        const text = line.substring(2);
        let icon = '<i class="fa-solid fa-circle-info callout-icon"></i>';
        let calloutClass = "callout";

        if (text.includes("💡") || text.toLowerCase().includes("ahem point")) {
          icon = '<i class="fa-solid fa-lightbulb callout-icon tip"></i>';
          calloutClass = "callout tip";
        } else if (text.includes("⚠️") || text.toLowerCase().includes("warning") || text.toLowerCase().includes("savdhani")) {
          icon = '<i class="fa-solid fa-triangle-exclamation callout-icon warning"></i>';
          calloutClass = "callout warning";
        } else if (text.includes("💰") || text.includes("🔢") || text.toLowerCase().includes("result")) {
          icon = '<i class="fa-solid fa-coins callout-icon success"></i>';
          calloutClass = "callout success";
        }

        html += `<div class="${calloutClass}">${icon}<div class="callout-body">${inlineFormat(text.replace(/^[💡⚠️💰📌🔢⏰🚫]\s*/, ""))}</div></div>`;
        continue;
      }

      // Regular Paragraph
      html += `<p>${inlineFormat(line)}</p>`;
    }

    flushTable();
    flushList();
    return html;
  }

  function inlineFormat(text) {
    if (!text) return "";
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  // 8. Load Chapter
  function loadChapter(index) {
    if (index < 0 || index >= chapters.length) return;
    currentChapterIndex = index;
    const ch = chapters[index];

    // Update Mobile Dropdown
    if (mobileChapterSelect) {
      mobileChapterSelect.value = index;
    }

    // Update Breadcrumb
    contentBreadcrumb.innerHTML = `
      <i class="fa-solid fa-house"></i> <span>${escapeHtml(ch.modTitle.split(":")[0])}</span> &gt; <span>Chapter ${ch.num}</span>
    `;

    // Render Article Header
    let articleHtml = `
      <header class="chapter-header">
        <div class="chapter-meta">
          <span class="chapter-badge"><i class="fa-solid fa-tag"></i> ${escapeHtml(ch.badge)}</span>
          <span class="chapter-pages"><i class="fa-regular fa-clock"></i> ${escapeHtml(ch.pageRange)}</span>
        </div>
        <h1 class="chapter-title"><i class="fa-solid ${ch.icon || 'fa-file-lines'} title-icon"></i> ${escapeHtml(ch.title)}</h1>
        <p class="chapter-summary">${escapeHtml(ch.summary)}</p>
      </header>
      <div class="content-body" id="contentBody">
    `;

    // Render Concept Visual Diagram first (replacing pdf screenshots)
    if (ch.visual) {
      articleHtml += `
        <figure class="doc-figure concept-visual-card">
          <div class="visual-badge"><i class="fa-solid fa-diagram-project"></i> Concept Visual Infographic</div>
          <img src="images/${ch.visual}" alt="${escapeHtml(ch.visualCaption)}" data-full="images/${ch.visual}" data-caption="${escapeHtml(ch.visualCaption)}" />
          <figcaption><i class="fa-solid fa-magnifying-glass-plus"></i> ${escapeHtml(ch.visualCaption)} (Click to Zoom)</figcaption>
        </figure>
      `;
    }

    // Process Markdown Content
    articleHtml += markdownToHtml(ch.content);

    articleHtml += `</div>`;
    chapterArticle.innerHTML = articleHtml;

    // Build Right-Hand Table of Contents
    buildToc();

    // Update Bottom Navigation Buttons
    updateNavButtons();

    // Re-render sidebar to update active item
    renderSidebar();

    // Attach Lightbox triggers to all images in article
    chapterArticle.querySelectorAll(".doc-figure img").forEach((img) => {
      img.addEventListener("click", () => {
        lightboxImg.src = img.dataset.full;
        lightboxCaption.textContent = img.dataset.caption || "";
        imageLightbox.classList.add("active");
      });
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // 9. Right Column TOC
  function buildToc() {
    tocList.innerHTML = "";
    const appToc = document.getElementById("appToc");
    if (!appToc) return;

    if (window.innerWidth <= 1200) {
      appToc.style.display = "none";
      return;
    }

    const headings = chapterArticle.querySelectorAll(".content-body h2, .content-body h3");
    if (headings.length === 0) {
      appToc.style.display = "none";
      return;
    }
    appToc.style.display = "block";

    headings.forEach((h, idx) => {
      if (!h.id) h.id = "heading-" + idx;
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "toc-link";
      a.href = "#" + h.id;
      a.innerHTML = `<i class="fa-solid fa-angle-right toc-dot"></i> <span>${h.innerText.trim()}</span>`;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        h.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      li.appendChild(a);
      tocList.appendChild(li);
    });
  }

  // Handle responsive resize for TOC
  window.addEventListener("resize", () => {
    buildToc();
  });

  // 10. Update Navigation Buttons
  function updateNavButtons() {
    if (currentChapterIndex > 0) {
      prevChapterBtn.disabled = false;
      prevChapterTitle.innerHTML = `<i class="fa-solid ${chapters[currentChapterIndex - 1].icon}"></i> Ch ${chapters[currentChapterIndex - 1].num}: ${chapters[currentChapterIndex - 1].title.replace(/^Chapter\s+\d+:\s*/i, "")}`;
    } else {
      prevChapterBtn.disabled = true;
      prevChapterTitle.textContent = "Start of Course";
    }

    if (currentChapterIndex < chapters.length - 1) {
      nextChapterBtn.disabled = false;
      nextChapterTitle.innerHTML = `<i class="fa-solid ${chapters[currentChapterIndex + 1].icon}"></i> Ch ${chapters[currentChapterIndex + 1].num}: ${chapters[currentChapterIndex + 1].title.replace(/^Chapter\s+\d+:\s*/i, "")}`;
    } else {
      nextChapterBtn.disabled = true;
      nextChapterTitle.textContent = "Course Completed (Badhai Ho!)";
    }
  }

  prevChapterBtn.addEventListener("click", () => {
    if (currentChapterIndex > 0) loadChapter(currentChapterIndex - 1);
  });
  nextChapterBtn.addEventListener("click", () => {
    if (currentChapterIndex < chapters.length - 1) loadChapter(currentChapterIndex + 1);
  });

  // 11. Lightbox Close
  imageLightbox.addEventListener("click", (e) => {
    if (e.target === imageLightbox || e.target.classList.contains("lightbox-close")) {
      imageLightbox.classList.remove("active");
    }
  });

  // 12. Search Implementation (Desktop + Mobile)
  function searchHandbook(query, resultContainer, isMobile) {
    const q = query.trim().toLowerCase();
    if (!q || q.length < 2) {
      resultContainer.innerHTML = "";
      if (!isMobile) resultContainer.classList.add("hidden");
      return;
    }

    const matches = [];
    chapters.forEach((ch, chIdx) => {
      if (ch.title.toLowerCase().includes(q) || ch.summary.toLowerCase().includes(q) || ch.content.toLowerCase().includes(q)) {
        let snippet = ch.summary;
        const text = ch.content.toLowerCase();
        const matchPos = text.indexOf(q);
        if (matchPos !== -1) {
          const start = Math.max(0, matchPos - 30);
          const end = Math.min(text.length, matchPos + 90);
          snippet = "..." + ch.content.substring(start, end).replace(/[#*|]/g, " ") + "...";
        }
        matches.push({
          chapterIndex: chIdx,
          title: ch.title,
          badge: ch.badge,
          icon: ch.icon,
          snippet: snippet
        });
      }
    });

    if (matches.length === 0) {
      resultContainer.innerHTML = `<div class="search-item"><div class="search-item-snippet"><i class="fa-solid fa-circle-exclamation"></i> "${escapeHtml(q)}" ke liye koi jankari nahi mili.</div></div>`;
    } else {
      resultContainer.innerHTML = matches.slice(0, 8).map((m) => `
        <div class="search-item" data-index="${m.chapterIndex}">
          <span class="search-item-badge"><i class="fa-solid ${m.icon || 'fa-tag'}"></i> ${escapeHtml(m.badge)}</span>
          <div class="search-item-title">${escapeHtml(m.title)}</div>
          <div class="search-item-snippet">${escapeHtml(m.snippet)}</div>
        </div>
      `).join("");

      resultContainer.querySelectorAll(".search-item").forEach((el) => {
        el.addEventListener("click", () => {
          const idx = parseInt(el.dataset.index, 10);
          loadChapter(idx);
          if (isMobile) {
            mobileSearchOverlay.classList.add("hidden");
          } else {
            resultContainer.classList.add("hidden");
            globalSearchInput.value = "";
          }
        });
      });
    }

    if (!isMobile) resultContainer.classList.remove("hidden");
  }

  // Desktop search event
  globalSearchInput.addEventListener("input", (e) => {
    searchHandbook(e.target.value, searchResultsDropdown, false);
  });

  // Mobile search event
  mobileSearchInput.addEventListener("input", (e) => {
    searchHandbook(e.target.value, mobileSearchResults, true);
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header-search")) {
      searchResultsDropdown.classList.add("hidden");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== globalSearchInput && document.activeElement !== mobileSearchInput) {
      e.preventDefault();
      if (window.innerWidth <= 860) {
        mobileSearchBtn.click();
      } else {
        globalSearchInput.focus();
      }
    }
  });

  // Initial Load
  const initialHash = window.location.hash.replace("#", "");
  const foundIdx = chapters.findIndex((c) => c.id === initialHash);
  loadChapter(foundIdx !== -1 ? foundIdx : 0);
})();
