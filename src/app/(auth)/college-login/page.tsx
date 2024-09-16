"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const Login = () => {
const router = useRouter();

    return (
        <div className="w-full bg-primaryWhite ">
            <div className="max-w-7xl mx-auto px-8 flex">
            {/* Section 1 Left side */}
            <div className="hidden md:flex md:flex-col w-[55%] h-screen pt-16 pl-8">
            <div className="w-[70%]">
            <h1 className="text-3xl font-semibold">Reach your College Alumni with 
                <span className="text-primaryBlue font-bold text-4xl"> AlmaMatters</span>
                 </h1>
            </div>
            {/* graphics div */}
            <div className='mt-4'>
                <Image src="/Features.png" alt="Hero Image" width={500} height={500} />
            </div>

            </div>


            {/* Section 2 right side and Login Form */}
            <div className="px-8 w-full md:w-[45%] h-screen pt-10 md:pt-16">
                <form action="" className="bg-white p-8 rounded-lg shadow-lg mt-24">
                    <h2 className="text-2xl font-bold mb-6 text-center">Institute Login</h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Username or Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                        />
                    </div>
                    <div className="flex items-center justify-between mb-4">
                        <button
                            // type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => router.push('/college')}
                        >
                           <Link href="/college">Login</Link> 
                        </button>
                    </div>

                    <div className='w-full'>
                        <p className="mt-4 text-center">
                            Don't have an account? <a href="/college-register" className="text-primaryBlue">Signup</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>


            </div>
        
    )
}

export default Login;