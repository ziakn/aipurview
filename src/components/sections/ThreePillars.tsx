"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "../ui/Section";

const pillars = [
    {
        title: "Governance",
        description: "Navigate the EU AI Act and ISO 42001 with confidence. Our strategic framework ensures compliance while maintaining agility.",
        icon: ShieldCheck,
        color: "neon-blue",
        href: "/governance",
    },
    {
        title: "Architecture",
        description: "Deep-tech security defense. From red teaming to guardrail implementation, we harden your AI infrastructure from the core.",
        icon: Cpu,
        color: "neon-green",
        href: "/architecture",
    },
    {
        title: "Training",
        description: "Empower your workforce. Role-specific education from executive briefings to technical prompt injection defense workshops.",
        icon: GraduationCap,
        color: "neon-purple",
        href: "/training",
    },
];

const ThreePillars = () => {
    return (
        <Section className="bg-dark-charcoal/30">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {pillars.map((pillar, index) => (
                    <motion.div
                        key={pillar.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group glass-card p-10 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
                    >
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-${pillar.color}/10 -mr-16 -mt-16 rounded-full blur-[80px] group-hover:bg-${pillar.color}/20 transition-all`} />

                        <div className={`w-16 h-16 rounded-2xl bg-${pillar.color}/10 border border-${pillar.color}/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                            <pillar.icon className={`w-8 h-8 text-${pillar.color}`} />
                        </div>

                        <h3 className="text-2xl font-bold mb-4 text-white">{pillar.title}</h3>
                        <p className="text-white/50 leading-relaxed mb-8">
                            {pillar.description}
                        </p>

                        <Link
                            href={pillar.href}
                            className={`inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-${pillar.color} hover:translate-x-1 transition-transform`}
                        >
                            <span>Explore {pillar.title}</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default ThreePillars;
