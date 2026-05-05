import Link from "next/link"


const Navbar = () => {
    return (
        <nav className=" flex justify-between items-center left-0 w-full py-5 px-5   top-0 bg-transparent z-20">
            {/* First Logo */}
            <Link href="/home">
                <span className="text-xl bg-blue-500 rounded-2xl p-1 mr-2">{"</>"}</span>
                <span className="text-white font-semibold text-2xl">kyawKaungSan</span>
            </Link>
            {/* <div className={"styles.nav_links"}>
                <Link href="/">Home</Link>
                <Link href="/">Project</Link>
            </div> */}

            <Link href="/Kyaw_Kaung_San(Final).pdf" download="Kyaw_Kaung_San_CV.pdf" className={"bg-blue-400 px-2 py-2 rounded-xl"}><i className="fa-solid fa-file-arrow-down"></i>Get My Cv</Link>
        </nav>
    )
}

export default Navbar;