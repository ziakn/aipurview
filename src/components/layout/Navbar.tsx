"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
    {
        name: "AI Services",
        href: "/ai-risk-and-governance",
        children: [
            { name: "AI Governance & Assurance", href: "/ai-risk-and-governance" },
            { name: "AI Security Assessment", href: "/architecture" },
            { name: "AI Training & Awareness", href: "/training" },
        ],
    },
    { name: "vCISO", href: "/vciso" },
    { name: "AI Systems", href: "/solutions" },
    { name: "Blogs", href: "/blog" },
    { name: "About Us", href: "/about-us" },
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
            className={`fixed left-0 right-0 top-0 z-50 w-full border-b border-card-border bg-background/95 transition-all duration-200 ${isScrolled ? "py-3" : "py-4"
                }`}
        >
            <div className="relative mx-auto flex max-w-[1180px] items-center justify-between px-7">
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

                <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 xl:flex 2xl:gap-9">
                    {navLinks.map((link) => (
                        <div key={link.name} className="group relative">
                            <Link
                                href={link.href}
                                className="flex items-center gap-1.5 text-base font-semibold text-foreground/76 transition-colors hover:text-brand-orange 2xl:text-lg"
                            >
                                {link.name}
                                {link.children && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" aria-hidden="true" />}
                            </Link>

                            {link.children && (
                                <div className="invisible absolute left-0 top-full min-w-[270px] pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                                    <div className="rounded-md border border-card-border bg-background p-2 shadow-xl">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="block rounded-md px-4 py-3 text-sm font-semibold text-foreground/78 transition-colors hover:bg-card hover:text-brand-orange"
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
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
                        {navLinks.map((link) => (
                            <div key={link.name}>
                                <Link
                                    href={link.href}
                                    className="text-xl font-bold text-foreground/85 transition-colors hover:text-brand-orange"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>

                                {link.children && (
                                    <div className="mt-3 flex flex-col gap-3 border-l border-card-border pl-4">
                                        {link.children.map((child) => (
                                            <Link
                                                key={child.name}
                                                href={child.href}
                                                className="text-base font-semibold text-foreground/70 transition-colors hover:text-brand-orange"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                            >
                                                {child.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
