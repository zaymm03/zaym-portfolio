import type { Metadata, Viewport } from "next";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0B0F14",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Yazid Zaim — Software Development · IT · Automation",
  description:
    "Netcentric Computing graduate building full-stack apps and automating enterprise IT — Next.js, Active Directory, Power Automate, n8n.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-base text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
