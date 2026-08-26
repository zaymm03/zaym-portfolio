"use client";
import { useState, useEffect } from "react";

const bootLogs = [
    { text: "Initializing Netcentring Computing core..", delay: 100 },
    { text: "Loading network interfaces: [ OK ]", delay: 400 },
    { text: "Mounting n8n Automation volumes: [ OK ]", delay: 700 },
    { text: "Authenticating with Active Directory: [ OK ]", delay: 1100 },
    { text: "Starting Next.js frontend daemon...", delay: 1400 },
    { text: "System ready. Connection established.", delay: 1900 },
];

export default function BootSequence() {
    const [visibleLines, setVisibleLines] = useState<number>(0);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        const hasBooted = sessionStorage.getItem("bootPlayed");

        if (hasBooted) {
            setVisibleLines(bootLogs.length);
        } else {
            bootLogs.forEach((log, index) => {
                setTimeout(() => {
                    setVisibleLines((prev) => Math.max(prev, index + 1));
                }, log.delay);
            });
            sessionStorage.setItem("bootPlayed", "true");
        
        }
    }, []);

    if (!isClient) return <div className="min-h-[150px]"></div>;

    return (
        <div className="font-mono text-sm sm:text-base leading-relaxed min-h-[150px]">
            {bootLogs.map((log, index) => (
                <div
                  key={index}
                  className={`${
                    index < visibleLines ? "opacity-100" : "opacity-0 hidden"
                  } ${index === bootLogs.length - 1 ? "text-cyan mt-4" : "text-muted"}`}
                >
                  {index === bootLogs.length - 1 ? "> " : ""}
                  {log.text}
                </div>
            ))}

            {/* Blinking Cursor */}
            {visibleLines === bootLogs.length && (
                <div className="mt-2 text-ink animate-blink">_</div>
            )}
        </div>
    );
}

