"use client";

const tabs = [
  { id: "about", label: "about.md" },
  { id: "projects", label: "projects/" },
  { id: "experience", label: "experience.log" },
  { id: "skills", label: "skills.json" },
  { id: "contact", label: "contact.sh" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-panelborder bg-base/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center gap-1 overflow-x-auto px-4 py-2 font-mono text-xs sm:text-sm">
        <span className="mr-3 shrink-0 text-cyan">MOHAMAD YAZID ZAIM</span>
        <span className="mr-4 shrink-0 text-muted">:~$</span>
        <nav className="flex gap-1">
          {tabs.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="shrink-0 rounded-t-md border border-b-0 border-panelborder bg-panel px-3 py-1.5 text-muted transition-colors hover:text-ink"
            >
              {t.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
