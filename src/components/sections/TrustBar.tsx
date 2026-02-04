"use client";

import Section from "../ui/Section";

const frameworks = [
    "EU AI Act", "ISO 42001", "NIST AI RMF", "GDPR", "IEEE 7000", "OECD AI Principles"
];

const TrustBar = () => {
    return (
        <div className="py-12 border-y border-card-border bg-background relative overflow-hidden">
            <div className="flex animate-marquee gap-20">
                {[...frameworks, ...frameworks].map((f, i) => (
                    <span
                        key={i}
                        className="text-foreground/20 text-xl md:text-2xl font-black uppercase tracking-widest whitespace-nowrap"
                    >
                        {f}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default TrustBar;
