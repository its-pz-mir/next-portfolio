import { Frown } from 'lucide-react';
import React from 'react';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4">
            {/* Icon and Text */}
            <div className="text-center animate-fadeIn">
                <Frown className="w-20 h-20 text-red-500 mb-4 animate-pulse" />
                <h1 className="text-6xl font-bold text-red-500">404</h1>
                <h2 className="text-2xl font-semibold mt-2 text-gray-300">Oops! Page Not Found</h2>
                <p className="text-gray-400 mt-2 text-lg">
                    The page you are looking for doesn't exist or has been moved.
                </p>
            </div>

            {/* Button */}
            <div className="mt-8 animate-slideUp">
                <button className='#ED250A' >Back to Home Page</button>
            </div>

            {/* Floating Background Glow
                <div className="absolute w-72 h-72 bg-red-600 opacity-20 blur-3xl rounded-full top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"></div> */}
        </div>
    );
};

export default NotFound;
