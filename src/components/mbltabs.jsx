import React from 'react'
import Link from "next/link";
import { Home, User, Briefcase, Mail, Handshake } from "lucide-react";


const mobileNavItems = [
    { title: "Home", href: "/", icon: <Home className="h-6 w-6" /> },
    { title: "Resume", href: "/resume", icon: <User className="h-6 w-6" /> },
    { title: "Portfolio", href: "/portfolio", icon: <Briefcase className="h-6 w-6" /> },
    { title: "Contact", href: "/contact", icon: <Mail className="h-6 w-6" /> },
    { title: "Work", href: "/work", icon: <Handshake className="h-6 w-6" /> },
];


const MblTabs = () => {
    return (
        <nav className="fixed bottom-4 z-50 left-1/2 -translate-x-1/2 flex gap-4 bg-white/60 dark:bg-black/80 p-3 rounded-full shadow-xl backdrop-blur-md">
            {mobileNavItems.map((item) => (
                <Link key={item.title} href={item.href} className="flex flex-col items-center justify-center text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition">
                    {item.icon}
                    <span className="text-xs mt-1">{item.title}</span>
                </Link>
            ))}
        </nav>
    )
}

export default MblTabs