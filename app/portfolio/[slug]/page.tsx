import { work } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return work.map(({ slug }) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = work.find((item) => item.slug === slug);

  if (!project) return notFound();

  return (
    <main className="container section">
      <p className="eyebrow">Portfolio / {project.cat}</p>
      <h1 className="h1">{project.title}</h1>
      <div className="glass card">
        <h2>{project.metric}</h2>
        <p className="muted">Animated preview, media gallery, video embeds, and lightbox integration point.</p>
      </div>
    </main>
  );
}
