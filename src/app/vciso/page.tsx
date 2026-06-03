"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BrainCircuit,
    CheckCircle2,
    ClipboardList,
    FileCheck2,
    Home,
    Landmark,
    PlusCircle,
    Shield,
    Siren,
    Target,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ownedAreas = [
    "Security strategy and roadmap",
    "Risk management and prioritization",
    "Board and executive reporting",
    "AI risk and governance oversight",
    "Compliance and audit readiness",
    "Incident response and vendor risk",
];

const capabilities = [
    {
        title: "Security Strategy",
        description: "A clear, prioritized security roadmap aligned to your business goals, risk appetite, and budget — not a generic checklist.",
        icon: ClipboardList,
    },
    {
        title: "Risk Management",
        description: "Identify, prioritize, and manage the risks that actually threaten your business — and make deliberate decisions about each one.",
        icon: Shield,
    },
    {
        title: "Board & Executive Reporting",
        description: "Translate technical risk into clear, decision-ready reporting your leadership and board can understand and stand behind.",
        icon: Landmark,
    },
    {
        title: "AI Risk & Governance",
        description: "Bring AI into your security posture with confidence — governance, oversight, and EU AI Act readiness led from the top.",
        icon: BrainCircuit,
    },
    {
        title: "Compliance & Audit Readiness",
        description: "Stay ahead of your regulatory and contractual obligations, with the evidence and processes to pass scrutiny.",
        icon: FileCheck2,
    },
    {
        title: "Incident & Vendor Risk",
        description: "Be ready for the bad day — with response planning, third-party risk oversight, and a steady hand when it counts.",
        icon: Siren,
    },
];

const fitItems = [
    "Need security leadership but aren't ready for a full-time CISO",
    "Are adopting AI and want it governed properly from the start",
    "Face growing compliance, customer, or board pressure on security",
    "Have security tools and people, but no clear strategy tying them together",
];

const engagementItems = [
    "Flexible scope — from a few days a month to a focused mandate",
    "Embedded with your team, not arm's-length advice",
    "Scales up or down as your needs change",
    "A clear handover path if you later hire in-house",
];

const outcomes = [
    { label: "Direction", description: "A clear security strategy and roadmap" },
    { label: "Oversight", description: "Risk owned, prioritized, and managed" },
    { label: "Assurance", description: "Board-ready reporting and audit readiness" },
    { label: "Expertise", description: "Deep AI risk leadership on call" },
];

const reveal = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.55 },
};

const Eyebrow = ({ children }: { children: string }) => (
    <span className="inline-flex items-center gap-2.5 text-xs font-black uppercase tracking-[0.16em] text-brand-orange">
        <span className="h-0.5 w-6 bg-brand-orange" />
        {children}
    </span>
);

const PrimaryLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-6 py-4 text-[15px] font-black text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground"
    >
        {children}
    </Link>
);

