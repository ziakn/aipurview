"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    // Avoid hydration mismatch
    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <div className="w-14 h-7" />

    const isDark = theme === "dark"

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative w-14 h-7 rounded-full bg-foreground/10 border border-card-border p-1 flex items-center transition-colors hover:bg-foreground/15 group overflow-hidden"
            aria-label="Toggle theme"
        >
            <motion.div
                className="w-5 h-5 rounded-full bg-background flex items-center justify-center shadow-sm z-10"
                initial={false}
                animate={{
                    x: isDark ? 28 : 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 30
                }}
            >
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={isDark ? "moon" : "sun"}
                        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                        transition={{ duration: 0.2 }}
                    >
                        {isDark ? (
                            <Moon className="w-3.5 h-3.5 text-neon-purple" />
                        ) : (
                            <Sun className="w-3.5 h-3.5 text-neon-blue" />
                        )}
                    </motion.div>
                </AnimatePresence>
            </motion.div>

            {/* Background Icons for Reference */}
            <div className="absolute inset-0 flex justify-between items-center px-2 opacity-20 pointer-events-none">
                <Sun className="w-3.5 h-3.5" />
                <Moon className="w-3.5 h-3.5" />
            </div>
        </button>
    )
}
