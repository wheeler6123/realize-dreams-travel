import Image from 'next/image';
import destinationsData from '../lib/destinationsData';
import SelectsCard from './components/SelectsCard';

export default function Selects() {
    return (
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {destinationsData?.map((item) => {
                return (
                    <SelectsCard key={item.id} item={item} />
                )
            })}
        </div>
    )
}