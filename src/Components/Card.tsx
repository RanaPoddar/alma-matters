import Image from 'next/image' 
import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

interface CardProps {
    img: string;
    name: string;
    position: string;
    department: string;
    email: string;
  }

  const Card: React.FC<CardProps> = (props) => {

    return (
    <div className="">
        <div className="bg-white rounded-lg shadow-lg p-4 w-[300px] h-[400px] border border-gray-500">
            <div className="flex justify-center">
                <Image width={200} height={200} src={props.img} alt="" className="w-32 h-32 rounded-full object-cover"/>
                </div>

            {/* Details */}
            <div className='mt-10'>
            <h1 className="text-xl font-semibold text-center">{props.name}</h1>
            <p className="text-center text-gray-500">{props.position}</p>
            <p className="text-center text-gray-500">{props.department}</p>
            <p className="text-center text-gray-500">{props.email}</p>
            </div>
            <div className='mt-4'>
                {/* Social icons */}
<ul className='flex gap-1 justify-center'>
    <li className='cursor-pointer mx-3 mb-3'><a href="#" className='text-black text-2xl'><FaFacebookF className='text-black' /></a> </li>
    <li className='cursor-pointer mx-3 mb-3'><a href="#" className='text-black text-2xl'><FaLinkedin/> </a> </li>
    <li className='cursor-pointer mx-3 mb-3'><a href="#" className='text-black text-2xl'><SiGmail /></a> </li>
</ul>
            </div>
                
                </div>
    </div>    
    )
}

export default Card