import { work } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return work.map(({ slug }) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = work.find((item) => item.slug === slug);

  if (!study) return notFound();

  return (
    <main className="container section">
      <p className="eyebrow">Case study</p>
      <h1 className="h1">{study.title}</h1>
      <div className="grid-auto">
        {['Challenge', 'Strategy', 'Execution', 'Results', 'KPIs', 'Timeline', 'Client quote', 'Gallery'].map((section) => (
          <section className="glass card" key={section}>
            <h2>{section}</h2>
            <p className="muted">{study.metric} through focused creative, media, and web systems.</p>
          </section>
        ))}
      </div>
    </main>
  );
}
