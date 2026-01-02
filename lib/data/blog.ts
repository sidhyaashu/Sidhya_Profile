export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    author: {
        name: string;
        avatar?: string;
    };
    readTime: string;
    artVariant: string; // design-code, customer-experience, etc
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        id: "design-is-more-than-code",
        title: "Design is more than code",
        excerpt: "Why the best engineering teams are obsessed with design systems and user experience.",
        date: "Dec 20, 2025",
        author: { name: "Karri Saarinen" },
        readTime: "5 min read",
        artVariant: "design-code",
        tags: ["Design", "Engineering"],
        content: `
      <h2>The Intersection of Art and Logic</h2>
      <p>Great software isn't just about clean code; it's about how that code makes the user feel. In modern product development, the line between design and engineering is effectively gone.</p>
      
      <p>At Linear, we believe that tools should feel like an extension of your thought process. This requires a level of visual fidelity and interaction design that goes far beyond standard UI libraries.</p>

      <h3>Why Design Systems Matter</h3>
      <p>A consistent design system allows developers to ship faster while maintaining high visual standards. It's the language that aligns the entire team. But it's not just about tokens and components; it's about the philosophy of <strong>craft</strong>.</p>
      
      <pre><code>// Example of a design token usage in our system
const motion = {
  spring: {
    stiffness: 500,
    damping: 30
  }
};</code></pre>

      <p>When you prioritize design, you prioritize the user. Every micro-interaction, every border radius, and every ease-in curve tells a story of care and attention to detail.</p>
      
      <h3>The Magic of "Feel"</h3>
      <p>Software "feel" is elusive. It's the sum of latency, animation, layout stability, and visual harmony. We obsess over 60fps animations and sub-100ms interactions because that's where the magic lives.</p>
    `
    },
    {
        id: "customer-experience-linear",
        title: "How our Customer Experience team works in Linear",
        excerpt: "A deep dive into how support and engineering collaborate to solve user issues.",
        date: "Nov 06, 2025",
        author: { name: "Alexandra Lapinsky Wilson" },
        readTime: "8 min read",
        artVariant: "customer-experience",
        tags: ["Process", "CX"],
        content: `
        <h2>Customer Support as a Loop</h2>
        <p>In many organizations, customer support is a silo. Tickets go in, responses go out. At Linear, we view support as a critical feedback loop for product development.</p>
        
        <p>Our CX team doesn't just answer questions; they curate the backlog. By tagging and clustering user feedback directly in Linear issues, we create a heatmap of user friction points.</p>

        <h3>The Triage Process</h3>
        <p>Every morning, engineering leads review the "Triage" view. This isn't just a list of bugs; it's a pulse check on the product. Is a specific feature causing confusion? Is a regression slipping through?</p>

        <ul>
            <li><strong>Direct Link:</strong> Support tickets are linked 1:1 with Issues.</li>
            <li><strong>Velocity:</strong> Fixes are deployed instantly and status updates flow back to the user automatically.</li>
        </ul>
    `
    },
    {
        id: "continuous-planning",
        title: "Continuous planning in Linear",
        excerpt: "Moving away from quarterly waterfalls to a more fluid, adaptive planning cycle.",
        date: "Oct 30, 2025",
        author: { name: "Nan Yu" },
        readTime: "6 min read",
        artVariant: "continuous-planning",
        tags: ["Product", "Planning"],
        content: `
        <h2>The Death of the Quarter</h2>
        <p>Quarterly planning often leads to a "rush and crash" cycle. Teams scramble to meet arbitrary deadlines, leading to technical debt and burnout. We propose a different way: Continuous Planning.</p>
        
        <h3>Cycles, not Sprints</h3>
        <p>We work in cycles. A cycle is a heartbeat. It's long enough to get meaningful work done, but short enough to change direction if needed. It keeps the momentum high and the overhead low.</p>
        
        <pre><code>// The Planning Algorithm
while (project.isActive) {
  assessProgress();
  adjustScope();
  shipIncrement();
}</code></pre>

        <p>This fluidity allows us to capitalize on new opportunities immediately, rather than waiting for the next "Big Planning Meeting" three months down the road.</p>
    `
    },
    {
        id: "remote-work-design",
        title: "Designing remote work at Linear",
        excerpt: "Building a culture of trust and autonomy in a fully distributed organization.",
        date: "Oct 29, 2025",
        author: { name: "Karri Saarinen" },
        readTime: "7 min read",
        artVariant: "remote-work",
        tags: ["Culture", "Remote"],
        content: `
        <h2>Default to Async</h2>
        <p>Remote work fails when you try to replicate the office online. We don't do "virtual watercoolers" or constant Zoom calls. We default to writing.</p>
        
        <p>Writing forces clarity. If you can't explain your idea in a written proposal, you probably haven't thought it through enough. This creates a library of decisions that anyone can reference, regardless of their timezone.</p>
      `
    },
    {
        id: "self-driving-saas",
        title: "Self-driving SaaS: When software runs itself",
        excerpt: "The future of automation and AI agents in enterprise software.",
        date: "Oct 22, 2025",
        author: { name: "Karri Saarinen" },
        readTime: "10 min read",
        artVariant: "self-driving",
        tags: ["AI", "Future"],
        content: `
        <h2>The Age of Agents</h2>
        <p>We are entering an era where software doesn't just wait for input; it anticipates needs. Imagine a CRM that automatically updates based on your emails, or a project management tool that flags risks before they happen.</p>
        
        <p>"Self-driving" means the tool handles the busy work. It categorizes, it fills in blanks, it connects dots. The human remains the pilot, but the software is the navigator.</p>
      `
    },
    {
        id: "liquid-glass-spin",
        title: "A Linear spin on Liquid Glass",
        excerpt: "Exploring the new visual language and glassmorphism trends in UI design.",
        date: "Oct 21, 2025",
        author: { name: "Robb Böhnke" },
        readTime: "4 min read",
        artVariant: "liquid-glass",
        tags: ["UI", "Visuals"],
        content: `
        <h2>Transparency and Depth</h2>
        <p>Glassmorphism isn't just a trend; it's a way to establish hierarchy without adding clutter. By layering elements with blurring backgrounds, we create a sense of depth and context.</p>
        
        <p>Our implementation uses a custom backdrop filter stack to ensure legibility while maintaining that premium, airy feel that modern users love.</p>
      `
    }
];
