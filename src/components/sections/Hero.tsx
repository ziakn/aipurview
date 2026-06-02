"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative overflow-hidden border-b border-card-border bg-background pt-28 md:pt-36">
            <div className="mx-auto grid max-w-[1180px] gap-10 px-7 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                >
                    <div className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
                        Secure Foundations for Scalable Innovation
                    </div>
                    <h1 className="max-w-4xl text-[clamp(2.75rem,5.4vw,5rem)] font-black leading-[1.02] text-foreground">
                        AI Governance you can <span className="text-brand-orange">prove</span>, AI Risk you can <span className="text-brand-orange">manage</span>.
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/65">
                        As you integrate AI, our governance services help you stay compliant, protect data, and accelerate innovation without slowing the business down.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link href="/contact" className="btn-primary text-center">
                            Book a Free 30-Minute Consultation <span aria-hidden="true">→</span>
                        </Link>
                        <Link href="#governance" className="btn-secondary text-center">
                            Discover More
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.14 }}
                    className="rounded-2xl bg-[#2a1467] p-8 text-white shadow-xl"
                >
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#f3b98a]">The AI Governance Dilemma</div>
                    <h2 className="mt-4 text-2xl font-bold leading-tight text-white">
                        The biggest risk isn&apos;t AI. It&apos;s deploying it without governance.
                    </h2>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {["ISO 42001 Aligned", "EU AI Act Ready", "Practitioner-Led", "Audit-Ready Evidence"].map((label) => (
                            <span key={label} className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white/85">
                                {label}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
