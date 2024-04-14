/* eslint-disable react/no-unescaped-entities */
import dubainight1 from '@/public/images/dubainight1.webp';
import Image from 'next/image';

export default function Dubai() {
    return (
    <div>
        <div className="w-full h-1/2 md:h-screen relative">
            <Image src={dubainight1} alt="a photo of the dubai skyline at night" className='w-full h-full object-cover' />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
                    <span className='text-5xl md:text-8xl'>Dubai</span>
                </div>
            </div>
        </div>
        <div className="max-w-[800px] text-center mx-auto px-8 py-16 flex flex-col gap-4">
            <h2 className='text-3xl md:text-5xl lg:text-7xl'>Dubai</h2>
            <p>
                Dubai, a vibrant city in the United Arab Emirates, is a remarkable blend of modern culture, history, and luxury, making it a premier destination for travelers from around the world. Known for its breathtaking architecture, extravagant shopping experiences, and lively nightlife, Dubai offers an array of attractions that cater to every type of traveler.
            </p>
            <Image src={dubainight1} alt='dubai' width={450} height={300}  className='mx-auto my-8' />
            <p>
                At the heart of Dubai’s modern appeal is the Burj Khalifa, the tallest building in the world. Standing at a staggering height of 828 meters, it offers awe-inspiring views of the cityscape from its observation decks. The surrounding area, Downtown Dubai, is also home to the Dubai Mall, one of the largest shopping centers globally. This retail haven boasts over 1,200 stores and a host of world-class attractions, including an Olympic-sized ice rink and the Dubai Aquarium and Underwater Zoo.
            </p>
            <p>
                For those interested in a more cultural experience, the Al Fahidi Historical Neighbourhood offers a glimpse into Dubai’s past. This beautifully preserved area features traditional wind-tower architecture, galleries, and museums, and it's a peaceful haven away from the bustling city center. Here, visitors can explore the Dubai Museum, housed in the Al Fahidi Fort, to learn about the region’s history and development.
            </p>
            <p>
                Dubai is also renowned for its luxury experiences, and perhaps nothing exemplifies this better than its iconic hotels. The Burj Al Arab, standing on its own artificial island, is known worldwide for its distinctive sail-shaped silhouette and opulent service. For a unique stay, the Atlantis, The Palm on the Palm Jumeirah offers underwater rooms and up-close encounters with marine life in the Ambassador Lagoon.
            </p>
            <p>
                Beyond the glitz and glamour, Dubai has a vibrant food scene that reflects its cosmopolitan population. From luxurious dining options in high-end restaurants serving international cuisine to traditional eateries offering local dishes such as shawarma and mezze, the culinary experiences are as diverse as they are delicious.
            </p>
            <p>
                Adventure seekers will find plenty to do as well. The vast Arabian Desert offers exhilarating experiences like dune bashing, sandboarding, and camel trekking. More serene pursuits can be enjoyed on a desert safari, which typically concludes with a traditional Bedouin camp experience, complete with a starlit Arabian dinner.
            </p>
            <p>
                For those looking to unwind, Dubai’s beaches are perfect for relaxation and water sports. Beaches like Jumeirah Beach Park and Kite Beach are popular spots for both tourists and locals, offering excellent facilities and stunning views of the Gulf.
            </p>
        </div>
    </div>
    )
}