/* eslint-disable react/no-unescaped-entities */
import nyc from '@/public/images/nyc.webp';
import Image from 'next/image';

export default function Nyc() {
    return (
    <div>
        <div className="w-full h-1/2 md:h-screen relative">
            <Image src={nyc} alt="A photo of the NYC skyline" className='w-full h-full object-cover' />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
                    <span className='text-5xl md:text-8xl'>New York City</span>
                </div>
            </div>
        </div>
        <div className="max-w-[800px] text-center mx-auto px-8 py-16 flex flex-col gap-4">
            <h2 className='text-3xl md:text-5xl lg:text-7xl'>New York City</h2>
            <p>
                New York City, often described as the cultural, financial, and media capital of the world, is a bustling metropolis that boasts an incomparable skyline, boundless energy, and a myriad of opportunities to explore art, cuisine, and entertainment. Known as "The City That Never Sleeps," NYC is famous for its iconic landmarks and neighborhoods, each offering distinct experiences and attractions.
            </p>
            <Image src={nyc} alt='A photo of the NYC skyline' width={450} height={300}  className='mx-auto my-8' />
            <p>
                At the heart of the city lies Manhattan, a densely populated borough that's home to major landmarks like Times Square, Central Park, and the Empire State Building. Times Square, with its blazing neon lights and colossal billboards, serves as the throbbing pulse of the city, while Central Park offers a peaceful, green oasis amidst the urban chaos, perfect for leisurely strolls, picnicking, and horse-drawn carriage rides.
            </p>
            <p>
                The city's cultural fabric is woven with an impressive array of museums and galleries. The Metropolitan Museum of Art and the Museum of Modern Art house some of the world's most famous art collections, while smaller venues like the Whitney Museum of American Art showcase contemporary works. Broadway, another cultural hallmark, presents world-class theater productions ranging from timeless musicals to modern dramas.
            </p>
            <p>
                New York's culinary scene is as diverse as its population. From high-end dining at Michelin-starred restaurants to iconic New York staples like bagels and New York-style pizza, the city caters to every palate. The diverse neighborhoods—such as Chinatown for authentic Asian fare, Little Italy for Italian cuisine, and newer spots like Koreatown—offer immersive culinary journeys without ever leaving the city.
            </p>
            <p>
                The city also serves as a platform for major events, hosting the annual New York Fashion Week, the New York City Marathon, and holiday spectacles such as the Thanksgiving Day Parade and the New Year's Eve ball drop in Times Square.
            </p>
            <p>
                New York City's vibrant diversity, historic landmarks, cutting-edge culture, and dynamic atmosphere make it an unparalleled destination for travelers seeking excitement and new experiences in one of the world's most famous urban landscapes. Whether exploring its iconic sights, engaging with the arts, dining, shopping, or simply soaking in the frenetic pace of life, New York City offers something memorable for everyone.
            </p>
        </div>
    </div>
    )
}