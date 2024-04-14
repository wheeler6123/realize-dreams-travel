'use client';

import React, { useState, useEffect } from "react"
import { BsPerson } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa"
import ThemeSwitch from "./components/ThemeSwitch";

export default function Navbar(): JSX.Element {
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    
    const handleNav = () => {
        setNav((prev) => (!prev));
        setLogo((prev) => (!prev));
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrolled]);

    return (
        <div className={`flex fixed top-0 justify-between items-center h-20 px-4 w-full md:absolute z-10 text-white ${scrolled ? 'bg-slate-500/80' : ''}`}>
            <div>
                <h1 className={logo ? 'hidden' : 'block'}>REALIZE DREAMS</h1>
            </div>
            <ul className="hidden md:flex">
                <li><a href="/">Home</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="#travel">Travel</a></li>
                <li><a href="#book">Book</a></li>
                <li><a href="#view">View</a></li>
            </ul>
            <div className="hidden md:flex gap-2">
                <ThemeSwitch />
                <BiSearch size={20} />
                <BsPerson size={20} />
            </div>
            {/* Mobile Nav Hamburger */}
            <div className={nav ? "md:hidden z-10 flex items-center gap-2 text-black" : "md:hidden z-10 flex items-center gap-2"}>
                <ThemeSwitch />
                <div onClick={handleNav}>
                    {nav ? <AiOutlineClose size={20} color="black"/> : <HiOutlineMenuAlt4 size={20}/>}
                </div>
            </div>
            {/* Mobile Nav Dropdown Menu */}
            <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col'}>
                <h1>REALIZE DREAMS</h1>
                <ul className="flex flex-col">
                    <li className="border-b-2 border-gray-300"><a href="/">Home</a></li>
                    <li className="border-b-2 border-gray-300"><a href="/destinations">Destinations</a></li>
                    <li className="border-b-2 border-gray-300"><a href="#travel">Travel</a></li>
                    <li className="border-b-2 border-gray-300"><a href="#book">Book</a></li>
                    <li className="border-b-2 border-gray-300"><a href="#view">View</a></li>
                </ul>
                <div className="flex flex-col">
                    <button className="my-4" id="search" >Search</button>
                    <button id="account">Account</button>
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