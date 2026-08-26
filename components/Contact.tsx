import SectionHeader from "./SectionHeader";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16 sm:py-24 mb-12">
      <SectionHeader command="ping -c 1 yazid.network" title="Contact" />

      <div className="pane mx-auto max-w-2xl p-6 text-center sm:p-10 transition-colors hover:border-cyan/30">
        <h2 className="mb-4 font-mono text-2xl font-bold text-ink sm:text-3xl">
          Initiate Connection
        </h2>
        <p className="mb-8 font-mono text-sm leading-relaxed text-muted sm:text-base">
          I am currently open to new opportunities in software development and systems administration. Whether you have a question, a project proposal, or just want to say hi, my inbox is open and I'll try my best to get back to you!
        </p>

        {/* REMEMBER TO CHANGE THIS EMAIL ADDRESS! */}
        <a
          href="mailto:your.email@example.com" 
          className="group inline-flex items-center gap-3 rounded-md border border-cyan/40 bg-cyan/10 px-6 py-3 font-mono text-sm font-bold text-cyan transition-all hover:bg-cyan/20 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)]"
        >
          <FaPaperPlane className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          [ SEND_MESSAGE ]
        </a>

        <div className="mt-12 flex justify-center gap-6 border-t border-panelborder pt-8">
          <a
            href="https://github.com/zaymm03"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-cyan"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://linkedin.com/in/mohamadyazidzaim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-cyan"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
      </div>
    </section>
  );
}