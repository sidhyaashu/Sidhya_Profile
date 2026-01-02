import { experiences } from '@/lib/data/experience';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Building2, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

// Generate static params for existing experiences to optimize build
export async function generateStaticParams() {
    return experiences.map((exp) => ({
        id: exp.id,
    }));
}

export default async function ExperiencePage({ params }: PageProps) {
    const { id } = await params;
    const experience = experiences.find((exp) => exp.id === id);

    if (!experience) {
        notFound();
    }

    const Icon = experience.icon;

    return (
        <div className="min-h-screen bg-black text-white py-24 px-6 sm:px-12 lg:px-24">
            <div className="max-w-4xl mx-auto space-y-12">
                {/* Back Button */}
                <Link
                    href="/#experience"
                    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    <span>Back to Experience</span>
                </Link>

                {/* Header */}
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-zinc-900 border border-zinc-800">
                            <Icon className="w-8 h-8 text-purple-400" />
                        </div>
                        <div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                                {experience.title}
                            </h1>
                            <div className="flex items-center gap-3 text-zinc-400 mt-2 text-lg">
                                <Building2 className="w-5 h-5" />
                                <span className="font-medium text-zinc-300">{experience.company}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                        <div className="flex items-center gap-2 bg-zinc-900/50 px-3 py-1.5 rounded-full border border-zinc-800">
                            <Calendar className="w-4 h-4" />
                            <span>{experience.period}</span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-8 sm:p-10 space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                            Key Responsibilities
                        </h3>
                        <ul className="space-y-4">
                            {experience.description.map((item, index) => (
                                <li key={index} className="flex gap-4 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 mt-2.5 group-hover:bg-purple-400 transition-colors shrink-0"></span>
                                    <span className="text-zinc-300 leading-relaxed text-lg">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-8 border-t border-zinc-800/50">
                        <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                            <Tag className="w-4 h-4" />
                            Technologies & Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {experience.tags.map((tag) => (
                                <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="bg-zinc-800 hover:bg-zinc-700 text-zinc-300 px-3 py-1.5 text-sm font-normal"
                                >
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
