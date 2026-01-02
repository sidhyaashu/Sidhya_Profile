"use client";

import Link from 'next/link';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '@/lib/data/blog';
import { BlogCardArt } from '@/components/ui/BlogCardArt';

export default function BlogPreview() {
    // Take top 6 posts
    const posts = blogPosts.slice(0, 6);

    return (
        <section id="blog" className="py-24 bg-black relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                    <h2 className="text-3xl font-bold text-white">Blog</h2>
                    <Link href="/blog" className="text-zinc-400 hover:text-white flex items-center gap-2 text-sm transition-colors">
                        See more <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.id}`} className="group block h-full">
                            <div className="bg-zinc-900/30 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-600 transition-all duration-300 h-full flex flex-col">
                                {/* Art Container */}
                                <div className="h-48 w-full border-b border-zinc-800 bg-black relative overflow-hidden group-hover:opacity-90 transition-opacity">
                                    <BlogCardArt variant={post.artVariant} />
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3 font-mono">
                                        <span>{post.author.name}</span>
                                        <span>•</span>
                                        <span>{post.date}</span>
                                    </div>

                                    <h3 className="text-lg font-semibold text-white mb-2 leading-snug group-hover:text-purple-400 transition-colors">
                                        {post.title}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
