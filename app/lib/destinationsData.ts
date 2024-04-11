import { StaticImageData } from 'next/image';
import dubainight1 from '../../public/images/dubainight1.webp';
import londonbridge from '../../public/images/londonbridge.webp';
import mediterranean from '../../public/images/mediterranean.webp';
import eveningpool from '../../public/images/eveningpool.webp';
import yacht1 from '../../public/images/yacht1.webp';
import keywest from '../../public/images/keywest.webp';
import switzerland from '../../public/images/switzerland.webp';
import nyc from '../../public/images/nyc.webp';
import cabo from '../../public/images/cabo.webp';


export interface ISliderData {
    id: number;
    title: string;
    alt: string;
    src: StaticImageData;
}

const destinationsData: ISliderData[] = [
    {
        id: 1,
        title: 'Dubai',
        alt: 'Dubai skyline at night',
        src: dubainight1,
    },
    {
        id: 2,
        title: 'London',
        alt: 'Bridge in London',
        src: londonbridge,
    },
    {
        id: 3,
        title: 'Mediterranean',
        alt: 'a photo of small wooden boats along the mediterranean coast',
        src: mediterranean,
    },
    {
        id: 4,
        title: 'Private Villas',
        alt: 'a beautiful pool at a private villa',
        src: eveningpool,
    },
    {
        id: 5,
        title: 'Yacht Charters',
        alt: 'a photo of a luxury yacht',
        src: yacht1,
    },
    {
        id: 6,
        title: 'Key West',
        alt: 'A photo of a beach in the keys',
        src: keywest,
    },
    {
        id: 7,
        title: 'Switzerland',
        alt: 'A rugged snow-capped peak in Switzerland',
        src: switzerland,
    },
    {
        id: 8,
        title: 'New York City',
        alt: 'A photo of the NYC skyline',
        src: nyc,
    },
    {
        id: 9,
        title: 'Cabo San Lucas',
        alt: 'A yacht in Cabo San Lucas',
        src: cabo,
    },
]

export default destinationsData;