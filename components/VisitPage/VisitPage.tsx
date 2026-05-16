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
                    <a href="https://github.com/pk-1111/I-Max-POS.git" className="text-gray-400 hover:text-white flex items-center gap-2">GitHub ↗</a>
                    <a href="/admin_dashboard" className="text-gray-400 hover:text-white flex items-center gap-2">Admin Dashboard↗</a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Video Display */}
                <div className="lg:col-span-3 rounded-[1.5rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl relative group">
                    {/* Video */}
                    <video
                        src="/bg_video/I-Max-User.mp4"
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
                            {['Laravel', 'PHP', 'Tailwind CSS', 'MySQL'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/10 rounded-lg text-[11px] text-white border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">🔗 Other Projects</h3>
                        <ul className="space-y-3 text-sm text-white">

                            <Link href="/ev_pos">
                                <li className="hover:text-emerald-400 cursor-pointer transition">Ev-POS Project</li>
                            </Link>
                            <Link href="/pizza_pos">
                                <li className="hover:text-emerald-400 cursor-pointer transition">Hunter-Pizza Project</li>
                            </Link>
                            <Link href="/admin_dashboard">
                                <li className="hover:text-emerald-400 cursor-pointer transition">Admin Dashborad</li>
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
                        "I developed i-Device Shop, a specialized e-commerce and POS platform dedicated to premium Apple products. The system is engineered using Laravel (PHP) and Tailwind CSS, focusing on a clean, high-end user interface and an efficient order management workflow. It bridges the gap between a consumer storefront and a functional retail management tool."
                    </p>
                </section>

                {/* Features */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                        <h2 className="text-white text-xl font-bold">Features</h2>
                    </div>
                    <ul className="space-y-4 text-slate-200">
                        <li className="flex items-center gap-3">User Authentication & Security: Secure login and registration system for personalized customer profiles and order tracking.</li>
                        <li className="flex items-center gap-3">Categorized Product Discovery: Advanced filtering allows users to browse products by specific categories (e.g., iPhone, iPad, Mac) for a streamlined shopping experience.</li>
                        <li className="flex items-center gap-3">Dynamic Product Customization: Enables users to select specific variants, including Storage Capacity and Color options, with real-time detail updates.</li>
                        <li className="flex items-center gap-3">Flexible Cart Management: A robust shopping cart that supports multi-item selection and real-time removal before checkout.</li>
                        <li className="flex items-center gap-3">Order Lifecycle Tracking: Post-purchase, users can track their orders in real-time. Orders transition from 'Pending' to 'Accepted' or 'Rejected' based on admin actions.</li>
                        <li className="flex items-center gap-3">Admin Fulfillment Dashboard: Features a comprehensive admin interface to manage incoming orders, verify payments, and handle inventory status.</li>
                        <li className="flex items-center gap-3">Transaction History: A detailed log for users to access and review their complete purchase and payment history.</li>
                        <li className="flex items-center gap-3">Integrated Customer Contact: Built-in contact functionality to facilitate direct communication between the customer and the shop.</li>

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
                        <span> Laravel / PHP / Tailwind CSS</span>
                        <span>85%</span>
                    </div>
                </section>
            </div>
        </div>


    );
}