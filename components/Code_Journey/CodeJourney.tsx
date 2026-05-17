import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
    IconButterfly, // Bluesky အတွက် Tabler Icon ဖြစ်ပါတယ်
    IconBriefcase
} from '@tabler/icons-react';
import Link from 'next/link';

export default function StatsSection() {
    const stats = [
        {
            number: "3+",
            label: "Projects completed",
            subLabel: "Personal and practice projects",
        },
        {
            number: "Learning",
            label: "Full-Stack Development",
            subLabel: "Building skills with real projects",
        },
        {
            number: "Motivate",
            label: "Junior Developer",
            subLabel: "Eager to learn and grow",
        },
    ];

    const socials = [
        { icon: IconBrandGithub, link: "https://github.com/pk-1111" },
        { icon: IconBrandLinkedin, link: "https://www.linkedin.com/in/kyaw-kaung-san/" },
        { icon: IconMail, link: "mailto:kyawkaungsan1111@gmail.com" },
        { icon: IconButterfly, link: "#" },
    ];

    return (
        <div className="relative z-30 w-full flex flex-col items-center px-6 py-24 text-white">

            {/* Title */}
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-20 leading-tight">
                Growing as a Developer
            </h2>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 max-w-6xl w-full text-center mb-32">
                {stats.map((stat, index) => (
                    <div key={index} className="flex flex-col space-y-2">
                        <h3 className="text-6xl md:text-7xl font-bold text-emerald-400">
                            {stat.number}
                        </h3>
                        <p className="text-2xl font-semibold pt-4">
                            {stat.label}
                        </p>
                        <p className="text-slate-200 text-lg">
                            {stat.subLabel}
                        </p>
                    </div>
                ))}
            </div>

            {/* Footer Call to Action */}
            <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold">
                    Want To Work Together?
                </h2>
                <p className="text-slate-200 text-xl max-w-2xl mx-auto">
                    Drop me a message and let's see how we can build something great
                </p>
            </div>

            <div className="flex flex-col items-center justify-center space-y-10 py-16">

                {/* Social Icons Row */}
                <div className="flex items-center space-x-6 ">
                    {socials.map((social, index) => {
                        // Icon component ကို variable ထဲပြောင်းသိမ်းပြီးမှ render လုပ်သည်
                        const IconComponent = social.icon;

                        return (
                            <a
                                key={index}
                                href={social.link}
                                className="w-14 h-14 flex items-center justify-center rounded-full border border-emerald-500/40 text-white hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(52,211,153,0.3)]  hover:text-white  hover:scale-130 transition-transform duration-300 "
                            >
                                <IconComponent size={24} stroke={1.5} />
                            </a>
                        );
                    })}
                </div>

                {/* Let's Talk Success Button */}
                <Link href="/contact">
                    <button className="group relative flex items-center space-x-3 px-10 py-4 rounded-full border-2 border-emerald-500/60 bg-transparent overflow-hidden transition-all duration-300 hover:scale-105">
                        {/* Glow Effect on Hover */}
                        <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        {/* Button Internal Icon နေရာတွင် flex items-center ဖြစ်အောင် ပြင်ဆင်ထားသည် */}
                        <span className="flex items-center gap-2">
                            <IconBriefcase size={24} className="text-emerald-400 group-hover:rotate-12 transition-transform" stroke={1.5} />
                            <span className="text-white text-2xl font-semibold tracking-wide">
                                Let's Talk Success
                            </span>
                        </span>
                    </button>
                </Link>

            </div>
        </div>
    );
}