import Image from 'next/image'
import travelh500 from '@/public/images/travelh500.webp'

export default function Hero() {
  return (
    <div className="w-full h-auto relative">
        <Image src={travelh500} alt="two women sitting in a pool overlooking a beautiful tropical beach" className='w-full h-auto object-cover' />
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold">TRAVEL WITH US</h1>
            </div>
        </div>
    </div>
  )
}