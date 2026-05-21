"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative min-h-[88vh] flex items-center pt-24 overflow-hidden border-b border-card-border">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="mb-8 inline-flex border-l-2 border-neon-blue pl-4"
                >
                    <span className="text-foreground/60 text-sm font-medium">
                        Secure Foundations for Scalable Innovation
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-[1.05] tracking-tight text-foreground max-w-5xl"
                >
                    AI Governance you can prove, AI Risk you can manage.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.18 }}
                    className="text-foreground/65 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
                >
                    As you integrate AI, our Governance Services ensure compliance, protect data, and accelerate innovation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.26 }}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
                >
                    <Link href="/ai-risk-and-governance">
                        <Button size="lg" className="w-full sm:w-auto">
                            Discover More
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            Book a Consultation
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
