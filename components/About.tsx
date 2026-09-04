'use client';

import { useState } from 'react';
import SectionHeader from './SectionHeader';
import Image from 'next/image';

const GRID_SIZE = 8;
const ANIMATION_DURATION = 400; // ms

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const [revealedPixels, setRevealedPixels] = useState<Set<string>>(new Set());

  const handleMouseEnter = () => {
    setIsHovered(true);

    // Animate pixels disappearing in random order
    const pixels = Array.from(
      { length: GRID_SIZE * GRID_SIZE },
      (_, i) => `${i % GRID_SIZE}-${Math.floor(i / GRID_SIZE)}`
    );

    // Shuffle pixels
    const shuffled = pixels.sort(() => Math.random() - 0.5);

    // Reveal pixels one by one
    shuffled.forEach((pixel, index) => {
      setTimeout(() => {
        setRevealedPixels((prev) => new Set([...prev, pixel]));
      }, (index / shuffled.length) * ANIMATION_DURATION);
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRevealedPixels(new Set()); // Reset pixels
  };

  return (
    <section id="about" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <SectionHeader command="whoami" title="About" />

      <div className="pane p-6 sm:p-8">
        <div className="mb-6 flex items-center gap-4 border-b border-panelborder pb-5">
          {/* Profile Image Container with Pixel Transition */}
          <div
            className="h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-panelborder p-1 sm:h-20 sm:w-20 relative cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* First Image (default) */}
            <Image
              src="/profile.png"
              alt="Mohamad Yazid Zaim"
              width={80}
              height={80}
              className={`h-full w-full rounded-full object-cover absolute inset-0 transition-opacity duration-300 ${
                isHovered ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {/* Second Image (hover reveal) */}
            <Image
              src="/profile-pixel.png"
              alt="Mohamad Yazid Zaim - Pixel"
              width={80}
              height={80}
              className={`h-full w-full rounded-full object-cover absolute inset-0 transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            />

            {/* Pixel Grid Overlay (only shows on hover) */}
            {isHovered && (
              <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                <div
                  className="w-full h-full grid gap-0"
                  style={{
                    gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
                    gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
                  }}
                >
                  {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
                    const x = i % GRID_SIZE;
                    const y = Math.floor(i / GRID_SIZE);
                    const pixelKey = `${x}-${y}`;
                    const isRevealed = revealedPixels.has(pixelKey);

                    return (
                      <div
                        key={pixelKey}
                        className={`transition-opacity duration-300 ease-out ${
                          isRevealed ? 'opacity-0' : 'opacity-100'
                        }`}
                        style={{
                          backgroundColor: '#000000',
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div>
            <h3 className="font-mono text-xl font-bold text-ink sm:text-2xl">
              Mohamad Yazid Zaim
            </h3>
            <p className="mt-1 font-mono text-xs text-cyan sm:text-sm">
              Software Development & System Admin
            </p>
          </div>
        </div>

        <div className="space-y-4 font-mono text-sm leading-relaxed text-muted sm:text-base">
          <p>
            I am a software developer and IT specialist graduating this August
            with a Bachelor of Computer Science in Netcentric Computing from
            UiTM Shah Alam.
          </p>
          <p>
            My technical philosophy is built on bridging the gap between
            infrastructure and user-facing applications. I don't just write
            code; I understand the environments that sustain it. Whether I am
            building state-managed Flutter applications, configuring Linux
            services, or engineering enterprise automation workflows, I thrive
            at the intersection of systems and software.
          </p>
          <p>
            When I am away from the terminal, I focus on maintaining an active
            lifestyle—you can usually find me following a structured gym
            routine or staying involved on the hockey pitch.
          </p>
        </div>
      </div>
    </section>
  );
}
