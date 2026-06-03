"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
    Activity,
    ArrowRight,
    CheckCircle2,
    Clock,
    GitBranch,
    Home,
    Lock,
    Search,
    Shield,
    Target,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const assessmentIncludes = [
    "Threat modeling of your AI system and its data flows",
    "Adversarial and red-team testing of the model",
    "Data, privacy, and pipeline security review",
    "Safety, bias, and reliability evaluation",
    "Prioritized findings with severity ratings",
    "Clear, actionable remediation roadmap",
];

const testAreas = [
    {
        title: "Adversarial Robustness",
        description: "How your model holds up against prompt injection, evasion, data poisoning, and other adversarial techniques designed to manipulate its behavior.",
        icon: Shield,
    },
    {
        title: "Data & Privacy Exposure",
        description: "Whether your system can leak training data, expose sensitive information, or be probed to reconstruct confidential inputs.",
        icon: Lock,
    },
    {
        title: "Pipeline & Integration Security",
        description: "The security of the infrastructure around your model - APIs, data flows, dependencies, and the integrations that connect it to the rest of your stack.",
        icon: GitBranch,
    },
    {
        title: "Reliability & Failure Modes",
        description: "How your system behaves under edge cases, unexpected inputs, and load - and how gracefully it fails when it does.",
        icon: Activity,
    },
    {
        title: "Bias & Fairness",
        description: "Whether your model produces systematically unfair or skewed outputs across groups, use cases, or conditions that could create harm or liability.",
        icon: Clock,
    },
    {
        title: "Transparency & Explainability",
        description: "Whether the system's decisions can be understood, traced, and justified - a growing expectation from regulators, auditors, and users alike.",
        icon: Search,
    },
];

const steps = [
    {
        number: "01",
        title: "Scope",
        description: "We define the systems in scope, agree on objectives and rules of engagement, and map the model, data, and integrations to be tested.",
    },
    {
        number: "02",
        title: "Test",
        description: "We run hands-on security and safety testing - adversarial attacks, data and pipeline review, and reliability and bias evaluation.",
    },
    {
        number: "03",
        title: "Analyze",
        description: "We triage every finding by severity and business impact, separating critical exposure from lower-priority hardening opportunities.",
    },
    {
        number: "04",
        title: "Report",
        description: "We deliver a clear report with prioritized findings and a practical remediation roadmap - and walk your team through it.",
    },
];

const outcomes = [
    { label: "Visibility", description: "A clear map of where your AI is exposed and why" },
    { label: "Priorities", description: "Findings ranked by severity and business impact" },
    { label: "A Roadmap", description: "Practical, actionable steps to fix what matters" },
    { label: "Evidence", description: "Proof of due diligence for boards and regulators" },
];

const reveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.55 },
};

const Eyebrow = ({ children }: { children: string }) => (
    <span className="inline-flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.16em] text-brand-orange">
        <span className="h-0.5 w-6 bg-brand-orange" />
        {children}
    </span>
);

const PrimaryLink = ({ href, children }: { href: string; children: ReactNode }) => (
    <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-4 text-[15px] font-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground"
    >
        {children}
    </Link>
);

