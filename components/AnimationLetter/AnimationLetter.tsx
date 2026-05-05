export default function MarqueeItem({
    text,
    icon,
    reverse,
    color = "text-white"
}: {
    text: string;
    icon: any;
    reverse?: boolean;
    color?: string;
}) {
    const animationClass = reverse ? "animate-infinite-reverse" : "animate-infinite";

    return (
        <div className="relative flex overflow-hidden border-y border-white/10 py-3">
            {/* hover-pause ထည့်ထားရင် mouse တင်ရင် ရပ်သွားမယ် */}
            <div className={`${animationClass} flex whitespace-nowrap hover-pause`}>
                {
                    [1, 2, 3, 4].map((i) => (
                        <div key={i} className={`flex items-center text-2xl font-black uppercase ${color} mx-4`}>
                            <span className="mx-4">{text}</span>
                            <span className="mx-4">{icon}</span>
                        </div>
                    ))
                }
            </div >
        </div >
    );
}