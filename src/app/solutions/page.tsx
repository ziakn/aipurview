import Link from "next/link";
import {
    Bot,
    BrainCircuit,
    DatabaseZap,
    Gauge,
    Layers,
    Rocket,
    ShieldCheck,
    Workflow,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";

const capabilities = [
    {
        title: "Domain-Specific AI Models",
        description: "Models shaped around your policies, data, terminology, and decision flows instead of generic prompts wrapped in a basic interface.",
        icon: BrainCircuit,
    },
    {
        title: "Secure Model Workflows",
        description: "AI workflows with role-based access, human review points, logging, and safeguards for sensitive business decisions.",
        icon: Workflow,
    },
    {
        title: "Private Knowledge Systems",
        description: "Retrieval, classification, and reasoning systems connected to approved internal sources so teams can use trusted context.",
        icon: DatabaseZap,
    },
    {
        title: "AI Agents With Boundaries",
        description: "Task-specific agents that know what they can do, when to escalate, and how to leave evidence behind for review.",
        icon: Bot,
    },
    {
        title: "Model Evaluation & Tuning",
        description: "Evaluation sets, performance checks, red-team scenarios, and tuning cycles that prove whether the model is fit for use.",
        icon: Gauge,
    },
    {
        title: "Governed AI Deployment",
        description: "Production AI systems designed with privacy, security, audit readiness, and responsible-use controls from the start.",
        icon: ShieldCheck,
    },
];

const deliverySteps = [
    "Map the business decision, data sources, and risk boundaries",
    "Select, configure, or fine-tune the right model approach",
    "Build guarded workflows, integrations, and review paths",
    "Evaluate performance, security, privacy, and failure modes",
    "Monitor usage, improve outcomes, and keep evidence audit-ready",
];

const SolutionsPage = () => {
    return (
        <main className="bg-background min-h-screen text-foreground">
            <Navbar />

            <section className="pt-40 pb-24 border-b border-card-border bg-background">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl">
                        <div className="inline-flex items-center gap-2 mb-6 text-neon-blue text-sm font-semibold uppercase tracking-[0]">
                            <Layers className="w-5 h-5" />
                            Tailored AI Systems
                        </div>
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-[0] mb-8 text-foreground">
                            AI models built around your business, data, and risk reality.
                        </h1>
                        <p className="text-lg md:text-xl text-foreground/60 leading-relaxed max-w-3xl mb-10">
                            We do not sell generic websites, mobile apps, or vibe-coded prototypes. We design governed AI models and operational systems that fit your workflows, protect your data, and produce decisions your team can trust.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link href="/contact" className="btn-primary text-center">
                                Start a Project
                            </Link>
                            <Link href="/architecture" className="btn-secondary text-center">
                                View AI Architecture
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Section className="bg-card-bg/20">
                <div className="mb-14 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-5 text-foreground">AI models we can build</h2>
                    <p className="text-foreground/60 leading-relaxed">
                        Tailored AI systems for organizations that need more than off-the-shelf automation, generic chatbots, or one-size-fits-all coding.
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
                        <div className="inline-flex items-center gap-2 mb-5 text-neon-green text-sm font-semibold uppercase tracking-[0]">
                            <Rocket className="w-5 h-5" />
                            Model Delivery
                        </div>
                        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-foreground">
                            From business need to governed AI model, with security built into the process.
                        </h2>
                        <p className="text-foreground/60 leading-relaxed">
                            We help you define where AI should act, what data it can use, how outputs are reviewed, and how the system is measured after launch. The result is a practical AI capability your team can operate with confidence.
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
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-foreground">Need an AI model built for your organization?</h2>
                        <p className="text-foreground/60 leading-relaxed">
                            Share the workflow, decision, or risk problem. We will shape it into a secure AI model plan.
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
