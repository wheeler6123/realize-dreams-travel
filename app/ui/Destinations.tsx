import Image from 'next/image';
import borabora from '@/public/images/borabora.jpg';
import borabora2 from '@/public/images/borabora2.jpg';
import keywest from '@/public/images/keywest.jpg';
import maldives from '@/public/images/maldives.jpg';
import maldives2 from '@/public/images/maldives2.jpg';
import maldives3 from '@/public/images/maldives3.jpg';

export default function Destinations() {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
            <h1>All-Inclusive Resorts</h1>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className='py-4'>On the Caribbean's Best Beaches</p>
            <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
                <Image className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={borabora} alt='Bora Bora' />
                <Image className='w-full h-full object-cover' src={borabora2} alt='Bora Bora' />
                <Image className='w-full h-full object-cover' src={maldives} alt='Maldives' />
                <Image className='w-full h-full object-cover' src={maldives2} alt='Maldives' />
                <Image className='w-full h-full object-cover' src={maldives3} alt='Maldives' />
            </div>
        </div>
    )
}