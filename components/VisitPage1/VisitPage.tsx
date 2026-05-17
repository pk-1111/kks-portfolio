import Link from "next/link";

export default function VisitPage1() {
    const projects = [
        {
            title: "Pizza Hunter",
            video: "/bg_video/Pizza-User.mp4",
            link: "/visit1",
            // Comma အပိုတွေကို ဖယ်ရှားထားပါတယ်
            screenshots: [
                "/pizza-src/pizza-src-1.png", "/pizza-src/pizza-src-2.png",
                "/pizza-src/pizza-src-3.png", "/pizza-src/pizza-src-4.png",
                "/pizza-src/pizza-src-5.png", "/pizza-src/pizza-src-6.png",
                "/pizza-src/pizza-src-7.png", "/pizza-src/pizza-src-8.png",
                "/pizza-src/pizza-src-9.png", "/pizza-src/pizza-src-10.png"
            ]
        },
    ];

    return (
        <div className="max-w-6xl mx-auto pt-16 px-6">
            {/* Back button */}
            <a href="/home" className="text-slate-200 hover:text-white flex items-center gap-2 mb-6 transition">
                <span className="text-lg">‹</span> Projects
            </a>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                <div>
                    <div className="flex items-center gap-4 mb-2">
                        <h1 className="text-5xl font-extrabold text-white tracking-tight">Pizza Hunter</h1>
                        <span className="px-3 py-1 bg-white/5 border border-white/20 rounded-full text-[10px] text-gray-300 flex items-center gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div> Live Project
                        </span>
                    </div>
                    <p className="text-white text-lg">Full-stack Pizza Ordering & Management System</p>
                </div>

                <div className="flex items-center gap-6 text-sm">
                    <a href="https://github.com/pk-1111/Pizza_POS.git" className="text-gray-100 hover:text-white flex items-center gap-2">GitHub ↗</a>
                    <a href="/admin_dashboard" className="text-gray-100 hover:text-white flex items-center gap-2">Admin Dashboard↗</a>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="lg:col-span-3 rounded-[1.5rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm shadow-2xl relative group">
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
                ))}

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
                            <Link href="/i_max_pos">
                                <li className="hover:text-emerald-400 cursor-pointer transition">I-Max Project</li>
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

            {projects.map((project, index) => (
                <div key={index} className="mt-8">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="text-white uppercase tracking-widest text-xs font-bold">System Preview</span>
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
                {/* Features */}
                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                        <h2 className="text-white text-xl font-bold">Key Features</h2>
                    </div>
                    <ul className="space-y-4 text-slate-200">
                        <li className="flex items-center gap-3">Secure User Management: Fully functional authentication system (Login/Register) with features for profile management, including profile views and secure password updates.</li>
                        <li className="flex items-center gap-3">Comprehensive Order Lifecycle: Features a dynamic shopping cart where users can add, update, or remove items. Once payment is initiated, the cart is cleared, and the order is moved to a 'Pending' state for administrative review.</li>
                        <li className="flex items-center gap-3">Interactive Social Proof: Integrated a Star Rating and Review system. Users can post comments, edit or delete their own feedback, and read experiences shared by other customers.</li>
                        <li className="flex items-center gap-3">Smart Product Discovery: Implemented advanced filtering and search functionality, allowing users to browse pizzas by Min/Max price ranges and specific product details.</li>
                        <li className="flex items-center gap-3">Order Tracking & History: A dedicated dashboard for customers to monitor their real-time order status (Pending/Accepted/Rejected) and view a full history of their past transactions.</li>
                        <li className="flex items-center gap-3">Admin Control Panel: A secure backend for administrators to manage incoming orders, with the ability to Accept or Reject requests based on store availability.</li>
                        <li className="flex items-center gap-3">Modern UI/UX: Built with a focus on responsiveness and clean design using Bootstrap, ensuring a premium experience on both desktop and mobile devices.</li>
                    </ul>
                </section>

                <section>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-1 h-8 bg-emerald-500 rounded-full"></div>
                        <h2 className="text-white text-xl font-bold">Languages Used</h2>
                    </div>
                    <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mb-2">
                        <div className="bg-emerald-500 h-full w-[85%] rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
                    </div>
                    <div className="flex justify-between text-[10px] uppercase tracking-tighter text-white font-bold">
                        <span> Laravel / PHP / Bootstrap UI</span>
                        <span>85%</span>
                    </div>
                </section>
            </div>
        </div>
    );

}





