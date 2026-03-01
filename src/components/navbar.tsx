"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dock, DockIcon } from "@/components/ui/dock";
import { HomeIcon, LightbulbIcon, MailIcon } from "lucide-react";
export function NavBar() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center">
      <Dock
        direction="middle"
        className="bg-black/50 border-white/20 text-white backdrop-blur-lg"
        iconSize={60}
        iconMagnification={90}
        iconDistance={35}
        onClick={() => {
          window.dispatchEvent(new Event("reset-cycler"));
        }}
      >
        <DockIcon>
          <Link href="/" aria-label="Home" className={`flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-all duration-300 w-full h-full ${pathname === '/' ? 'brightness-125 scale-[1.2]' : ''}`}>
            <HomeIcon className="size-full shrink-0" suppressHydrationWarning />
          </Link>
        </DockIcon>
        <DockIcon>
          <Link href="/vision" aria-label="Vision" className={`flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-all duration-300 w-full h-full ${pathname === '/vision' ? 'brightness-125 scale-[1.2]' : ''}`}>
            <LightbulbIcon className="size-full shrink-0" suppressHydrationWarning />
          </Link>
        </DockIcon>

        <DockIcon>
          <Link href="/contact" aria-label="Contact" className={`flex items-center justify-center p-2 rounded-full hover:bg-white/10 transition-all duration-300 w-full h-full ${pathname === '/contact' ? 'brightness-125 scale-[1.2]' : ''}`}>
            <MailIcon className="size-full shrink-0" suppressHydrationWarning />
          </Link>
        </DockIcon>
      </Dock>
    </div>
  );
}
