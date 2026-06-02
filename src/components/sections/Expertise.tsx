"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Search, ShieldCheck, UserRound } from "lucide-react";
import Link from "next/link";
import Section from "../ui/Section";

const services = [
    {
        title: "AI Governance & Assurance",
        description: "Assess, implement, and prove compliance with the EU AI Act and ISO 42001 so responsible AI is provable to regulators, boards, and customers.",
        icon: ShieldCheck,
        href: "/ai-risk-and-governance",
    },
    {
        title: "AI System Technical Assessment",
        description: "Find the risks in your models, data pipelines, and integrations, including adversarial exposure and failure modes, before they reach production.",
        icon: Search,
        href: "/architecture",
    },
    {
        title: "Training & Awareness for AI",
        description: "Equip teams and leaders to recognize AI risk and apply safeguards with confidence, turning policy into everyday practice and culture.",
        icon: GraduationCap,
        href: "/training",
    },
    {
        title: "vCISO Leadership",
        description: "Executive-level security and AI risk strategy, board-ready reporting, and a roadmap that scales governance alongside your ambition.",
        icon: UserRound,
        href: "/vciso",
    },
];

const Expertise = () => {
    return (
        <Section id="services" className="bg-background">
            <div className="max-w-3xl">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">Our Services</div>
                <h2 className="mt-4 text-3xl font-black leading-tight text-foreground md:text-5xl">Tailored AI governance services, aligned to your objectives.</h2>
                <p className="mt-5 text-lg leading-relaxed text-foreground/65">
                    We deliver modular, AI-focused services that map directly to your risk posture, regulatory obligations, and operational goals.
                </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        viewport={{ once: true }}
                        className="glass-card flex flex-col p-6"
                    >
                        <service.icon className="mb-5 h-7 w-7 text-brand-orange" />
                        <h3 className="text-lg font-bold leading-tight text-foreground">{service.title}</h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/60">{service.description}</p>
                        <Link href={service.href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-orange">
                            Explore service <ArrowRight className="h-4 w-4" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Expertise;
