import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex h-[100dvh] w-full flex-col items-center justify-center overflow-hidden text-white px-4">
      <div className="z-10 flex flex-col items-center justify-center text-center relative px-4 sm:px-6 md:px-10 w-full max-w-4xl mt-[-5vh] md:mt-[-10vh]">
        <BlurFade delay={0.5} inView>
          <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight">
            Telelink
          </h1>
        </BlurFade>

        <BlurFade delay={0.75} inView>
          <p className="mt-6 md:mt-10 text-gray-300 text-base md:text-xl md:leading-relaxed max-w-3xl font-light mx-auto">
            Telelink is a civic media platform built to solve the truth problem by rebuilding political discourse. We provide the foundation for honest, unfiltered debate, free from the algorithms that reward outrage and the gatekeepers that shape the narrative.
          </p>
        </BlurFade>

        <BlurFade delay={0.85} inView>
          <p className="mt-4 md:mt-8 text-gray-300 text-base md:text-xl md:leading-relaxed max-w-3xl font-light mx-auto">
            Designed entirely around transparency, we empower you to speak freely and engage in truth-aligned dialogue. Join the waitlist to take back control of the conversation and experience the future of political engagement.
          </p>
        </BlurFade>

        <BlurFade delay={1.0} inView className="w-full">
          <div className="mt-8 md:mt-12 flex justify-center w-full">
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 text-lg md:text-xl font-medium tracking-wide shadow-lg backdrop-blur-sm"
            >
              Join the Waitlist
            </Link>
          </div>
        </BlurFade>
      </div>
    </main>
  );
}
