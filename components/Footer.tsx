export default function Footer() {
  return (
    <footer className="border-t border-panelborder px-4 py-8">
      <p className="mx-auto max-w-5xl font-mono text-xs text-muted">
        © {new Date().getFullYear()} Yazid Zaim — built with Next.js &amp;
        Tailwind, deployed on Vercel.
      </p>
    </footer>
  );
}