const ArchitecturePage = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="overflow-hidden border-b border-[#e3e1da] pt-28 pb-10 md:pt-36 md:pb-14">
                <motion.div
                    className="mx-auto max-w-[1180px] px-7"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                >
                    <div className="mb-5 flex flex-wrap items-center gap-2 text-[13px] font-semibold text-foreground/48">
                        <Link href="/" className="inline-flex items-center gap-1 transition-colors hover:text-brand-orange">
                            <Home className="h-3.5 w-3.5" />
                            Home
                        </Link>
                        <span>/</span>
                        <span>Services</span>
                        <span>/</span>
                        <span>AI System Technical Assessment</span>
                    </div>

                    <Eyebrow>AI System Technical Assessment</Eyebrow>
                    <h1 className="mt-5 max-w-[900px] text-[clamp(2.2rem,5vw,3.75rem)] font-black leading-[1.05] tracking-[0] text-foreground">
                        Find the risks in your AI <span className="text-brand-orange">before production does</span>.
                    </h1>
                    <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-foreground/66 md:text-[18.5px]">
                        An independent, hands-on assessment of your AI systems - from models and data pipelines to integrations - testing both security and safety so you can deploy with evidence, not assumptions.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3.5">
                        <PrimaryLink href="mailto:info@aipurview.com">
                            Book a Free 30-Minute Consultation <ArrowRight className="h-4 w-4" />
                        </PrimaryLink>
                        <Link
                            href="/#services"
                            className="inline-flex items-center rounded-md border-2 border-foreground px-6 py-4 text-[15px] font-black text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-white"
                        >
                            All Services
                        </Link>
                    </div>
                </motion.div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto grid max-w-[1180px] gap-10 px-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <motion.div {...reveal}>
                        <h2 className="max-w-[620px] text-[clamp(1.6rem,3vw,2.125rem)] font-black leading-tight">
                            Know exactly where your AI is exposed
                        </h2>
                        <div className="mt-5 space-y-4 text-[16.5px] leading-relaxed text-foreground/64">
                            <p>AI systems fail in ways traditional software doesn&apos;t. Models can be manipulated, leak sensitive data, behave unpredictably on edge cases, or degrade silently over time - and most of these risks never surface in a standard QA cycle.</p>
                            <p>Our technical assessment puts your AI under real scrutiny. We examine the model, the data it learns from, the pipeline that serves it, and the integrations around it - combining security testing with safety and reliability analysis to give you a complete picture of your exposure.</p>
                            <p>You walk away with a clear, prioritized view of what&apos;s at risk, how severe it is, and exactly what to fix - so you can move to production with confidence instead of crossing your fingers.</p>
                        </div>
                    </motion.div>

                    <motion.aside
                        {...reveal}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="rounded-md bg-[#2a1467] p-8 text-white shadow-[0_30px_60px_-30px_rgba(42,20,103,0.5)]"
                    >
                        <h3 className="mb-5 text-xl font-black text-white">What a typical assessment includes</h3>
                        <ul className="space-y-3.5">
                            {assessmentIncludes.map((item) => (
                                <li key={item} className="flex gap-3 text-[14.7px] leading-relaxed text-white/84">
                                    <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#f3b98a]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.aside>
                </div>
            </section>

            <section className="border-y border-[#e3e1da] bg-[#f3f1ec] py-16">
                <motion.div className="mx-auto grid max-w-[1180px] gap-8 px-7 lg:grid-cols-[0.7fr_1.3fr]" {...reveal}>
                    <div className="text-[13px] font-black uppercase tracking-[0.13em] text-foreground/45">
                        Why it
                        <b className="block pt-1 text-3xl font-black normal-case tracking-[0] text-brand-orange">Matters</b>
                    </div>
                    <div>
                        <h2 className="max-w-[760px] text-[clamp(1.65rem,3.2vw,2.375rem)] font-black leading-tight">
                            A model that performs well in a demo can still fail dangerously in the real world.
                        </h2>
                        <p className="mt-5 max-w-[640px] text-[17.5px] leading-relaxed text-foreground/64">
                            Adversarial attacks, data leakage, biased outputs, and silent failures don&apos;t show up in accuracy metrics - but regulators, attackers, and your users will find them. Testing before deployment is far cheaper than discovering these issues in production.
                        </p>
                    </div>
                </motion.div>
            </section>

            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-[1180px] px-7">
                    <motion.div className="mb-12 max-w-[720px]" {...reveal}>
                        <Eyebrow>What we test</Eyebrow>
                        <h2 className="mt-5 text-[clamp(1.8rem,3.6vw,2.75rem)] font-black leading-tight">
                            A full technical risk review - security and safety.
                        </h2>
                        <p className="mt-5 text-[17px] leading-relaxed text-foreground/64">
                            We assess your AI across the dimensions that matter most, combining offensive security techniques with rigorous safety and reliability analysis.
                        </p>
                    </motion.div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {testAreas.map((area, index) => {
                            const Icon = area.icon;
                            return (
                                <motion.div
                                    key={area.title}
                                    className="rounded-md border border-[#e3e1da] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f3b98a] hover:shadow-[0_24px_44px_-28px_rgba(35,39,46,0.4)]"
                                    {...reveal}
                                    transition={{ duration: 0.55, delay: index * 0.05 }}
                                >
                                    <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-md bg-[#fbe6d4] text-brand-orange">
                                        <Icon className="h-[23px] w-[23px]" />
                                    </div>
                                    <h3 className="text-lg font-black leading-tight">{area.title}</h3>
                                    <p className="mt-3 text-[14.7px] leading-relaxed text-foreground/64">{area.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="pb-16 md:pb-20">
                <div className="mx-auto max-w-[1180px] px-7">
                    <motion.div className="mb-12 max-w-[720px]" {...reveal}>
                        <Eyebrow>How it works</Eyebrow>
                        <h2 className="mt-5 text-[clamp(1.8rem,3.6vw,2.75rem)] font-black leading-tight">
                            A structured assessment, in four steps.
                        </h2>
                        <p className="mt-5 text-[17px] leading-relaxed text-foreground/64">
                            A clear, time-boxed engagement that fits around your team and delivers findings you can act on immediately.
                        </p>
                    </motion.div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.title}
                                className="relative rounded-md border border-[#e3e1da] bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_44px_-28px_rgba(35,39,46,0.4)]"
                                {...reveal}
                                transition={{ duration: 0.55, delay: index * 0.05 }}
                            >
                                <div className="text-3xl font-black text-[#f3b98a]">{step.number}</div>
                                <h3 className="mt-4 text-lg font-black">{step.title}</h3>
                                <p className="mt-2 text-[14.3px] leading-relaxed text-foreground/64">{step.description}</p>
                                <span className="absolute bottom-0 left-6 h-1 w-12 bg-brand-orange" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="border-y border-[#e3e1da] bg-[#f3f1ec] py-16 md:py-20">
                <div className="mx-auto max-w-[1180px] px-7">
                    <motion.div className="mb-10 max-w-[720px]" {...reveal}>
                        <Eyebrow>Outcomes</Eyebrow>
                        <h2 className="mt-5 text-[clamp(1.8rem,3.6vw,2.75rem)] font-black leading-tight">
                            What you walk away with.
                        </h2>
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {outcomes.map((outcome, index) => (
                            <motion.div
                                key={outcome.label}
                                className="rounded-md border border-[#e3e1da] bg-white p-6"
                                {...reveal}
                                transition={{ duration: 0.55, delay: index * 0.05 }}
                            >
                                <b className="block text-3xl font-black text-brand-orange">{outcome.label}</b>
                                <span className="mt-2 block text-sm leading-relaxed text-foreground/64">{outcome.description}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-[1180px] px-7">
                    <motion.div className="rounded-md bg-[#2a1467] px-6 py-16 text-center md:px-10 md:py-[70px]" {...reveal}>
                        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-white/10 text-[#f3b98a]">
                            <Target className="h-7 w-7" />
                        </div>
                        <h2 className="mx-auto max-w-[760px] text-[clamp(1.8rem,3.6vw,2.75rem)] font-black leading-tight text-white">
                            Don&apos;t wait for production to find the risks.
                        </h2>
                        <p className="mx-auto mt-5 max-w-[620px] text-lg leading-relaxed text-[#cfc7e6]">
                            In one conversation, we&apos;ll scope where your AI is most exposed and what a technical assessment would cover for your systems.
                        </p>
                        <div className="mt-8">
                            <PrimaryLink href="mailto:info@aipurview.com">
                                Book a Free 30-Minute Consultation <ArrowRight className="h-4 w-4" />
                            </PrimaryLink>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ArchitecturePage;
