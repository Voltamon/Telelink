"use client";

import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";

export default function Contact() {
    return (
        <main className="relative flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden text-white px-4">
            <div className="z-50 flex flex-col items-center justify-center text-center relative px-4 sm:px-6 md:px-10 w-full max-w-4xl mt-[-5vh] md:mt-[-10vh]">
                <BlurFade delay={0.1} inView direction="up" offset={20}>
                    <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
                        Get in touch
                    </h1>
                </BlurFade>

                <BlurFade delay={0.2} inView direction="up" offset={20}>
                    <p className="mt-6 md:mt-10 text-gray-300 text-base md:text-xl md:leading-relaxed max-w-3xl font-light mx-auto">
                        We deeply appreciate your interest. As algorithms and gatekeepers reshape political discourse, the ability to engage in honest, unfiltered debate matters more than ever. We are building a civic media infrastructure to empower exactly that.
                    </p>
                </BlurFade>

                <BlurFade delay={0.3} inView direction="up" offset={20}>
                    <p className="mt-4 md:mt-8 text-gray-300 text-base md:text-xl md:leading-relaxed max-w-3xl font-light mx-auto">
                        If you share our vision, or would like to join the team building the future of truth-aligned political dialogue — we would love to hear from you.
                    </p>
                </BlurFade>

                <BlurFade delay={0.4} inView direction="up" offset={20} className="w-full">
                    <div className="mt-8 md:mt-12 flex justify-center w-full">
                        <Link
                            href="mailto:telelink2k26@gmail.com"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 text-lg md:text-xl font-medium tracking-wide shadow-lg backdrop-blur-sm"
                        >
                            telelink2k26@gmail.com
                        </Link>
                    </div>
                </BlurFade>
            </div>
        </main>
    );
}
