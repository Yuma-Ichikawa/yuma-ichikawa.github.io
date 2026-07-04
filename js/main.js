(() => {
  "use strict";

  /* ---------- Theme toggle (persisted) ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const THEME_KEY = "yi-theme";

  const applyTheme = (theme) => {
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
  };

  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(savedTheme || (prefersLight ? "light" : "dark"));

  themeToggle?.addEventListener("click", () => {
    const isLight = root.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem(THEME_KEY, next);
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

  /* ---------- Header scroll state + scroll progress ---------- */
  const header = document.getElementById("siteHeader");
  const progressBar = document.getElementById("progressBar");

  const onScroll = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 8);

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${pct}%`;
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Back to top ---------- */
  document.getElementById("backToTop")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- Scroll reveal animations ---------- */
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
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
        const match = year === "all" || item.dataset.year === year;
        item.classList.toggle("is-hidden", !match);
      });
    });
  });

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
