import SectionHeader from "./SectionHeader";

type Project = {
  name: string;
  tag: string;
  description: string;
  stack: string[];
  href: string;
  highlight?: string;
};

const projects: Project[] = [
  {
    name: "expense-splitter",
    tag: "full-stack",
    description:
      "Full-stack bill-splitting app that settles group expenses in the fewest payments possible. A greedy debt-simplification algorithm (net balances → creditor/debtor matching) guarantees ≤ N−1 transactions, backed by a unit-tested split-calculation layer supporting even, exact, and percentage splits with penny-accurate rounding.",
    stack: ["Next.js 15", "TypeScript", "Drizzle ORM", "Turso", "Better Auth", "Vitest"],
    href: "https://github.com/zaymm03/expense-splitter",
    highlight: "17 passing tests · deployed on Vercel",
  },
  {
    name: "zaym-uptime-monitor",
    tag: "devops",
    description:
      "Self-hosted monitoring service for my homelab. Checks HTTP endpoints on a schedule, persists history to SQLite, and sends Telegram alerts on downtime — with flap protection so it only alerts after consecutive failures. Live dashboard shows uptime %, response times, and incident history.",
    stack: ["TypeScript", "Node.js", "SQLite", "Docker", "GitHub Actions"],
    href: "https://github.com/zaymm03/zaym-uptime-monitor",
    highlight: "unit-tested core · containerized · CI on every push",
  },
  {
    name: "zaymlab-homelab",
    tag: "infrastructure",
    description:
      "A Windows Server Active Directory domain built from scratch on Server Core — no GUI, entirely via PowerShell. Static IP and AD-integrated DNS, first DC in a new forest (zaymlab.local), OU structure, security groups, test users, and a login-banner GPO.",
    stack: ["Windows Server 2022", "Active Directory", "DNS", "Group Policy", "PowerShell"],
    href: "https://github.com/zaymm03/zaymlab-homelab",
    highlight: "documented with architecture notes + build log",
  },
  {
    name: "fskm-navigation",
    tag: "mobile",
    description:
      "Cross-platform indoor navigation app (final year project) for a multi-floor building. Models rooms, stairs, and lifts as a graph and computes shortest routes with A*, with dynamic graph merging for cross-floor routing and a custom Flutter path painter over SVG floor maps.",
    stack: ["Flutter", "Dart", "Firebase", "Cloud Firestore"],
    href: "https://github.com/zaymm03/fskm-navigation",
    highlight: "A* pathfinding · cross-floor routing",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <SectionHeader command="ls -la ./projects" title="Projects" />
      
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="pane group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-cyan/50 hover:shadow-[0_0_15px_rgba(0,217,255,0.1)]"
          >
            {/* Terminal Titlebar added to the top of each card */}
            <div className="pane-titlebar flex justify-between border-b border-panelborder bg-[#0B0F14]/50 px-4 py-2">
              <span className="text-muted transition-colors group-hover:text-cyan">
                ./{p.name}.sh
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-panelborder transition-colors group-hover:bg-amber/50" />
                <span className="h-2 w-2 rounded-full bg-panelborder transition-colors group-hover:bg-cyan/50" />
              </span>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-grow flex-col justify-between p-5 sm:p-6">
              <div>
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="font-mono text-base font-semibold text-ink transition-colors group-hover:text-cyan sm:text-lg">
                    {p.name}
                  </h3>
                  <span className="shrink-0 rounded-full border border-panelborder px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-amber">
                    {p.tag}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted">
                  {p.description}
                </p>
              </div>
              
              <div className="mt-6">
                {p.highlight && (
                  <p className="mb-3 font-mono text-xs text-cyan">
                    → {p.highlight}
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded border border-panelborder bg-base px-2 py-0.5 font-mono text-[10px] text-muted transition-colors group-hover:border-muted/50 group-hover:text-ink/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}