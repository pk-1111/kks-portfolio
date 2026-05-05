import Link from "next/link";

export default function VisitPage1() {

    const projects = [
        {
            title: "Pizza Hunter",
            image: "/bg_video/pizza-thumbnail.png",
            video: "/bg_video/Recordingofpizza-Project.mp4",
            link: "/visit1",
            // မင်းဆီမှာရှိတဲ့ ပုံလမ်းကြောင်းတွေနဲ့ ဒီမှာပြန်လဲလိုက်ပါ
            screenshots: ["/pizza-src/pizza-src1.png", "/pizza-src/pizza-src2.png", "/pizza-src/pizza-src3.png", "/pizza-src/pizza-src4.png", "/pizza-src/pizza-src5.png", "/pizza-src/pizza-src6.png", "/pizza-src/pizza-src7.png"]
        },
    ];

    return (
        <div className="max-w-6xl mx-auto pt-16 px-6">
            {/* Back button */}
            <button className="text-gray-400 hover:text-white flex items-center gap-2 mb-6 transition">
                <span className="text-lg">‹</span> Projects
            </button>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <div className="flex items-center gap-4 mb-2">
                        <h1 className="text-5xl font-extrabold text-white tracking-tight">Pizza Hunter</h1>
                        <span className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-[10px] text-gray-300 flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Live Project
                        </span>
                    </div>
                    <p className="text-gray-400 text-lg">Full-stack Pizza Ordering & Management System</p>
                </div>

                <div className="flex items-center gap-6 text-sm">
                    <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2">GitHub ↗</a>
                    <a href="#" className="text-gray-400 hover:text-white flex items-center gap-2">Visit Live ↗</a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="lg:col-span-3 rounded-[1.5rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl relative group">
                        <video
                            src={project.video}
                            loop
                            muted
                            playsInline
                            autoPlay
                            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                        />
                    </div>
                ))}

                {/* Sidebar (Tech Stack & Admin Features) */}
                <div className="space-y-6">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                            🔗 Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {['Laravel (PHP)', 'MySQL', 'Bootstrap 5', 'jQuery', 'Blade Engine'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/10 rounded-lg text-[11px] text-white border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">🔗 Other Projects</h3>
                        <ul className="space-y-3 text-sm text-white">
                            <Link href="/visit">
                                <li className="hover:text-emerald-400 cursor-pointer transition">I-Max Project</li>
                            </Link>
                            <Link href="/visit1">
                                <li className="hover:text-emerald-400 cursor-pointer transition">Hunter-Pizza Project</li>
                            </Link>
                        </ul>
                    </div>

                    {/* <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-4">👑 Admin Capabilities</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-center gap-2 text-emerald-400"><div className="w-1 h-1 bg-emerald-400 rounded-full"></div> Order Management</li>
                            <li className="hover:text-white transition cursor-default">Accept/Reject Orders</li>
                            <li className="hover:text-white transition cursor-default">Product CRUD (Add/Edit)</li>
                            <li className="hover:text-white transition cursor-default">Customer Feedback View</li>
                        </ul>
                    </div> */}
                </div>
            </div>

            {/* Screenshots Gallery */}
            {projects.map((project, index) => (
                <div key={index} className="mt-8">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-gray-500 uppercase tracking-widest text-xs font-bold">System Preview</span>
                        <div className="flex-1 h-[1px] bg-white/5"></div>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
                        {project.screenshots.map((src, i) => (
                            <div key={i} className="min-w-[280px] md:min-w-[320px] aspect-video rounded-2xl overflow-hidden border border-white/5 bg-[#1a1a1a] snap-start hover:border-emerald-500/30 transition-all">
                                <img src={src} alt={`Screenshot ${i}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            <div className="max-w-4xl mx-auto px-6 py-20 space-y-16">
                {/* Description */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                        <h2 className="text-white text-xl font-bold">Project Description</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-lg font-light">
                        "I developed Pizza Hunter, a comprehensive web-based food ordering platform. Built with a robust Laravel backend and a clean Bootstrap UI, the system facilitates seamless transactions between customers and staff. It features a sophisticated administrative dashboard designed for real-time order tracking and menu management."
                    </p>
                </section>

                {/* Features */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                        <h2 className="text-white text-xl font-bold">Key Features</h2>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
                        <li className="flex items-center gap-3">🍕 Dynamic Product Menu with Categories</li>
                        <li className="flex items-center gap-3">🛒 Full Shopping Cart & Checkout System</li>
                        <li className="flex items-center gap-3">💳 Payment Verification (Screenshot Upload)</li>
                        <li className="flex items-center gap-3">🛠 Powerful Admin Panel (Order Control)</li>
                        <li className="flex items-center gap-3">💬 Customer Feedback & Rating System</li>
                        <li className="flex items-center gap-3">👤 User Profile & Order History Tracking</li>
                    </ul>
                </section>

                {/* Progress Bar */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                        <h2 className="text-white text-xl font-bold">Development Focus</h2>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mb-2">
                        <div className="bg-emerald-500 h-full w-[100%] rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] uppercase tracking-tighter text-gray-500 font-bold">
                        <span>PHP / Laravel Backend / Bootstrap UI</span>
                        <span>Completed</span>
                    </div>
                </section>
            </div>
        </div>
    );
}