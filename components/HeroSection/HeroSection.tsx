import Link from 'next/link';
import AnimationLetter from '../AnimationLetter/AnimationLetter'
export default function HeroSection() {
    return (
        <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-6 items-center pt-10 py-10">
            {/* Left Content */}
            <div className="flex flex-col p-3 space-y-6 text-center items-center">
                <div className="flex items-center justify-center px-3 py-1 rounded-full bg-blue-400 text-xs text-white">
                    <span> <i className="fa-solid fa-star mr-1 animate-spin  bg-gradient-to-tr to-white  bg-clip-text text-transparent"
                        style={{
                            animationDuration: '3s',
                            animationTimingFunction: 'ease-in-out'
                        }}>
                    </i>Built for developers</span>
                </div>
                <h1 className="text-5xl md:text-5xl text-white font-bold leading-relaxed">
                    Aspiring Full-Stack Developer <br /> From Code to Reality
                </h1>
                <p className="text-white/90 text-start">
                    " I'm a coder, learner and builder. Building modern web application with Laravel, React, and Inertia.js. Focused on writing clean code and modern UI. "
                </p>
                <Link href="/contact">
                    <button className="border-white border-2 mt-3 rounded-xl px-6 py-3 flex items-center hover:scale-110 transition-transform duration-300 justify-center text-white hover:bg-white hover:text-amber-500 ">
                        <i className="fa-regular fa-comment-dots mr-2 text-2xl"></i>Get in touch
                    </button>
                </Link>
            </div>

            {/* Right Content */}
            <div className="w-full overflow-hidden flex flex-col justify-center space-y-6">
                <AnimationLetter text="React Next.JS" icon="🚀" reverse={false} />
                <AnimationLetter text="Laravel ✦ Laravel + React Inertia.JS" icon="✦" reverse={true} color="text-blue-400" />
                <AnimationLetter text="Built with Tailwind & Bootstrap" icon="★" reverse={false} />
                <AnimationLetter text="Full Stack Dev" icon="✦" reverse={true} color="text-blue-400" />
            </div>
        </div>
    );
}