import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black text-white px-4">
            {/* Spinner */}
            <div className="flex space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full animate-bounce delay-150"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-300"></div>
            </div>

            {/* Loading Text */}
            <h2 className="text-xl font-semibold mt-4 text-gray-300 animate-fadeIn">
                Loading...
            </h2>

            {/* Floating Background Glow */}
            <div className="absolute w-72 h-72 bg-red-600 opacity-20 blur-3xl rounded-full top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2"></div>
        </div>
    );
};

export default Loading;
