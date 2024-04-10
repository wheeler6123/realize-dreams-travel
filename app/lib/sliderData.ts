import { StaticImageData } from 'next/image';
import boraboraunsplash from '@/public/images/boraboraunsplash.jpg';
import borabora from '@/public/images/borabora.jpg';
import borabora2 from '@/public/images/borabora2.jpg';
import keywest from '@/public/images/keywest.jpg';
import maldives from '@/public/images/maldives.jpg';
import maldives2 from '@/public/images/maldives2.jpg';
import maldives3 from '@/public/images/maldives3.jpg';

interface SliderData {
    id: number;
    title: string;
    alt: string;
    src: StaticImageData;
}

const sliderData: SliderData[] = [
    {
        id: 1,
        title: 'Bora Bora',
        alt: 'Bora Bora',
        src: borabora,
    },
    {
        id: 2,
        title: 'Bora Bora',
        alt: 'Bora Bora',
        src: borabora2,
    },
    {
        id: 3,
        title: 'Key West',
        alt: 'Key West',
        src: keywest,
    },
    {
        id: 4,
        title: 'Maldives',
        alt: 'Maldives',
        src: maldives,
    },
    {
        id: 5,
        title: 'Maldives',
        alt: 'Maldives',
        src: maldives2,
    },
    {
        id: 6,
        title: 'Maldives',
        alt: 'Maldives',
        src: maldives3,
    },
    {
        id: 7,
        title: 'Bora Bora',
        alt: 'Bora Bora',
        src: boraboraunsplash,
    },
]

export default sliderData;