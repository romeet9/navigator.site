import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { BlogLayout } from '@/components/blogLayout'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// Generate metadata for each dynamic page including metadataBase
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: post?.title || 'Default Title',
    description: post?.description || 'A description for your post goes here.',
    openGraph: {
      images: [
        new URL(
          `/images/og/${slug}.png`,
          process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
        ).toString(),
      ],
    },
    twitter: {
      card: 'summary_large_image',
      images: [
        new URL(
          `/images/twitter/${slug}.png`,
          process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
        ).toString(),
      ],
    },
  }
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }

  return (
    <BlogLayout date={post.date}>
      <article className="w-full flex flex-col gap-4">
        <section className="flex flex-col gap-[1em]">
          <h2>{post.title}</h2>
          <div className="max-w-none flex flex-col mdx-content">
            {post.content}
          </div>
        </section>
      </article>
    </BlogLayout>
  )
}