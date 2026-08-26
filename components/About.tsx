import SectionHeader from "./SectionHeader";
import Image from "next/image"; 

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <SectionHeader command="whoami" title="About" />
      
      <div className="pane p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-4 border-b border-panelborder pb-5">
          <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-panelborder p-1 sm:h-20 sm:w-20">
             {/* Added width and height props required by Next.js */}
             <Image 
               src="/profile.png" 
               alt="Mohamad Yazid Zaim" 
               width={80}
               height={80}
               className="h-full w-full rounded-full object-cover" 
             />
          </div>
          <div>
            <h3 className="font-mono text-xl font-bold text-ink sm:text-2xl">Mohamad Yazid Zaim</h3>
            <p className="mt-1 font-mono text-xs text-cyan sm:text-sm">Software Development & System Admin</p>
          </div>
        </div>

        <div className="space-y-4 font-mono text-sm leading-relaxed text-muted sm:text-base">
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