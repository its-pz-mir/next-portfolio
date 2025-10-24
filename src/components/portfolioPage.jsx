'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

const categories = ["All", "React", "Next", "Mern"];



const portfolioData = [
    { no: 1, title: "Project 1", category: "React", link: "/project1.png", image: "/projects/first.jpg" },
    { no: 2, title: "Project 2", category: "Next", link: "/project2.png", image: "/projects/second.jpg" },
    { no: 3, title: "Project 3", category: "React", link: "/project3.png", image: "/projects/third.jpg" },
    { no: 4, title: "Project 4", category: "Next", link: "https://new-mu-three.vercel.app/", image: "/projects/fourth.png" },
    { no: 5, title: "Project 5", category: "Mern", link: "/project5.png", image: "/projects/fifth.png" },
];
const PortfolioPage = () => {

    const [activeCategory, setActiveCategory] = useState("All");

    // Filtering the projects based on selected category
    const filteredData = activeCategory === "All"
        ? portfolioData
        : portfolioData.filter(project => project.category === activeCategory);

    return (
        <div className="p-4 md:p-8">
            {/* Title */}
            <div className="title flex items-center mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold mr-4">Portfolio</h2>
                <span className="bg-[#ED250A] w-32 md:w-48 lg:w-60 h-[3px] block rounded-full"></span>
            </div>

            {/* Category Filters */}
            <div className="categories flex justify-center md:justify-end space-x-4 md:space-x-8 lg:space-x-10 mr-4">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        aria-label='Social media Icons'
                        onClick={() => setActiveCategory(category)}
                        className={`text-md md:text-base lg:text-xl font-medium transition cursor-pointer duration-300 
                            ${activeCategory === category ? 'text-[#ED250A] font-bold' : 'text-gray-500 dark:text-gray-200'}
                        `}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Portfolio Projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {filteredData.map((data, index) => (
                    <div key={index} className="relative w-[300px] h-[180px] lg:w-[400px] lg:h-[230px] bg-[#FFE3BF] project rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
                        <Link href={data.link}  >
                            <Image src={data.image} width={10000} height={10000} className='w-full h-[130px] lg:h-[180px] object-cover' alt='Project Image' />
                        </Link>
                        <div className="desc pl-3">
                            <p className='font-thin text-[12px] uppercase text-slate-600'>{data?.category}</p>
                            <p className="title font-semibold text-[20px]">{data?.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PortfolioPage