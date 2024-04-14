import Image from 'next/image'
import { ISliderData } from '@/app/lib/sliderData';

export default function SelectsCard({ item: item }:  { item: ISliderData }) {
    return (
        <div className="relative">
            <Image className='w-full h-full object-cover' src={item.src} alt={item.alt} />
            <div className="bg-gray-800/15 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
                    {item.title}
                </p>
            </div>
        </div>
    )
}