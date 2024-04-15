'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import AutoPlay from 'embla-carousel-autoplay';
import sliderData from '@/app/lib/sliderData';

export default function Carousel() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoPlay({ delay: 2000 })]);

    return (
        <div
            className="overflow-hidden bg-gray-200 w-full mx-auto flex items-center justify-center h-full z-0"
            ref={emblaRef}
        >
            <div className="flex h-full">
                {sliderData?.map((item) => {
                    return (
                    <div className="embla__slide relative h-full w-full" key={item.id}>
        
                        {/* the image */}
                        <Image className="w-full h-full" src={item.src} alt={item.alt} />

                        {/* overlay */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gray-900/25"></div>
        
                        {/* title/subtitle */}
                        <h1 className="absolute left-1/4 top-2/3 w-full md:w-auto py-2 lg:py-4 px-2 lg:px-8 text-2xl md:text-4xl lg:text-6xl text-white font-extrabold">
                        {item.title}
                        </h1>
                    </div>
                    );
                })}
            </div>
        </div>
    );
}