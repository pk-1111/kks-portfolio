export default function Footer() {
    return (
        <footer className="w-full mt-10 border-t border-white/10 py-10 px-6 z-20 text-white">

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

                {/* About */}
                <div>
                    <h3 className="text-lg text-gray-400 font-semibold mb-3">About Me</h3>
                    <p className=" text-sm text-white leading-relaxed">
                        I am a junior web developer who enjoys building simple and useful web applications.
                        Currently learning full-stack development and improving my skills every day.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="hover:text-green-400 cursor-pointer">Projects</li>
                        <li className="hover:text-green-400 cursor-pointer">Skills</li>
                        <li className="hover:text-green-400 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Connect</h3>
                    <div className="flex space-x-4 text-gray-400">
                        <a href="https://github.com/pk-1111" className="hover:text-green-400"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/kyaw-kaung-san/" className="hover:text-green-400"><i className="fa-brands fa-square-linkedin"></i></a>
                        <a href="mailto:your@email.com" className="hover:text-green-400"><i className="fa-solid fa-envelope"></i></a>
                    </div>

                    <p className="text-white text-sm mt-4">
                        <i className="fa-solid fa-location-dot"></i> Yangon, Myanmar
                    </p>
                </div>

            </div>

            {/* Bottom */}
            <div className="text-start text-white text-sm mt-10">
                © 2026 KKS. All rights reserved.
            </div>

        </footer>
    );
}