import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <SectionHeader command="whoami" title="About" />
      
      <div className="pane p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-3 border-b border-panelborder pb-4">
          <div className="h-12 w-12 shrink-0 rounded-full bg-panelborder/50 p-1">
             {/* Replace with your actual profile picture path later */}
            <div className="h-full w-full rounded-full bg-cyan/20"></div>
          </div>
          <div>
            <h3 className="font-mono text-lg font-bold text-ink">Mohamad Yazid Zaim</h3>
            <p className="font-mono text-xs text-cyan">System.Admin & Software.Dev</p>
          </div>
        </div>

        <div className="space-y-4 font-mono text-sm leading-relaxed text-muted">
          <p>
            I am a software developer and IT specialist graduating this August with a Bachelor of Computer Science in Netcentric Computing from UiTM Shah Alam. 
          </p>
          <p>
            My technical philosophy is built on bridging the gap between infrastructure and user-facing applications. I don't just write code; I understand the environments that sustain it. Whether I am building state-managed Flutter applications, configuring Linux services, or engineering enterprise automation workflows, I thrive at the intersection of systems and software.
          </p>
          <p>
            When I am away from the terminal, I focus on maintaining an active lifestyle—you can usually find me following a structured gym routine or staying involved on the hockey pitch.
          </p>
        </div>
      </div>
    </section>
  );
}