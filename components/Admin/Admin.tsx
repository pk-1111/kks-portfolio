import Link from "next/link";



export default function AdminPage() {




    return (
        <div className="max-w-6xl mx-auto pt-16 px-6">
            {/* Back button */}
            <a href="/home" className="text-slate-200 hover:text-white flex items-center gap-2 mb-6 transition">
                <span className="text-lg">‹</span> Projects
            </a>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <div className="flex items-center gap-4 mb-2">
                        <h1 className="text-5xl font-extrabold text-white tracking-tight">I-Max & Pizza Hunter Admin Dashboard </h1>
                        <span className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-[10px] text-gray-300 flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Live
                        </span>
                    </div>
                    <p className="text-slate-200 text-lg">Full-Stack Admin Management Dashboard</p>
                </div>


            </div>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Main Video Display */}
                <div className="lg:col-span-3 rounded-[1.5rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl relative group">
                    {/* Video */}
                    <video
                        src="/idevice-shop/I-Max-Admin.mp4"
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
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">🔗 Other Projects</h3>
                        <ul className="space-y-3 text-sm text-white">


                            <Link href="/pizza_pos">
                                <li className="hover:text-emerald-400 cursor-pointer transition">Hunter-Pizza Project</li>
                            </Link>
                            <Link href="/i_max_pos">
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
                        <img src="/pizza-src/admin-src-1.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/pizza-src/admin-src-2.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/pizza-src/admin-src-3.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/pizza-src/admin-src-4.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/pizza-src/admin-src-5.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/pizza-src/admin-src-6.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/pizza-src/admin-src-7.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/pizza-src/admin-src-8.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/pizza-src/admin-src-9.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/pizza-src/admin-src-10.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/pizza-src/admin-src-11.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-blue-500/30 transition-all" >
                        <img src="/pizza-src/admin-src-12.png" alt="Screenshot" className="w-full h-50 object-cover opacity-60 hover:opacity-100 transition-opacity duration-300" />
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
                        "Developed a robust administrative ecosystem featuring a multi-tier authorization system (Super Admin & Admin), enabling streamlined management of the e-commerce lifecycle from inventory control to order fulfillment."
                    </p>
                </section>

                {/* Features */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                        <h2 className="text-white text-xl font-bold">Features</h2>
                    </div>
                    <ul className="space-y-4 text-slate-200">
                        <li className="flex items-center gap-3"> Inventory & Content Management: Comprehensive CRUD operations for Products, Categories, and Payment Methods with granular specification controls.</li>
                        <li className="flex items-center gap-3">Order Processing Pipeline: Dynamic order tracking system with status management (Pending, Accept, Reject) and detailed order analytics.</li>
                        <li className="flex items-center gap-3">Role-Based Access Control (RBAC): Advanced permission hierarchy where Super Admins manage administrative accounts and system-level payment configurations.</li>
                        <li className="flex items-center gap-3">User & Team Oversight: Centralized dashboard for monitoring customer databases and managing administrative team lists.</li>
                        <li className="flex items-center gap-3">Customer Feedback System: Integrated module to review and manage customer insights and testimonials.</li>
                        <li className="flex items-center gap-3"> Secure Account Management: Personalized admin profiles with secure data editing and password encryption protocols.</li>
                    </ul>
                </section>

                {/* Language Progress Bar */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                        <h2 className="text-white text-xl font-bold">Permissions Logic Summary</h2>
                    </div>
                    <ul className="space-y-4 text-slate-200">
                        <li className="flex items-center gap-3"> Super Admin: Exclusive access to Admin Creation, Payment Method setup, and full visibility of all User/Admin lists.</li>
                        <li className="flex items-center gap-3">Standard Admin: Operational access to Product management (View, Edit, Delete), Order processing, and User lists.</li>
                        <li className="flex items-center gap-3">Role-Based Access Control (RBAC): Advanced permission hierarchy where Super Admins manage administrative accounts and system-level payment configurations.</li>
                        <li className="flex items-center gap-3">User & Team Oversight: Centralized dashboard for monitoring customer databases and managing administrative team lists.</li>
                        <li className="flex items-center gap-3">Customer Feedback System: Integrated module to review and manage customer insights and testimonials.</li>
                        <li className="flex items-center gap-3"> Secure Account Management: Personalized admin profiles with secure data editing and password encryption protocols.</li>
                    </ul>
                </section>
            </div>
        </div>


    );
}