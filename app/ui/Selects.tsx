import destinationsData from '../lib/destinationsData';
import SelectsCard from './components/SelectsCard';
import Link from 'next/link';

export default function Selects() {
    return (
        <div id='view' className="max-w-[1240px] mx-auto px-4 py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {destinationsData?.map((item) => {
                return (
                    <Link key={item.id} href={`/destinations/${item.title.toLowerCase().replace(/\s/g, '')}`}>
                            <SelectsCard item={item} />
                    </Link>
                )
            })}
        </div>
    )
}