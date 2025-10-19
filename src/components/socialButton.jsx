"use client";

import { Facebook, Github, Linkedin, PhoneIcon } from "lucide-react";
import React from "react";

const SocialButtons = () => {
    const socialLinks = {
        facebook: "https://www.facebook.com/share/177r2FTJdD/",
        github: "https://github.com/its-pz-mir", // change to your real GitHub
        linkedin: "https://www.linkedin.com/in/usman-shouket-6858422b2/", // change to your LinkedIn
        phone: "tel:+923204818484", // your number with 'tel:' for call link
    };

    const handleClick = (url) => {
        if (url.startsWith("tel:")) {
            window.location.href = url; // for calling
        } else {
            window.open(url, "_blank", "noopener,noreferrer"); // open in new tab
        }
    };

    return (
        <div className="flex justify-center gap-3 mt-4">
            {/* Facebook */}
            <button
                onClick={() => handleClick(socialLinks.facebook)}
                className="bg-gray-100 dark:bg-gray-500 p-2 rounded-full shadow-md transition hover:scale-105 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700"
            >
                <Facebook size={22} />
            </button>

            {/* GitHub */}
            <button
                onClick={() => handleClick(socialLinks.github)}
                className="bg-gray-100 dark:bg-gray-500 p-2 rounded-full shadow-md transition hover:scale-105 hover:bg-gray-800 hover:text-white"
            >
                <Github size={22} />
            </button>

            {/* LinkedIn */}
            <button
                onClick={() => handleClick(socialLinks.linkedin)}
                className="bg-gray-100 dark:bg-gray-500 p-2 rounded-full shadow-md transition hover:scale-105 hover:bg-blue-700 hover:text-white"
            >
                <Linkedin size={22} />
            </button>

            {/* Phone */}
            <button
                onClick={() => handleClick(socialLinks.phone)}
                className="bg-gray-100 dark:bg-gray-500 p-2 rounded-full shadow-md transition hover:scale-105 hover:bg-green-600 hover:text-white"
            >
                <PhoneIcon size={22} />
            </button>
        </div>
    );
};

export default SocialButtons;
