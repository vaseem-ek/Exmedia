import React, { useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
            <div className="container mx-auto flex justify-around items-center py-3 px-6">
                {/* Logo */}
                <div>
                    <img src="https://exmedia.in/images/LOGO%20Svg.svg" width={100} alt="Logo" />
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        {isOpen ? (
                            <RxCross2 size={35} className="text-gray-500 cursor-pointer" />
                        ) : (
                            <FaBars size={25} className="text-gray-500 cursor-pointer" />
                        )}
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6 items-center">
                    <a href="#" className="hover:text-orange-400">HOME</a>
                    <a href="#" className="hover:text-orange-400">SERVICE</a>
                    <a href="#" className="hover:text-orange-400">DELIVERABLES</a>
                    <a href="#" className="hover:text-orange-400">ABOUT</a>
                    <a href="#" className="hover:text-orange-400">CONTACT</a>

                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        <a href="#"><FaFacebook size={20} /></a>
                        <a href="#"><FaLinkedin size={20} /></a>
                        <a href="#"><FaXTwitter size={20} /></a>
                        <a href="#"><FaPinterest size={20} /></a>
                        <a href="#"><FaYoutube size={20} /></a>
                        <a href="#"><FaThreads size={20} /></a>
                        <a href="#"><FaInstagram size={20} /></a>
                    </div>
                </div>
                <div>

                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-white border-t shadow-md p-4">
                    <a href="#" className="block py-2 hover:bg-sky-500">HOME</a>
                    <a href="#" className="block py-2 hover:bg-sky-500">SERVICE</a>
                    <a href="#" className="block py-2 hover:bg-sky-500">DELIVERABLE</a>
                    <a href="#" className="block py-2 hover:bg-sky-500">ABOUT</a>
                    <a href="#" className="block py-2 hover:bg-sky-500">CONTACT</a>

                    {/* Social Icons in Mobile Menu */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#"><FaFacebook size={20} /></a>
                        <a href="#"><FaLinkedin size={20} /></a>
                        <a href="#"><FaXTwitter size={20} /></a>
                        <a href="#"><FaPinterest size={20} /></a>
                        <a href="#"><FaYoutube size={20} /></a>
                        <a href="#"><FaThreads size={20} /></a>
                        <a href="#"><FaInstagram size={20} /></a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
