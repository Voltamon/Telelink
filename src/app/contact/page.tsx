"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function Contact() {
    return (
        <main className="min-h-screen bg-black w-full overflow-hidden flex flex-col items-center justify-center">
            <div className="z-50 flex flex-col items-center justify-center text-center relative px-4 sm:px-6 md:px-10 w-full max-w-4xl">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.1,
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-8"
                >
                    Get in touch
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.2,
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="mt-6 sm:mt-8 md:mt-12 text-gray-300 text-lg md:text-xl md:leading-relaxed mb-6 max-w-3xl font-light"
                >
                    We deeply appreciate your interest. As algorithms and gatekeepers reshape political discourse, the ability to engage in honest, unfiltered debate matters more than ever. We are building a civic media infrastructure to empower exactly that.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="text-gray-300 text-lg md:text-xl md:leading-relaxed mb-12 max-w-3xl font-light"
                >
                    If you share our vision, or would like to join the team building the future of truth-aligned political dialogue — we would love to hear from you.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="mt-8"
                >
                    <Link
                        href="mailto:telelink2k26@gmail.com"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 text-lg md:text-xl font-medium tracking-wide shadow-lg backdrop-blur-sm"
                    >
                        telelink2k26@gmail.com
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
