import { check_circle } from "../../assets/icon/icon"

const DesignPrices = () => {
    return (
        <div className="w-full px-6 lg:px-32 xl:px-0">
            <div className="max-w-[1180px] w-full mx-auto">
                <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold text-center lg:leading-tight xl:leading-tight text-pb-normal-active">Design <span className="text-p-normal">Prices</span></h1>
                <p className="mt-4 xl:mt-5 text-lg xl:text-2xl text-center">Professional and best Logo and Branding Identity Service Packages at the lowest costs.</p>
                <div className="my-8 bg-white drop-shadow-[0px_5px_20px_rgba(0,0,0,0.10)] rounded-xl overflow-hidden ">
                    <div className="flex flex-col lg:flex-row lg:gap-4">
                        <div className="flex-1 px-10 pt-16 pb-10 text-center hover:rounded-br-xl">
                            <h4 className="text-xl xl:text-2xl font-bold text-p-normal">HiBronze</h4>
                            <p className="mt-3 text-2xl font-bold">IDR 1.500.000</p>
                            <p className="text-sm text-[#4B5768]">/ Month</p>
                            <button className="btn-outline w-full mt-6 font-bold group-hover:text-pb-normal-active group-hover:bg-[#EDC700] rounded-full text-sm xl:text-base">Get Started Now</button>
                        </div>
                        <div className="group flex-1 px-10 pt-16 pb-10 text-center bg-p-normal text-white  rounded-bl-xl rounded-br-xl">
                            <h4 className="text-xl xl:text-2xl font-bold text-white">HiBronze</h4>
                            <p className="mt-3 text-2xl font-bold">IDR 1.500.000</p>
                            <p className="text-sm text-[#E6EAEC]">/ Month</p>
                            <button className="btn-outline w-full mt-6 font-bold text-pb-normal-active bg-[#EDC700] hover:bg-[#edaa00] rounded-full text-sm xl:text-base">Get Started Now</button>
                        </div>
                        <div className="flex-1 px-10 pt-16 pb-10 text-center hover:rounded-br-xl">
                            <h4 className="text-xl xl:text-2xl font-bold text-p-normal">HiBronze</h4>
                            <p className="mt-3 text-2xl font-bold">IDR 1.500.000</p>
                            <p className="text-sm text-[#4B5768]">/ Month</p>
                            <button className="btn-outline w-full mt-6 font-bold group-hover:text-pb-normal-active group-hover:bg-[#EDC700] rounded-full text-sm xl:text-base">Get Started Now</button>
                        </div>
                    </div>
                    <div className="hidden md:flex px-10 pt-20 pb-11">
                        <div className="flex-1 text-[#002B44]">
                            <h4 className="font-bold">Benefits</h4>
                            <ul className="mt-5 lg:space-y-[14px] xl:space-y-[15.5px]">
                                <li>Content Feeds & Story</li>
                                <li>Reels & TikTok Videos</li>
                                <li>Dashboard Content</li>
                                <li>Copywriting & Hastag</li>
                                <li>Monthly Report & Consultation</li>
                                <li>Boost marketing adverstisement</li>
                                <li>Free company website/ Personal</li>
                                <li>Digital marketing lerning videos</li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <div className="flex text-center">
                                <h4 className="flex-1 font-bold">HiBronze</h4>
                                <h4 className="flex-1 font-bold">HiSilver</h4>
                                <h4 className="flex-1 font-bold">HiGold</h4>
                            </div>
                            <div className="mt-4 text-[#6FBFFF] text-base xl:text-xl">
                                <div className="flex pt-2 text-center font-bold border-b border-b-[#D9EEFF]">
                                    <h4 className="flex-1 opacity-60">30</h4>
                                    <h4 className="flex-1">60</h4>
                                    <h4 className="flex-1 opacity-60">90</h4>
                                </div>
                                <div className="flex pt-[10px] xl:pt-3 text-center font-bold border-b border-b-[#D9EEFF]">
                                    <h4 className="flex-1 opacity-60">4</h4>
                                    <h4 className="flex-1">8</h4>
                                    <h4 className="flex-1 opacity-60">12</h4>
                                </div>
                                <div className="flex pt-[10px] xl:pt-3 pb-2 text-center font-semibold border-b border-b-[#D9EEFF]">
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6 opacity-60"><img src={check_circle} alt="icon check" /></h4>
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6"><img src={check_circle} alt="icon check" /></h4>
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6 opacity-60"><img src={check_circle} alt="icon check" /></h4>
                                </div>
                                <div className="flex pt-[10px] xl:pt-3 pb-2 text-center font-semibold border-b border-b-[#D9EEFF]">
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6 opacity-60"><img src={check_circle} alt="icon check" /></h4>
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6"><img src={check_circle} alt="icon check" /></h4>
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6 opacity-60"><img src={check_circle} alt="icon check" /></h4>
                                </div>
                                <div className="flex pt-[10px] xl:pt-3 pb-2 text-center font-semibold border-b border-b-[#D9EEFF]">
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6 opacity-60"><img src={check_circle} alt="icon check" /></h4>
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6"><img src={check_circle} alt="icon check" /></h4>
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6 opacity-60"><img src={check_circle} alt="icon check" /></h4>
                                </div>
                                <div className="flex pt-[10px] xl:pt-3 pb-2 text-center font-semibold border-b border-b-[#D9EEFF]">
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6 opacity-60"><img src={check_circle} alt="icon check" /></h4>
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6"><img src={check_circle} alt="icon check" /></h4>
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6 opacity-60"><img src={check_circle} alt="icon check" /></h4>
                                </div>
                                <div className="flex pt-[10px] xl:pt-3 pb-2 text-center font-semibold border-b border-b-[#D9EEFF]">
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6 opacity-60"><img src={check_circle} alt="icon check" /></h4>
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6"><img src={check_circle} alt="icon check" /></h4>
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6 opacity-60"><img src={check_circle} alt="icon check" /></h4>
                                </div>
                                <div className="flex pt-[10px] xl:pt-3 pb-2 text-center font-semibold border-b border-b-[#D9EEFF]">
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6 opacity-60"><img src={check_circle} alt="icon check" /></h4>
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6"><img src={check_circle} alt="icon check" /></h4>
                                    <h4 className="flex justify-center flex-1 lg:h-[20px] xl:h-6 opacity-60"><img src={check_circle} alt="icon check" /></h4>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignPrices