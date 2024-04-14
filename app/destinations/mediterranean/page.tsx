/* eslint-disable react/no-unescaped-entities */
import mediterranean from '@/public/images/mediterranean.webp';
import Image from 'next/image';

export default function Mediterranean() {
    return (
    <div>
        <div className="w-full h-1/2 md:h-screen relative">
            <Image src={mediterranean} alt="a photo of small wooden boats beside the sea" className='w-full h-full object-cover' />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
                    <span className='text-5xl md:text-8xl'>Mediterranean</span>
                </div>
            </div>
        </div>
        <div className="max-w-[800px] text-center mx-auto px-8 py-16 flex flex-col gap-4">
            <h2 className='text-3xl md:text-5xl lg:text-7xl'>Mediterranean</h2>
            <p>
                The Mediterranean region, encompassing a vast arc from the clear blue waters of southern Europe to the sun-drenched landscapes of North Africa and the Middle East, offers travelers an enchanting blend of culture, history, and breathtaking scenery. Renowned for its stunning coastlines and mild climate, the area promises perfect beach holidays complemented by a rich tapestry of culinary delights, historical sites, and vibrant local traditions.
            </p>
            <Image src={mediterranean} alt='a photo of small wooden boats along the mediterranean coast' width={450} height={300}  className='mx-auto my-8' />
            <p>
                From the romantic allure of Italy's Amalfi Coast to the historic ruins of Greece’s Acropolis, the Mediterranean is steeped in history. Visitors can explore ancient civilizations in Rome and Athens, where millennia-old monuments and museums showcase the achievements of the past. The region is also home to some of the world’s most beloved cuisines, characterized by olive oil, fresh seafood, ripe fruits, and robust wines. Dining here focuses on simplicity and quality, turning every meal into a delightful experience.
            </p>
            <p>
                Outdoor enthusiasts will find plenty to do, from hiking in the rugged landscapes of Spain's Sierra Nevada to sailing the turquoise waters of the Turkish Aegean. The region’s diverse natural beauty also includes serene olive groves and vibrant markets brimming with local produce and crafts, providing a sensory feast that captivates every visitor.
            </p>
            <p>
                Luxurious resorts and charming boutique hotels dot the coastline, offering accommodations that cater to both luxury seekers and budget travelers. Every destination within the Mediterranean holds its unique charm, inviting visitors to unwind and soak in the timeless beauty of one of the world’s most coveted travel destinations. Whether seeking relaxation or adventure, the Mediterranean region offers a mosaic of experiences that are as diverse as its scenery.
            </p>
        </div>
    </div>
    )
}