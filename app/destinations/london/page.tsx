/* eslint-disable react/no-unescaped-entities */
import londonbridge from '@/public/images/londonbridge.webp';
import Image from 'next/image';

export default function London() {
    return (
    <div>
        <div className="w-full h-1/2 md:h-screen relative">
            <Image src={londonbridge} alt="a photo of a bridge in London" className='w-full h-full object-cover' />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
                    <span className='text-5xl md:text-8xl'>London</span>
                </div>
            </div>
        </div>
        <div className="max-w-[800px] text-center mx-auto px-8 py-16 flex flex-col gap-4">
            <h2 className='text-3xl md:text-5xl lg:text-7xl'>London</h2>
            <p>
                London, the capital of the United Kingdom, is a city steeped in history yet vibrantly alive with a cosmopolitan energy that makes it one of the world's most visited cities. From historic landmarks to modern attractions, London offers an array of experiences that cater to all interests.
            </p>
            <Image src={londonbridge} alt='london' width={450} height={300}  className='mx-auto my-8' />
            <p>
                London is also celebrated for its museums and galleries, many of which are free to enter. The British Museum houses a vast collection of world art and artifacts, while the Tate Modern on the South Bank displays leading modern and contemporary art. For theater enthusiasts, the West End offers top-notch performances ranging from musicals to classic Shakespearean plays.
            </p>
            <p>
                The city’s parks like Hyde Park and Regent’s Park provide a green escape from the urban hustle. Here, visitors can enjoy peaceful walks, paddle boating, and during summer, open-air concerts and theater performances.
            </p>
            <p>
                Shopping in London is another highlight. From the luxury boutiques of Bond Street to the bustling markets of Camden and Portobello Road, there's something for every shopper. Food lovers will revel in London's culinary scene, which boasts everything from traditional British pubs to Michelin-starred restaurants.
            </p>
            <p>
                Transportation in London is convenient, with an extensive underground network affectionately known as the Tube, making it easy to navigate the city. For a unique perspective, a ride on the London Eye offers panoramic views of the city’s skyline.
            </p>
            <p>
                Dynamic and diverse, London melds its historical charm with a cutting-edge culture, making it a city that offers endless discoveries to those who walk its ancient streets and bustling boulevards.
            </p>
        </div>
    </div>
    )
}