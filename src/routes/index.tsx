import { createFileRoute } from "@tanstack/react-router";
import { ManuscriptStudio } from "@/components/ManuscriptStudio";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AutoScriptorX — Format academic manuscripts in seconds" },
      {
        name: "description",
        content:
          "Upload an unstructured DOCX manuscript and instantly map it to IEEE, Springer LNCS, or APA templates. Export polished DOCX and PDF files.",
      },
      { property: "og:title", content: "AutoScriptorX — Manuscript formatting, automated" },
      {
        property: "og:description",
        content: "Turn raw academic drafts into publication-ready papers in seconds.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          </div>
          <span className="font-display text-xl font-semibold">AutoScriptorX</span>
        </div>
        <a href="#studio" className="text-sm text-muted-foreground hover:text-foreground">
          Open studio →
        </a>
      </nav>

      <header className="mx-auto max-w-4xl px-6 pt-12 pb-8 text-center">
        <p className="mb-4 inline-block rounded-full border border-rule bg-card px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground">
          Manuscript intelligence
        </p>
        <h1 className="font-display text-5xl font-semibold leading-[1.05] text-balance md:text-7xl">
          From rough draft to <em className="text-accent not-italic">publication-ready</em> in one upload.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          AutoScriptorX reads unstructured DOCX manuscripts, identifies every section, table, figure, and reference,
          then formats them to your chosen journal or conference template.
        </p>
      </header>

      <ManuscriptStudio />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Smart parsing",
              d: "Pattern-based detection of titles, authors, affiliations, abstract, keywords, headings, captions, and references.",
            },
            {
              n: "02",
              t: "Template mapping",
              d: "IEEE two-column, Springer LNCS, and APA 7th — with consistent typography, spacing, and margins.",
            },
            {
              n: "03",
              t: "Dual export",
              d: "Generate a clean .docx for further editing and a print-ready .pdf with proper headers and pagination.",
            },
          ].map((f) => (
            <div key={f.n} className="rounded-xl border border-rule bg-card p-6">
              <p className="font-mono text-xs text-accent">{f.n}</p>
              <h3 className="mt-2 font-display text-xl">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-rule py-8 text-center text-xs text-muted-foreground">
        AutoScriptorX · Built for researchers who'd rather write than format.
      </footer>
    </main>
  );
}
