(() => {
  "use strict";

  const root = document.documentElement;
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  const revealItems = document.querySelectorAll(".reveal");
  const sections = document.querySelectorAll("main section[id]");
  const contactForm = document.querySelector(".contact-form");

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
  let currentTheme =
    root.getAttribute("data-theme") || (prefersDark.matches ? "dark" : "light");

  const updateThemeIcon = () => {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector("i");
    if (!icon) return;
    icon.className = currentTheme === "dark" ? "bi bi-sun" : "bi bi-moon-stars";
    themeToggle.setAttribute(
      "aria-label",
      currentTheme === "dark"
        ? "Activer le thème clair"
        : "Activer le thème sombre",
    );
  };

  const applyTheme = (theme) => {
    currentTheme = theme;
    root.setAttribute("data-theme", theme);
    updateThemeIcon();
  };

  applyTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      applyTheme(currentTheme === "dark" ? "light" : "dark");
    });
  }

  prefersDark.addEventListener("change", (event) => {
    if (!root.hasAttribute("data-user-theme")) {
      applyTheme(event.matches ? "dark" : "light");
    }
  });

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      root.setAttribute("data-user-theme", "true");
    });
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle(
            "is-active",
            link.getAttribute("href") === `#${id}`,
          );
        });
      });
    },
    {
      threshold: 0.45,
      rootMargin: "-80px 0px -45% 0px",
    },
  );

  sections.forEach((section) => navObserver.observe(section));

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (!target) return;
      event.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top: y, behavior: "smooth" });
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = contactForm.querySelector("#name")?.value.trim() || "";
      const email = contactForm.querySelector("#email")?.value.trim() || "";
      const subject = contactForm.querySelector("#subject")?.value.trim() || "";
      const message = contactForm.querySelector("#message")?.value.trim() || "";

      const body = [
        `Nom : ${name}`,
        `Email : ${email}`,
        "",
        "Message :",
        message,
      ].join("\n");

      window.location.href = `mailto:yasseryoussoufm@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
