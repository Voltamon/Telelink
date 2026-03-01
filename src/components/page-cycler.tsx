"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const pages = ["/", "/vision", "/contact"];

export function PageCycler() {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        // Only cycle if we are on one of the target pages
        if (!pages.includes(pathname)) return;

        let timer: ReturnType<typeof setTimeout>;

        const startTimer = () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                const currentIndex = pages.indexOf(pathname);
                const nextIndex = (currentIndex + 1) % pages.length;
                router.push(pages[nextIndex]);
            }, 15000);
        };

        const handleReset = () => {
            startTimer();
        };

        window.addEventListener("reset-cycler", handleReset);
        startTimer();

        return () => {
            clearTimeout(timer);
            window.removeEventListener("reset-cycler", handleReset);
        };
    }, [pathname, router]);

    return null;
}
