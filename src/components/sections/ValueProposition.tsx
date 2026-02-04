"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Globe, ShieldAlert } from "lucide-react";
import Section from "../ui/Section";

const values = [
    {
        title: "EU-Wide Remote Delivery",
        description: "Our experts serve clients across the European Union with remote-first delivery models, ensuring compliance regardless of your location.",
        icon: Globe,
    },
    {
        title: "Expertise in EU AI Act",
        description: "Deep specialization in navigating the complexities of the world's first comprehensive AI regulation, from risk tiering to conformity assessments.",
        icon: ShieldAlert,
    },
    {
        title: "ISO 42001 & NIST Standards",
        description: "Implementing internationally recognized frameworks for AI Management Systems (AIMS) and Risk Management to ensure global interoperability.",
        icon: CheckCircle2,
    },
];

const ValueProposition = () => {
    return (
        <Section>
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 px-5 lg:px-0">
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                        Why partner with <br />
                        <span className="text-neon-blue">AIPurview?</span>
                    </h2>
                </div>
                <div className="md:w-1/2">
                    <p className="text-white/60 text-lg leading-relaxed">
                        We provide the "License to Operate" for AI-first enterprises. Our boutique approach ensures you get high-touch, executive-level expertise without the overhead of big-firm consulting.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {values.map((value, index) => (
                    <motion.div
                        key={value.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col space-y-4"
                    >
                        <div className="w-12 h-12 rounded-full border border-neon-blue/20 flex items-center justify-center bg-neon-blue/5">
                            <value.icon className="w-6 h-6 text-neon-blue" />
                        </div>
                        <h4 className="text-xl font-bold text-white">{value.title}</h4>
                        <p className="text-white/50 text-sm leading-relaxed">
                            {value.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default ValueProposition;
