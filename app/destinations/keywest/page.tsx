/* eslint-disable react/no-unescaped-entities */
import keywest from '@/public/images/keywest.webp';
import Image from 'next/image';

export default function KeyWest() {
    return (
    <div>
        <div className="w-full h-1/2 md:h-screen relative">
            <Image src={keywest} alt="A photo of a beach in the keys" className='w-full h-full object-cover' />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
                    <span className='text-5xl md:text-8xl'>Key West</span>
                </div>
            </div>
        </div>
        <div className="max-w-[800px] text-center mx-auto px-8 py-16 flex flex-col gap-4">
            <h2 className='text-3xl md:text-5xl lg:text-7xl'>Key West</h2>
            <p>
                Key West, the southernmost point of the continental United States, is a unique blend of natural beauty, historical landmarks, and laid-back charm. This small island city in the Florida Keys is renowned for its stunning sunsets, vibrant coral reefs, and rich literary history, making it a popular destination for both adventure seekers and culture enthusiasts.
            </p>
            <Image src={keywest} alt='A photo of a beach in the keys' width={450} height={300}  className='mx-auto my-8' />
            <p>
                Surrounded by the clear blue waters of the Gulf of Mexico and the Atlantic Ocean, Key West is a haven for water sports enthusiasts. The island’s coral reefs offer some of the best snorkeling and diving experiences in the country, where divers can explore an underwater world teeming with colorful marine life. Additionally, fishing, kayaking, and sailing are popular activities that allow visitors to take in the natural beauty of the area at a leisurely pace.
            </p>
            <p>
                On land, Key West’s charm is best experienced through its colorful conch-style houses and the bustling activity along Duval Street, the city’s main thoroughfare. Here, visitors can indulge in local cuisine, visit art galleries, and shop at boutique stores. The street is also famous for its lively nightlife, with numerous bars and pubs hosting live music well into the night.
            </p>
            <p>
                Historically, Key West has a fascinating past, having been home to famous figures such as Ernest Hemingway and Tennessee Williams. The Ernest Hemingway Home and Museum is a popular attraction, where visitors can tour the writer’s residence and meet the six-toed cats that roam the property, believed to be descendants of Hemingway’s own pets.
            </p>
            <p>
                Whether watching a spectacular sunset at Mallory Square, exploring the historic Old Town, or enjoying a slice of key lime pie, Key West offers a relaxed and enchanting getaway that captures the essence of island life in the Florida Keys.
            </p>
        </div>
    </div>
    )
}