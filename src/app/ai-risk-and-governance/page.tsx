"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const approach = [
    "We align leadership priorities and catalog your AI footprint through targeted leadership engagement and a comprehensive use-case and AI inventory.",
    "We identify regulatory, privacy, and technical gaps through a thorough gap analysis, followed by bespoke framework and control design.",
    "We institutionalize the framework through control implementation, training workshops, and the compilation of audit-ready assurance evidence.",
];

const deliverables = [
    {
        title: "Compliance by Design",
        description: "With automated compliance checks and adaptive control systems, we help you bring trustworthy AI innovations to market faster.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" />
                <path d="M9 12l2 2 4-4" />
            </svg>
        ),
    },
    {
        title: "Lean & Future-Proof",
        description: "We apply leading, field-tested methods to design efficient, tailored AI governance that fits your organization.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="9" cy="7" r="2" />
                <circle cx="9" cy="17" r="2" />
                <circle cx="17" cy="12" r="2" />
                <path d="M9 9v6M11 7h4M11 17h4M9 12h6" />
            </svg>
        ),
    },
    {
        title: "End-to-End Control",
        description: "By automating governance processes with the right tools, we maintain oversight across the entire lifecycle of your AI solutions.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="6" cy="6" r="2" />
                <circle cx="18" cy="6" r="2" />
                <circle cx="18" cy="18" r="2" />
                <path d="M8 6h8M18 8v8M16 18H9a3 3 0 01-3-3V8" />
            </svg>
        ),
    },
    {
        title: "Holistic Approach",
        description: "We help you implement regulations like the EU AI Act with confidence, integrating AI governance seamlessly into your existing structures and processes.",
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="3" />
                <circle cx="12" cy="12" r="8" />
            </svg>
        ),
    },
];

const outcomes = [
    { label: "Clarity", description: "A complete view of your AI systems and their risk exposure" },
    { label: "Control", description: "Policies, ownership, and controls that keep AI defensible" },
    { label: "Evidence", description: "Audit-ready proof of compliance and oversight" },
    { label: "Confidence", description: "The assurance to scale AI without slowing down" },
];

