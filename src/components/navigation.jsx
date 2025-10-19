"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, Briefcase, Layers, Mail } from 'lucide-react';
import React from 'react';

const Navigation = () => {
    const pathname = usePathname(); // Get the current route

    return (
        <div className="w-full flex justify-end mt-2">
            <div className="flex space-x-12 bg-white dark:bg-[#1A1F25] shadow-md rounded-xl p-2 mr-8">
                {[
                    { label: "Home", icon: <Home />, link: "/" },
                    { label: "Resume", icon: <FileText />, link: "/resume" },
                    { label: "Portfolio", icon: <Layers />, link: "/portfolio" },
                    { label: "Work", icon: <Briefcase />, link: "/work" },
                    { label: "Contact", icon: <Mail />, link: "/contact" },
                ].map(({ label, icon, link }, index) => {
                    const isActive = pathname === link; // Check if route is active

                    return (
                        <Link key={index} href={link} className="group">
                            <div className={`flex flex-col items-center space-y-1 text-gray-700 transition duration-300
                                ${isActive ? "text-white" : "hover:text-[#EC1B09] dark:hover:text-[#FF453A]"}`}>
                                <div className={`p-3 rounded-xl transition duration-300
                                    ${isActive ? "bg-[#EC1B09] dark:bg-[#ff453a] text-white" : "bg-[#E1E8EF] dark:bg-[#0E141B] group-hover:bg-[#EC1B09] dark:text-gray-300 dark:bg-hover:bg-[#ff453a] group-hover:text-white"}`}>
                                    {icon}
                                </div>
                                <span className={`text-sm font-medium ${isActive ? "text-[#EC1B09] dark:text-[#ff453a]"  : "text-black dark:text-white"}`}>{label}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Navigation;
