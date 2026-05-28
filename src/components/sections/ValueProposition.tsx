"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, FileCheck2, ShieldCheck, Target, Users, Zap } from "lucide-react";
import Section from "../ui/Section";

const features = [
    {
        title: "Prove Risk Oversight",
        description: "Translate strategy into execution with evidence that supports compliance, resilience, and audit readiness.",
        icon: ShieldCheck,
    },
    {
        title: "Validate Security Controls",
        description: "Quantify cyber risk and strengthen maturity with controls that can be reviewed and trusted.",
        icon: Zap,
    },
    {
        title: "Meet Privacy Regulations",
        description: "Integrate data privacy into a cohesive governance framework for emerging AI operations.",
        icon: Users,
    },
    {
        title: "Operationalize AI Governance",
        description: "Turn cybersecurity, privacy, and AI governance into practical business enablers.",
        icon: ClipboardCheck,
    },
];

const proofPoints = [
    { label: "Compliance with Frameworks", icon: FileCheck2 },
    { label: "Deliver Audit-Ready Evidence", icon: ShieldCheck },
    { label: "Targeted Workshop & Training", icon: Target },
    { label: "Third-Party Risk Management", icon: Users },
];

const ValueProposition = () => {
    return (
        <Section className="bg-background border-y border-card-border">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
                <div>
                    <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight text-foreground">
                        Engineering Strategic AI Governance for Trusted Outcomes
                    </h2>
                    <p className="text-foreground/65 text-lg mb-10 leading-relaxed">
                        AIPurview integrates governance of cybersecurity, data privacy and AI into a cohesive framework that supports compliance, resilience and audit readiness. We help organizations translate strategy into execution, quantifying cyber risk, enhancing maturity and enabling trusted outcomes.
                    </p>
                    <div className="space-y-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-5"
                            >
                                <div className="w-10 h-10 rounded-md bg-background border border-card-border flex items-center justify-center shrink-0">
                                    <feature.icon className="w-5 h-5 text-brand-orange" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2 text-foreground">{feature.title}</h4>
                                    <p className="text-foreground/60 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="glass-card p-8 lg:p-10">
                    <div className="border-b border-card-border pb-6 mb-6">
                        <div className="text-sm font-bold text-brand-orange mb-3">Your experienced partner</div>
                        <div className="text-3xl font-black leading-tight text-foreground mb-3 md:text-4xl">Turning Cybersecurity, Privacy and AI Governance into Business Enablers</div>
                        <p className="text-foreground/60 text-sm leading-relaxed">Focused governance support that helps your teams manage risk without disrupting the business.</p>
                    </div>
                    <div className="space-y-4">
                        {proofPoints.map((point) => (
                            <div key={point.label} className="flex items-center gap-3">
                                <point.icon className="h-5 w-5 text-brand-orange" />
                                <span className="text-sm font-semibold text-foreground/70">{point.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ValueProposition;
