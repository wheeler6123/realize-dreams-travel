import Image from 'next/image'
import sunbathingyacht from '@/public/images/sunbathingyacht.webp'

export default function Hero() {
  return (
    <div className="w-full h-auto relative">
        <Image src={sunbathingyacht} alt="a woman sunbathing on the deck of a yacht" className='w-full h-auto lg:h-screen object-cover' />
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold">DESTINATIONS</h1>
                <p className="text-lg md:text-xl">Explore the world and discover new places</p>
            </div>
        </div>
    </div>
  )
}
