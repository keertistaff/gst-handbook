// GST Complete Course Handbook - Main Application Logic
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

  // 3. Module Filter
  filterPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      filterPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      currentFilter = pill.dataset.filter;
      renderSidebar();
    });
  });

  // 4. Render Sidebar
  function renderSidebar() {
    sidebarNav.innerHTML = "";
    
    // Group chapters by Module
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
      header.textContent = `Module ${mod.num}`;
      group.appendChild(header);

      mod.chapters.forEach(({ chapter, index }) => {
        const item = document.createElement("a");
        item.className = "nav-item" + (index === currentChapterIndex ? " active" : "");
        item.href = `#${chapter.id}`;
        item.innerHTML = `
          <span class="nav-item-num">Ch ${chapter.num}</span>
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

  // 5. Lightweight Markdown to HTML Parser
  function markdownToHtml(md, images) {
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
      
      let tableHtml = '<div class="table-wrapper"><table>';
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

      // Headings
      if (line.startsWith("### ")) {
        flushList();
        const text = line.substring(4).trim();
        const slug = slugify(text);
        html += `<h3 id="${slug}">${inlineFormat(text)}</h3>`;
        continue;
      }
      if (line.startsWith("## ")) {
        flushList();
        const text = line.substring(3).trim();
        const slug = slugify(text);
        html += `<h2 id="${slug}">${inlineFormat(text)}</h2>`;
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
          html += "<ul>";
          inList = true;
        }
        const text = line.replace(/^[-*]\s+|\d+\.\s+/, "");
        html += `<li>${inlineFormat(text)}</li>`;
        continue;
      } else {
        flushList();
      }

      // Blockquotes / Callouts
      if (line.startsWith("> ")) {
        const text = line.substring(2);
        html += `<div class="callout"><p>${inlineFormat(text)}</p></div>`;
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

  // 6. Load Chapter
  function loadChapter(index) {
    if (index < 0 || index >= chapters.length) return;
    currentChapterIndex = index;
    const ch = chapters[index];

    // Update Breadcrumb
    contentBreadcrumb.innerHTML = `
      <span>${escapeHtml(ch.modTitle.split(":")[0])}</span> &gt; <span>Chapter ${ch.num}</span>
    `;

    // Render Article Header
    let articleHtml = `
      <header class="chapter-header">
        <div class="chapter-meta">
          <span class="chapter-badge">${escapeHtml(ch.badge)}</span>
          <span class="chapter-pages">${escapeHtml(ch.pageRange)}</span>
        </div>
        <h1 class="chapter-title">${escapeHtml(ch.title)}</h1>
        <p class="chapter-summary">${escapeHtml(ch.summary)}</p>
      </header>
      <div class="content-body" id="contentBody">
    `;

    // Process all sections / pages
    ch.sections.forEach((sec) => {
      const pageHtml = markdownToHtml(sec.text);
      if (pageHtml) {
        articleHtml += `<div class="content-page-block">${pageHtml}</div>`;
      }
      
      // If page has figures
      if (sec.images && sec.images.length > 0) {
        sec.images.forEach((imgFile) => {
          articleHtml += `
            <figure class="doc-figure">
              <img src="images/${imgFile}" alt="GST Diagram" loading="lazy" data-full="images/${imgFile}" data-caption="Chapter ${ch.num}: Practical Illustration" />
              <figcaption>Figure: Form / Compliance Illustration (Page ${sec.page})</figcaption>
            </figure>
          `;
        });
      }
    });

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

  // 7. Right Column TOC
  function buildToc() {
    tocList.innerHTML = "";
    const headings = chapterArticle.querySelectorAll(".content-body h2, .content-body h3");
    if (headings.length === 0) {
      document.getElementById("appToc").style.display = "none";
      return;
    }
    document.getElementById("appToc").style.display = "block";

    headings.forEach((h, idx) => {
      if (!h.id) h.id = "heading-" + idx;
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.className = "toc-link";
      a.href = "#" + h.id;
      a.textContent = h.textContent.trim();
      a.addEventListener("click", (e) => {
        e.preventDefault();
        h.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      li.appendChild(a);
      tocList.appendChild(li);
    });
  }

  // 8. Update Navigation Buttons
  function updateNavButtons() {
    if (currentChapterIndex > 0) {
      prevChapterBtn.disabled = false;
      prevChapterTitle.textContent = chapters[currentChapterIndex - 1].title;
    } else {
      prevChapterBtn.disabled = true;
      prevChapterTitle.textContent = "Start of Course";
    }

    if (currentChapterIndex < chapters.length - 1) {
      nextChapterBtn.disabled = false;
      nextChapterTitle.textContent = chapters[currentChapterIndex + 1].title;
    } else {
      nextChapterBtn.disabled = true;
      nextChapterTitle.textContent = "Course Completed";
    }
  }

  prevChapterBtn.addEventListener("click", () => {
    if (currentChapterIndex > 0) loadChapter(currentChapterIndex - 1);
  });
  nextChapterBtn.addEventListener("click", () => {
    if (currentChapterIndex < chapters.length - 1) loadChapter(currentChapterIndex + 1);
  });

  // 9. Lightbox Close
  imageLightbox.addEventListener("click", (e) => {
    if (e.target === imageLightbox || e.target.classList.contains("lightbox-close")) {
      imageLightbox.classList.remove("active");
    }
  });

  // 10. Global Search
  globalSearchInput.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    if (!q || q.length < 2) {
      searchResultsDropdown.classList.add("hidden");
      searchResultsDropdown.innerHTML = "";
      return;
    }

    const matches = [];
    chapters.forEach((ch, chIdx) => {
      // Check title & summary
      if (ch.title.toLowerCase().includes(q) || ch.summary.toLowerCase().includes(q)) {
        matches.push({
          chapterIndex: chIdx,
          title: ch.title,
          badge: ch.badge,
          snippet: ch.summary
        });
        return;
      }
      // Check sections
      for (const sec of ch.sections) {
        const text = sec.text.toLowerCase();
        const matchPos = text.indexOf(q);
        if (matchPos !== -1) {
          const start = Math.max(0, matchPos - 40);
          const end = Math.min(text.length, matchPos + 80);
          const snippet = "..." + sec.text.substring(start, end).replace(/\n/g, " ") + "...";
          matches.push({
            chapterIndex: chIdx,
            title: ch.title,
            badge: ch.badge,
            snippet: snippet
          });
          break;
        }
      }
    });

    if (matches.length === 0) {
      searchResultsDropdown.innerHTML = `<div class="search-item"><div class="search-item-snippet">No matching topics found for "${escapeHtml(q)}"</div></div>`;
    } else {
      searchResultsDropdown.innerHTML = matches.slice(0, 8).map((m) => `
        <div class="search-item" data-index="${m.chapterIndex}">
          <span class="search-item-badge">${escapeHtml(m.badge)}</span>
          <div class="search-item-title">${escapeHtml(m.title)}</div>
          <div class="search-item-snippet">${escapeHtml(m.snippet)}</div>
        </div>
      `).join("");

      searchResultsDropdown.querySelectorAll(".search-item").forEach((el) => {
        el.addEventListener("click", () => {
          const idx = parseInt(el.dataset.index, 10);
          loadChapter(idx);
          searchResultsDropdown.classList.add("hidden");
          globalSearchInput.value = "";
        });
      });
    }

    searchResultsDropdown.classList.remove("hidden");
  });

  // Close search dropdown on click outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header-search")) {
      searchResultsDropdown.classList.add("hidden");
    }
  });

  // Search shortcut "/"
  document.addEventListener("keydown", (e) => {
    if (e.key === "/" && document.activeElement !== globalSearchInput) {
      e.preventDefault();
      globalSearchInput.focus();
    }
  });

  // Initial Load from URL Hash or Chapter 0
  const initialHash = window.location.hash.replace("#", "");
  const foundIdx = chapters.findIndex((c) => c.id === initialHash);
  loadChapter(foundIdx !== -1 ? foundIdx : 0);
})();
