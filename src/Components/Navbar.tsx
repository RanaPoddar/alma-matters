"use client"
import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    
    return (
        <header className="w-full bg-primaryWhite border-b">
<nav className=" max-w-7xl mx-auto py-4 px-8 flex justify-between items-center">
            <div className="hidden md:flex space-x-4 ">
                <Link href="/" className="text-primaryBlue hover:text-gray-400 font-semibold text-base">Home</Link>
                <Link href="/project-plan" className="text-primaryBlue hover:text-gray-400 font-semibold">Project Plan</Link>
                <Link href="/contact" className="text-primaryBlue hover:text-gray-400 font-semibold">Contact Us</Link>
                <Link href="/team" className="text-primaryBlue hover:text-gray-400 font-semibold">Team</Link>
            </div>
            <div className="text-black text-xl font-bold">
                <Image src="/logo.png" alt="logo" width={250} height={50} />
            </div>
            <div className="hidden md:flex space-x-4">
                <Link href="/login" className="text-white hover:text-primaryWhite px-2 py-1 rounded-md font-bold bg-primaryBlack">Login</Link>
                <Link href="/signup" className="text-white hover:text-primaryWhite px-2 py-1 rounded-md font-bold bg-primaryBlack">Signup</Link>
            </div>
{/* for medium size screens  */}
<div className="md:hidden">
                    <button onClick={toggleMenu} className="text-primaryBlue focus:outline-none">
                        {isOpen ? <IoClose className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                    </button>
                </div>
        </nav>
{/* Menu list for small devices */}
{isOpen && (
                <div className="md:hidden bg-primaryWhite p-4">
                    <Link href="/" className="block text-primaryBlue hover:text-gray-400 mb-2">Home</Link>
                    <Link href="/project-plan" className="block text-primaryBlue hover:text-gray-400 mb-2">Project Plan</Link>
                    <Link href="/contact" className="block text-primaryBlue hover:text-gray-400 mb-2">Contact Us</Link>
                    <Link href="/login" className="block text-white hover:text-primaryWhite px-2 py-1 rounded-md font-bold bg-primaryBlack mb-2">Login</Link>
                    <Link href="/signup" className="block text-white hover:text-primaryWhite px-2 py-1 rounded-md font-bold bg-primaryBlack">Signup</Link>
                </div>
            )}

        </header>
        
    )
}

export default Navbar;