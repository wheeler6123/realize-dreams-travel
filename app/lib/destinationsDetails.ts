import { StaticImageData } from 'next/image';
import dubainight1 from '../../public/images/dubainight1.webp';
import londonbridge from '../../public/images/londonbridge.webp';
import mediterranean from '../../public/images/mediterranean.webp';
import indonesia1 from '../../public/images/indonesia1.webp';
import yacht1 from '../../public/images/yacht1.webp';
import keywest from '../../public/images/keywest.webp';
import switzerland from '../../public/images/switzerland.webp';
import nyc from '../../public/images/nyc.webp';
import cabo from '../../public/images/cabo.webp';


export type Destination = {
    id: number;
    name: string;
    image: StaticImageData;
    description: string;
}

export const destinations: Destination[] = [
    {
        id: 1,
        name: 'Dubai',
        image: dubainight1,
        description: `Dubai, a vibrant city in the United Arab Emirates, is a remarkable blend of modern culture, history, and luxury, making it a premier destination for travelers from around the world. Known for its breathtaking architecture, extravagant shopping experiences, and lively nightlife, Dubai offers an array of attractions that cater to every type of traveler.

        At the heart of Dubai’s modern appeal is the Burj Khalifa, the tallest building in the world. Standing at a staggering height of 828 meters, it offers awe-inspiring views of the cityscape from its observation decks. The surrounding area, Downtown Dubai, is also home to the Dubai Mall, one of the largest shopping centers globally. This retail haven boasts over 1,200 stores and a host of world-class attractions, including an Olympic-sized ice rink and the Dubai Aquarium and Underwater Zoo.
        
        For those interested in a more cultural experience, the Al Fahidi Historical Neighbourhood offers a glimpse into Dubai’s past. This beautifully preserved area features traditional wind-tower architecture, galleries, and museums, and it's a peaceful haven away from the bustling city center. Here, visitors can explore the Dubai Museum, housed in the Al Fahidi Fort, to learn about the region’s history and development.
        
        Dubai is also renowned for its luxury experiences, and perhaps nothing exemplifies this better than its iconic hotels. The Burj Al Arab, standing on its own artificial island, is known worldwide for its distinctive sail-shaped silhouette and opulent service. For a unique stay, the Atlantis, The Palm on the Palm Jumeirah offers underwater rooms and up-close encounters with marine life in the Ambassador Lagoon.
        
        Beyond the glitz and glamour, Dubai has a vibrant food scene that reflects its cosmopolitan population. From luxurious dining options in high-end restaurants serving international cuisine to traditional eateries offering local dishes such as shawarma and mezze, the culinary experiences are as diverse as they are delicious.
        
        Adventure seekers will find plenty to do as well. The vast Arabian Desert offers exhilarating experiences like dune bashing, sandboarding, and camel trekking. More serene pursuits can be enjoyed on a desert safari, which typically concludes with a traditional Bedouin camp experience, complete with a starlit Arabian dinner.
        
        For those looking to unwind, Dubai’s beaches are perfect for relaxation and water sports. Beaches like Jumeirah Beach Park and Kite Beach are popular spots for both tourists and locals, offering excellent facilities and stunning views of the Gulf.
        
        Culturally rich and endlessly fascinating, Dubai also celebrates numerous festivals and events throughout the year, such as the Dubai Shopping Festival, which attracts shoppers keen on catching unbeatable deals, and the Dubai Jazz Festival, which features performances by internationally renowned artists.
        
        Dubai’s rapid transformation from a humble fishing village to a global metropolis is a testament to its visionary leadership. Whether you're looking for towering skyscrapers, luxurious shopping, adventurous activities, or tranquil beach days, Dubai offers an unforgettable escape into a world where tradition and modernity harmoniously coexist. It's not just a city to visit but an experience to be lived.
        `
    },
    {
        id: 2,
        name: 'London',
        image: londonbridge,
        description: 'London, the capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times. At its centre stand the imposing Houses of Parliament, the iconic Big Ben clock tower, and Westminster Abbey, site of British monarch coronations.'
    },
    {
        id: 3,
        name: 'Mediterranean',
        image: mediterranean,
        description: 'The Mediterranean Sea is a sea connected to the Atlantic Ocean, surrounded by the Mediterranean Basin and almost completely enclosed by land: on the north by Western and Southern Europe and Anatolia, on the south by North Africa, and on the east by the Levant.'
    },
    {
        id: 4,
        name: 'Indonesia',
        image: indonesia1,
        description: 'Indonesia, a Southeast Asian nation made up of thousands of volcanic islands, is home to hundreds'
    }
]