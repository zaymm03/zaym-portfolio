import SectionHeader from "./SectionHeader";

const links = [
  { label: "email", value: "yazidzaim03@gmail.com", href: "mailto:yazidzaim03@gmail.com" },
  { label: "linkedin", value: "linkedin.com/in/mohamadyazidzaim", href: "https://linkedin.com/in/mohamadyazidzaim" },
  { label: "github", value: "github.com/zaymm03", href: "https://github.com/zaymm03" },
  { label: "phone", value: "+60 11-1413 5306", href: "tel:+601114135306" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <SectionHeader command="./contact.sh --reach-out" title="Contact" />
      <div className="pane px-5 py-6 sm:px-8 sm:py-8">
        <p className="mb-6 text-sm text-muted sm:text-base">
          Open to software development, IT, and automation roles. Feel free
          to reach out on any of these:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              className="flex items-center justify-between rounded-md border border-panelborder bg-base px-4 py-3 font-mono text-sm transition-colors hover:border-cyan/50"
            >
              <span className="text-muted">{l.label}</span>
              <span className="text-cyan">{l.value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
