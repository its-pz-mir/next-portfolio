import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: "Contact | Usman Shouket",
    description: "Contact with Usman Shouket — a passionate MERN stack web developer and digital marketer for any type of Assistance.",
};

const Page = () => {
    return (
        <div className="p-4 md:p-8">
            {/* Title */}
            <div className="title flex items-center mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold mr-4">Contact</h2>
                <span className="bg-[#ED250A] w-32 md:w-48 lg:w-60 h-[3px] block rounded-full"></span>
            </div>

            {/* Contact Details */}
            <div className="contact-details grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="phone bg-[#FFEED9] px-6 py-8 rounded-2xl shadow-lg">
                    <div className='flex items-center'>
                        <Image src={"/icons/phone2.svg"} width={20} height={20} alt='Email' />
                        <p className='font-semibold uppercase text-2xl ml-8 dark:text-gray-800'>Phone</p>
                    </div>
                    <div className='mt-4'>
                        <p className="text-lg  text-gray-800 ml-12">+92 3204818484</p>
                        <p className="text-lg text-gray-800 ml-12">+92 3324815151</p>
                    </div>
                </div>
                <div className="mail bg-[#FFEED9] px-6 py-8 rounded-2xl shadow-lg">
                    <div className='flex items-center'>
                        <Image src={"/icons/mail2.svg"} width={30} height={30} alt='Email' />
                        <p className='font-semibold uppercase text-2xl dark:text-gray-800 ml-8'>Mail</p>
                    </div>
                    <div className='mt-4'>
                        <p className=" text-gray-800 ml-12 break-words">usmanshouket256@gmail.com</p>
                    </div>
                </div>

            </div>

            {/* Contact Form */}

        </div>
    )
}

export default Page