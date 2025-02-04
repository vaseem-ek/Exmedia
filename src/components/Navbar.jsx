import React, { useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaPinterest, FaYoutube } from "react-icons/fa";
import { FaThreads, FaXTwitter } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>

        <div className=" w-full border-b-1">
            <div className="container mx-auto flex justify-around items-center">
                <div className=" ">
                    <img src="https://exmedia.in/images/LOGO%20Svg.svg" width={100} alt="" />
                </div>

                <div className="block ms-auto px-5 lg:hidden md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-black focus:outline-none"
                    >
                        {
                            isOpen?

                            <RxCross2 size={35} className="text-gray-500  cursor-pointer" />
                            :
                            <FaBars size={25} className="text-gray-500  cursor-pointer" />

                        }

                    </button>
                </div>

                <div className="hidden md:flex lg:flex space-x-4 duration-500">
                    <a href="#" className=" hover:text-orange-400">
                        HOME
                    </a>
                    <a href="#" className=" hover:text-orange-400">
                        SERVICE
                    </a>
                    <a href="#" className=" hover:text-orange-400">
                        DELIVERABLES
                    </a>
                    <a href="#" className=" hover:text-orange-400">
                        ABOUT
                    </a>
                    <a href="#" className=" hover:text-orange-400">
                        CONTACT
                    </a>
                    <a href="">
                        <FaFacebook size={20} />
                    </a>
                    <a href="">
                        <FaLinkedin size={20} />
                    </a>
                    <a href="">
                    <FaXTwitter size={20} />
                    </a>
                    <a href="">
                    <FaPinterest size={20} />
                    </a>
                    <a href="">
                    <FaYoutube  size={20}/>
                    </a>
                    <a href="">
                    <FaThreads size={20} />
                    </a>
                    <a href="">
                    <FaInstagram size={20} />
                    </a>
                </div>
            <div >

            </div>
            </div>


           
        </div>
        {isOpen && (
                <div className="lg:hidden md:hidden border mt-4 mx-5 p-10  ">
                    <a href="#" className="block border-b-1   px-3 border-gray-200 py-2 hover:bg-sky-500">
                        HOME
                    </a>
                    <a href="#" className="block border-b-1 px-3 border-gray-200  py-2 hover:bg-sky-500">
                        SERVICE
                    </a>
                    <a href="#" className="block border-b-1 px-3 border-gray-200  py-2 hover:bg-sky-500">
                        DELIVERABLE
                    </a>
                    <a href="#" className="block border-b-1 px-3 border-gray-200   py-2 hover:bg-sky-500">
                        ABOUT
                    </a>
                    <a href="#" className="block border-b-1 px-3 border-gray-200   py-2 hover:bg-sky-500">
                        CONTACT
                    </a>
                    <a href="#" className="block border-b-1  border-gray-200 px-3  py-2 hover:bg-sky-500">
                    <FaFacebook size={20} />
                    </a>
                    <a href="#" className="block border-b-1 border-gray-200 px-3  py-2 hover:bg-sky-500">
                    <FaLinkedin size={20} />
                    </a>
                    <a href="#" className="block border-b-1 border-gray-200 px-3   py-2 hover:bg-sky-500">
                    <FaXTwitter size={20} />
                    </a>
                    <a href="#" className="block border-b-1 border-gray-200 px-3   py-2 hover:bg-sky-500">
                    <FaPinterest size={20} />
                    </a>
                    <a href="#" className="block border-b-1 border-gray-200  px-3 py-2 hover:bg-sky-500">
                    <FaYoutube  size={20}/>
                    </a>
                    <a href="#" className="block border-b-1 border-gray-200 px-3   py-2 hover:bg-sky-500">
                    <FaThreads size={20} />
                    </a>
                    <a href="#" className="block border-b-1 border-gray-200 px-3 py-2 hover:bg-sky-500">
                    <FaInstagram size={20} />
                    </a>
                    
                </div>
            )}
        </nav>
    );
};

export default Navbar;
