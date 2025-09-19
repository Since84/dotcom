export default function HomePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Hi, I'm Damon.</h1>
      <p className="text-gray-600 max-w-prose">
        This platform is an evolving showcase of engineering craft: performant web interfaces,
        resilient backend systems, data modeling, and DevOps excellence. Phase 1 focuses on getting
        the foundational content and structure in place.
      </p>
      <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
        <li>Resume (interactive + exportable)</li>
        <li>Project case studies</li>
        <li>Technical blog (Markdown)</li>
        <li>Contact & consultation inquiries</li>
      </ul>
      <p className="text-xs text-gray-400">MVP foundations underway...</p>
    </section>
  );
}