const VCISOPage = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            <section className="overflow-hidden border-b border-[#e3e1da] pt-28 pb-10 md:pt-36 md:pb-14">
                <motion.div
                    className="mx-auto max-w-[1180px] px-7"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55 }}
                >
                    <div className="mb-5 flex flex-wrap items-center gap-2 text-[13px] font-semibold text-foreground/48">
                        <Link href="/" className="inline-flex items-center gap-1 transition-colors hover:text-brand-orange">
                            <Home className="h-3.5 w-3.5" />
                            Home
                        </Link>
                        <span>/</span>
                        <span>Services</span>
                        <span>/</span>
                        <span>vCISO Leadership</span>
                    </div>

                    <Eyebrow>vCISO Leadership</Eyebrow>
                    <h1 className="mt-5 max-w-[900px] text-[clamp(2.2rem,5vw,3.75rem)] font-black leading-[1.05] tracking-[0] text-foreground">
                        Executive security leadership — <span className="text-brand-orange">without the full-time hire</span>.
                    </h1>
                    <p className="mt-6 max-w-[680px] text-lg leading-relaxed text-foreground/66 md:text-[18.5px]">
                        Get a seasoned security leader on your side: someone to own your security strategy, report to your board, and bring deep AI risk expertise — at a fraction of the cost and commitment of a full-time CISO.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3.5">
                        <PrimaryLink href="mailto:info@aipurview.com">
                            Book a Free 30-Minute Consultation <ArrowRight className="h-4 w-4" />
                        </PrimaryLink>
                        <Link
                            href="/#services"
                            className="inline-flex items-center rounded-md border-2 border-foreground px-6 py-4 text-[15px] font-black text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-foreground hover:text-white"
                        >
                            All Services
                        </Link>
                    </div>
                </motion.div>
            </section>

            <section className="py-14 md:py-20">
                <div className="mx-auto grid max-w-[1180px] gap-10 px-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
                    <motion.div {...reveal}>
                        <h2 className="max-w-[620px] text-[clamp(1.6rem,3vw,2.125rem)] font-black leading-tight">
                            The security leadership you need, scaled to where you are
                        </h2>
                        <div className="mt-5 space-y-4 text-[16.5px] leading-relaxed text-foreground/64">
                            <p>Many organizations need senior security leadership long before they can justify a full-time CISO. The result is a gap: security decisions get made without strategy, risk goes unowned, and the board has no clear line of sight into exposure.</p>
                            <p>Our virtual CISO service fills that gap. You get an experienced security leader who sets direction, builds your security program, and translates technical risk into language your board and executives can act on — engaged at the level you need, whether that&apos;s a few days a month or a focused mandate.</p>
                            <p>And because AI risk is now part of every security conversation, you get a leader who understands it deeply — someone who can govern AI alongside the rest of your security posture, not treat it as a separate problem.</p>
                        </div>
                    </motion.div>

                    <motion.aside
                        {...reveal}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="rounded-md bg-[#2a1467] p-8 text-white shadow-[0_30px_60px_-30px_rgba(42,20,103,0.5)]"
                    >
                        <h3 className="mb-5 text-xl font-black text-white">What your vCISO can own</h3>
                        <ul className="space-y-3.5">
                            {ownedAreas.map((area) => (
                                <li key={area} className="flex gap-3 text-[14.7px] leading-relaxed text-white/84">
                                    <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#f3b98a]" />
                                    <span>{area}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.aside>
                </div>
            </section>

            <section className="border-y border-[#e3e1da] bg-[#f3f1ec] py-16">
                <motion.div className="mx-auto grid max-w-[1180px] gap-8 px-7 lg:grid-cols-[0.7fr_1.3fr]" {...reveal}>
                    <div className="text-[13px] font-black uppercase tracking-[0.13em] text-foreground/45">
                        Why it
                        <b className="block pt-1 text-3xl font-black normal-case tracking-[0] text-brand-orange">Matters</b>
                    </div>
                    <div>
                        <h2 className="max-w-[760px] text-[clamp(1.65rem,3.2vw,2.375rem)] font-black leading-tight">
                            Security without leadership is just a collection of tools.
                        </h2>
                        <p className="mt-5 max-w-[640px] text-[17.5px] leading-relaxed text-foreground/64">
                            Technology alone doesn&apos;t manage risk — direction does. A vCISO gives you the strategy, accountability, and executive voice to turn scattered security activity into a coherent program your board can trust, without carrying the cost of a permanent C-suite hire.
                        </p>
                    </div>
                </motion.div>
            </section>

            <section className="py-16 md:py-20">
                <div className="mx-auto max-w-[1180px] px-7">
                    <motion.div className="mb-12 max-w-[720px]" {...reveal}>
                        <Eyebrow>What your vCISO delivers</Eyebrow>
                        <h2 className="mt-5 text-[clamp(1.8rem,3.6vw,2.75rem)] font-black leading-tight">
                            Full security leadership, with AI as a core strength.
                        </h2>
                        <p className="mt-5 text-[17px] leading-relaxed text-foreground/64">
                            Everything you&apos;d expect from an experienced CISO — plus the AI risk expertise that modern security demands.
                        </p>
                    </motion.div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {capabilities.map((capability, index) => {
                            const Icon = capability.icon;
                            return (
                                <motion.div
                                    key={capability.title}
                                    className="rounded-md border border-[#e3e1da] bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f3b98a] hover:shadow-[0_24px_44px_-28px_rgba(35,39,46,0.4)]"
                                    {...reveal}
                                    transition={{ duration: 0.55, delay: index * 0.05 }}
                                >
                                    <div className="mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-md bg-[#fbe6d4] text-brand-orange">
                                        <Icon className="h-[23px] w-[23px]" />
                                    </div>
                                    <h3 className="text-lg font-black leading-tight">{capability.title}</h3>
                                    <p className="mt-3 text-[14.7px] leading-relaxed text-foreground/64">{capability.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="pb-16 md:pb-20">
                <div className="mx-auto max-w-[1180px] px-7">
                    <motion.div className="mb-10 max-w-[720px]" {...reveal}>
                        <Eyebrow>Is a vCISO right for you?</Eyebrow>
                        <h2 className="mt-5 text-[clamp(1.8rem,3.6vw,2.75rem)] font-black leading-tight">
                            Senior leadership, sized to your stage.
                        </h2>
                    </motion.div>

                    <div className="grid gap-5 lg:grid-cols-2">
                        <motion.div className="rounded-md border border-[#f3b98a] bg-white p-7" {...reveal}>
                            <h3 className="mb-4 text-lg font-black">A great fit if you...</h3>
                            <ul className="space-y-3">
                                {fitItems.map((item) => (
                                    <li key={item} className="flex gap-2.5 text-[14.6px] leading-relaxed text-foreground/64">
                                        <CheckCircle2 className="mt-0.5 h-[17px] w-[17px] shrink-0 text-brand-orange" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div className="rounded-md border border-[#e3e1da] bg-white p-7" {...reveal} transition={{ duration: 0.55, delay: 0.08 }}>
                            <h3 className="mb-4 text-lg font-black">How engagement works</h3>
                            <ul className="space-y-3">
                                {engagementItems.map((item) => (
                                    <li key={item} className="flex gap-2.5 text-[14.6px] leading-relaxed text-foreground/64">
                                        <PlusCircle className="mt-0.5 h-[17px] w-[17px] shrink-0 text-foreground/42" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="border-y border-[#e3e1da] bg-[#f3f1ec] py-16 md:py-20">
                <div className="mx-auto max-w-[1180px] px-7">
                    <motion.div className="mb-10 max-w-[720px]" {...reveal}>
                        <Eyebrow>Outcomes</Eyebrow>
                        <h2 className="mt-5 text-[clamp(1.8rem,3.6vw,2.75rem)] font-black leading-tight">
                            What you walk away with.
                        </h2>
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {outcomes.map((outcome, index) => (
                            <motion.div
                                key={outcome.label}
                                className="rounded-md border border-[#e3e1da] bg-white p-6"
                                {...reveal}
                                transition={{ duration: 0.55, delay: index * 0.05 }}
                            >
                                <b className="block text-3xl font-black text-brand-orange">{outcome.label}</b>
                                <span className="mt-2 block text-sm leading-relaxed text-foreground/64">{outcome.description}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-[1180px] px-7">
                    <motion.div
                        className="rounded-md bg-[#2a1467] px-6 py-16 text-center md:px-10 md:py-[70px]"
                        {...reveal}
                    >
                        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-white/10 text-[#f3b98a]">
                            <Target className="h-7 w-7" />
                        </div>
                        <h2 className="mx-auto max-w-[760px] text-[clamp(1.8rem,3.6vw,2.75rem)] font-black leading-tight text-white">
                            Get executive security leadership on your side.
                        </h2>
                        <p className="mx-auto mt-5 max-w-[620px] text-lg leading-relaxed text-[#cfc7e6]">
                            In one conversation, we&apos;ll talk through your current security posture and where a vCISO could make the biggest difference.
                        </p>
                        <div className="mt-8">
                            <PrimaryLink href="mailto:info@aipurview.com">
                                Book a Free 30-Minute Consultation <ArrowRight className="h-4 w-4" />
                            </PrimaryLink>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default VCISOPage;
