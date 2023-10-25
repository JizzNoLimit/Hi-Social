import { our_success_project1, our_success_project2, our_success_project3, our_success_project4, our_success_project5, our_success_project6 } from "../../assets/img/image"

const OurSuccessProject = () => {
    return (
        <div className="relative w-full px-6 lg:px-32 xl:px-0 bg-[#B8E0FF] overflow-hidden">
            <div className="absolute -bottom-[12px] -right-[220px] w-[284px] h-[284px] border-white border-[8px] rounded-full z-0 "></div>
            <div className="absolute -top-[12px] -left-[220px] w-[284px] h-[284px] border-white border-[8px] rounded-full z-0 "></div>
            <div className="relative max-w-[1180px] w-full mx-auto pt-16 pb-10 z-10">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold lg:leading-tight xl:leading-tight text-pb-normal-active">Paid Advertising</h1>
                    <button className="btn-blue lg:px-12 lg:py-2 xl:px-14 xl:py-3 mt-6 lg:mt-7 xl:mt-9 font-bold xl:text-xl rounded-xl">Learn more</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 py-8">
                    <div className="space-y-5 p-4 text-right bg-white rounded-xl lg:rounded-none lg:rounded-tl-xl">
                        <div className="rounded-lg overflow-hidden">
                            <img src={our_success_project1} alt="gambar our success project" />
                        </div>
                        <div className="pb-2 font-bold">
                            <h4>Ice Cream Cake</h4>
                        </div>
                    </div>
                    <div className="space-y-5 p-4 text-right bg-white rounded-xl lg:rounded-none">
                        <div className="rounded-lg overflow-hidden">
                            <img src={our_success_project2} alt="gambar our success project" />
                        </div>
                        <div className="pb-2 font-bold">
                            <h4>Ice Cream Cake</h4>
                        </div>
                    </div>
                    <div className="space-y-5 p-4 text-right bg-white rounded-xl lg:rounded-none lg:rounded-tr-xl">
                        <div className="rounded-lg overflow-hidden">
                            <img src={our_success_project3} alt="gambar our success project" />
                        </div>
                        <div className="pb-2 font-bold">
                            <h4>Ice Cream Cake</h4>
                        </div>
                    </div>
                    <div className="space-y-5 p-4 text-right bg-white rounded-xl lg:rounded-none lg:rounded-bl-xl">
                        <div className="rounded-lg overflow-hidden">
                            <img src={our_success_project4} alt="gambar our success project" />
                        </div>
                        <div className="pb-2 font-bold">
                            <h4>Ice Cream Cake</h4>
                        </div>
                    </div>
                    <div className="space-y-5 p-4 text-right bg-white rounded-xl lg:rounded-none">
                        <div className="rounded-lg overflow-hidden">
                            <img src={our_success_project5} alt="gambar our success project" />
                        </div>
                        <div className="pb-2 font-bold">
                            <h4>Ice Cream Cake</h4>
                        </div>
                    </div>
                    <div className="space-y-5 p-4 text-right bg-white rounded-xl lg:rounded-none lg:rounded-br-xl">
                        <div className="rounded-lg overflow-hidden">
                            <img src={our_success_project6} alt="gambar our success project" />
                        </div>
                        <div className="pb-2 font-bold">
                            <h4>Ice Cream Cake</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurSuccessProject