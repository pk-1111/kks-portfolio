import { IconArrowAutofitContent, IconArrowAutofitRight, IconArrowAutofitUp, IconArrowAutofitUpFilled, IconCapProjecting, IconFolder } from "@tabler/icons-react";



export default function ProjectSection() {
    const projects = [
        {
            title: "I-Max Project",
            image: "/idevice-shop/idevice-cover.png",
            video: "/bg_video/I-Max-User.mp4",
            link: "/i_max_pos",
            details: "A premium Apple-inspired e-commerce storefront featuring glassmorphism UI, fluid animations, and real-time inventory management."

            // screenshots: ["/idevice-shop/idevice-shop.png", "/idevice-shop/idevice-1.png", "/idevice-shop/idevice-2.png", "/idevice-shop/idevice-3.png", "/idevice-shop/idevice-4.png", "/idevice-shop/idevice-5.png", "/idevice-shop/idevice-6.png", "/idevice-shop/idevice-7.png", "/idevice-shop/idevice-8.png", "/idevice-shop/idevice-9.png"]
        },
        {
            title: "Pizza Project",
            image: "/bg_video/pizza-src-cover.png",
            video: "/bg_video/Pizza-User.mp4",
            link: "/pizza_pos",
            details: "A full- stack pizza ordering platform featuring real - time order tracking, interactive customer reviews, and dynamic price filtering."
            // screenshots: ["/pizza-src/pizza-src-1.png", "/pizza-src/pizza-src-2.png", "/pizza-src/pizza-src-3.png", "/pizza-src/pizza-src-4.png", "/pizza-src/pizza-src-5.png", "/pizza-src/pizza-src-6.png", "/pizza-src/pizza-src-7.png", , "/pizza-src/pizza-src-8.png", , "/pizza-src/pizza-src-9.png", , "/pizza-src/pizza-src-10.png"]
        },
        {
            title: "Ev-POS Project",
            image: "/ev-pos/ev-1-cover.png",
            video: "/bg_video/Ev-User.mp4",
            link: "/ev_pos",
            details: "A modern EV retail POS system with dynamic product variants, integrated cart logic, and a streamlined checkout experience."
            //     screenshots: ["/pizza-src/pizza-src1.png", "/pizza-src/pizza-src2.png", "/pizza-src/pizza-src3.png", "/pizza-src/pizza-src4.png", "/pizza-src/pizza-src5.png", "/pizza-src/pizza-src6.png", "/pizza-src/pizza-src7.png"]
        },

    ];



    return (
        <div className="relative z-30 w-full flex flex-col items-center px-6 py-16 text-white mt-10">
            {/* Header Section */}
            <div className="flex flex-col p-3 space-y-6 text-center items-center mb-12">
                <div className="flex items-center justify-center px-6 py-3 font-mono rounded-full bg-blue-600/20 border border-blue-500/50">
                    <span className="flex items-center text-xl">
                        <IconFolder className="mr-2" />  Projects
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 font-bold leading-relaxed">
                    3+ Projects Done <br />
                    Here're Some Of Them
                </h1>
            </div>

            {/* Projects List - ကြီးကြီးမြင်ရအောင် grid-cols-1 ပဲ သုံးထားပါတယ် */}
            <div className="grid grid-cols-1 gap-20 max-w-5xl w-full mb-16">
                {projects.map((project, index) => (
                    <div key={index} className="group w-full">

                        {/* Title & Visit Link */}
                        <div className="flex justify-between items-end mb-6 px-2">
                            <div>
                                <h2 className="text-4xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h2>
                                <div className="h-1 w-20 bg-blue-500 rounded-full group-hover:w-full transition-all duration-500"></div>
                            </div>
                            <a
                                href={project.link}
                                className="flex items-center space-x-2 text-xl bg-white/5 px-5 py-2 rounded-full border border-white/10 hover:bg-white/20 transition-all"
                            >
                                <span>Visit Project</span>
                                <IconArrowAutofitRight />
                            </a>
                        </div>

                        {/* Main Media Card - Video အကြီးကြီးပြမည့်အပိုင်း */}
                        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#111] aspect-video w-full shadow-2xl">
                            {/* Background Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-700 absolute inset-0 z-10"
                            />

                            {/* Video */}
                            <video
                                loop
                                muted
                                playsInline
                                autoPlay
                                preload="metadata"
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                            >
                                <source src={project.video} type="video/mp4" />
                            </video>




                        </div>

                        {/* Screenshot Gallery - အောက်က ပုံ ၅ ပုံ အပိုင်း */}
                        <div className="mt-8">
                            <div className="flex items-center justify-center gap-4 mb-4">
                                <span className="text-slate-200  tracking-widest  text-xs font-bold">{project.details}</span>

                            </div>
                            {/* <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">

                                <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                                    <img src={project.screenshots[0]} alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                                    <img src={project.screenshots[1]} alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                                    <img src={project.screenshots[2]} alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                                    <img src={project.screenshots[3]} alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                                    <img src={project.screenshots[4]} alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                                    <img src={project.screenshots[5]} alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                                    <img src={project.screenshots[6]} alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                                    <img src={project.screenshots[7]} alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                                    <img src={project.screenshots[8]} alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                                    <img src={project.screenshots[9]} alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                                </div>





                            </div> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* See More Projects Button */}
            {/* <button className="flex items-center space-x-4 px-10 py-5 rounded-full border border-emerald-500/30 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all group">
                <i className="fa-solid fa-rocket text-emerald-400 group-hover:-translate-y-2 group-hover:translate-x-2 transition-transform duration-500"></i>
                <span className="text-2xl font-semibold">Explore More Works</span>
            </button> */}
        </div>
    );
}