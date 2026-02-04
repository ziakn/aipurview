"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";

const frameworks = [
    "ISO 42001",
    "NIST AI RMF",
    "OWASP LLM 10",
    "EU AI ACT",
    "GDPR",
    "MITRE ATLAS",
];

const TrustBar = () => {
    return (
        <Section className="py-12 md:py-16 !pt-0">
            <div className="text-center mb-10">
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">Built on industry-leading frameworks</p>
            </div>
            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex space-x-12 md:space-x-24 px-12">
                    {[...frameworks, ...frameworks].map((framework, index) => (
                        <span
                            key={index}
                            className="text-2xl md:text-3xl font-black text-white/10 uppercase tracking-tighter transition-colors hover:text-white/20"
                        >
                            {framework}
                        </span>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default TrustBar;
