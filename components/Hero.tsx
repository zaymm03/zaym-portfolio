"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  "[  OK  ] Mounting /dev/experience ... Forest Interactive, JPKN",
  "[  OK  ] Loading modules: nextjs, typescript, active-directory",
  "[  OK  ] Starting automation.service (n8n, power-automate)",
  "[  OK  ] Network up: github.com/zaymm03 reachable",
  "[  OK  ] Identity resolved: Mohamad Yazid Zaim bin Usman",
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("heroBooted")) {
      setVisibleLines(BOOT_LINES.length);
      setShowTitle(true);
      return;
    }

    if (visibleLines < BOOT_LINES.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 260);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setShowTitle(true);
        if (typeof window !== "undefined") {
          sessionStorage.setItem("heroBooted", "true");
        }
      }, 300);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <section className="mx-auto max-w-5xl px-4 pt-10 sm:pt-16">
      <div className="pane overflow-hidden">
        <div className="pane-titlebar">
          <span>boot.log</span>
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-panelborder" />
            <span className="h-2.5 w-2.5 rounded-full bg-panelborder" />
            <span className="h-2.5 w-2.5 rounded-full bg-panelborder" />
          </span>
        </div>

        <div className="min-h-[220px] px-5 py-6 sm:px-8 sm:py-10">
          <div className="space-y-1.5 font-mono text-[11px] text-muted sm:text-xs">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <p key={i} className="animate-fadeup">
                <span className="text-cyan">{line.slice(0, 8)}</span>
                {line.slice(8)}
              </p>
            ))}
          </div>

          {showTitle && (
            <div className="mt-8 animate-fadeup">
              <h1 className="font-mono text-3xl font-bold tracking-tight text-ink sm:text-5xl">
                Mohamad Yazid Zaim
                <span className="animate-blink text-cyan">_</span>
              </h1>
              <p className="mt-3 max-w-xl text-sm text-muted sm:text-base">
                Netcentric Computing graduate building full-stack apps and
                automating enterprise IT — from{" "}
                <span className="text-amber">Active Directory</span> to{" "}
                <span className="text-cyan">Next.js</span>.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 font-mono text-xs sm:text-sm">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="rounded-md border border-cyan/40 bg-cyan/10 px-4 py-2 text-cyan transition-colors hover:bg-cyan/20"
                >
                  ./resume.pdf
                </a>
                <a
                  href="https://github.com/zaymm03"
                  target="_blank"
                  className="rounded-md border border-panelborder px-4 py-2 text-ink transition-colors hover:border-muted"
                >
                  github.com/zaymm03
                </a>
                <a
                  href="https://linkedin.com/in/mohamadyazidzaim"
                  target="_blank"
                  className="rounded-md border border-panelborder px-4 py-2 text-ink transition-colors hover:border-muted"
                >
                  linkedin
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
