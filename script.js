// Reveal-on-scroll animation
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Scrollspy for case-study table of contents
const tocLinks = document.querySelectorAll(".case-toc a[href^='#']");

if (tocLinks.length) {
  const sections = [...tocLinks]
    .map((link) => document.getElementById(link.hash.slice(1)))
    .filter(Boolean);

  const setActive = (id) => {
    tocLinks.forEach((link) =>
      link.classList.toggle("active", link.hash === `#${id}`)
    );
  };

  const spyObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length) setActive(visible[0].target.id);
    },
    { rootMargin: "-25% 0px -60% 0px" }
  );

  sections.forEach((section) => spyObserver.observe(section));
  setActive(sections[0]?.id);
}
