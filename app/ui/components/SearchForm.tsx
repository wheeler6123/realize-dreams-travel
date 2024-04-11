import { AiOutlineSearch } from "react-icons/ai";


export default function SearchForm() {
    return (
        <div className="w-full flex flex-col justify-center text-center text-white p-4">
            <h1>First Class Travel</h1>
            <h2 className="py-4">Top 1% Locations Worldwide</h2>
            <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md bg-gray-100/90">
                <div>
                    <input className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none" type="text" placeholder="Search Destinations" />
                </div>
                <div>
                    <div className="button"><AiOutlineSearch size={20} className="icon" style={{color: '#ffffff'}}/></div>
                </div>
            </form>
        </div>
    )
}