"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Building2,
    CheckCircle2,
    Code2,
    Home,
    Target,
    Users,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const programIncludes = [
    "Tailored content for each audience and role",
    "Live workshops, briefings, and hands-on sessions",
    "Real-world scenarios from your own use cases",
    "EU AI Act and responsible-AI fundamentals",
    "Practical decision frameworks people remember",
    "Materials your teams keep and reuse",
];

const audiences = [
    {
        who: "All Staff",
        title: "AI Awareness",
        description: "Foundational literacy that helps everyone use AI safely and spot risk in their daily work.",
        items: [
            "What AI can and can't be trusted to do",
            "Safe use of AI tools and company data",
            "Recognizing bias, errors, and red flags",
            "When to pause and escalate",
        ],
        icon: Users,
    },
    {
        who: "Technical Teams",
        title: "Role-Specific Training",
        description: "Hands-on, practical training for the people who build, deploy, and maintain AI systems.",
        items: [
            "Secure and responsible model development",
            "Common AI vulnerabilities and failure modes",
            "Privacy, data handling, and documentation",
            "Embedding controls into the workflow",
        ],
        icon: Code2,
    },
    {
        who: "Leadership & Board",
        title: "Executive Briefings",
        description: "Strategic sessions that give leaders the context to govern AI with confidence.",
        items: [
            "The AI risk and regulatory landscape",
            "What good AI governance looks like",
            "The questions leaders should be asking",
            "Oversight and accountability at board level",
        ],
        icon: Building2,
    },
];

const steps = [
    {
        number: "01",
        title: "Assess",
        description: "We gauge current AI literacy and risk awareness across your teams to find where the gaps and priorities are.",
    },
    {
        number: "02",
        title: "Tailor",
        description: "We design content for each audience, grounded in your real use cases, tools, and governance framework.",
    },
    {
        number: "03",
        title: "Deliver",
        description: "We run engaging live workshops and briefings - practical, scenario-based, and pitched to each group.",
    },
    {
        number: "04",
        title: "Embed",
        description: "We leave behind materials, decision aids, and refreshers so the learning sticks and scales over time.",
    },
];

const outcomes = [
    { label: "Literacy", description: "A workforce that understands AI and its risks" },
    { label: "Confidence", description: "Teams that act on policy without hesitation" },
    { label: "Culture", description: "Responsible AI as a shared, everyday habit" },
    { label: "Evidence", description: "Demonstrable AI literacy for regulators" },
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

const TrainingPage = () => {
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
                        <span>Training & Awareness for AI</span>
                    </div>

                    <Eyebrow>Training & Awareness for AI</Eyebrow>
                    <h1 className="mt-5 max-w-[900px] text-[clamp(2.2rem,5vw,3.75rem)] font-black leading-[1.05] tracking-[0] text-foreground">
                        Your policies are only as strong as the <span className="text-brand-orange">people who apply them</span>.
                    </h1>
                    <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-foreground/66 md:text-[18.5px]">
                        AI governance fails when it lives in a document no one reads. We build practical training and awareness programs for every level of your organization - so responsible AI becomes everyday practice, not just policy.
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
                            Turn AI policy into everyday practice and culture
                        </h2>
                        <div className="mt-5 space-y-4 text-[16.5px] leading-relaxed text-foreground/64">
                            <p>Most AI risk doesn&apos;t come from bad intent - it comes from people who simply weren&apos;t equipped to recognize it. A developer who doesn&apos;t know how a model can leak data. A manager who approves an AI tool without asking the right questions. A board that can&apos;t tell whether its AI exposure is under control.</p>
                            <p>We close that gap with training built around how your people actually work. Each program is tailored to its audience - practical for staff, technical for builders, and strategic for leaders - so everyone understands their role in deploying AI responsibly.</p>
                            <p>The result is an organization where good AI decisions happen by default, not by chance - and where your governance framework is something people live, not just sign.</p>
                        </div>
                    </motion.div>

                    <motion.aside
                        {...reveal}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="rounded-md bg-[#2a1467] p-8 text-white shadow-[0_30px_60px_-30px_rgba(42,20,103,0.5)]"
                    >
                        <h3 className="mb-5 text-xl font-black text-white">What our programs include</h3>
                        <ul className="space-y-3.5">
                            {programIncludes.map((item) => (
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
                            The EU AI Act expects AI literacy - not just for specialists, but across your workforce.
                        </h2>
                        <p className="mt-5 max-w-[640px] text-[17.5px] leading-relaxed text-foreground/64">
                            Regulation increasingly assumes that the people building, buying, and overseeing AI understand its risks. Training is no longer a nice-to-have; it&apos;s becoming an expectation you&apos;ll need to demonstrate - and the most effective way to reduce day-to-day AI risk at the source.
                        </p>
                    </div>
                </motion.div>
            </section>

            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-[1180px] px-7">
                    <motion.div className="mb-12 max-w-[720px]" {...reveal}>
                        <Eyebrow>Who we train</Eyebrow>
                        <h2 className="mt-5 text-[clamp(1.8rem,3.6vw,2.75rem)] font-black leading-tight">
                            A full program, tailored to every level.
                        </h2>
                        <p className="mt-5 text-[17px] leading-relaxed text-foreground/64">
                            Responsible AI takes the whole organization. We meet each audience where they are - with content pitched to their role, their risks, and their decisions.
                        </p>
                    </motion.div>

                    <div className="grid gap-5 lg:grid-cols-3">
                        {audiences.map((audience, index) => {
                            const Icon = audience.icon;
                            return (
                                <motion.div
                                    key={audience.title}
                                    className="rounded-md border border-[#e3e1da] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f3b98a] hover:shadow-[0_24px_44px_-28px_rgba(35,39,46,0.4)]"
                                    {...reveal}
                                    transition={{ duration: 0.55, delay: index * 0.05 }}
                                >
                                    <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-md bg-[#fbe6d4] text-brand-orange">
                                        <Icon className="h-[23px] w-[23px]" />
                                    </div>
                                    <div className="mb-2 text-xs font-black uppercase tracking-[0.12em] text-brand-orange">{audience.who}</div>
                                    <h3 className="text-lg font-black leading-tight">{audience.title}</h3>
                                    <p className="mt-3 text-[14.7px] leading-relaxed text-foreground/64">{audience.description}</p>
                                    <ul className="mt-4 space-y-2.5">
                                        {audience.items.map((item) => (
                                            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-foreground/64">
                                                <span className="mt-2 h-2 w-2 shrink-0 rounded-[2px] bg-[#f3b98a]" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
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
                            A program built around your organization.
                        </h2>
                        <p className="mt-5 text-[17px] leading-relaxed text-foreground/64">
                            We don&apos;t deliver generic slideware. Every program is shaped to your context, your tools, and your risks.
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
                            Make responsible AI something your people live.
                        </h2>
                        <p className="mx-auto mt-5 max-w-[620px] text-lg leading-relaxed text-[#cfc7e6]">
                            In one conversation, we&apos;ll map your teams&apos; AI literacy gaps and outline a training program that fits your organization.
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

export default TrainingPage;
