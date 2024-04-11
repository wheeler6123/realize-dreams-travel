import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

export default function Search() {
    return (
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
            <div className="lg:col-span-2 flex flex-col justify-evenly">
                <div>
                    <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                    <p className="py-4">Come experience the very pinnacle of luxury Caribbean all-inclusive vacations for couples at our finest resorts. Our luxury beach resorts, set along the most gorgeous tropical settings and exquisite beaches in Saint Lucia, Jamaica, Antigua, The Bahamas, Grenada, Barbados, and Curacao, feature unlimited gourmet dining, unique bars serving premium liquors and wines, and every land and water sport, including complimentary green fees at our golf resorts and certified scuba diving at most resorts. If you are planning a wedding, we are the leader in Caribbean destination weddings and honeymood packages.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-8 py-4">
                    <div className="flex flex-col lg:flex-row items-center text-center">
                        <button><RiCustomerService2Fill size={50} /></button>
                        <div>
                            <h3 className="py-2">LEADING SERVICE</h3>
                            <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center text-center">
                        <button><MdOutlineTravelExplore size={50} /></button>
                        <div>
                            <h3 className="py-2">AUTOMATED BOOKINGS</h3>
                            <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="border text-center">
                    <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
                    <p className="py-4">12 HOURS LEFT</p>
                    <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
                </div>
                <form className="w-full">
                    <div className="flex flex-col my-2">
                        <label htmlFor="destination">Destination</label>
                        <select className="border rounded-md p-2" name="destination">
                            <option value="antigua">Grande Antigua</option>
                            <option value="key-west">Key West</option>
                            <option value="maldives">Maldives</option>
                            <option value="bora-bora">Bora Bora</option>
                            <option value="cozumel">Cozumel</option>
                        </select>
                    </div>
                    <div className="flex flex-col my-4">
                        <label htmlFor="check-in">Check-In</label>
                        <input className="border rounded-md p-2" type="date" />
                    </div>
                    <div className="flex flex-col my-2">
                        <label htmlFor="check-out">Check-Out</label>
                        <input className="border rounded-md p-2" type="date" />
                    </div>
                    <button className="my-4 w-full">Rates & Availabilities</button>
                </form>
            </div>
        </div>
    )
}