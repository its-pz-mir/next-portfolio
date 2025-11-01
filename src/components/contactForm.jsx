'use client'
import React, { useState } from "react";




const ContactForm = () => {
    const [showToast, setShowToast] = useState(false);



    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        await fetch("https://formsubmit.co/usmanshouket256@gmail.com", {
            method: "POST",
            body: formData,
        });

        // Show toast
        setShowToast(true);

        // Hide toast after 3 seconds
        setTimeout(() => setShowToast(false), 3000);

        // Clear form
        e.target.reset();
    };

    return (
        <div className="relative">

            {/* ✅ Toast */}
            {showToast && (
                <div className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-md shadow-lg animate-fadeIn">
                    ✅ Message Sent Successfully!
                </div>
            )}

            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto bg-[#FFEED9] p-6 md:p-8 rounded-2xl shadow-lg dark:bg-[#1A1A1A] dark:border dark:border-gray-700"
            >
                <input type="hidden" name="_captcha" value="false" />
                <h3 className="text-xl font-bold mb-6 uppercase dark:text-gray-100">Send me a Message</h3>
                {/* Name */}
                <div className="mb-5">
                    <label className="block mb-2 text-gray-700 dark:text-gray-300">Your Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#ED250A] dark:bg-[#141414] dark:border-gray-700 dark:text-gray-100"
                    />
                </div>

                {/* Email */}
                <div className="mb-5">
                    <label className="block mb-2 text-gray-700 dark:text-gray-300">Your Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#ED250A] dark:bg-[#141414] dark:border-gray-700 dark:text-gray-100"
                    />
                </div>

                {/* Message */}
                <div className="mb-6">
                    <label className="block mb-2 text-gray-700 dark:text-gray-300">Message</label>
                    <textarea
                        name="message"
                        rows="5"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-[#ED250A] dark:bg-[#141414] dark:border-gray-700 dark:text-gray-100"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#ED250A] text-white py-3 cursor-pointer rounded-lg font-semibold hover:bg-[#c81f08] transition-all"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
