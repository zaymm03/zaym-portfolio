import SectionHeader from "./SectionHeader";
import { 
  SiTypescript, SiJavascript, SiDart, SiGnubash, SiHtml5, 
  SiNextdotjs, SiReact, SiTailwindcss, SiFlutter, 
  SiNodedotjs, SiFirebase, SiSqlite, SiTurso, 
  SiLinux, SiDocker, SiN8N, 
  SiKalilinux, SiGit, SiFigma, SiVitest, SiGithubactions
} from "react-icons/si";
import { FaDatabase, FaNetworkWired, FaShieldAlt, FaWindows, FaRobot } from "react-icons/fa";
import { MdOutlineViewInAr } from "react-icons/md";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Dart", icon: SiDart },
      { name: "SQL", icon: FaDatabase },
      { name: "PowerShell", icon: SiGnubash },
      { name: "HTML/CSS", icon: SiHtml5 },
    ],
  },
  {
    category: "Frontend & Mobile",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Flutter", icon: SiFlutter },
      { name: "AR Core", icon: MdOutlineViewInAr },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Firebase", icon: SiFirebase },
      { name: "SQLite", icon: SiSqlite },
      { name: "Drizzle ORM", icon: FaDatabase },
      { name: "Turso", icon: SiTurso },
    ],
  },
  {
    category: "Infra & Automation",
    skills: [
      { name: "Active Directory", icon: FaNetworkWired },
      { name: "Windows Server", icon: FaWindows },
      { name: "Linux", icon: SiLinux },
      { name: "Docker", icon: SiDocker },
      { name: "n8n", icon: SiN8N },
      { name: "Power Automate", icon: FaRobot },
    ],
  },
  {
    category: "Security & Tools",
    skills: [
      { name: "MS Defender", icon: FaShieldAlt },
      { name: "Kali Linux", icon: SiKalilinux },
      { name: "Git", icon: SiGit },
      { name: "Figma", icon: SiFigma },
      { name: "Vitest", icon: SiVitest },
      { name: "GitHub Actions", icon: SiGithubactions },
    ],
  }
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <SectionHeader command="tree ./skills" title="Skills" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((group, index) => (
          <div 
            key={index} 
            className="pane flex flex-col p-5 transition-colors hover:border-cyan/30"
          >
            <div className="mb-5 flex items-center gap-2 border-b border-panelborder pb-2">
              <span className="text-cyan font-bold text-sm">~/</span>
              <h3 className="font-mono text-sm font-semibold text-ink">
                {group.category.toLowerCase().replace(/\s+/g, '-')}
              </h3>
            </div>
            
            <ul className="flex flex-wrap gap-2.5">
              {group.skills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <li 
                    key={i} 
                    className="group/skill flex items-center gap-2 rounded-md border border-panelborder bg-[#0B0F14]/50 px-2.5 py-1.5 font-mono text-[11px] text-muted transition-all hover:border-muted/50 hover:text-ink"
                  >
                    <Icon className="text-sm opacity-70 transition-opacity group-hover/skill:opacity-100 group-hover/skill:text-cyan" />
                    <span>{skill.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}