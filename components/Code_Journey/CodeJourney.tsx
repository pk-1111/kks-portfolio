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
        { icon: "fa-brands fa-github", link: "https://github.com/pk-1111" },
        { icon: "fa-brands fa-linkedin-in", link: "https://www.linkedin.com/in/kyaw-kaung-san/" },
        { icon: "fa-envelope", link: "mailto:kyawkaungsan1111@gmail.com" },
        { icon: "fa-brands fa-bluesky", link: "#" }, // Butterfly icon အတွက် font-awesome version လိုအပ်ပါမယ်
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
                        <p className="text-gray-400 text-lg">
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
                <p className="text-gray-400 text-xl max-w-2xl mx-auto">
                    Drop me a message and let's see how we can build something great
                </p>
            </div>



            <div className="flex flex-col items-center justify-center space-y-10 py-16">

                {/* Social Icons Row */}
                <div className="flex items-center space-x-6">
                    {socials.map((social, index) => (
                        <a
                            key={index}
                            href={social.link}
                            className="w-14 h-14 flex items-center justify-center rounded-full border border-emerald-500/40 text-emerald-400 text-2xl hover:bg-emerald-500/10 hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all duration-300"
                        >
                            <i className={`fa - brands ${social.icon}`}></i>
                        </a>
                    ))}
                </div>

                {/* Let's Talk Success Button */}
                <Link href="/contact">
                    <button className="group relative flex items-center space-x-3 px-10 py-4 rounded-full border-2 border-emerald-500/60 bg-transparent overflow-hidden transition-all duration-300 hover:scale-105">
                        {/* Glow Effect on Hover */}
                        <div className="absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                        <i className="fa-solid fa-briefcase text-emerald-400 text-xl group-hover:rotate-12 transition-transform"></i>
                        <span className="text-emerald-400 text-2xl font-semibold tracking-wide">
                            Let's Talk Success
                        </span>
                    </button>
                </Link>

            </div>



        </div >
    );
}