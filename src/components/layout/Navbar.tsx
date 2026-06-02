"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "vCISO", href: "/vciso" },
    { name: "AI Risk & Governance", href: "/ai-risk-and-governance" },
    { name: "Method", href: "/#method" },
    { name: "Solutions", href: "/solutions" },
    { name: "Training", href: "/training" },
    { name: "About", href: "/#why" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed left-0 right-0 top-0 z-50 border-b border-card-border bg-background/95 transition-all duration-200 ${isScrolled ? "py-3" : "py-4"
                }`}
        >
            <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 md:px-10 xl:px-16">
                <Link href="/" aria-label="AIPurview home">
                    <Image
                        src="/aipurview-logo.png"
                        alt="AIPurview"
                        width={170}
                        height={64}
                        className="h-[34px] w-auto"
                        priority
                    />
                </Link>

                <div className="hidden items-center gap-6 xl:flex 2xl:gap-9">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-base font-semibold text-foreground/76 transition-colors hover:text-brand-orange 2xl:text-lg"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="hidden items-center gap-3 xl:flex">
                    <Link href="/contact" className="rounded-md bg-foreground px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-orange">
                        Contact Us
                    </Link>
                </div>

                <button
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-card-border text-foreground xl:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {isMobileMenuOpen && (
                <div className="absolute left-0 right-0 top-full border-b border-card-border bg-background px-5 py-6 xl:hidden">
                    <div className="flex flex-col gap-4">
                        {[...navLinks, { name: "Contact", href: "/contact" }].map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xl font-bold text-foreground/85 transition-colors hover:text-brand-orange"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
