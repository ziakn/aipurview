const frameworks = [
    "EU AI Act", "ISO 42001", "NIST AI RMF", "GDPR", "IEEE 7000", "OECD AI Principles"
];

const TrustBar = () => {
    return (
        <div className="border-b border-card-border bg-background">
            <div className="container mx-auto px-6 py-8">
                <div className="mb-4 text-sm font-medium text-foreground/55">Frameworks we work with</div>
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                    {frameworks.map((f) => (
                    <span
                        key={f}
                        className="text-foreground/60 text-sm font-semibold"
                    >
                        {f}
                    </span>
                ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;
