import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav>
            <div className="flex items-center justify-between p-4">
                {/* Logo / Branding */}
                <div className="flex items-center">
                    <h1 className="text-xl font-bold  text-gray-800">Code Crafters</h1>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">Recipes</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600">Search</a>
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden">
                    <button
                        id="menu-button"
                        className="focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Search Field and Avatar */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Search Field */}
                    <div className="lg:px-4 px-2 rounded-full border-2">
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input
                                type="text"
                                className="grow py-2 px-4 bg-transparent border-none outline-none placeholder-gray-400"
                                placeholder="Search"
                            />
                        </label>
                    </div>

                    {/* Avatar */}
                    <div className="avatar">
                        <div className="w-12 p-2 bg-green-300 rounded-full flex items-center justify-center">
                            <svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                                <circle opacity="0.5" cx="12" cy="9" r="3" stroke="#004708" strokeWidth="1.5"></circle>
                                <circle cx="12" cy="12" r="10" stroke="#004708" strokeWidth="1.5"></circle>
                                <path opacity="0.5" d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20" stroke="#004708" strokeWidth="1.5" strokeLinecap="round"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div id="mobile-menu" className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col space-y-2 p-4">
                        <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">Recipes</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
                        <a href="#" className="text-gray-800 hover:text-gray-600">User</a>
                        <div className="px-4 rounded-full border-2">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input
                                    type="text"
                                    className="grow py-2 px-4 bg-transparent border-none outline-none placeholder-gray-400"
                                    placeholder="Search"
                                />
                            </label>
                        </div>
                    </div>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
