import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

export default function Search() {
    return (
        <div id="book" className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
            <div className="lg:col-span-2 flex flex-col justify-evenly">
                <div>
                    <h2>THE FINEST LUXURY VACATIONS</h2>
                    <p className="py-4">Come experience the very pinnacle of luxury vacations at our finest resorts and villas. From our luxury beach resorts, set among the most gorgeous tropical settings and exquisite beaches in Fiji, Thailand, Bora Bora, to the snow-covered peaks of the best ski resorts including Aspen, Vail, Switzerland. If a relaxing cruise is what you are after, we can book you in the best suites on the grandest ships, or book your own private charter on a custom yacht. At REALIZE DREAMS, our name is our mission. We want to help you make the vacation of your dreams a reality, and there is nothing we cannot do. Contact us today to get started planning the best time of your life!</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-8 py-4">
                    <div className="flex flex-col lg:flex-row items-center text-center">
                        <button><RiCustomerService2Fill size={50} /></button>
                        <div>
                            <h3 className="py-2">LEADING SERVICE</h3>
                            <p className="p-1">HIGHLY-TRAINED EXPERIENCED AGENTS</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center text-center">
                        <button><MdOutlineTravelExplore size={50} /></button>
                        <div>
                            <h3 className="py-2">CUSTOM EXCURSIONS</h3>
                            <p className="p-1">TAILORED ITINERARIES FOR YOU</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="border text-center p-4">
                    <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
                    <p className="py-4">12 HOURS LEFT!</p>
                    <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
                </div>
                <form className="w-full">
                    <div className="flex flex-col my-2">
                        <label htmlFor="destination">Destination</label>
                        <select className="border rounded-md p-2" name="destination">
                            <option value="grand-cayman">Grand Cayman</option>
                            <option value="mexico">Mexico</option>
                            <option value="aspen">Aspen</option>
                            <option value="paris">Paris</option>
                            <option value="panama">Panama</option>
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