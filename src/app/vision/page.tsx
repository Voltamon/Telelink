"use client";

import { LampContainer } from "@/components/ui/lamp";
import { BlurFade } from "@/components/ui/blur-fade";
import { motion } from "motion/react";
import Link from "next/link";

export default function Vision() {
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
                    Our Vision
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
                    Telelink is built to solve the truth problem by rebuilding political discourse. As algorithms reward outrage and gatekeepers shape narrative, we provide infrastructure for honest, unfiltered debate.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="mt-4 sm:mt-6 md:mt-8 text-gray-300 text-lg md:text-xl md:leading-relaxed mb-12 max-w-3xl font-light"
                >
                    Designed around transparency, we empower you to speak freely. If you share this vision and feel passionate about the future of truth-aligned dialogue, we invite you to join our community.
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
                        href="#"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 text-lg md:text-xl font-medium tracking-wide shadow-lg backdrop-blur-sm"
                    >
                        Join the Community
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
