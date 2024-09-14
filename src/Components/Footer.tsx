import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" bg-gray-700 text-white py-8 ">
            <div className="max-w-7xl mx-auto container px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Home and Contact Section */}
                <div>
                    <div className="">
                    <h1 className="text-2xl font-semibold text-primaryBlue">AlmaMatters</h1>
                    <div className="w-3/4">
                    <p className="text-gray-200">Connect with Alumni And know about their jobs and profile in seconds.</p>
                    </div>
                    <div className="mt-4">
                    <h2 className="font-semibold text-xl">Contact Us</h2>
                    <p className="text-gray-200 pl-10 flex items-center"> <IoMdCall className="text-white mr-2"/> +91 1234567890</p>
                    <p className="text-gray-200 pl-10 flex items-center"> <MdEmail className="text-white mr-2"/> almamatters.contact@gmail.com</p>
                    </div>
                    {/* Social Links */}
                    <div className="pl-10 flex gap-4">
                        <FaLinkedin className="text-white text-2xl mt-4 mr-4"/>
                        <FaXTwitter className="text-white text-2xl mt-4 mr-4"/>
                        <FaDiscord className="text-white text-2xl mt-4"/>
                    </div>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
                    <ul>
                        <li className="mb-2 pl-10">
                            <a href="/project-plan" className="hover:text-gray-400">Project Plan</a>
                        </li>
                        <li className="mb-2 pl-10">
                            <a href="/team" className="hover:text-gray-400">Our Team</a>
                        </li>
                    </ul>
                </div>
                {/* Create Account Section */}
                <div>
                    <h3 className="text-xl font-semibold mb-5">Create your Account Now</h3>
                    <ul className="flex gap-6">
                        <li className="mb-2">
                            <Link href="/login" className="hover:text-gray-400 bg-primaryBlue px-4 py-2 rounded-md">Login</Link>
                        </li>
                        <li className="mb-2">
                            <a href="/signup" className="hover:text-gray-400 bg-primaryBlue px-4 py-2 rounded-md">Signup</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;