import Link from 'next/link';
import React, { useState } from 'react'

const SidebarMobile = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="flex h-screen bg-gray-100">

                {/* <!-- sidebar --> */}
                <div className="flex">
                    {/* Sidebar */}
                    <div
                        // Conditional class based on isOpen 
                        // state to control width and visibility
                        className={`bg-gray-800 text-white 
                    fixed h-screen transition-all 
                    duration-300 z-10 
                    ${isOpen ? 'w-64' : 'w-0 overflow-hidden'
                            }`}>
                        {/* Sidebar content */}
                        <div className="flex flex-col items-center">
                            <div className="mt-4">
                                <Link href="/home"
                                    className="text-white 
                          hover:text-gray-300">
                                    Home
                                </Link>
                            </div>
                            <div className="mt-4">
                                <Link href="/about"
                                    className="text-white 
                          hover:text-gray-300">
                                    About
                                </Link>
                            </div>
                            {/* Add more sidebar items here */}
                        </div>
                    </div>
                    {/* Main content */}

                </div>

                {/* <!-- Main content --> */}
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                        <div className="flex items-center px-4">
                            <div className={`flex-1 p-4 
                        ${isOpen ? 'ml-64' : 'ml-0'}`}>
                                {/* Button to toggle sidebar */}
                                <div className="flex justify-between">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 
                       text-white font-bold py-2 px-4 rounded"
                                        onClick={() => setIsOpen(!isOpen)}>
                                        {/* Toggle icon based on isOpen state */}
                                        {isOpen ? (
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        ) : (
                                            <svg
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M4 6h16M4 12h16m-7 6h7" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                            </div>
                            <input className={isOpen ? "hidden" : "mx-4 w-full border rounded-md px-4 py-2"} type="text" placeholder="Search" />
                        </div>
                        <div className="flex items-center pr-4">

                            <button
                                className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="p-4">
                        <h1 className="text-2xl font-bold">Welcome to Daystar Daycare </h1>
                        <p className="mt-2 text-gray-600">Raising tomorrow's leaders.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SidebarMobile
