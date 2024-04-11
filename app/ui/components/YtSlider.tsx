'use client';

import { useState } from "react";
import sliderData from "@/app/lib/sliderData"
import Image from 'next/image';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';
import { set } from "mongoose";

export default function YtSlider() {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length;

    const prevSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1)
    };
    const nextSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1)
    };

    return (
        <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
            <BsArrowLeftSquareFill onClick={prevSlide} className="absolute top-[50%] text-3xl text-white cursor-pointer left-8" />
            <BsArrowRightSquareFill onClick={nextSlide} className="absolute top-[50%] text-3xl text-white cursor-pointer right-8" />
            {sliderData.map((item, index) => (
                <div className={index === slide ? 'opacity-100' : 'opacity-0'} key={item.id}>
                    {index === slide && (
                        <Image className={"w-full h-full object-cover rounded-md"} src={item.src} alt={item.alt} />
                    )}
                </div>
            ))}
        </div>
    )
}