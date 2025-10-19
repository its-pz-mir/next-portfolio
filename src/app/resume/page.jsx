import { GraduationCap, Briefcase } from "lucide-react";
import React from "react";

export const metadata = {
    title: "Resume | Usman Shouket",
    description: "Learn more about Usman Shouket — a passionate MERN stack web developer and digital marketer.",
};


const Page = () => {
    return (
        <div className=" shadow-md rounded-2xl p-6">
            {/* About Me Title */}
            <div className="about">
                <div className="title flex items-center mb-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase font-semibold dark:text-white text-gray-800">
                        Resume
                    </h2>
                    <span className="bg-[#ED250A] h-[3px] w-24 md:w-32 lg:w-40 block ml-4 rounded-full"></span>
                </div>
            </div>

            {/* Education & Experience Section */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Education Section */}
                <div className="education">
                    <div className="title flex items-center space-x-4 mb-4">
                        <GraduationCap className="text-[#ED250A]" />
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold dark:text-gray-100 text-gray-900">
                            Education
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            {
                                year: "2023-2025",
                                degree: "ADP in Web Design & Development",
                                school: "Virtual University of Pakistan",
                                bg: "bg-[#FFE3BF]",
                            },
                            {
                                year: "2021-2023",
                                degree: "Intermediate in Computer Science",
                                school: "Board of Intermediate, Lahore",
                                bg: "bg-[#FFEED9]",
                            },
                        ].map(({ year, degree, school, bg }, index) => (
                            <div
                                key={index}
                                className={`rounded-lg ${bg} px-4 py-6 shadow-sm hover:shadow-lg transition-transform duration-300 transform hover:scale-105`}
                            >
                                <div className="text-gray-600 text-sm">{year}</div>
                                <div className="text-gray-900 font-medium">{degree}</div>
                                <div className="text-gray-700 text-sm">{school}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Experience Section */}
                <div className="experience">
                    <div className="title flex items-center space-x-4 mb-4">
                        <Briefcase className="text-[#ED250A]" />
                        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold dark:text-gray-100 text-gray-900">
                            Experience
                        </h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            {
                                year: "2023 - Present",
                                role: "Full Stack Developer",
                                company: "Freelance & Personal Projects",
                                bg: "bg-[#FFEED9]",
                            },
                            {
                                year: "2022 - 2023",
                                role: "Frontend Developer",
                                company: "Tech Solutions Pvt. Ltd.",
                                bg: "bg-[#FFE3BF]",
                            },
                        ].map(({ year, role, company, bg }, index) => (
                            <div
                                key={index}
                                className={`rounded-lg ${bg} cursor-default px-4 py-6 shadow-sm hover:shadow-lg transition-transform duration-300 transform hover:scale-105`}
                            >
                                <div className="text-gray-600 text-sm">{year}</div>
                                <div className="text-gray-900 font-medium">{role}</div>
                                <div className="text-gray-700 text-sm">{company}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            {/* Skills Section */}
            <div className="skills mt-8">
                <div className="title flex items-center space-x-4 mb-4">
                    <Briefcase className="text-[#ED250A]" />
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold dark:text-gray-100 text-gray-900">
                        Skills
                    </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {[
                        "HTML5",
                        "CSS3",
                        "JavaScript",
                        "React.js",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "Next.js",
                        "Tailwind CSS",
                        "Bootstrap",
                    ].map((skill, index) => (
                        <div
                            key={index}
                            className="bg-[#FFEED9] text-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
