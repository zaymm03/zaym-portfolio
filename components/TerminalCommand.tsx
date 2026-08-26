"use client";
import { useState } from "react";

export default function TerminalCommand() {
    const [copied, setCopied] = useState(false);
    const command = "ssh recruiter@yazid-zaim.local";

    const handleCopy = async () => {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex w-full max-w-md items-center justify-between rounded-lg border border-panelborder bg-panel px-4 py-3 font-mono text-sm shadow-lg">
            <div className="flex items-center gap-3">
                <span className="text-cyan font-bold">$</span>
                <span className="text-ink">{command}</span>
            </div>
            <button
                onClick={handleCopy}
                className={`rounded px-2 py-1 text-xs transition-all ${
                    copied ? "bg-cyan/20 text-cyan" : "text-muted hover:text-ink hover:bg-panelborder"
                }`}
            >
                {copied ? "copied!" : "[copy]"}
            </button>
        </div>
    );
}