"use client";

import { useState } from "react";

export default function ContactPage() {
    const [name, setName] = useState(""); // input ထဲမှာ ရေးနေတဲ့စာကို သိမ်းထားဖို့
    const [displayName, setDisplayName] = useState(""); // Next နှိပ်မှ ပေါ်လာမယ့်စာကို သိမ်းဖို့

    const handleNext = () => {
        setDisplayName(name); // Next နှိပ်လိုက်တဲ့အခါ input value ကို display state ထဲ ထည့်လိုက်တာ
    };

    return (
        <div className="flex flex-col items-center justify-center px-6 z-50 py-20">

            {/* အပေါ်မှာ ပေါ်လာမည့်အပိုင်း - displayName ရှိမှ ပေါ်မယ် */}
            {displayName && (
                <div className="flex items-center space-x-2 mb-10 bg-white/5 px-4 py-2 rounded-lg animate-bounce">
                    <i className="fa-regular fa-user text-blue-400"></i>
                    <span className="text-xl font-medium">{displayName}</span>
                </div>
            )}

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">Say Hi, Let's Collaborate</h1>
            <p className="text-gray-400 text-xl mb-12 text-center max-w-2xl">
                Questions, ideas or just hello? Send them my way!
            </p>

            {/* Input Field Area */}
            <div className="w-full max-w-3xl border-b border-gray-700 py-4 flex items-center space-x-4">
                <i className="fa-regular fa-user text-gray-400"></i>
                <input
                    type="text"
                    placeholder="Let me know your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-transparent outline-none w-full text-xl text-white"
                />
            </div>

            <div className="w-full max-w-3xl flex justify-end mt-10">
                <button
                    onClick={handleNext}
                    className="flex items-center space-x-2 border border-white/20 px-6 py-2 rounded-xl hover:bg-white/10 transition"
                >
                    <span>NEXT</span>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
    );
} 