const AiRiskAndGovernancePage = () => {
    return (
        <main className="aig-page">
            <Navbar />

            <section className="sub-hero">
                <div className="wrap">
                    <div className="crumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Services</span>
                        <span>/</span>
                        <span>AI Governance & Assurance</span>
                    </div>
                    <span className="eyebrow">AI Governance & Assurance</span>
                    <h1>Is your business prepared for the consequences of <em>unregulated AI</em>?</h1>
                    <p className="lede">
                        Get expert support assessing, designing, and implementing an AI governance program focused on business outcomes and regulatory risk - ensuring your AI models are secure, trustworthy, and compliant with the EU AI Act and ISO 42001.
                    </p>
                    <div className="hero-cta">
                        <Link href="mailto:info@aipurview.com" className="btn btn-primary">
                            Book a Free 30-Minute Consultation <span aria-hidden="true">→</span>
                        </Link>
                        <Link href="/#services" className="btn btn-ghost">All Services</Link>
                    </div>
                </div>
            </section>

            <section className="block intro-block">
                <div className="wrap two">
                    <div className="prose">
                        <h2>Governance that turns AI ambition into trusted outcomes</h2>
                        <p>We go beyond mere compliance, embedding trust and transparency at every level of your organization. As expert AI governance consultants, our mission is to empower you to navigate the evolving AI landscape confidently and responsibly.</p>
                        <p>We deliver this through a structured, lifecycle-focused approach that spans strategy, assessment, deployment, and continuous optimization. Each stage is designed to address specific technological risks and regulatory challenges, keeping your framework ethical, adaptive, and audit-ready as it scales alongside your AI initiatives.</p>
                        <p>The result is a governance program that doesn&apos;t slow you down. It gives your teams the clear boundaries they need to innovate and deploy AI safely, while giving leadership the definitive proof required to back those initiatives with confidence.</p>
                    </div>

                    <aside className="panel">
                        <h3>Our approach to developing, implementing, and delivering a robust AI program</h3>
                        <ul>
                            {approach.map((item) => (
                                <li key={item}>
                                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12l5 5L20 6" /></svg>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </aside>
                </div>
            </section>

            <section className="strip">
                <div className="wrap strip-grid">
                    <div className="badge">Why it<b>Matters</b></div>
                    <div>
                        <h2>Regulators, boards, and customers are no longer taking AI on trust.</h2>
                        <p>The EU AI Act introduces binding obligations, and standards like ISO 42001 set the bar for responsible AI management. Organizations that can demonstrate governance will move faster and win trust - those that can&apos;t will face delays, scrutiny, and exposure.</p>
                    </div>
                </div>
            </section>

            <section className="block">
                <div className="wrap">
                    <div className="sec-head">
                        <span className="eyebrow">What we deliver</span>
                        <h2>Governance designed around your business, not bolted onto it.</h2>
                    </div>
                    <div className="cards">
                        {deliverables.map((item) => (
                            <article className="card" key={item.title}>
                                <div className="ic">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="block outcomes-block">
                <div className="wrap">
                    <div className="sec-head">
                        <span className="eyebrow">Outcomes</span>
                        <h2>What you walk away with.</h2>
                    </div>
                    <div className="outcomes">
                        {outcomes.map((outcome) => (
                            <article className="stat" key={outcome.label}>
                                <b>{outcome.label}</b>
                                <span>{outcome.description}</span>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="final">
                <div className="wrap">
                    <div className="final-inner">
                        <h2>Ready to make Responsible AI your advantage?</h2>
                        <p>In one conversation, we&apos;ll map where you stand against the EU AI Act and ISO 42001 - and what it takes to get production-ready.</p>
                        <Link href="mailto:info@aipurview.com" className="btn btn-primary">
                            Book a Free 30-Minute Consultation <span aria-hidden="true">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx>{`
                .aig-page {
                    --bg: #eef0ea;
                    --bg-warm: #f3f1ec;
                    --ink: #23272e;
                    --ink-soft: #4b5159;
                    --ink-mute: #888d93;
                    --orange: #e6792f;
                    --orange-soft: #f3b98a;
                    --orange-tint: #fbe6d4;
                    --card: #ffffff;
                    --line: #e3e1da;
                    --navy: #2a1467;
                    background: var(--bg);
                    color: var(--ink);
                    min-height: 100vh;
                    overflow-x: hidden;
                }

                .wrap {
                    max-width: 1180px;
                    margin: 0 auto;
                    padding: 0 28px;
                }

                .sub-hero {
                    position: relative;
                    padding: 136px 0 54px;
                    overflow: hidden;
                }

                .sub-hero::before {
                    content: "";
                    position: absolute;
                    top: -160px;
                    right: -150px;
                    width: 520px;
                    height: 520px;
                    background: radial-gradient(circle, rgba(230, 121, 47, 0.15), transparent 62%);
                    border-radius: 50%;
                }

                .sub-hero .wrap {
                    position: relative;
                }

                .crumb {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 8px;
                    margin-bottom: 20px;
                    color: var(--ink-mute);
                    font-size: 13px;
                    font-weight: 600;
                }

                .crumb a {
                    transition: color 0.2s ease;
                }

                .crumb a:hover {
                    color: var(--orange);
                }

                .eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 9px;
                    color: var(--orange);
                    font-size: 12px;
                    font-weight: 800;
                    letter-spacing: 0.16em;
                    text-transform: uppercase;
                }

                .eyebrow::before {
                    content: "";
                    display: inline-block;
                    width: 22px;
                    height: 2px;
                    background: var(--orange);
                }

                h1,
                h2,
                h3 {
                    letter-spacing: 0;
                    color: var(--ink);
                }

                .sub-hero h1 {
                    max-width: 880px;
                    margin-top: 18px;
                    font-size: clamp(34px, 5vw, 60px);
                    line-height: 1.05;
                    font-weight: 900;
                }

                .sub-hero h1 em {
                    color: var(--orange);
                    font-style: normal;
                }

                .lede {
                    max-width: 660px;
                    margin: 24px 0 30px;
                    color: var(--ink-soft);
                    font-size: 18.5px;
                    line-height: 1.65;
                }

                .hero-cta {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 14px;
                }

                .btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    border-radius: 10px;
                    padding: 15px 26px;
                    font-size: 15px;
                    font-weight: 800;
                    transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease;
                }

                .btn:hover {
                    transform: translateY(-2px);
                }

                .btn-primary {
                    background: var(--orange);
                    color: #fff;
                    box-shadow: 0 10px 24px -10px rgba(230, 121, 47, 0.7);
                }

                .btn-primary:hover {
                    box-shadow: 0 16px 30px -10px rgba(230, 121, 47, 0.8);
                }

                .btn-ghost {
                    border: 1.5px solid var(--ink);
                    color: var(--ink);
                }

                .btn-ghost:hover {
                    background: var(--ink);
                    color: #fff;
                }

                .block {
                    padding: 84px 0;
                }

                .intro-block {
                    padding-top: 54px;
                }

                .two {
                    display: grid;
                    grid-template-columns: 1.1fr 0.9fr;
                    align-items: start;
                    gap: 50px;
                }

                .prose h2,
                .sec-head h2,
                .strip h2,
                .final h2 {
                    font-size: clamp(24px, 3vw, 34px);
                    line-height: 1.08;
                    font-weight: 900;
                }

                .prose p {
                    margin-top: 16px;
                    color: var(--ink-soft);
                    font-size: 16.5px;
                    line-height: 1.7;
                }

                .panel {
                    position: relative;
                    overflow: hidden;
                    border-radius: 18px;
                    padding: 32px 30px;
                    background: var(--navy);
                    color: #fff;
                    box-shadow: 0 30px 60px -30px rgba(42, 20, 103, 0.5);
                }

                .panel::before {
                    content: "";
                    position: absolute;
                    right: -40px;
                    bottom: -60px;
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(230, 121, 47, 0.3), transparent 60%);
                }

                .panel h3 {
                    position: relative;
                    margin-bottom: 18px;
                    color: #fff;
                    font-size: 19px;
                    line-height: 1.25;
                    font-weight: 800;
                }

                .panel ul {
                    position: relative;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .panel li {
                    display: flex;
                    align-items: flex-start;
                    gap: 11px;
                    margin-bottom: 18px;
                    color: #e4e0f3;
                    font-size: 14.7px;
                    line-height: 1.5;
                }

                .panel li:last-child {
                    margin-bottom: 0;
                }

                .panel svg,
                .ic svg {
                    fill: none;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                }

                .panel svg {
                    flex: 0 0 auto;
                    width: 18px;
                    height: 18px;
                    margin-top: 2px;
                    stroke: var(--orange-soft);
                    stroke-width: 2.4;
                }

                .strip {
                    padding: 62px 0;
                    border-top: 1px solid var(--line);
                    border-bottom: 1px solid var(--line);
                    background: var(--bg-warm);
                }

                .strip-grid {
                    display: grid;
                    grid-template-columns: 0.7fr 1.3fr;
                    align-items: start;
                    gap: 50px;
                }

                .badge {
                    color: var(--ink-mute);
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 0.13em;
                    text-transform: uppercase;
                }

                .badge b {
                    display: block;
                    margin-top: 6px;
                    color: var(--orange);
                    font-size: 30px;
                    letter-spacing: 0;
                    line-height: 1;
                    text-transform: none;
                }

                .strip h2 {
                    max-width: 780px;
                    font-size: clamp(26px, 3.2vw, 38px);
                }

                .strip p,
                .sec-head p {
                    max-width: 640px;
                    margin-top: 18px;
                    color: var(--ink-soft);
                    font-size: 17.5px;
                    line-height: 1.65;
                }

                .sec-head {
                    max-width: 720px;
                    margin-bottom: 48px;
                }

                .sec-head h2 {
                    margin-top: 18px;
                    font-size: clamp(28px, 3.6vw, 44px);
                }

                .cards {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 22px;
                }

                .card,
                .stat {
                    border: 1px solid var(--line);
                    border-radius: 14px;
                    background: var(--card);
                }

                .card {
                    padding: 28px 26px;
                    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
                }

                .card:hover {
                    transform: translateY(-6px);
                    border-color: var(--orange-soft);
                    box-shadow: 0 24px 44px -28px rgba(35, 39, 46, 0.4);
                }

                .ic {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 46px;
                    height: 46px;
                    margin-bottom: 20px;
                    border-radius: 11px;
                    background: var(--orange-tint);
                    color: var(--orange);
                }

                .ic svg {
                    width: 23px;
                    height: 23px;
                    stroke: var(--orange);
                    stroke-width: 1.9;
                }

                .card h3 {
                    font-size: 18px;
                    line-height: 1.2;
                    font-weight: 800;
                }

                .card p {
                    margin-top: 11px;
                    color: var(--ink-soft);
                    font-size: 14.7px;
                    line-height: 1.6;
                }

                .outcomes-block {
                    padding-top: 0;
                }

                .outcomes {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 18px;
                }

                .stat {
                    padding: 24px 22px;
                }

                .stat b {
                    display: block;
                    color: var(--orange);
                    font-size: 30px;
                    line-height: 1;
                    font-weight: 900;
                }

                .stat span {
                    display: block;
                    margin-top: 10px;
                    color: var(--ink-soft);
                    font-size: 14px;
                    line-height: 1.55;
                }

                .final {
                    padding: 12px 0 96px;
                }

                .final-inner {
                    position: relative;
                    overflow: hidden;
                    border-radius: 26px;
                    padding: 70px 40px;
                    background: var(--navy);
                    text-align: center;
                }

                .final-inner::before {
                    content: "";
                    position: absolute;
                    top: -120px;
                    left: 50%;
                    width: 520px;
                    height: 340px;
                    transform: translateX(-50%);
                    background: radial-gradient(ellipse, rgba(230, 121, 47, 0.22), transparent 62%);
                }

                .final-inner h2,
                .final-inner p,
                .final-inner .btn {
                    position: relative;
                }

                .final-inner h2 {
                    max-width: 760px;
                    margin: 0 auto;
                    color: #fff;
                    font-size: clamp(28px, 3.6vw, 44px);
                }

                .final-inner p {
                    max-width: 620px;
                    margin: 20px auto 34px;
                    color: #cfc7e6;
                    font-size: 18px;
                    line-height: 1.65;
                }

                @media (max-width: 980px) {
                    .two,
                    .strip-grid {
                        grid-template-columns: 1fr;
                        gap: 30px;
                    }

                    .cards,
                    .outcomes {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }
                }

                @media (max-width: 640px) {
                    .wrap {
                        padding: 0 22px;
                    }

                    .sub-hero {
                        padding-top: 116px;
                    }

                    .block {
                        padding: 60px 0;
                    }

                    .cards,
                    .outcomes {
                        grid-template-columns: 1fr;
                    }

                    .btn {
                        width: 100%;
                    }

                    .final-inner {
                        padding: 42px 24px;
                    }
                }
            `}</style>
        </main>
    );
};

export default AiRiskAndGovernancePage;
