/* eslint-disable react/no-unescaped-entities */
import cabo from '@/public/images/cabo.webp';
import Image from 'next/image';

export default function CaboSanLucas() {
    return (
    <div>
        <div className="w-full h-1/2 md:h-screen relative">
            <Image src={cabo} alt="A yacht in cabo san lucas" className='w-full h-full object-cover' />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
                    <span className='text-5xl md:text-8xl'>Cabo San Lucas</span>
                </div>
            </div>
        </div>
        <div className="max-w-[800px] text-center mx-auto px-8 py-16 flex flex-col gap-4">
            <h2 className='text-3xl md:text-5xl lg:text-7xl'>Cabo San Lucas</h2>
            <p>
                Cabo San Lucas, located at the southern tip of Mexico's Baja California Peninsula, is a premier vacation destination famed for its stunning natural beauty, luxurious resorts, and vibrant nightlife. Known for its striking rock formations like the iconic El Arco, this resort city is a blend of desert landscapes and crystal-clear waters, providing a perfect backdrop for both adventure and relaxation.
            </p>
            <Image src={cabo} alt='A yacht in cabo san lucas' width={450} height={300}  className='mx-auto my-8' />
            <p>
                Cabo's beaches are among its most enticing features, with Playa del Amor (Lover’s Beach) offering a secluded spot accessible only by boat, and Medano Beach, the main beachfront, bustling with activity. These sandy retreats are ideal for sunbathing, swimming, and a variety of water sports, including snorkeling and jet skiing. The surrounding waters are also renowned for their rich marine life, making Cabo one of the world's top destinations for sport fishing and seasonal whale watching.
            </p>
            <p>
                The nightlife in Cabo San Lucas is lively and fun, with a plethora of bars, nightclubs, and beach clubs that light up as the sun sets. The town's dining scene is equally vibrant, featuring a mix of traditional Mexican cuisine and international flavors, often paired with local tequilas and craft cocktails.
            </p>
            <p>
                For those seeking a touch of luxury, Cabo offers a range of high-end spas and golf courses, with championship greens designed by some of the sport's greatest names. These luxurious amenities provide a perfect way to unwind after a day filled with activities.
            </p>
            <p>
                Cabo San Lucas is also a gateway to exploring the rest of the Baja Peninsula, with day trips and excursions available to picturesque towns and other natural attractions. Whether you're looking for a peaceful retreat or an action-packed getaway, Cabo San Lucas offers a perfect mix of relaxation, adventure, and Mexican hospitality, making it an ideal destination for travelers seeking a luxurious and exciting beach holiday.
            </p>
        </div>
    </div>
    )
}