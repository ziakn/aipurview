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
        <Section className="bg-dark-charcoal/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-foreground">
                        Why leading EU <br />
                        enterprises <span className="text-neon-blue">trust us.</span>
                    </h2>
                    <div className="space-y-12">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-6"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center shrink-0">
                                    <feature.icon className="w-6 h-6 text-neon-blue" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h4>
                                    <p className="text-foreground/50 text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <div className="aspect-square glass-card rotate-3 border-neon-blue/20 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center text-center p-12">
                            <div>
                                <div className="text-6xl font-black text-neon-blue mb-4">100%</div>
                                <div className="text-xl font-bold text-foreground mb-2">Remote EU Delivery</div>
                                <p className="text-foreground/40 text-sm">Providing elite security expertise across all 27 member states, regardless of location.</p>
                            </div>
                        </div>
                        {/* Decorative dots */}
                        <div className="absolute top-10 right-10 flex space-x-2">
                            <div className="w-2 h-2 rounded-full bg-neon-blue" />
                            <div className="w-2 h-2 rounded-full bg-neon-blue/30" />
                            <div className="w-2 h-2 rounded-full bg-neon-blue/10" />
                        </div>
                    </div>
                    {/* Badge */}
                    <div className="absolute -bottom-10 -right-10 bg-eu-blue p-8 rounded-2xl shadow-2xl border border-card-border hidden md:block">
                        <div className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-2">Policy Focus</div>
                        <div className="text-white text-2xl font-black leading-none">EU AI ACT <br /> EXPERTS</div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default ValueProposition;
