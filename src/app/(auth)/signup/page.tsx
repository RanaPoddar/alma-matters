import Image from 'next/image';
import FeaturesImg from '../../../assets/Features.png';

const Signup = () => {
    return (
        <div className="w-full bg-primaryWhite ">
            <div className="max-w-7xl mx-auto px-8 flex">
            {/* Section 1 Left side */}
            <div className="hidden md:flex md:flex-col w-[55%] h-screen pt-16 pl-8">
            <div className="w-[70%]">
            <h1 className="text-3xl font-semibold">Stay Connected to Your College with 
                <span className="text-primaryBlue font-bold text-4xl"> AlmaMatters</span>
                 </h1>
            </div>
            {/* graphics div */}
            <div className='mt-4'>
                <Image src={FeaturesImg} alt="Hero Image" width={500} height={500} />
            </div>

            </div>


            {/* Section 2 right side and Login Form */}
            <div className="px-8 w-full md:w-[45%] h-screen  md:pt-4">
            <form action="" className="bg-white p-8 rounded-lg shadow-lg mt-16">
                        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor="confirm-password">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirm-password"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Confirm your password"
                            />
                        </div>
                        <div className="flex items-center justify-between mb-4">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Signup
                            </button>
                        </div>
                        <div className="flex items-center justify-between mb-">
                            <button
                                type="button"
                                className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
                            >
                                Signup with Google
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="button"
                                className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Signup with LinkedIn
                            </button>
                        </div>
                        <div className='w-full'>
                        <p className="mt-4 text-center">
                                Register as a College ? <a href="/college-register" className="text-primaryBlue">Register</a>
                            </p>
                            <p className="mt-4 text-center">
                                Already have an account? <a href="/login" className="text-primaryBlue">Login</a>
                            </p>
                        </div>

                    </form>


            </div>
        </div>


            </div>
        
    )
}

export default Signup;