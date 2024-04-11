import { StaticImageData } from 'next/image';
import beachresort1 from '../../public/images/beachresort1.webp';
import resortpool1 from '../../public/images/resortpool1.webp';
import pariscirclenight from '../../public/images/pariscirclenight.webp';
import vailresortnight from '../../public/images/vailresortnight.webp';
import fivecruiseships from '../../public/images/fivecruiseships.webp';
import maroonbells from '../../public/images/maroonbells.webp';
import yachtsmarina from '../../public/images/yachtsmarina.webp';
import miami from '../../public/images/miami.webp';
import Fiji1 from '../../public/images/Fiji1.webp';

export interface ISliderData {
    id: number;
    title: string;
    alt: string;
    src: StaticImageData;
}

const sliderData: ISliderData[] = [
    {
        id: 1,
        title: 'Grand Cayman',
        alt: 'A beautiful beach resort in Grand Cayman',
        src: beachresort1,
    },
    {
        id: 2,
        title: 'Panama',
        alt: 'A beautiful resort pool in Panama',
        src: resortpool1,
    },
    {
        id: 3,
        title: 'Paris',
        alt: 'A nightime photo of the Arc de Triomphe in Paris',
        src: pariscirclenight,
    },
    {
        id: 4,
        title: 'Vail',
        alt: 'A photo from Vail Village at night',
        src: vailresortnight,
    },
    {
        id: 5,
        title: 'Cruise Ships',
        alt: 'a photo of five cruise ships docked in port',
        src: fivecruiseships,
    },
    {
        id: 6,
        title: 'Aspen',
        alt: 'A photo of Maroon Bells in Aspen, Colorado',
        src: maroonbells,
    },
    {
        id: 7,
        title: 'Private Yacht Charters',
        alt: 'A marina filled with luxury yachts',
        src: yachtsmarina,
    },
    {
        id: 8,
        title: 'Miami',
        alt: 'Miami skyline over Biscayne Bay',
        src: miami,
    },
    {
        id: 9,
        title: 'Maldives',
        alt: 'A woman in an infinity pool stares out at the ocean',
        src: Fiji1,
    },
]

export default sliderData;