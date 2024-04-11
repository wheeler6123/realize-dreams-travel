import Image from 'next/image';
import beachsunbathing from '@/public/images/beachsunbathing.webp';
import Fiji2iguana from '@/public/images/Fiji2iguana.webp';
import stingray from '@/public/images/stingray.webp';
import tropicalbeach1 from '@/public/images/tropicalbeach1.webp';
import sunsetcruise1 from '@/public/images/sunsetcruise1.webp';


export default function Destinations() {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1>The World's Hottest Travel Destinations</h1>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className='py-4'>With Exclusive Access You've Only Dreamed Of</p>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <Image className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={beachsunbathing} alt='a woman sunbathes beside crystal clear water' />
                <Image className='w-full h-full object-cover' src={Fiji2iguana} alt='a brightly colored iguana in Fiji' />
                <Image className='w-full h-full object-cover' src={stingray} alt='a stingray swims underwater in Grand Cayman' />
                <Image className='w-full h-full object-cover' src={tropicalbeach1} alt='A beautiful tropical beach' />
                <Image className='w-full h-full object-cover' src={sunsetcruise1} alt='a cruise ship sails off into the sunset' />
            </div>
        </div>
    )
}