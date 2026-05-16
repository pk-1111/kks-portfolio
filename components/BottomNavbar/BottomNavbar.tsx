import Link from "next/link";

export default function FloatingNavbar() {
    return (
        <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 px-6 py-3 bg-blur backdrop-blur-md border border-white/10 rounded-full  hover:scale-110 transition-transform duration-300 shadow-2xl">



            {/* Other Menu Items */}
            <Link href="/home">
                <button className="text-gray-400 hover:text-white hover:scale-200 transition-transform duration-300 text-xl"><i className="fa-regular fa-house"></i></button>
            </Link>
            <Link href="/profile">
                <button className="text-gray-400 hover:text-white  hover:scale-200 transition-transform duration-300 text-xl"><i className="fa-solid fa-user"></i></button>
            </Link>

            <Link href="/i_max_pos">
                <button className="text-gray-400 hover:text-white  hover:scale-200 transition-transform duration-300 text-xl"><i className="fa-regular fa-folder"></i></button>
            </Link>
            <button className="text-gray-400 hover:text-white  hover:scale-110 transition-transform duration-300 text-xl">|</button>

            <Link href="https://github.com/pk-1111">
                <button className="text-gray-400 hover:text-white  hover:scale-200 transition-transform duration-300 text-xl"><i className="fa-brands fa-github"></i></button>
            </Link>

            <Link href="https://www.linkedin.com/in/kyaw-kaung-san/">
                <button className="text-gray-400 hover:text-white  hover:scale-200 transition-transform duration-300 text-xl"><i className="fa-brands fa-square-linkedin"></i></button>
            </Link>


        </nav >
    );
}