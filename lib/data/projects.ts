export interface Project {
    title: string;
    description: string;
    technologies: string[];
    category: string;
    github: string;
    demo?: string;
    featured: boolean;
}

export const projects: Project[] = [
    {
        title: 'Linear Clone',
        description: 'A pixel-perfect re-implementation of the Linear issue tracking interface. Features optimistic UI updates, real-time sync, and keyboard shortcuts.',
        technologies: ['React', 'Next.js', 'PostgreSQL', 'Framer Motion'],
        category: 'Productivity',
        github: 'https://github.com/sidhyaashu',
        demo: 'https://linear.app',
        featured: true,
    },
    {
        title: 'Vercel Analytics Dashboard',
        description: 'Real-time analytics platform analyzing edge function metrics. identifying latency spikes and memory leaks in serverless functions.',
        technologies: ['TypeScript', 'Next.js', 'ClickHouse', 'Tremor'],
        category: 'DevTools',
        github: 'https://github.com/sidhyaashu',
        demo: '',
        featured: true,
    },
    {
        title: 'Distributed System Simulator',
        description: 'A high-performance simulation engine for testing distributed consensus algorithms.',
        technologies: ['Rust', 'WebAssembly', 'React', 'Three.js'],
        category: 'Systems',
        github: 'https://github.com/sidhyaashu',
        demo: '',
        featured: false,
    },
    {
        title: 'Neural Architecture Search',
        description: 'Automated ML pipeline for discovering optimal neural network architectures for edge devices.',
        technologies: ['Python', 'PyTorch', 'Ray', 'FastAPI'],
        category: 'AI Research',
        github: 'https://github.com/sidhyaashu',
        demo: '',
        featured: false,
    },
    {
        title: 'Real-time Collaboration Engine',
        description: 'CRDT-based synchronization engine for collaborative editing apps.',
        technologies: ['Go', 'WebSockets', 'Redis', 'React'],
        category: 'Backend',
        github: 'https://github.com/sidhyaashu',
        demo: '',
        featured: false,
    },
    {
        title: 'Compiler Infrastructure',
        description: 'LLVM frontend for a custom systems programming language.',
        technologies: ['C++', 'LLVM', 'Bison', 'Flex'],
        category: 'Compilers',
        github: 'https://github.com/sidhyaashu',
        demo: '',
        featured: false,
    },
];
