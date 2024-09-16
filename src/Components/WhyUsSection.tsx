import Link from "next/link";
import img1 from "@/assets/niamt.png";
import img2 from "@/assets/kgp.png";
import iitBombay from "@/assets/bombay.png";
import iitDelhi from "@/assets/delhi.png";
import Image from "next/image";
import TypingAnimation from "./magicui/typing-animation";


const WhyUsSection = () => {
    return (
        
        <section className="max-w-7xl mx-auto px-8 py-8 bg-gray-100">
            
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-start justify-between">
                {/* Why Choose Us Section */}
               
                <div className="md:w-7/12 w-full mb-8 md:mb-0 md:pr-16 ">

                    <TypingAnimation className="text-2xl md:text-3xl font-bold mb-8 text-primaryBlue text-center md:text-start"
                    text="Why Choose Us"
                    />
                        
                   

                    <p className="text-gray-700 mb-4 text-justify">
                   AlmaMatters offers a comprehensive platform for alumni, students, and colleges to connect, collaborate, and grow together. Our unique features make it easy for users to build a strong network, share knowledge, and access opportunities within the community. Here’s why you should choose AlmaMatters:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 text-justify ">
                        <li> 
                            <span className="font-medium text-primaryBlue">Network Building:</span>  
                            Connect alumni, current students, and colleges for professional networking and mentorship opportunities.

</li>
                        <li><span className="font-medium text-primaryBlue">Customizable College Profiles: </span> Allow colleges to create and manage their own profiles, showcasing their unique offerings and events.
                        </li>
                        <li>
                        <span className="font-medium text-primaryBlue">Job and Internship Listings:</span> Enable alumni and students to post and search for job and internship opportunities within the network.
</li>
                        <li>
                        <span className="font-medium text-primaryBlue">Communication Tools: </span>Provide messaging and discussion forums for seamless interaction between alumni, students, and college administrators.</li>
                    </ul>
                </div>
               
                {/* Affiliated Institutes Section */}
                <div className="md:w-5/12 w-full md:pl-8">
                    <TypingAnimation 
                    className="text-2xl md:text-3xl font-bold mb-8 text-primaryBlue text-center md:text-start"
                    text="Affiliated Institutes"
                    />
                        
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-md shadow-md">
                            <div className="flex justify-center w-full">
                            <Image src={img1} alt="Institute 1" className="w-[30%] h-auto mb-2 text-center" />
                            </div>
                            <p className="text-gray-700 text-center font-medium">Indian Institute of Advanced Manufacturing Technology (NIAMT) , Ranchi</p>
                            <Link href="/institute1" className="text-primaryBlue hover:text-gray-400 block text-center">Learn More</Link>
                        </div>
                        <div className="bg-white p-4 rounded-md shadow-md">
                            <div className="flex justify-center w-full">
                            <Image src={img2} alt="Institute 1" className="w-[30%] h-auto mb-2 text-center" />
                            </div>
                            <p className="text-gray-700 text-center font-medium">Indian Institute of Technology (IIT), Kharagpur</p>
                            <Link href="/institute1" className="text-primaryBlue hover:text-gray-400 block text-center">Learn More</Link>
                        </div>
                        <div className="bg-white p-4 rounded-md shadow-md">
                        <div className="flex justify-center w-full">
                            <Image src={iitBombay} alt="Institute 1" className="w-[30%] h-auto mb-2 text-center" />
                            </div>
                            <p className="text-gray-700 text-center font-medium">Indian Institute of Technology (IIT), Bombay</p>
                            <Link href="/institute1" className="text-primaryBlue hover:text-gray-400 block text-center">Learn More</Link>
                        </div>
                        <div className="bg-white p-4 rounded-md shadow-md">
                        <div className="flex justify-center w-full">
                            <Image src={iitDelhi} alt="Institute 1" className="w-[30%] h-auto mb-2 text-center" />
                            </div>
                            <p className="text-gray-700 text-center font-medium">Indian Institute of Technology (IIT), Delhi</p>
                            <Link href="/institute1" className="text-primaryBlue hover:text-gray-400 block text-center">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
        
    );
};

export default WhyUsSection;