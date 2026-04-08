/**
 * Main JS – language switching & UI behaviour
 */
(function () {
  "use strict";

  /* ── State ── */
  let currentLang = localStorage.getItem("renu_lang") || "it";

  /* ── DOM helpers ── */
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  /* ── Apply translations ── */
  function applyLang(lang) {
    const t = TRANSLATIONS[lang];
    if (!t) return;
    currentLang = lang;
    localStorage.setItem("renu_lang", lang);

    /* Set html lang & dir */
    document.documentElement.lang = t.lang;
    document.documentElement.dir = t.dir;

    /* Translate every element with data-i18n */
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    });

    /* Translate placeholders */
    $$("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) {
        el.placeholder = t[key];
      }
    });

    /* Translate aria-labels */
    $$("[data-i18n-aria]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria");
      if (t[key] !== undefined) {
        el.setAttribute("aria-label", t[key]);
      }
    });

    /* Update active flag button */
    $$(".lang-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });
  }

  /* ── Mobile nav toggle ── */
  function initMobileNav() {
    const toggle = $("#nav-toggle");
    const menu = $("#nav-menu");
    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    /* Close on link click */
    $$(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ── Sticky header shadow ── */
  function initStickyHeader() {
    const header = $("header");
    if (!header) return;
    window.addEventListener(
      "scroll",
      () => {
        header.classList.toggle("scrolled", window.scrollY > 10);
      },
      { passive: true }
    );
  }

  /* ── Smooth scroll for anchor links ── */
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const target = document.getElementById(anchor.getAttribute("href").slice(1));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  /* ── Scroll-reveal animation ── */
  function initScrollReveal() {
    if (!("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    $$(".reveal").forEach((el) => observer.observe(el));
  }

  /* ── Contact form (mailto fallback) ── */
  function initContactForm() {
    const form = $("#contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const t = TRANSLATIONS[currentLang] || TRANSLATIONS.it;
      const name = form.querySelector('[name="name"]').value.trim();
      const email = form.querySelector('[name="email"]').value.trim();
      const subject = form.querySelector('[name="subject"]').value.trim();
      const message = form.querySelector('[name="message"]').value.trim();

      const nameLabel = t.contact_form_name || "Nome";
      const emailLabel = t.contact_form_email || "Email";
      const body = encodeURIComponent(
        `${nameLabel}: ${name}\n${emailLabel}: ${email}\n\n${message}`
      );
      const mailtoLink = `mailto:info@sindromerenuitalia.it?subject=${encodeURIComponent(
        subject
      )}&body=${body}`;
      window.location.href = mailtoLink;
    });
  }

  /* ── Diagnosis modal ── */
  function initDiagnosisModal() {
    const openBtns = $$(".diag-cta-btn");
    const modal = $("#diagnosis-modal");
    const closeBtn = $("#modal-close");

    if (!modal) return;

    function openModal() {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      closeBtn && closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    }

    openBtns.forEach((btn) => btn.addEventListener("click", openModal));

    if (closeBtn) closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
    });
  }

  /* ── Back-to-top button ── */
  function initBackToTop() {
    const btn = $("#back-to-top");
    if (!btn) return;

    window.addEventListener(
      "scroll",
      () => {
        btn.classList.toggle("visible", window.scrollY > 400);
      },
      { passive: true }
    );

    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ── Init ── */
  function init() {
    /* Language buttons */
    $$(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });

    applyLang(currentLang);
    initMobileNav();
    initStickyHeader();
    initSmoothScroll();
    initScrollReveal();
    initContactForm();
    initDiagnosisModal();
    initBackToTop();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
