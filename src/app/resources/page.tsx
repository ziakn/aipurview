"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Filter, BookOpen, Download, Newspaper, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";

const categories = ["All", "Blogs", "Toolkits", "EU News", "Whitepapers"];

const resources = [
    {
        title: "The AI Governance Manifesto 2024",
        category: "Whitepapers",
        description: "Our definitive guide to deploying compliant AI systems in the European Union.",
        featured: true,
    },
    {
        title: "EU AI Act Checklist",
        category: "Toolkits",
        description: "Standard checklist for Article 11 technical documentation requirements.",
        featured: false,
    },
    {
        title: "Navigating Article 12 Logging",
        category: "Blogs",
        description: "Understanding the technical requirements for automated logging in high-risk AI.",
        featured: false,
    },
    {
        title: "DPA Ruling: French CNIL on LLMs",
        category: "EU News",
        description: "Key takeaways from the latest regulatory decisions impacting generative AI.",
        featured: false,
    },
];

const ResourcesPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredResources = activeCategory === "All"
        ? resources
        : resources.filter(r => r.category === activeCategory);

    return (
        <main className="bg-background min-h-screen text-foreground">
            <Navbar />

            {/* Search Header */}
            <section className="pt-40 pb-20 relative border-b border-card-border">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-black mb-8 text-foreground">Knowledge Hub</h1>
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="relative w-full md:w-2/3">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-foreground/30 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search resources, templates, or regulations..."
                                className="w-full bg-foreground/5 border border-card-border rounded-2xl py-4 pl-16 pr-8 focus:outline-none focus:border-neon-blue/50 transition-all text-foreground placeholder:text-foreground/20"
                            />
                        </div>
                        <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-1/3 pb-2 md:pb-0">
                            <Filter className="w-4 h-4 text-foreground/30 shrink-0" />
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shrink-0 ${activeCategory === cat
                                        ? "bg-neon-blue text-white"
                                        : "bg-foreground/5 text-foreground/50 hover:bg-foreground/10"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <Section className="!pt-12">
                <div className="flex items-center space-x-2 mb-8 text-foreground">
                    <BookOpen className="w-5 h-5 text-neon-blue" />
                    <h2 className="text-xl font-bold uppercase tracking-widest text-foreground/80">Upcoming Publication</h2>
                </div>
                <div className="glass-card p-12 bg-gradient-to-br from-neon-blue/20 via-transparent to-transparent flex flex-col md:flex-row items-center gap-12 border-neon-blue/20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-8">
                        <div className="px-4 py-1.5 bg-neon-blue text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                            Featured Book
                        </div>
                    </div>
                    <div className="md:w-1/3">
                        <div className="aspect-[3/4] bg-foreground/5 border border-card-border rounded-xl shadow-2xl relative overflow-hidden group-hover:rotate-2 transition-transform duration-500">
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background to-transparent">
                                <p className="text-xs font-bold text-neon-blue uppercase tracking-widest mb-2">Pre-Order Soon</p>
                                <h3 className="text-xl font-bold leading-tight text-foreground">Mastering AI Governance</h3>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <h3 className="text-4xl font-black mb-6 leading-tight text-foreground">
                            The definitive guide to the <br />
                            <span className="text-neon-blue underline underline-offset-8 decoration-4">EU AI Act</span>
                        </h3>
                        <p className="text-foreground/50 text-lg mb-8 max-w-xl">
                            From Article 1 to Article 113. Our forthcoming book breaks down every nuance of the AI Act for legal and technical teams alike.
                        </p>
                        <button className="flex items-center space-x-2 text-neon-blue font-bold uppercase tracking-widest hover:translate-x-2 transition-transform">
                            <span>Join the Waitlist</span>
                            <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </Section>

            {/* Resource Grid */}
            <Section className="bg-dark-charcoal/20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredResources.map((res, index) => (
                        <motion.div
                            key={res.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-8 flex flex-col justify-between hover:bg-foreground/[0.03] transition-colors cursor-pointer group"
                        >
                            <div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-foreground/5 rounded-xl text-foreground/30 group-hover:text-neon-blue transition-colors">
                                        {res.category === "Toolkits" ? <Download className="w-6 h-6" /> : < Newspaper className="w-6 h-6" />}
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/30 px-2 py-1 bg-foreground/5 rounded">
                                        {res.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-foreground">{res.title}</h3>
                                <p className="text-foreground/40 text-sm leading-relaxed">{res.description}</p>
                            </div>
                            <div className="pt-8 flex items-center justify-between border-t border-card-border mt-8">
                                <span className="text-xs font-bold text-foreground/30 uppercase tracking-widest">Read More</span>
                                <ArrowUpRight className="w-4 h-4 text-foreground/30 group-hover:text-neon-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default ResourcesPage;
