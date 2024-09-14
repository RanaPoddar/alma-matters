import TypingAnimation from "./magicui/typing-animation";

const FeaturesSection = () => {
    const features = [
        {
            title: "Events & Reunions",
            description: "Learn from industry experts with years of experience.",
            icon: "👨‍🏫",
        },
        {
            title: "Job Portal",
            description: "Wide range of programs to suit your career goals.",
            icon: "📚",
        },
        {
            title: "Alumni Directory",
            description: "Access to modern labs and equipment.",
            icon: "🏢",
        },
        {
            title: "Donation Portal",
            description: "Network with top companies and professionals.",
            icon: "🔗",
        },
       
    ];

    return (
        <section className="max-w-7xl mx-auto py-8 px-8 bg-transparent">
            <div className="container mx-auto px-4">
                <TypingAnimation
                    className="text-2xl md:text-3xl font-bold mb-8 text-center text-primaryBlue"
                    text="Our Features"/>
                {/* <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primaryBlack">Our Features</h2> */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;