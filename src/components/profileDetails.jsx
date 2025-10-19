import Image from "next/image";
import React from "react";
import SocialButtons from "./socialButton";

const ProfileDetails = () => {
  return (
    <div className="bg-white dark:bg-[#1A1F25]  p-6 md:block hidden">
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
        <h3 className="text-sm text-gray-500 dark:text-gray-200">Full Stack Developer</h3>
      </div>

      {/* Social Media Icons */}
      <div className="social mt-6 flex justify-center space-x-4">
        <SocialButtons />
      </div>

      {/* Contact Details */}
      <div className="details mt-6 bg-gray-50 dark:bg-gray-900 dark:text-white p-4 rounded-lg shadow-sm space-y-4">
        {[
          { icon: "phone", label: "Phone", value: "+92 320 4818484" },
          { icon: "mail", label: "Gmail", value: "usmanshouket256@gmail.com" },
          { icon: "location", label: "Address", value: "6 Court Street, St Nagar, Lower Mall, Lahore" },
        ].map(({ icon, label, value }) => (
          <div key={icon} className="flex items-center space-x-4 border-b pb-3">
            <div className="w-10 flex justify-center">
              <Image src={`/icons/${icon}.svg`} width={30} height={30} alt={label} />
            </div>
            <div>
              <h2 className="text-xs dark:text-white uppercase text-gray-500">{label}</h2>
              <p className="text-sm dark:text-gray-300 text-gray-800">{value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CV Download Button */}
      <div className="flex justify-center mt-6">
        <button> Downlaod CV </button>
      </div>
    </div>
  );
};

export default ProfileDetails;
