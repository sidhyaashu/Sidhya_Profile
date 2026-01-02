import { blogPosts } from '@/lib/data/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, User, Clock, ChevronRight } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

// Use generateStaticParams for static generation if you want, or just standard dynamic
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id,
    }));
}

type paramsType = Promise<{ id: string }>;

export default async function BlogPage(props: { params: paramsType }) {
    const { id } = await props.params; // Next.js 16 async params
    const post = blogPosts.find((p) => p.id === id);

    if (!post) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
                <Link href="/#blog" className="inline-flex items-center text-sm text-zinc-500 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to News
                </Link>

                {/* Header */}
                <div className="mb-12 border-b border-zinc-800 pb-12">
                    <div className="flex flex-wrap gap-3 mb-6">
                        {post.tags.map(tag => (
                            <span key={tag} className="text-xs font-mono px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-purple-400">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{post.title}</h1>

                    <div className="flex items-center gap-6 text-sm text-zinc-400">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white">
                                {post.author.name[0]}
                            </div>
                            <span>{post.author.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <article className="prose prose-invert prose-lg max-w-none">
                    {/* Render HTML content safely - relying on internal trust for this dummy data */}
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />

                    {/* Dummy Code Block Visual if not present in content */}
                    <div className="my-10 p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-x-auto">
                        <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                            <span className="ml-2 text-xs text-zinc-500 font-mono">example.tsx</span>
                        </div>
                        <pre className="text-sm font-mono text-zinc-300">
                            <code>{`function optimize_workflow(data) {
  return data.filter(item => item.status === 'active')
             .map(item => process(item));
}`}</code>
                        </pre>
                    </div>
                </article>

            </div>

            <Footer />
        </main>
    );
}
