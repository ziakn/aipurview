"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Newspaper } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { blogPosts } from "./posts";

const BlogPage = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="border-b border-card-border pt-40 pb-20">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="mb-6 inline-flex border-l-2 border-neon-blue pl-4">
                            <span className="text-sm font-medium text-foreground/60">Articles</span>
                        </div>
                        <h1 className="mb-8 text-5xl font-semibold text-foreground md:text-7xl">
                            Article & Case Studies
                        </h1>
                        <p className="max-w-3xl text-xl leading-relaxed text-foreground/65">
                            Explore deep-dive analyses & client success stories defining future-ready strategies.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Section>
                <div className="grid gap-8 md:grid-cols-2">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={`${post.slug}-${index}`}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.06 }}
                            viewport={{ once: true }}
                            className="glass-card overflow-hidden transition-colors hover:border-foreground/25"
                        >
                            <Link href={`/blog/${post.slug}`} className="block">
                                <div className="aspect-[16/10] overflow-hidden bg-foreground/5">
                                    <div
                                        aria-label=""
                                        className="h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-105"
                                        style={{ backgroundImage: `url(${post.image})` }}
                                    />
                                </div>
                            </Link>
                            <div className="p-7">
                                <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-foreground/40">
                                    <Newspaper className="h-4 w-4 text-neon-blue" />
                                    <span>{post.date}</span>
                                    <span>No Comments</span>
                                </div>
                                <h2 className="mb-4 text-2xl font-semibold leading-tight text-foreground">
                                    <Link href={`/blog/${post.slug}`} className="hover:text-neon-blue">
                                        {post.title}
                                    </Link>
                                </h2>
                                <p className="text-sm leading-relaxed text-foreground/60">{post.excerpt}</p>
                                <Link href={`/blog/${post.slug}`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-neon-blue">
                                    Read More <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </Section>

            <Section className="bg-dark-charcoal/30">
                <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                    <div>
                        <Mail className="mb-6 h-9 w-9 text-neon-green" />
                        <h2 className="text-3xl font-semibold text-foreground md:text-5xl">Newsletter</h2>
                    </div>
                    <div>
                        <p className="mb-6 text-lg text-foreground/60">
                            Signup our newsletter to get update information, news, insight or promotions.
                        </p>
                        <form className="flex flex-col gap-3 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Email"
                                className="min-h-12 flex-1 rounded-md border border-card-border bg-background px-4 text-foreground outline-none transition-colors placeholder:text-foreground/35 focus:border-neon-blue/60"
                            />
                            <button type="submit" className="btn-primary">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default BlogPage;
