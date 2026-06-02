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
        <section id={id} className={cn("py-16 md:py-20 overflow-hidden", className)}>
            {container ? (
                <div className="mx-auto max-w-[1180px] px-7">
                    {children}
                </div>
            ) : (
                children
            )}
        </section>
    );
};

export default Section;
