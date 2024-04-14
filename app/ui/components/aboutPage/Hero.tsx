import Image from 'next/image'
import orangesunbathing from '@/public/images/orangesunbathing.webp'

export default function Hero() {
  return (
    <div className="w-full h-auto relative">
        <Image src={orangesunbathing} alt="a woman in an orange bikini lying beside a pool" className='w-full h-auto overflow-hidden lg:h-screen object-cover' />
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold">ABOUT US</h1>
            </div>
        </div>
    </div>
  )
}