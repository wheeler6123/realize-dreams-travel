'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import sliderData from '@/app/lib/sliderData';

export default function Carousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoPlay({ delay: 2000 })]);

    return (
        <div
            className="overflow-hidden bg-gray-200 w-full mx-auto flex items-center justify-center h-auto lg:h-screen z-0"
            ref={emblaRef}
        >
            <div className="flex">
                {sliderData?.map((item) => {
                    return (
                    <div className="embla__slide relative h-full w-full" key={item.id}>
        
                        {/* the image */}
                        <Image className="w-full h-full" src={item.src} alt={item.alt} />

                        {/* overlay */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gray-900/25"></div>
        
                        {/* title/subtitle */}
                        <h1 className="absolute top-1/2 left-1/2 w-full md:w-auto transform -translate-x-1/2 translate-y-[3rem] md:translate-y-[9rem]  lg:translate-y-48  py-2 lg:py-4 px-2 lg:px-8 text-xl lg:text-2xl text-white font-extrabold">
                        {item.title}
                        </h1>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}