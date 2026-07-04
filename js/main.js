(() => {
  "use strict";

  /* ---------- Language toggle (persisted) ---------- */
  const root = document.documentElement;
  const LANG_KEY = "yi-lang";
  const langButtons = document.querySelectorAll("[data-set-lang]");

  const applyLang = (lang) => {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang);
    langButtons.forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.setLang === lang);
    });
  };

  applyLang(localStorage.getItem(LANG_KEY) || "ja");

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.setLang;
      applyLang(lang);
      localStorage.setItem(LANG_KEY, lang);
    });
  });

  /* ---------- Mobile nav ---------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle?.classList.remove("is-open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Header scroll state + progress ---------- */
  const header = document.getElementById("siteHeader");
  const progressBar = document.getElementById("progressBar");

  const onScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${pct}%`;
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Back to top ---------- */
  document.getElementById("backToTop")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Publications year filter ---------- */
  const filterButtons = document.querySelectorAll("#pubFilter .chip");
  const pubItems = document.querySelectorAll(".pub-item");

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const year = btn.dataset.year;
      pubItems.forEach((item) => {
        item.classList.toggle("is-hidden", !(year === "all" || item.dataset.year === year));
      });
    });
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
