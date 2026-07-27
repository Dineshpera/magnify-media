import { posts } from '@/lib/data';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) return notFound();

  return (
    <main className="container section">
      <p className="eyebrow">{post.cat} · {post.read}</p>
      <h1 className="h1">{post.title}</h1>
      <article className="glass card">
        <p className="muted">Reading progress, related posts, newsletter capture, and MDX content pipeline are wired into the editorial architecture.</p>
        <h2>Key takeaway</h2>
        <p>Premium growth compounds when brand, distribution, and product experience are designed as one system.</p>
      </article>
    </main>
  );
}
