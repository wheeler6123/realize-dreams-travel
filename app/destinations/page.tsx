import Hero from '../ui/destinationsPage/Hero';
import Selects from '../ui/Selects';

const DestinationsPage = () => {
  return (
    <div>
        <Hero />
        <div className='max-w-[1240px] mx-auto text-center py-4'>
            <h1 className='py-8 mx-auto'>WE CAN TAKE YOU ANYWHERE IN THE <span className='bg-gradient-to-r from-green-400 to-blue-600 inline-block text-transparent bg-clip-text'>WORLD</span></h1>
            <p className='w-3/4 mx-auto'>At Realized Dreams, we build custom vacation packages tailored to fit any budget and objectives. Our team will work with you to design the perfect vacation itinerary for any destination you choose. From luxury villas on the Amalfi Coast to cruise excursions in the Arctic, the only limit is your imagination. Below are just a few of our most popular destinations!</p>
            <Selects />
        </div>
    </div>
  )
}

export default DestinationsPage;