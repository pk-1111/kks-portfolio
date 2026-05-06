import Link from "next/link";



export default function VisitPage() {




    return (
        <div className="max-w-6xl mx-auto pt-16 px-6">
            {/* Back button */}
            <button className="text-slate-200 hover:text-white flex items-center gap-2 mb-6 transition">
                <span className="text-lg">‹</span> Projects
            </button>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <div className="flex items-center gap-4 mb-2">
                        <h1 className="text-5xl font-extrabold text-white tracking-tight">I-Max</h1>
                        <span className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-[10px] text-gray-300 flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Live
                        </span>
                    </div>
                    <p className="text-slate-200 text-lg">Premium Apple Authorized Reseller Concept</p>
                </div>

                <div className="flex items-center gap-6 text-sm">
                    <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2">GitHub ↗</a>
                    <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2">Visit Live ↗</a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Video Display */}
                <div className="lg:col-span-3 rounded-[1.5rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl relative group">
                    {/* Video */}
                    <video
                        src="/bg_video/Video Project(1).mp4"
                        loop
                        muted
                        playsInline
                        autoPlay
                        preload="metadata"
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                    />


                </div>



                {/* Sidebar (Tags & Other Projects) */}
                <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                            🔗 Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['React', 'Laravel', 'Inertia.js & Tailwind CSS', 'mobile-first'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/10 rounded-lg text-[11px] text-white border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">🔗 Other Projects</h3>
                        <ul className="space-y-3 text-sm text-white">
                            <Link href="/visit1">
                                <li className="hover:text-emerald-400 cursor-pointer transition">Hunter-Pizza Project</li>
                            </Link>
                            <Link href="/visit">
                                <li className="hover:text-emerald-400 cursor-pointer transition">I-Max Project</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-white uppercase tracking-widest text-xs font-bold">In-depth views</span>
                    <div className="flex-1 h-[1px] bg-white/5"></div>
                </div>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">

                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/idevice-shop/idevice-1.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/idevice-shop/idevice-2.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/idevice-shop/idevice-3.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/idevice-shop/idevice-4.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/idevice-shop/idevice-5.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/idevice-shop/idevice-6.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/idevice-shop/idevice-7.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/idevice-shop/idevice-8.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/idevice-shop/idevice-9.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/idevice-shop/idevice-10.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/idevice-shop/idevice-11.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/idevice-shop/idevice-12.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>



                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
                {/* Description */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                        <h2 className="text-white text-xl font-bold">Project Description</h2>
                    </div>
                    <p className="text-slate-200 leading-relaxed text-lg font-light">
                        "I developed I-Max, a premium e-commerce platform specializing in Apple products. The project focuses on a high-end user interface and high-performance functionality, bridging a robust Laravel backend with a reactive React frontend using Inertia.js."
                    </p>
                </section>

                {/* Features */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                        <h2 className="text-white text-xl font-bold">Features</h2>
                    </div>
                    <ul className="space-y-4 text-slate-200">
                        <li className="flex items-center gap-3">⚡️ High-performance SPA experience via Inertia.js</li>
                        <li className="flex items-center gap-3">📱 Responsive, mobile-first design using Tailwind CSS</li>
                        <li className="flex items-center gap-3">⚙️ Dynamic product variant and specification selection</li>
                        <li className="flex items-center gap-3">🛒 Integrated shopping cart and inventory management</li>
                        <li className="flex items-center gap-3">🎨 Fully Functional Cart & Checkout Flow</li>
                    </ul>
                </section>

                {/* Language Progress Bar */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                        <h2 className="text-white text-xl font-bold">Languages Used</h2>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mb-2">
                        <div className="bg-emerald-500 h-full w-[85%] rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] uppercase tracking-tighter text-white font-bold">
                        <span>React / Laravel / Tailwind CSS</span>
                        <span>85%</span>
                    </div>
                </section>
            </div>
        </div>


    );
}