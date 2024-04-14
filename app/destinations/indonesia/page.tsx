/* eslint-disable react/no-unescaped-entities */
import indonesia1 from '@/public/images/indonesia1.webp';
import Image from 'next/image';

export default function Indonesia() {
    return (
    <div>
        <div className="w-full h-1/2 md:h-screen relative">
            <Image src={indonesia1} alt="a beautiful pool at a luxury resort in Indonesia" className='w-full h-full object-cover' />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
                    <span className='text-5xl md:text-8xl'>Indonesia</span>
                </div>
            </div>
        </div>
        <div className="max-w-[800px] text-center mx-auto px-8 py-16 flex flex-col gap-4">
            <h2 className='text-3xl md:text-5xl lg:text-7xl'>Indonesia</h2>
            <p>
                Indonesia, a sprawling archipelago in Southeast Asia, offers an astonishing diversity of experiences for travelers. With over 17,000 islands, visitors can explore everything from vibrant metropolises to untouched rainforests. Indonesia is renowned for its stunning natural beauty, rich cultural tapestry, and incredible biodiversity, making it a perfect destination for adventure, relaxation, and exploration.
            </p>
            <Image src={indonesia1} alt='a beautiful pool at a luxury resort in Indonesia' width={450} height={300}  className='mx-auto my-8' />
            <p>
                Bali, the most famous of Indonesia's islands, is a paradise for both adventurers and those seeking spiritual solace. Here, visitors can surf world-class waves, relax on sun-soaked beaches, or meditate in tranquil temples like the serene Uluwatu Temple perched on a cliff. Beyond Bali, the islands of Java and Sumatra offer breathtaking volcanic landscapes and thrilling wildlife encounters. In Java, the majestic Borobudur Temple, one of the world’s largest Buddhist temples, awaits, surrounded by lush greenery and traditional dance performances. Sumatra is home to lush rainforests where the endangered orangutans live, providing unique opportunities for wildlife spotting.
            </p>
            <p>
                Indonesia’s rich cultural heritage is evident in its traditional music, dance, and handicrafts. The country’s culinary scene is as diverse as its geography, featuring bold flavors and spices that reflect a blend of indigenous and foreign influences. Dishes like nasi goreng (fried rice), satay, and sambal are must-tries.
            </p>
            <p>
                For those who venture off the beaten path, the lesser-known islands like Flores and Sulawesi offer stunning diving spots and the ancient tradition of boatbuilding. Each corner of Indonesia offers a unique experience, promising lasting memories for every traveler.
            </p>
        </div>
    </div>
    )
}