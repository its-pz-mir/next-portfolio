import React from "react";
import Image from "next/image";
import SocialButtons from "./socialButton";
import { Phone, Mail, MapPin } from "lucide-react"; // <-- imported from lucide-react

const ProfileDetails = () => {
  return (
    <div className="bg-white dark:bg-[#1A1F25] p-6 md:block hidden">
      {/* Profile Image & Name */}
      <div className="profile relative flex flex-col items-center">
        <div className="absolute -top-14 w-24 h-24">
          <Image
            src="/profile.jpg"
            layout="fill"
            objectFit="cover"
            alt="Profile Image"
            className="rounded-full border-4 border-white shadow-md"
          />
        </div>
        <h2 className="mt-12 text-lg lg:text-2xl font-semibold dark:text-white text-gray-800">
          Usman Shouket
        </h2>
        <h3 className="text-sm text-gray-500 dark:text-gray-200">
          Full Stack Developer
        </h3>
      </div>

      {/* Social Media Icons */}
      <div className="social mt-6 flex justify-center space-x-4">
        <SocialButtons />
      </div>

      {/* Contact Details */}
      <div className="details mt-6 bg-gray-50 dark:bg-gray-900 dark:text-white p-4 rounded-lg shadow-sm space-y-4">
        {/* Phone */}
        <a
          href="tel:+923204818484"
          className="flex items-center space-x-4 border-b pb-3 hover:opacity-80 transition"
        >
          <div className="w-10 flex justify-center">
            <Phone size={26} className="text-gray-700 dark:text-gray-300" />
          </div>
          <div>
            <h2 className="text-xs dark:text-white uppercase text-gray-500">Phone</h2>
            <p className="text-sm dark:text-gray-300 text-gray-800">
              +92 320 4818484
            </p>
          </div>
        </a>

        {/* Gmail */}
        <a
          href="mailto:usmanshouket256@gmail.com"
          className="flex items-center space-x-4 border-b pb-3 hover:opacity-80 transition"
        >
          <div className="w-10 flex justify-center">
            <Mail size={26} className="text-gray-700 dark:text-gray-300" />
          </div>
          <div>
            <h2 className="text-xs dark:text-white uppercase text-gray-500">Gmail</h2>
            <p className="text-sm dark:text-gray-300 text-gray-800">
              usmanshouket256@gmail.com
            </p>
          </div>
        </a>

        {/* Location */}
        <a
          href="https://maps.google.com/?q=6 Court Street, St Nagar, Lower Mall, Lahore"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-4 border-b pb-3 hover:opacity-80 transition"
        >
          <div className="w-10 flex justify-center">
            <MapPin size={26} className="text-gray-700 dark:text-gray-300" />
          </div>
          <div>
            <h2 className="text-xs dark:text-white uppercase text-gray-500">Address</h2>
            <p className="text-sm dark:text-gray-300 text-gray-800">
              6 Court Street, St Nagar, Lower Mall, Lahore
            </p>
          </div>
        </a>
      </div>

      {/* CV Download Button */}
      <div className="flex justify-center mt-6">
        <a
          href="/Usman-CV.pdf"
          download="Usman-CV.pdf"
          className="bg-[#EC1B09] px-8 hover:bg-[#ff453a] py-3 rounded-full text-white font-[500] cursor-pointer text-center"
        >
          Download CV
        </a>
      </div>

    </div>
  );
};

export default ProfileDetails;
