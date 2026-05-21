"use client";

import { motion } from "framer-motion";
import { CheckCircle, FileSearch, HelpCircle, Layers, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";

const frameworkSteps = [
    {
        title: "Strategic Advisory & Compliance Alignment",
        description: "We help you navigate the evolving AI governance terrain by aligning your enterprise with regulatory standards, building a foundation of legitimacy and strategic foresight.",
        icon: Layers,
    },
    {
        title: "Comprehensive Risk & Model Assessment",
        description: "Replace checklists with deep model risk assessments to neutralize vulnerabilities and mitigate data breaches or fines.",
        icon: FileSearch,
    },
    {
        title: "Ethical Audit & Reliability Verification",
        description: "Audit AI models for bias and reliability to ensure ethical data stewardship and accountable decision-making across your entire enterprise.",
        icon: ShieldCheck,
    },
    {
        title: "Continuous Monitoring & Reporting",
        description: "Maintain model reliability and regulatory readiness through real-time threat monitoring, enabling responsible innovation without compromise.",
        icon: HelpCircle,
    },
];

const offers = [
    {
        title: "Enhanced Trust - Transparency",
        description: "Build stakeholder confidence with robust AI governance that ensures ethical and transparent AI operations.",
    },
    {
        title: "Risk Mitigation",
        description: "Proactively manage AI risks, safeguarding your organization from potential AI-related issues.",
    },
    {
        title: "Regulatory Readiness",
        description: "Stay compliant with the latest regulations, avoiding costly penalties and enhancing your market reputation.",
    },
    {
        title: "Strategic Alignment",
        description: "Align your AI initiatives with business objectives, ensuring they contribute to your organizational goals.",
    },
];

const faqs = [
    {
        question: "Why is AI governance important for organizations?",
        answer: "AI governance is essential for managing the ethical and operational risks of automation while ensuring global regulatory alignment. Our service provides the strategic oversight needed to build brand trust and prevent costly compliance failures.",
    },
    {
        question: "What are the key risks associated with AI models?",
        answer: "The primary risks include black box lack of transparency, algorithmic bias, and data security vulnerabilities. We neutralize these threats through deep-dive assessments that protect your enterprise from financial and reputational damage.",
    },
    {
        question: "How do you audit AI systems for fairness and bias?",
        answer: "We conduct Responsible AI internal audits that proactively monitor models for reliability and security hygiene. This process ensures your decision-making systems are ethically sound, accountable, and compliant with emerging standards.",
    },
    {
        question: "What does a Responsible AI framework include?",
        answer: "A comprehensive framework includes strategic advisory, deep-model risk assessments, and continuous operational monitoring. Our solution integrates these pillars to provide a seamless, end-to-end security posture for your AI lifecycle.",
    },
    {
        question: "How can businesses ensure AI compliance?",
        answer: "Businesses achieve compliance by aligning with global standards like ISO 42001 and NIST. Our AI Governance as a Service automates this alignment, providing the legitimacy and foresight required to navigate complex regulatory terrains.",
    },
];

const GovernancePage = () => {
    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            <section className="pt-40 pb-20 relative border-b border-card-border">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="mb-5 text-sm font-medium text-neon-blue">Our Services: AI Governance as a Service</div>
                        <h1 className="text-5xl md:text-7xl font-semibold mb-8 text-foreground">
                            AI Governance & Assurance
                        </h1>
                        <p className="text-foreground/65 text-xl leading-relaxed mb-8">
                            Standardize responsible AI across your organization and proactively eliminate compliance gaps before they scale.
                        </p>
                        <p className="text-foreground/60 text-lg leading-relaxed max-w-3xl">
                            Unify your AI innovation goals with a robust security and privacy posture. AI Governance is the cornerstone of responsible innovation, merging a robust technology platform with strategic advisory to help you navigate risks, ensure global compliance, and embed ethical integrity across your enterprise.
                        </p>
                        <a href="/contact" className="btn-primary mt-10 inline-flex">
                            Request a Free Risk Assessment
                        </a>
                    </motion.div>
                </div>
            </section>

            <Section>
                <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-foreground">Why Our AI Governance as a Service?</h2>
                        <p className="text-foreground/60 leading-relaxed">
                            Your AI is only as safe as its weakest governance guardrail. In a rapidly shifting regulatory landscape, a single governance gap can derail your AI transformation. We help organizations master AI compliance solutions by bridging innovation with global standards like NIST AI RMF, ISO/IEC 42001, MITRE ATLAS, and OWASP.
                        </p>
                    </div>
                    <div className="glass-card p-8">
                        <h3 className="mb-4 text-2xl font-semibold text-foreground">Master AI compliance and ethics</h3>
                        <p className="text-foreground/60 leading-relaxed">
                            Our AI Governance as a Service merges a robust security platform with strategic AI advisory to neutralize risks and accelerate trust. Our Responsible AI frameworks go beyond checklists, delivering a strategic defense across model resilience, ethical development, and data stewardship.
                        </p>
                    </div>
                </div>
            </Section>

            <Section className="bg-dark-charcoal/30">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-5 text-foreground">Our 4-Step AI Security and Compliance Framework</h2>
                    <p className="text-foreground/60">We simplify complex compliance and security requirements into a manageable, continuous process.</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {frameworkSteps.map((step, index) => (
                        <motion.div key={step.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.08 }} viewport={{ once: true }} className="glass-card p-7">
                            <step.icon className="mb-6 h-8 w-8 text-neon-blue" />
                            <div className="mb-3 text-sm font-semibold text-foreground/35">0{index + 1}</div>
                            <h3 className="mb-4 text-lg font-semibold text-foreground">{step.title}</h3>
                            <p className="text-sm leading-relaxed text-foreground/60">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section>
                <div className="mb-12 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-5 text-foreground">What We Offer</h2>
                    <p className="text-foreground/60">Partner with us for AI Governance and Risk, you will:</p>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                    {offers.map((offer) => (
                        <div key={offer.title} className="glass-card p-7">
                            <CheckCircle className="mb-5 h-7 w-7 text-neon-green" />
                            <h3 className="mb-3 text-xl font-semibold text-foreground">{offer.title}</h3>
                            <p className="text-sm leading-relaxed text-foreground/60">{offer.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="bg-dark-charcoal/30">
                <div className="mb-12 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-5 text-foreground">Frequently Asked Questions</h2>
                    <p className="text-foreground/60">Ensure that as your AI ecosystem grows, your ethical guardrails and security hygiene scale alongside it.</p>
                </div>
                <div className="space-y-5">
                    {faqs.map((faq) => (
                        <div key={faq.question} className="glass-card p-7">
                            <h3 className="mb-3 text-lg font-semibold text-foreground">{faq.question}</h3>
                            <p className="text-sm leading-relaxed text-foreground/60">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default GovernancePage;
