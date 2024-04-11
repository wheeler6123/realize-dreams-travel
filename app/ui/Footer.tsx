import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa"

export default function Footer() {
    return (
        <div className="w-full bg-gray-100 text-black py-16">
            <div className="max-w-[1240px] mx-auto flex flex-col px-4">
                <div className="sm:flex text-center justify-between items-center">
                    <h1>REALIZE DREAMS</h1>
                    <div className="flex justify-between my-6 w-full sm:max-w-[280px]">
                        <FaFacebook className="icon" />
                        <FaTwitter className="icon" />
                        <FaInstagram className="icon" />
                        <FaPinterest className="icon" />
                        <FaYoutube className="icon" />
                    </div>
                </div>
                <div className="flex justify-between">
                    <ul className="lg:flex">
                        <li>About</li>
                        <li>Partnerships</li>
                        <li>Careers</li>
                        <li>Newsroom</li>
                        <li>Advertising</li>
                    </ul>  
                    <ul className='lg:flex text-right'>
                        <li>Home</li>
                        <li>Destinations</li>
                        <li>Travel</li>
                        <li>View</li>
                        <li>Book</li>    
                    </ul>  
                </div>                
            </div>
        </div>
    )
}