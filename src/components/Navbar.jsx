import { useEffect, useState } from "react";
const links = [
  ["accueil", "Accueil"],
  ["a-propos", "À propos"],
  ["competences", "Compétences"],
  ["projets", "Projets"],
  ["parcours", "Parcours"],
  ["contact", "Contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("accueil");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        }),
      { rootMargin: "-15% 0px -55% 0px" },
    );
    links.forEach(([id]) => {
      const node = document.getElementById(id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <header className="navbar">
      <div className="nav-inner">
        <a className="logo" href="#accueil" onClick={() => setOpen(false)}>
          Cristina<span>.dev</span>
          <i />
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Fermer ✕" : "Menu ☰"}
        </button>
        <nav
          id="main-nav"
          className={open ? "is-open" : ""}
          aria-label="Navigation principale"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              document.querySelector(".menu-toggle")?.focus();
            }
          }}
        >
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {label}
              {id === "contact" ? " ↗" : ""}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
