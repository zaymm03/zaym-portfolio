export default function SectionHeader({
  command,
  title,
}: {
  command: string;
  title: string;
}) {
  return (
    <div className="mb-6">
      <p className="prompt font-mono text-xs text-muted sm:text-sm">
        {command}
      </p>
      <h2 className="mt-2 font-mono text-2xl font-bold text-ink sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}
