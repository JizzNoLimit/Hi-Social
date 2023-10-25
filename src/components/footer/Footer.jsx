import { Link } from "react-router-dom"
import { facebook, github, instagram, twitter } from "../../assets/icon/icon"
import { hi_social_footer } from "../../assets/img/logo"

const Footer = () => {
    return (
        <footer className="w-full px-6 lg:px-32 xl:px-0">
            <div className="max-w-[1180px] w-full mx-auto">
                <div className="w-full py-16 space-y-10 text-center bg-[#2563EB] rounded-2xl">
                    <h1 className="px-8 lg:px-0 text-xl lg:text-3xl xl:text-4xl font-bold lg:leading-tight xl:leading-tight text-white">Subscribe to our newsletter</h1>
                    <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full lg:w-[70%] mx-auto px-8">
                        <input 
                            type="text"
                            className="flex-1 input w-full"
                            placeholder="First Name" 
                        />
                        <input 
                            type="text"
                            className="flex-1 input w-full"
                            placeholder="Email Address" 
                        />
                        <button className="btn-dark py-3 w-full flex-1 mt-4 lg:mt-0 font-bold rounded-full lg:rounded-lg bg-[#090914] hover:bg-[#15152c] ">Subscribe Now</button>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-10 py-10">
                    <div className="lg:flex-[44%]">
                        <img src={hi_social_footer} className="h-14 lg:h-16 xl:h-auto" alt="logo hi-social" />
                        <p className="mt-4 xl:mt-5 text-sm lg:text-base xl:text-xl">HiSocial Digital gives you ease in learning and improving your skills to become a professional.</p>
                        <div className="flex justify-center lg:justify-normal gap-4 w-full mt-8">
                            <div className="group flex justify-center items-center h-11 w-11 hover:bg-[#2563EB] border-[2px] rounded-full"><img className="text-white" src={twitter} alt="logo twitter" /></div>
                            <div className="group flex justify-center items-center h-11 w-11 hover:bg-[#2563EB] border-[2px] rounded-full"><img className="text-white" src={facebook} alt="logo facebook" /></div>
                            <div className="group flex justify-center items-center h-11 w-11 hover:bg-[#2563EB] border-[2px] rounded-full"><img className="text-white" src={instagram} alt="logo instagram" /></div>
                            <div className="group flex justify-center items-center h-11 w-11 hover:bg-[#2563EB] border-[2px] rounded-full"><img className="text-white" src={github} alt="logo github" /></div>
                        </div>
                    </div>
                    <div className="flex lg:flex-[56%] gap-6 lg:gap-0 lg:pl-10">
                        <div className="flex-1">
                            <h4 className="font-bold text-[#2563EB]">COMPANY</h4>
                            <ul className="mt-3 lg:mt-6 space-y-1 text-sm text-[#52525B]">
                                <li>About</li>
                                <li>Features</li>
                                <li>Works</li>
                                <li>Career</li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-[#2563EB]">HELP</h4>
                            <ul className="mt-3 lg:mt-6 space-y-1 text-sm text-[#52525B]">
                                <li>Customer Support</li>
                                <li>Delivery Details</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-[#2563EB]">RESOURCES</h4>
                            <ul className="mt-3 lg:mt-6 space-y-1 text-sm text-[#52525B]">
                                <li>Free eBooks</li>
                                <li>Development Tutorial</li>
                                <li>How to - Blog</li>
                                <li>Youtube Playlist</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="py-4 text-center">
                    <hr />
                    <p className="py-4 text-xs lg:text-sm xl:text-base text-gray-500">© 2022 HISOCIAL DIGITAL, ALL RIGHTS RESERVEDDOWNED BY PT TALENTA SINERGI GROUP</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer