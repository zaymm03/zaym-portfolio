import SectionHeader from "./SectionHeader";

type Experience = {
  company: string;
  role: string;
  duration: string;
  environment: string[];
  logs: string[];
};

const experiences: Experience[] = [
  {
    company: "Forest Interactive",
    role: "Technology Development Intern (IT Team)",
    duration: "Mar 2026 — Jul 2026",
    environment: ["Active Directory", "Microsoft 365", "Power Automate", "n8n", "Microsoft Defender"],
    logs: [
      "Administered enterprise infrastructure and identity management utilizing Active Directory and Microsoft 365.",
      "Engineered and deployed 10+ complex automation workflows via Power Automate and n8n to streamline internal IT operations.",
      "Executed comprehensive cybersecurity attack simulations using Microsoft Defender to identify vulnerabilities and track user phishing response rates.",
    ],
  },
  {
    company: "Jabatan Perkhidmatan Komputer Negeri (JPKN)",
    role: "IT Intern",
    duration: "Sep 2023 — Mar 2024",
    environment: ["Linux", "System Administration", "Networking"],
    logs: [
      "Managed Linux service configurations and executed system administration tasks.",
      "Assisted in network security monitoring and infrastructure maintenance.",
      "Update this log with your specific JPKN responsibilities and achievements.",
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <SectionHeader command="cat /var/log/syslog | grep experience" title="Experience" />
      
      <div className="relative border-l border-panelborder ml-2 sm:ml-4">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-12 pl-6 sm:pl-8 relative group">
            {/* Timeline Node */}
            <div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-panelborder transition-colors duration-300 group-hover:bg-cyan group-hover:shadow-[0_0_8px_rgba(0,217,255,0.6)]" />
            
            <div className="pane flex flex-col p-5 sm:p-6 transition-colors duration-300 hover:border-muted/50">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="font-mono text-lg font-bold text-ink">
                    {exp.role} <span className="text-cyan">@ {exp.company}</span>
                  </h3>
                </div>
                <div className="font-mono text-xs text-amber sm:text-right shrink-0">
                  [{exp.duration}]
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {exp.environment.map((env, i) => (
                  <span key={i} className="rounded bg-panelborder/40 px-2 py-1 font-mono text-[10px] text-muted">
                    {env}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 font-mono text-sm text-muted">
                {exp.logs.map((log, i) => (
                  <li key={i} className="flex gap-3 relative">
                    <span className="text-panelborder select-none group-hover:text-cyan/40 transition-colors">
                      &gt;
                    </span>
                    <span className="leading-relaxed">{log}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}