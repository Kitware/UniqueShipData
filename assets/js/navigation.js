(() => {
  const header = document.querySelector("#fixed-navigation");
  const sectionNavigation = document.querySelector("#section-navigation");

  if (!header || !sectionNavigation) return;

  const updateHeader = () => {
    const navigationBottom = sectionNavigation.getBoundingClientRect().bottom;
    const isVisible = navigationBottom <= 0;

    header.classList.toggle("pointer-events-none", !isVisible);
    header.classList.toggle("-translate-y-full", !isVisible);
    header.classList.toggle("opacity-0", !isVisible);
    header.classList.toggle("pointer-events-auto", isVisible);
    header.classList.toggle("translate-y-0", isVisible);
    header.classList.toggle("opacity-100", isVisible);
    header.setAttribute("aria-hidden", String(!isVisible));

    if (isVisible) {
      header.removeAttribute("inert");
    } else {
      header.setAttribute("inert", "");
    }
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
  window.addEventListener("resize", updateHeader);
})();
