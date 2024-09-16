import Image from 'next/image';

const SingleAlumniPage = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-7xl mx-auto p-4">
        {/* Profile Header */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white -mt-16">
                <Image
                  className="object-cover"
                  src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Profile Image"
                  width={128}
                  height={128}
                />
              </div>
              <div className="ml-6">
                <h1 className="text-3xl font-bold">Rana Poddar</h1>
                <p className="text-gray-600">Software Engineer at XYZ Company</p>
                <p className="text-gray-600">BTech 2023-2027</p>
                <p className="text-gray-600">Computer Engineering</p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">Request Contact Details</h2>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">Request</button>
            </div>
          </div>
        </div>

{/* Digital Section */}
<div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <Image src="/alumni.jpg" alt="" width={1000} height={200} className="object-cover"/>
        </div>

        {/* About Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-700">
            Experienced Software Engineer with a demonstrated history of working in the tech industry. Skilled in JavaScript, React, and Node.js.
          </p>
        </div>

        {/* Experience Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Software Engineer</h3>
            <p className="text-gray-600">XYZ Company</p>
            <p className="text-gray-600">Jan 2020 - Present</p>
            <p className="text-gray-700">Working on developing and maintaining web applications using React and Node.js.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Junior Developer</h3>
            <p className="text-gray-600">ABC Corp</p>
            <p className="text-gray-600">Sep 2023 - Dec 2027</p>
            <p className="text-gray-700">Assisted in the development of internal tools and applications.</p>
          </div>
        </div>

        {/* Education Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600">National Institute of Advanced Manufacturing Technology , Ranchi</p>
            <p className="text-gray-600">2023 - 2027</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="flex flex-wrap">
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">JavaScript</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">React</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Node.js</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">CSS</span>
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">HTML</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAlumniPage;