import Link from 'next/link';
import AnimationLetter from '../AnimationLetter/AnimationLetter'
import StarBadge from '../ui/StarBadge';
import { Code } from 'lucide-react';
import { IconArrowRight, IconBrandBootstrap, IconBrandInertia, IconBrandLaravel, IconBrandNextjs, IconBrandReact, IconBrandTailwind } from '@tabler/icons-react';
import CtaButton from '../ui/CtaButton';

export default function HeroSection() {
    return (
        <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-6 items-center pt-10 py-10">
            {/* Left Content */}
            <div className="flex flex-col p-3 space-y-6 text-center items-center">

                <StarBadge />



                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl text-white font-semibold leading-tight drop-shadow-md animate-[fadeIn_0.8s_ease-out]">
                    Full-Stack Developer <br />
                    <span className="text-cyan-300 inline-block animate-[fadeIn_1s_ease-out_0.3s_both]">
                        From Code to Reality
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-white text-lg font-medium leading-relaxed max-w-xl text-center md:text-start drop-shadow-sm animate-[fadeIn_1.2s_ease-out_0.6s_both]">
                    I'm a coder, learner and builder. Building modern web applications with Laravel, React, and Inertia.js. Focused on writing clean code and modern UI.
                </p>

                <style dangerouslySetInnerHTML={{
                    __html: `
                      @keyframes fadeIn {
                       from { opacity: 0; transform: translateY(20px); }
                      to { opacity: 1; transform: translateY(0); }
                      }
                ` }} />
                <Link href="/contact"
                >
                    <CtaButton />
                </Link>

                {/* Keyframes အတွက် style tag (text animation ကူညီပေးခဲ့တဲ့ logic ပါပဲ) */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                   @keyframes fadeIn {
                   from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                  }
                ` }} />
            </div>

            {/* Right Content */}
            <div className="w-full overflow-hidden flex flex-col justify-center space-y-2">
                <AnimationLetter text="React" icon={<IconBrandReact size={32} />} reverse={false} color="text-white" />
                <AnimationLetter text="Next.js" icon={<IconBrandNextjs size={32} />} reverse={true} color="text-cyan-300" />
                <AnimationLetter text="Laravel" icon={<IconBrandLaravel size={32} />} reverse={false} color="text-white" />
                <AnimationLetter text="Inertia.JS" icon={<IconBrandInertia size={32} />} reverse={true} color="text-cyan-300" />
                <AnimationLetter text="Tailwind CSS" icon={<IconBrandTailwind size={32} />} reverse={false} color="text-white" />
                <AnimationLetter text="Bootstrap" icon={<IconBrandBootstrap size={32} />} reverse={true} color="text-cyan-300" />
            </div>
        </div>
    );
}