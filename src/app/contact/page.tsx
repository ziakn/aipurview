"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Globe } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const ContactPage = () => {
    return (
        <main className="bg-deep-black min-h-screen text-white">
            <Navbar />

            <section className="pt-40 pb-32">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Contact Info */}
                        <div className="lg:w-1/3">
                            <h1 className="text-5xl md:text-6xl font-black mb-8">Get in <br /><span className="text-neon-blue">Touch.</span></h1>
                            <p className="text-white/50 text-lg mb-12">
                                Ready to secure your AI ecosystem? Our team of experts is ready to assist you anywhere in the European Union.
                            </p>

                            <div className="space-y-8">
                                <div className="flex items-center space-x-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-blue/10 group-hover:border-neon-blue/30 transition-all">
                                        <Mail className="w-6 h-6 text-neon-blue" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Email Us</p>
                                        <p className="text-lg font-bold">info@aipurview.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-6 group">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-neon-blue/10 group-hover:border-neon-blue/30 transition-all">
                                        <MapPin className="w-6 h-6 text-neon-blue" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/30">Location</p>
                                        <p className="text-lg font-bold">Remote First - Serving the EU</p>
                                    </div>
                                </div>

                                <div className="pt-12">
                                    <div className="inline-flex items-center space-x-3 px-6 py-4 bg-eu-blue/10 border border-eu-blue/30 rounded-2xl">
                                        <Globe className="w-6 h-6 text-eu-blue" />
                                        <div>
                                            <p className="text-xs font-bold text-white leading-none">EU-Wide Delivery</p>
                                            <p className="text-[10px] text-white/50 uppercase tracking-tighter mt-1">Multi-language support available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:w-2/3">
                            <div className="glass-card p-12 border-white/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 rounded-full blur-[100px] -mr-32 -mt-32" />

                                <form className="relative z-10 space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-neon-blue/50 transition-all text-white"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">Work Email</label>
                                            <input
                                                type="email"
                                                placeholder="john@company.com"
                                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-neon-blue/50 transition-all text-white"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">Service Interest</label>
                                        <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-neon-blue/50 transition-all text-white appearance-none cursor-pointer">
                                            <option className="bg-deep-black">vCISO (Fractional Leadership)</option>
                                            <option className="bg-deep-black">AI Governance & Compliance</option>
                                            <option className="bg-deep-black">Technical Assessment & Red Teaming</option>
                                            <option className="bg-deep-black">Training & Awareness</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase tracking-widest text-white/40 ml-4">How can we help?</label>
                                        <textarea
                                            rows={4}
                                            placeholder="Tell us about your project or security concerns..."
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-neon-blue/50 transition-all text-white resize-none"
                                        />
                                    </div>

                                    <Button size="lg" className="w-full sm:w-auto h-16 px-12 group">
                                        <span>Send Message</span>
                                        <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ContactPage;
