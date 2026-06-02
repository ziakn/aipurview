const TrustBar = () => {
    return (
        <section className="border-b border-card-border bg-dark-charcoal">
            <div className="mx-auto grid max-w-[1180px] gap-6 px-7 py-14 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
                <div className="text-sm font-bold uppercase tracking-[0.14em] text-foreground/50">
                    The AI Governance
                    <span className="mt-1 block text-3xl font-black normal-case tracking-normal text-brand-orange">Dilemma</span>
                </div>
                <div>
                    <h2 className="text-3xl font-black leading-tight text-foreground md:text-4xl">
                        Turn Responsible AI from a liability into a competitive advantage.
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-foreground/65">
                        The biggest risk in adopting AI isn&apos;t the technology. It&apos;s deploying it without the governance, controls, and readiness to scale it safely. We help you close that gap.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TrustBar;
