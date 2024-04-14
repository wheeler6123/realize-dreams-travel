/* eslint-disable react/no-unescaped-entities */
import switzerland from '@/public/images/switzerland.webp';
import Image from 'next/image';

export default function Switzerland() {
    return (
    <div>
        <div className="w-full h-1/2 md:h-screen relative">
            <Image src={switzerland} alt="A rugged snow-capped peak in Switzerland" className='w-full h-full object-cover' />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
                    <span className='text-5xl md:text-8xl'>Switzerland</span>
                </div>
            </div>
        </div>
        <div className="max-w-[800px] text-center mx-auto px-8 py-16 flex flex-col gap-4">
            <h2 className='text-3xl md:text-5xl lg:text-7xl'>Switzerland</h2>
            <p>
                Switzerland, known for its breathtaking landscapes and high standard of living, is a captivating destination nestled in the heart of Europe. It offers a unique blend of natural wonders, historical richness, and multicultural sophistication, making it a must-visit for travelers seeking a diverse experience.
            </p>
            <Image src={switzerland} alt='A rugged snow-capped peak in Switzerland' width={450} height={300}  className='mx-auto my-8' />
            <p>
                The country is renowned for its stunning alpine scenery. The Swiss Alps, which cover a significant portion of Switzerland, are a haven for outdoor enthusiasts year-round. In the winter, resorts like Zermatt and St. Moritz come alive with skiers and snowboarders descending on their world-class slopes. During the summer, these mountains transform into a paradise for hikers and climbers who traverse the extensive network of trails that offer panoramic views of the majestic peaks and serene lakes.
            </p>
            <p>
                Switzerland's cities are as intriguing as its landscapes. Zurich and Geneva are global financial hubs with a cosmopolitan flair, featuring high-end shopping, gourmet dining, and vibrant nightlife. Meanwhile, the capital city of Bern, with its well-preserved medieval old town—a UNESCO World Heritage site—offers a step back in time with its cobbled streets and historic buildings.
            </p>
            <p>
                Culturally, Switzerland is unique in its diversity. The country has four official languages—German, French, Italian, and Romansh—and the cultural influence of each is evident in the architecture, traditions, and cuisine of different regions. This cultural mosaic is celebrated throughout the year with numerous festivals and events.
            </p>
            <p>
                Swiss cuisine, influenced by its diverse cultures, is known for dishes like fondue and raclette, as well as luxury chocolates and high-quality cheeses that are enjoyed worldwide. For those interested in art and history, Switzerland offers numerous museums and galleries that showcase everything from ancient artifacts to contemporary art. The Swiss National Museum and the Fondation Beyeler are just a couple of the cultural treasures waiting to be explored.
            </p>
            <p>
                In summary, Switzerland provides a rich tapestry of experiences that blend outdoor adventure with cultural enrichment, set against some of the most spectacular scenery in the world. Whether seeking thrilling adventures, culinary delights, or a peaceful retreat into nature, Switzerland offers an exceptional travel experience.
            </p>
        </div>
    </div>
    )
}