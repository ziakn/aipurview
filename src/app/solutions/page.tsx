import Link from "next/link";
import {
    Code2,
    Globe2,
    Layers,
    Rocket,
    ServerCog,
    ShieldCheck,
    Smartphone,
    Workflow,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";

const capabilities = [
    {
        title: "Web Application Development",
        description: "Fast, secure, responsive web platforms built for real business workflows, dashboards, portals, and customer experiences.",
        icon: Globe2,
    },
    {
        title: "Mobile App Development",
        description: "iOS, Android, and cross-platform mobile apps with polished interfaces, reliable APIs, and scalable release paths.",
        icon: Smartphone,
    },
    {
        title: "Custom Software",
        description: "Internal tools, automation systems, SaaS products, and tailored platforms designed around your operations.",
        icon: Code2,
    },
    {
        title: "System Integration",
        description: "Connect CRMs, payment systems, analytics, AI services, identity providers, and third-party business tools.",
        icon: Workflow,
    },
    {
        title: "Cloud & Backend Engineering",
        description: "APIs, databases, infrastructure, hosting, CI/CD, monitoring, and performance foundations for production systems.",
        icon: ServerCog,
    },
    {
        title: "Security & Compliance",
        description: "Secure architecture, access control, data protection, audit readiness, and AI governance built into the product lifecycle.",
        icon: ShieldCheck,
    },
];

const deliverySteps = [
    "Discovery, scope, and technical roadmap",
    "UX, product design, and clickable prototype",
    "Frontend, backend, mobile, and integration build",
    "Testing, security review, deployment, and launch",
    "Support, improvements, analytics, and scaling",
];

const SolutionsPage = () => {
    return (
        <main className="bg-background min-h-screen text-foreground">
            <Navbar />

            <section className="pt-40 pb-24 border-b border-card-border bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 mb-6 text-neon-blue text-sm font-semibold uppercase tracking-widest">
                            <Layers className="w-5 h-5" />
                            End-to-End Product Delivery
                        </div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 text-foreground">
                            Applications, websites, and mobile products built from idea to launch.
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-3xl mb-10">
                            We design, develop, secure, and maintain complete digital solutions: web applications, mobile apps, business platforms, integrations, and AI-ready systems.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/contact" className="btn-primary text-center">
                                Start a Project
                            </Link>
                            <Link href="/architecture" className="btn-secondary text-center">
                                View Technical Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Section className="bg-card-bg/20">
                <div className="mb-14 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-5 text-foreground">What we can build</h2>
                    <p className="text-foreground/60 leading-relaxed">
                        A single delivery team for product strategy, application development, security, deployment, and continuous improvement.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((item) => (
                        <div key={item.title} className="glass-card p-7">
                            <div className="w-11 h-11 rounded-md bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center mb-6">
                                <item.icon className="w-5 h-5 text-neon-blue" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                            <p className="text-sm text-foreground/60 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-5 text-neon-green text-sm font-semibold uppercase tracking-widest">
                            <Rocket className="w-5 h-5" />
                            Delivery Model
                        </div>
                        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-foreground">
                            From concept to live product, without handing work between scattered vendors.
                        </h2>
                        <p className="text-foreground/60 leading-relaxed">
                            We can handle the full application lifecycle or join your team for a focused build phase. The result is a practical product roadmap, clean engineering, secure deployment, and support after launch.
                        </p>
                    </div>

                    <div className="glass-card p-8">
                        <div className="space-y-5">
                            {deliverySteps.map((step, index) => (
                                <div key={step} className="flex gap-4 border-b border-card-border pb-5 last:border-b-0 last:pb-0">
                                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-foreground text-background text-sm font-semibold">
                                        {index + 1}
                                    </div>
                                    <p className="text-foreground/75 font-medium leading-relaxed">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            <section className="py-20 bg-dark-charcoal/60 border-y border-card-border">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Need an application, website, or mobile app?</h2>
                        <p className="text-foreground/60 leading-relaxed">
                            Share the idea, workflow, or business problem. We will shape it into a clear build plan.
                        </p>
                    </div>
                    <Link href="/contact" className="btn-primary text-center whitespace-nowrap">
                        Book a Consultation
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default SolutionsPage;
