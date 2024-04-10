'use client';

import React, { useState } from "react"
import { BsPerson } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa"

export default function Navbar(): JSX.Element {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    
    const handleNav = () => {
        setNav((prev) => (!prev));
        setLogo((prev) => (!prev));
    }

    return (
        <div className="flex justify-between items-center h-20 px-4">
            <div>
                <h1 className={logo ? 'hidden' : 'block'}>REALIZE DREAMS</h1>
            </div>
            <ul className="hidden md:flex">
                <li>Home</li>
                <li>Destinations</li>
                <li>Travel</li>
                <li>View</li>
                <li>Book</li>
            </ul>
            <div className="hidden md:flex">
                <BiSearch size={20} />
                <BsPerson size={20} />
            </div>
            {/* Mobile Nav Hamburger */}
            <div onClick={handleNav} className="md:hidden z-10">
                {nav ? <AiOutlineClose size={20} /> : <HiOutlineMenuAlt4 size={20} />}
            </div>
            {/* Mobile Nav Dropdown Menu */}
            <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'}>
                <ul className="flex flex-col">
                    <h1>REALIZE DREAMS</h1>
                    <li className="border-b-2">Home</li>
                    <li className="border-b-2">Destinations</li>
                    <li className="border-b-2">Travel</li>
                    <li className="border-b-2">View</li>
                    <li className="border-b-2">Book</li>
                </ul>
                <div className="flex flex-col">
                    <button className="my-4">Search</button>
                    <button>Account</button>
                </div>
                <div className="flex justify-between my-6">
                    <FaFacebook className="icon" />
                    <FaTwitter className="icon" />
                    <FaInstagram className="icon" />
                    <FaPinterest className="icon" />
                    <FaYoutube className="icon" />
                </div>
            </div>
        </div>
    )
}