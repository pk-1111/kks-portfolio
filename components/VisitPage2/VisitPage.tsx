import Link from "next/link";



export default function VisitPage2() {




    return (
        <div className="max-w-6xl mx-auto pt-16 px-6">
            {/* Back button */}
            <button className="text-slate-200 hover:text-white flex items-center gap-2 mb-6 transition">
                <span className="text-lg">‹</span> Projects
            </button>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <div className="flex items-center gap-4 mb-2">
                        <h1 className="text-5xl font-extrabold text-white tracking-tight">Mellso-POS</h1>
                        <span className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-[10px] text-gray-300 flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Live
                        </span>
                    </div>
                    <p className="text-slate-200 text-lg">Premium Ev Authorized Reseller Concept</p>
                </div>

                <div className="flex items-center gap-6 text-sm">
                    <a href="https://github.com/pk-1111/Ev-POS.git" className="text-gray-400 hover:text-white flex items-center gap-2">GitHub ↗</a>
                    <a href="/admin_ev_dashboard" className="text-slat-100 hover:text-white flex items-center gap-2">Ev Admin Dashboard ↗</a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Video Display */}
                <div className="lg:col-span-3 rounded-[1.5rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl relative group">
                    {/* Video */}
                    <video
                        src="/bg_video/Ev-User.mp4"
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
                            {['React', 'Laravel', 'Inertia.js & Tailwind CSS', 'MySQL'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/10 rounded-lg text-[11px] text-white border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">🔗 Other Projects</h3>
                        <ul className="space-y-3 text-sm text-white">
                            <Link href="/pizza_pos">
                                <li className="hover:text-emerald-400 cursor-pointer transition">Hunter-Pizza Project</li>
                            </Link>
                            <Link href="/i_max_pos">
                                <li className="hover:text-emerald-400 cursor-pointer transition">I-Max Project</li>
                            </Link>
                            <Link href="/admin_ev_dashboard">
                                <li className="hover:text-emerald-400 cursor-pointer transition">Ev Admin Dashboard</li>
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
                        <img src="/ev-pos/ev-1.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/ev-pos/ev-2.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/ev-pos/ev-3.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/ev-pos/ev-4.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/ev-pos/ev-5.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/ev-pos/ev-6.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/ev-pos/ev-7.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/ev-pos/ev-8.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/ev-pos/ev-9.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/ev-pos/ev-10.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/ev-pos/ev-11.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/ev-pos/ev-12.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
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
                        "I developed EV-POS, a comprehensive e-commerce solution tailored for electric vehicle accessories and products. The platform features a seamless integration of a Laravel backend and a reactive React frontend, utilizing Inertia.js to deliver a high-performance, Single Page Application (SPA) experience with robust server-side capabilities."
                    </p>
                </section>

                {/* Features */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                        <h2 className="text-white text-xl font-bold">Features</h2>
                    </div>
                    <ul className="space-y-4 text-slate-200">
                        <li className="flex items-center gap-3">User Authentication: Fully integrated Secure Login and Registration system for personalized customer experiences.</li>
                        <li className="flex items-center gap-3">Advanced Shopping Cart System: A dynamic cart management system that allows users to add multiple items, update quantities, or remove products seamlessly before proceeding to checkout.</li>
                        <li className="flex items-center gap-3">Streamlined Checkout Flow: An optimized checkout process that transitions from cart management to a dedicated payment gateway interface.</li>
                        <li className="flex items-center gap-3">Order & Payment History: Provides users with a transparent view of their transaction records and past purchase history.</li>
                        <li className="flex items-center gap-3">Dynamic Product Customization: Enables customers to select specific product variants, including battery capacity and color options, with real-time detail updates.</li>
                        <li className="flex items-center gap-3">Customer Support Integration: Built-in contact features to facilitate direct communication between customers and the support team.</li>
                        <li className="flex items-center gap-3">Responsive UI/UX: A modern, mobile-first design crafted with Tailwind CSS to ensure a consistent experience across all devices.</li>
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
                        <span>React / Laravel / Inertia.js / Tailwind CSS</span>
                        <span>85%</span>
                    </div>
                </section>
            </div>
        </div>


    );
}