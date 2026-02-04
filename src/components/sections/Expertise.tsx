"use client";

import { motion } from "framer-motion";
import { Award, Target, Zap, ShieldCheck } from "lucide-react";
import Section from "../ui/Section";

const advantages = [
    {
        title: "Boutique Focus",
        description: "We aren't a generic consulting firm. We specialize exclusively in AI security and governance for the EU market.",
        icon: Target,
    },
    {
        title: "Fractional Efficiency",
        description: "Get elite C-suite expertise at a fraction of the cost of a full-time hire, scaling with your organizational needs.",
        icon: Zap,
    },
    {
        title: "Regulatory Precision",
        description: "Our experts live and breathe the EU AI Act, GDPR, and ISO standards, ensuring no compliance gap is left unaddressed.",
        icon: Award,
    },
    {
        title: "Technical Depth",
        description: "We don't just write policies; we implement technical guardrails and adversarial defenses to harden your AI pipelines.",
        icon: ShieldCheck,
    },
];

const Expertise = () => {
    return (
        <Section className="bg-dark-charcoal/20">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                        The Boutique <br />
                        <span className="text-neon-green">Advantage</span>
                    </h2>
                    <p className="text-white/60 text-lg mb-10 leading-relaxed">
                        In the rapidly evolving AI landscape, generic security isn't enough. AIPurview provides high-impact, specialized expertise that larger firms simply can't match for speed and depth.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {advantages.map((adv, index) => (
                            <motion.div
                                key={adv.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-3"
                            >
                                <div className="flex items-center space-x-3">
                                    <adv.icon className="w-5 h-5 text-neon-green" />
                                    <h4 className="font-bold text-white">{adv.title}</h4>
                                </div>
                                <p className="text-white/40 text-sm">{adv.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <div className="aspect-square glass-card rotate-3 border-neon-green/20 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-transparent group-hover:from-neon-green/20 transition-all duration-700" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="p-12 text-center">
                                <div className="inline-block px-4 py-2 bg-neon-green/10 border border-neon-green/20 rounded-full text-neon-green text-xs font-bold uppercase tracking-widest mb-6">
                                    Elite Security Boutique
                                </div>
                                <h3 className="text-3xl font-black mb-4">Dedicated to <br /> EU Enterprises</h3>
                                <p className="text-white/40 text-sm max-w-xs mx-auto">
                                    We provide the "license to operate" in the world's most regulated AI environment.
                                </p>
                            </div>
                        </div>
                        {/* Abstract tech elements */}
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-neon-green/5 blur-3xl rounded-full" />
                        <div className="absolute top-0 left-0 w-24 h-24 bg-neon-blue/5 blur-2xl rounded-full" />
                    </div>
                    {/* Decorative floating card */}
                    <motion.div
                        initial={{ y: 20 }}
                        animate={{ y: -20 }}
                        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                        className="absolute -bottom-10 -left-10 glass-card p-6 border-white/10 hidden md:block"
                    >
                        <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 rounded-full bg-neon-green/20 flex items-center justify-center">
                                <ShieldCheck className="w-5 h-5 text-neon-green" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-white uppercase tracking-widest">ISO 42001 Expert</p>
                                <p className="text-[10px] text-white/40">Conformity Evaluated</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default Expertise;
