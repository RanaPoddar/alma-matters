import Image from "next/image";
import BlurFade from "./magicui/blur-fade";
import Hero from "./../assets/Hero1.gif"

const HeroSection = () => {
    return (
        <section className="relative max-w-7xl mx-auto px-8 h-[50vh] md:h-[60vh] bg-primaryWhite text-white flex items-center justify-center">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col items-start justify-center space-y-4 md:w-1/2">
                    
                    <BlurFade delay={0.5} inView>
                    <h1 className="text-4xl md:text-4xl font-bold text-black">Welcome to <span className="text-primaryBlue">AlmaMatters</span> </h1>
                    </BlurFade>
                    <BlurFade delay={0.75} inView>
                    <h2 className="text-black text-xl font-medium mb-3">
                    Connect with Alumni And know about their jobs and profile in seconds.
                    </h2>
                    </BlurFade>
                    <div className="flex space-x-4">
                        <a href="/login" className="bg-primaryBlack text-white px-4 py-2 rounded-md font-bold hover:bg-gray-700">Login</a>
                        <a href="/signup" className="bg-primaryBlack text-white px-4 py-2 rounded-md font-bold hover:bg-gray-700">Signup</a>
                    </div>
                </div>
                <div className="md:w-1/2 hidden md:flex items-center justify-center mt-8 md:mt-0">
                    {/* Placeholder for graphics */}
                    {/* <img src="/path/to/your/graphic.png" alt="Graphic" className="w-full h-auto" /> */}
                    <Image src={Hero} alt="Hero Image" width={400} height={400} />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;