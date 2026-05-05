export default function InfoSection() {
    const services = [
        {
            title: "Web Frontend Development",
            description: "Crafting interactive and reponsive user interfaces using HTML, CSS, React.js and Tailwind CSS for a modern web look",
            icon: "fa-solid fa-laptop",
        },
        {
            title: "Backend Systems",
            description: "Building robust server-side logic and database management with Laravel, ensuring secure and efficient data handling .",
            icon: "fa-solid fa-database",
        },
        {
            title: "Full Stack Solutions",
            description: "Bridging frontend and backend seamlessly with Inertia.js to build powerful, single-page applications.",
            icon: "fa-solid fa-layer-group"
        },
        {
            title: "API Services",
            description: "Designing and implementing clean, structured APIs to connect various service and enhance application functionality.",
            icon: "fa-solid fa-link",
        },

        {
            title: "Database Management",
            description: "Managing and optimizing MySQL database to ensure data integrity and fast query performance for your apps",
            icon: "fa-solid fa-hard-drive",
        },

        {
            title: "Modern Workflow",
            description: "Using version control with Git and environment management to maintain clean and professional codebases.",
            icon: "fa-brands fa-github",
        }
    ];

    return (
        <div className="relative z-30 w-full flex flex-col items-center px-6 py-16 text-white mt-10">
            {/* Header Section */}
            <div className="flex flex-col p-3 space-y-6 text-center items-center mb-12">
                <div className="flex items-center justify-center px-6 py-3 rounded-full bg-blue-600/20 border border-blue-500/50">
                    <span className="text-xl">
                        <i className="fa-solid fa-briefcase mr-2"></i> Services
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold leading-relaxed">
                    I build digital products <br />
                    tailored to your needs
                </h1>
            </div>

            {/* Services Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full">
                {services.map((service, index) => (
                    <div key={index} className="flex flex-col space-y-4 p-4">

                        {/* Icon Placeholder - သင်နှစ်သက်ရာ ပုံစံပြောင်းနိုင်သည် */}
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 mb-2">

                            <i className={`fa-solid ${service.icon} text-2xl`}></i>
                        </div>
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </div >
    );
}