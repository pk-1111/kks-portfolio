import Link from 'next/link';
import React from 'react';

const Profile = () => {
    // Project list with descriptions and screenshot placeholders
    const projects = [
        {
            title: "iMax POS System",
            tech: "Laravel + React + Inertia.js",
            desc: "A modern Single Page Application (SPA) focusing on high-performance data handling and seamless UI transitions using Inertia.js.",
            image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=500", // Project ပုံထည့်ရန်
        },
        {
            title: "EV POS Project",
            tech: "React.js",
            desc: "Developed a lightweight, fast-loading frontend POS interface with React, emphasizing component reusability and efficient state management.",
            image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=500", // Project ပုံထည့်ရန်
        },
        {
            title: "Pizza Ordering Project",
            tech: "Laravel + PHP + Bootstrap",
            desc: "A full-stack web application featuring order management, secure authentication, and a responsive design for food services.",
            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=500", // Project ပုံထည့်ရန်
        }
    ];

    return (
        <div className="min-h-screen bg-[#0d1117] text-gray-300 font-sans selection:bg-emerald-500/30">


            <main className="max-w-6xl mx-auto px-6 pt-40 pb-20">
                {/* Hero Section with Combined Layout */}
                <section className="flex flex-col md:flex-row items-center gap-16 mb-40">
                    <div className="flex-1 text-center md:text-left">
                        <div className="inline-block px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-mono mb-6 uppercase tracking-wider">
                            Available for Junior Full-Stack Roles
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                            Kyaw Kaung San
                        </h1>
                        <p className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
                            I am a <span className="text-white font-medium">Full-Stack Developer</span> dedicated to building efficient,
                            scalable web solutions. With a focus on the Laravel ecosystem and modern frameworks,
                            I turn complex problems into elegant code.
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span> Laravel / PHP
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-medium">
                                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span> React / Vue
                            </div>
                        </div>
                    </div>

                    {/* Profile Picture with Glow Effect */}
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-[30px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                        <div className="relative w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-[28px] border border-white/10 bg-[#161b22]">
                            <img
                                src="/bg_video/profile.jpg"
                                alt="Kyaw Kaung San"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </section>

                {/* Professional Experience Section */}
                <section id="work" className="mb-40">
                    <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
                        <span className="h-px w-12 bg-emerald-500"></span> Professional Journey
                    </h2>
                    <div className="relative border-l-2 border-white/5 ml-4 pl-10">
                        <div className="relative">
                            <div className="absolute -left-[49px] top-0 w-4 h-4 bg-[#0d1117] border-2 border-emerald-500 rounded-full shadow-[0_0_10px_#10b981]"></div>
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <h3 className="text-2xl font-bold text-white">Independent Software Developer</h3>
                                <span className="text-sm font-mono text-emerald-500 font-bold bg-emerald-500/10 px-3 py-1 rounded-full">2024 — PRESENT</span>
                            </div>
                            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                                Actively engineering production-ready web applications with a focus on POS (Point of Sale) systems.
                                Specializing in creating clean architectures and optimizing database structures.
                            </p>
                            <ul className="grid md:grid-cols-2 gap-4 text-sm text-gray-500">
                                <li className="flex items-center gap-2">▹ Scalable Database Design (MySQL)</li>
                                <li className="flex items-center gap-2">▹ API Integration & Development</li>
                                <li className="flex items-center gap-2">▹ Modern UI/UX Implementation</li>
                                <li className="flex items-center gap-2">▹ Advanced React Hooks & State</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Projects Section with Images */}
                <section id="projects" className="mb-40">
                    <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {projects.map((p, i) => (
                            <div key={i} className="group bg-[#161b22] border border-white/5 rounded-3xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500">
                                {/* Project Image */}
                                <div className="h-48 overflow-hidden bg-gray-900 relative">
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                    />
                                    <Link href="/visit">
                                        <div className="absolute top-4 right-4 p-2 bg-[#0d1117]/80 rounded-full text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                                        </div>
                                    </Link>
                                </div>

                                <div className="p-8">
                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{p.title}</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-6 h-16 line-clamp-3">{p.desc}</p>
                                    <div className="text-[10px] font-bold font-mono tracking-widest text-emerald-500 uppercase px-2 py-1 border border-emerald-500/20 rounded inline-block">
                                        {p.tech}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section className="bg-[#161b22] p-8 md:p-12 rounded-[40px] border border-white/5">
                    <div className="max-w-3xl">
                        <h3 className="text-2xl font-bold text-white mb-4 italic">Code Lab Training & Self-Learning</h3>
                        <p className="text-gray-400 leading-relaxed italic text-lg">
                            Completed intensive training in Laravel and Vue.js at Code Lab.
                            Further self-taught in React, TypeScript, and Inertia.js to master
                            the full modern web development lifecycle.
                        </p>
                    </div>
                </section>
            </main>

            <footer className="py-12 text-center border-t border-white/5">
                <p className="text-xs font-mono tracking-[0.2em] text-gray-600">
                    KYAW KAUNG SAN • DEVELOPER PORTFOLIO • 2026
                </p>
            </footer>
        </div>
    );
};

export default Profile;