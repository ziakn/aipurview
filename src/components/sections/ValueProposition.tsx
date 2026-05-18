"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Users, Zap } from "lucide-react";
import Section from "../ui/Section";

const features = [
    {
        title: "EU AI Act Specialists",
        description: "Deep expertise in Article 11 technical documentation and Article 12 logging requirements.",
        icon: ShieldCheck,
    },
    {
        title: "ISO 42001 Evaluated",
        description: "We help you build an AI Management System (AIMS) that meets international conformity standards.",
        icon: Zap,
    },
    {
        title: "Fractional Leadership",
        description: "Dedicated vCISO support for high-stakes regulatory milestones and strategic AI hardening.",
        icon: Users,
    },
    {
        title: "100% Remote Delivery",
        description: "Elite security consulting delivered seamlessly across all EU member states.",
        icon: Globe,
    },
];

const ValueProposition = () => {
    return (
        <Section className="bg-dark-charcoal/60 border-y border-card-border">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
                <div>
                    <h2 className="text-3xl md:text-5xl font-semibold mb-8 leading-tight text-foreground">
                        Why EU teams bring us in
                    </h2>
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
                                    <feature.icon className="w-5 h-5 text-neon-blue" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold mb-2 text-foreground">{feature.title}</h4>
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
                        <div className="text-sm font-medium text-foreground/55 mb-3">Delivery model</div>
                        <div className="text-4xl font-semibold text-foreground mb-3">Remote across the EU</div>
                        <p className="text-foreground/60 text-sm leading-relaxed">Focused security and governance support for distributed product, legal, and security teams.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <div className="text-2xl font-semibold text-foreground">27</div>
                            <div className="text-sm text-foreground/55">Member states covered</div>
                        </div>
                        <div>
                            <div className="text-2xl font-semibold text-foreground">AI Act</div>
                            <div className="text-sm text-foreground/55">Policy focus</div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ValueProposition;
