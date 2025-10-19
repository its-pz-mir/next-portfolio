import React from 'react'

export const metadata = {
    title: "Work | Usman Shouket",
    description: "Work With Usman Shouket — a passionate MERN stack web developer and digital marketer.",
};

const Page = () => {
    return (
        <div className='p-4 md:p-8'>
            <div className="title flex items-center mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold mr-4">Old Work</h2>
                <span className="bg-[#ED250A] w-32 md:w-48 lg:w-60 h-[3px] block rounded-full"></span>
            </div>
            <div className="fiverr-work grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><div className="basic bg-[#FFE3BF] px-6 py-8 rounded-2xl shadow-lg text-center">
                <h3 className="title text-2xl font-semibold font-serif text-gray-900">Basic</h3>
                <h3 className="price font-bold text-4xl text-gray-900 mt-2">$80</h3>
                <ul className="mt-6 space-y-2 text-gray-800 text-left pl-6">
                    <li className="desc flex items-center gap-2">
                        <span className="text-red-600 text-lg">•</span> Functional Website
                    </li>
                    <li className="desc flex items-center gap-2">
                        <span className="text-red-600 text-lg">•</span> 1-3 Page
                    </li>
                    <li className="desc flex items-center gap-2">
                        <span className="text-red-600 text-lg">•</span> Content Upload
                    </li>
                    <li className="desc flex items-center gap-2 line-through text-slate-400">
                        <span className="text-red-600 text-lg">•</span> Ecommerce Functionality
                    </li>
                    <li className="desc flex items-center gap-2 line-through text-slate-400">
                        <span className="text-red-600 text-lg">•</span> Speed Optimization
                    </li>
                    <li className="desc flex items-center gap-2">
                        <span className="text-red-600 text-lg">•</span> Hosting Setup
                    </li>
                </ul>
                <button className="btn bg-[#ED250A] hover:bg-red-700 transition duration-300 text-white font-medium rounded-full shadow-lg px-6 py-2 mt-6">
                    Order Now
                </button>
            </div>

                <div className="standard bg-[#F2F7FC] px-6 py-8 rounded-2xl shadow-lg text-center">
                    <h3 className="title text-2xl font-semibold font-serif text-gray-900">Standard</h3>
                    <h3 className="price font-bold text-4xl text-gray-900 mt-2">$280</h3>
                    <ul className="mt-6 space-y-2 text-gray-800 text-left pl-6">
                        <li className="desc flex items-center gap-2">
                            <span className="text-red-600 text-lg">•</span> Functional Website
                        </li>
                        <li className="desc flex items-center gap-2">
                            <span className="text-red-600 text-lg">•</span> 1 Page
                        </li>
                        <li className="desc flex items-center gap-2">
                            <span className="text-red-600 text-lg">•</span> Content Upload
                        </li>
                        <li className="desc flex items-center gap-2 line-through text-slate-400">
                            <span className="text-red-600 text-lg">•</span> Ecommerce Functionality
                        </li>
                        <li className="desc flex items-center gap-2">
                            <span className="text-red-600 text-lg">•</span> Speed Optimization
                        </li>
                        <li className="desc flex items-center gap-2">
                            <span className="text-red-600 text-lg">•</span> Hosting Setup
                        </li>
                    </ul>
                    <button className="btn bg-[#ED250A] hover:bg-red-700 transition duration-300 text-white font-medium rounded-full shadow-lg px-6 py-2 mt-6">
                        Order Now
                    </button>
                </div>
                <div className="premium bg-[#FFE3BF] px-6 py-8 rounded-2xl shadow-lg text-center">
                    <h3 className="title text-2xl font-semibold font-serif text-gray-900">Premium</h3>
                    <h3 className="price font-bold text-4xl text-gray-900 mt-2">$500</h3>
                    <ul className="mt-6 space-y-2 text-gray-800 text-left pl-6">
                        <li className="desc flex items-center gap-27">
                            <span className="text-red-600 text-lg">•</span> Functional Website
                        </li>
                        <li className="desc flex items-center gap-2">
                            <span className="text-red-600 text-lg">•</span> 1 Page
                        </li>
                        <li className="desc flex items-center gap-2">
                            <span className="text-red-600 text-lg">•</span> Content Upload
                        </li>
                        <li className="desc flex items-center gap-2">
                            <span className="text-red-600 text-lg">•</span> Ecommerce Functionality
                        </li>
                        <li className="desc flex items-center gap-2">
                            <span className="text-red-600 text-lg">•</span> Speed Optimization
                        </li>
                        <li className="desc flex items-center gap-2">
                            <span className="text-red-600 text-lg">•</span> Hosting Setup
                        </li>
                    </ul>
                    <button className="btn bg-[#ED250A] hover:bg-red-700 transition duration-300 text-white font-medium rounded-full shadow-lg px-6 py-2 mt-6">
                        Order Now
                    </button>
                </div>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {/* Fiverr Box */}
                <div className="fiverr w-full md:w-[18rem] px-8 py-6 bg-white shadow-current shadow-2xl rounded-xl flex flex-col justify-center items-center space-y-3">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/1920px-Fiverr_Logo_09.2020.svg.png"
                        width={100} height={100}
                        alt="Fiverr Logo"
                    />
                    <p className="font-semibold text-lg text-center">I am currently active on Fiverr.</p>
                    <button className="bg-[#ed250a] hover:bg-red-700 px-4 py-2 uppercase rounded-full text-white">Visit my Profile</button>
                </div>

                {/* Upwork Box */}
                <div className="fiverr w-full md:w-[18rem] px-8 py-6 bg-white shadow-current shadow-2xl rounded-xl flex flex-col justify-center items-center space-y-3">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Upwork_Logo.svg/1920px-Upwork_Logo.svg.png"
                        width={100} height={100}
                        alt="Fiverr Logo"
                    />
                    <p className="font-semibold text-lg text-center">I am currently active on Upwork.</p>
                    <button className="bg-[#ed250a] hover:bg-red-700 px-4 py-2 uppercase rounded-full text-white">Visit my Profile</button>
                </div>
            </div>


        </div>
    )
}

export default Page