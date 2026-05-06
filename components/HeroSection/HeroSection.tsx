import Link from 'next/link';
import AnimationLetter from '../AnimationLetter/AnimationLetter'

export default function HeroSection() {
    return (
        <div className="relative z-30 grid grid-cols-1 md:grid-cols-2 gap-10 w-full px-6 items-center pt-10 py-10">
            {/* Left Content */}
            <div className="flex flex-col p-3 space-y-6 text-center items-center">

                {/* သင်အလိုရှိတဲ့ Conic Gradient Border Style */}
                <div className="relative p-[1.5px] rounded-full overflow-hidden">
                    {/* လည်ပတ်နေမယ့် Border အပိုင်း (Animation ပါထည့်ပေးထားပါတယ်) */}
                    <div className="absolute inset-0 bg-[conic-gradient(from_180deg,transparent_0%,#b0b2e6_50%,transparent_80%)] animate-[spin_4s_linear_spin]"></div>

                    {/* Badge Content အပိုင်း */}
                    <div className="relative flex items-center gap-3 px-6 py-2 backdrop-blur-xl rounded-full text-white">
                        {/* Icon နေရာ - မူရင်း star icon ကို ပြန်သုံးထားပါတယ် */}
                        <i className="fa-solid fa-star text-amber-300 drop-shadow-[0_0_8px_#facc15] text-xs animate-[spin_4s_linear_infinite]"></i>

                        <span className="font-medium text-sm tracking-wide">
                            Built for developers
                        </span>
                    </div>
                </div>



                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl text-white font-semibold leading-tight drop-shadow-md animate-[fadeIn_0.8s_ease-out]">
                    Aspiring <br />
                    Full-Stack Developer <br />
                    <span className="text-cyan-300 inline-block animate-[fadeIn_1s_ease-out_0.3s_both]">
                        From Code to Reality
                    </span>
                </h1>

                {/* Subtext */}
                <p className="text-white text-lg font-medium leading-relaxed max-w-xl text-center md:text-start drop-shadow-sm animate-[fadeIn_1.2s_ease-out_0.6s_both]">
                    " I'm a coder, learner and builder. Building modern web applications with Laravel, React, and Inertia.js. Focused on writing clean code and modern UI. "
                </p>

                <style dangerouslySetInnerHTML={{
                    __html: `
                      @keyframes fadeIn {
                       from { opacity: 0; transform: translateY(20px); }
                      to { opacity: 1; transform: translateY(0); }
                      }
                ` }} />
                <Link href="/contact"
                    className="relative inline-block p-[2px] overflow-hidden rounded-xl mt-4 animate-[fadeIn_1.4s_ease-out_0.9s_both]"
                    style={{ opacity: 0 }} // Animation မစခင် ကြိုပေါ်မနေအောင်
                >
                    {/* Glow ဖြစ်စေမယ့် Background Layer (Blur သုံးထားပါတယ်) */}
                    <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#3b82f6_50%,#ffffff_100%)] blur-[4px] opacity-80">
                    </div>

                    {/* တကယ်လည်နေမယ့် Border Line အချပ် */}
                    <div className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffffff_0%,#60a5fa_50%,#ffffff_100%)] ">
                    </div>

                    {/* Button အစစ် */}
                    <button className="group relative w-full h-full bg-blue-400 rounded-[11px] px-8 py-3 flex items-center transition-all duration-300 justify-center text-white font-bold hover:bg-white hover:text-blue-600">
                        <i className="fa-regular fa-comment-dots mr-2 text-2xl group-hover:scale-110 transition-transform"></i>
                        Get in touch
                    </button>
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
            <div className="w-full overflow-hidden flex flex-col justify-center space-y-8">
                <AnimationLetter text="React Next.JS" icon="🚀" reverse={false} color="text-white" />
                <AnimationLetter text="Laravel ✦ Laravel + React Inertia.JS" icon="✦" reverse={true} color="text-cyan-300" />
                <AnimationLetter text="Built with Tailwind & Bootstrap" icon="★" reverse={false} color="text-white" />
                <AnimationLetter text="Full Stack Dev" icon="✦" reverse={true} color="text-amber-300" />
            </div>
        </div>
    );
}