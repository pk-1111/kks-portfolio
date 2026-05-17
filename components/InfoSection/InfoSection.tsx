import {

    IconDatabase,
    IconLayersIntersect, // Full Stack အတွက်
    IconLink,
    IconBrandGithub,
    IconDeviceLaptop,
    IconDatabaseEdit,
    IconServicemark,
    IconHotelService,
    IconBriefcase
} from "@tabler/icons-react";

export default function InfoSection() {
    const services = [
        {
            title: "Web Frontend Development",
            description: "Crafting interactive and responsive user interfaces using HTML, CSS, React.js and Tailwind CSS for a modern web look.",
            icon: IconDeviceLaptop,
        },
        {
            title: "Backend Systems",
            description: "Building robust server-side logic and database management with Laravel, ensuring secure and efficient data handling.",
            icon: IconDatabaseEdit,
        },
        {
            title: "Full Stack Solutions",
            description: "Bridging frontend and backend seamlessly with Inertia.js to build powerful, single-page applications.",
            icon: IconLayersIntersect,
        },
        {
            title: "API Services",
            description: "Designing and implementing clean, structured APIs to connect various services and enhance application functionality.",
            icon: IconLink,
        },
        {
            title: "Database Management",
            description: "Managing and optimizing MySQL databases to ensure data integrity and fast query performance for your apps.",
            icon: IconDatabase,
        },
        {
            title: "Modern Workflow",
            description: "Using version control with Git and environment management to maintain clean and professional codebases.",
            icon: IconBrandGithub, // Tabler မှာ GitHub icon အစစ်အမှန် ပါဝင်ပါတယ်
        }
    ];

    return (
        <div className="relative z-30 w-full flex flex-col items-center px-6 py-20 text-white mt-10">

            {/* Header Section */}
            <div className="flex flex-col p-3 space-y-6 text-center items-center mb-16">
                <div className="flex items-center justify-center font-mono px-6 py-3 rounded-full bg-blue-600/20 border border-blue-500/50">
                    <span className=" flex items-center text-xl">
                        <IconBriefcase className="mr-2" /> Services
                    </span>
                </div>

                <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                    I Build Digital Products <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">Tailored To Your Needs</span>
                </h1>
            </div>

            {/* Services Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
                {services.map((service, index) => {
                    const IconComponent = service.icon;

                    return (
                        <div key={index}
                            className="group flex flex-col space-y-4 p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm shadow-xl hover:-translate-y-2">

                            {/* Icon Wrapper */}
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-purple-500 shadow-lg group-hover:scale-110 transition-transform">
                                {/* Tabler Icon သုံးစွဲပုံ (size property ဖြင့် အရွယ်အစားချိန်နိုင်သည်) */}
                                <IconComponent size={28} className="text-white" stroke={1.5} />
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-200 text-base leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}