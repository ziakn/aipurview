"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/Button";

const Hero = () => {
    return (
        <section className="relative overflow-hidden border-b border-card-border bg-background pt-28 md:pt-32">
            <div className="mx-auto max-w-[1600px] px-5 pb-14 md:px-10 md:pb-18 lg:pb-20 xl:px-16">
                <div className="max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45 }}
                        className="mb-8 inline-flex items-center gap-3 rounded-md border border-card-border bg-card-bg px-4 py-3"
                    >
                        <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
                        <span className="text-sm font-bold text-foreground/62">Secure Foundations for Scalable Innovation</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.08 }}
                        className="max-w-5xl text-[clamp(2.75rem,5.6vw,5.75rem)] font-black leading-[1] tracking-[0] text-foreground"
                    >
                        AI Governance you can prove, AI Risk you can manage.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.16 }}
                        className="mt-6 max-w-3xl text-lg leading-[1.45] text-foreground/66 md:text-xl"
                    >
                        As you integrate AI, our Governance Services ensure compliance, protect data, and accelerate innovation.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.24 }}
                        className="mt-8 flex flex-col gap-3 sm:flex-row"
                    >
                        <Link href="/ai-risk-and-governance">
                            <Button size="lg" className="w-full sm:w-auto">Discover More</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" size="lg" className="w-full sm:w-auto">
                                Book a Consultation
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
