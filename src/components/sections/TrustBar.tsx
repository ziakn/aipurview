const TrustBar = () => {
    return (
        <div className="border-b border-card-border bg-dark-charcoal">
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                    <div>
                        <div className="text-sm font-bold text-foreground/55">Top Company</div>
                        <div className="mt-2 flex items-end gap-3">
                            <span className="text-5xl font-black text-brand-orange">4.7</span>
                            <span className="pb-1 text-sm font-medium text-foreground/55">Client Ratings</span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-black text-foreground md:text-3xl">Protect your data in the AI era, without disrupting your business.</h2>
                        <p className="mt-3 text-foreground/60">
                            AIPurview empowers organizations to harness AI responsibly, enforcing privacy, compliance, and ethical oversight across every touchpoint.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
