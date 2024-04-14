/* eslint-disable react/no-unescaped-entities */
import yacht1 from '@/public/images/yacht1.webp';
import Image from 'next/image';

export default function Caribbean() {
    return (
    <div>
        <div className="w-full h-1/2 md:h-screen relative">
            <Image src={yacht1} alt="a photo of a luxury yacht sitting in a cove" className='w-full h-full object-cover' />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
                    <span className='text-5xl md:text-8xl'>Caribbean</span>
                </div>
            </div>
        </div>
        <div className="max-w-[800px] text-center mx-auto px-8 py-16 flex flex-col gap-4">
            <h2 className='text-3xl md:text-5xl lg:text-7xl'>Caribbean</h2>
            <p>
                The Caribbean, a region defined by its crystal-clear waters, sun-kissed beaches, and vibrant cultures, is a paradise that stretches across many islands, each offering unique experiences. From the Bahamas in the north to Aruba in the south, this region is perfect for those seeking relaxation, adventure, and everything in between.
            </p>
            <Image src={yacht1} alt='a photo of a luxury yacht sitting in a cove' width={450} height={300}  className='mx-auto my-8' />
            <p>
                The Bahamas, known for their pristine beaches and some of the clearest waters on the planet, offer an idyllic escape for beach lovers and water sports enthusiasts alike. Nassau, the capital, blends local culture with colonial history, providing a lively hub of activities and shopping.
            </p>
            <p>
                Further south, Jamaica presents a robust cultural experience with its reggae rhythms, spicy cuisine, and lush landscapes. Adventurous travelers can explore the Blue Mountains, while those looking to unwind can enjoy the laid-back vibes of Negril’s seven-mile beach.
            </p>
            <p>
                Guadeloupe, a butterfly-shaped territory, offers a taste of French culture in the heart of the Caribbean. Its two islands feature beautiful rainforests, waterfalls, and secluded beaches. The blend of French and Creole influences is evident in its culinary delights, making it a gastronomic hotspot.
            </p>
            <p>
                Aruba, with its dry, sunny weather, is perfect for year-round visits. The island’s vibrant capital, Oranjestad, showcases Dutch colonial architecture and offers excellent shopping and dining options. Its rugged northern coastline and tranquil western beaches cater to both the adventurous and the leisurely.
            </p>
            <p>
                For an exclusive and luxurious experience, private yacht charters are available throughout the Caribbean. These charters provide the ultimate freedom to explore secluded coves, vibrant coral reefs, and remote islands at your own pace, offering privacy and personalized service to make your Caribbean adventure truly unforgettable.
            </p>
        </div>
    </div>
    )
}