export default function ContactPage() {
    return (
        <div className="flex flex-col items-center justify-center px-6 z-50 py-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Say Hi, Let's Collaborate</h1>
            <p className="text-gray-400 text-xl mb-12 text-center max-w-2xl">
                Questions, ideas or just hello? Send them my way!
            </p>

            {/* Input Field Area */}
            <div className="w-full max-w-3xl border-b border-gray-700 py-4 flex items-center space-x-4">
                <i className="fa-regular fa-user text-gray-400"></i>
                <input
                    type="text"
                    placeholder="Let me know your name"
                    className="bg-transparent outline-none w-full text-xl"
                />
            </div>

            <div className="w-full max-w-3xl flex justify-end mt-10">
                <button className="flex items-center space-x-2 border border-white/20 px-6 py-2 rounded-xl hover:bg-white/10 transition">
                    <span>NEXT</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
}