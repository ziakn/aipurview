import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    container?: boolean;
}

const Section = ({ children, className, id, container = true }: SectionProps) => {
    return (
        <section id={id} className={cn("py-24 md:py-32 overflow-hidden", className)}>
            {container ? (
                <div className="container mx-auto px-6">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};

export default Section;
