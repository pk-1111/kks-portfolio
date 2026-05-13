import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center left-0 w-full py-5 px-5 top-0 bg-transparent z-50">
            {/* Logo Section */}
            <Link href="/home" className="flex items-center group">
                <span className="text-xl bg-blue-500 rounded-2xl p-1 mr-2 transition-transform group-hover:rotate-12">
                    {"</>"}
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300 font-semibold text-2xl tracking-tight">
                    kyawKaungSan
                </span>
            </Link>

            {/* Get My CV Button with Animated Border */}
            <Link
                href="/Kyaw_Kaung_San_CV .pdf"
                download="Kyaw_Kaung_San_CV .pdf"
                className="relative inline-flex items-center justify-center p-[1.5px] overflow-hidden rounded-xl group transition-all duration-300 active:scale-95"
            >
                {/* သင်ပြထားတဲ့ Conic Gradient Border Animation */}
                <div className="absolute inset-0 bg-[conic-gradient(from_180deg,transparent_0%,#b0b2e6_50%,transparent_80%)] animate-[spin_3s_linear_infinite] opacity-80 group-hover:opacity-100"></div>

                {/* Button Content */}
                <div className="relative flex items-center gap-2 font-semibold hover:bg-slate-900 transition-colors px-4 py-2 rounded-[11px] text-white text-sm font-medium backdrop-blur-xl">
                    <i className="fa-solid fa-file-arrow-down animate-bounce group-hover:animate-none"></i>
                    Get My Cv
                </div>
            </Link>
        </nav>
    );
};

export default Navbar;
