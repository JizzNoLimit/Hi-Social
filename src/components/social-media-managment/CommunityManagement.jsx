import { community_managment1, community_managment2, community_managment3 } from "../../assets/img/image"

const CommunityManagement = () => {
    return (
        <div className="px-6 lg:px-32 xl:px-0">
            <div className="flex items-center max-w-[1180px] w-full mx-auto py-10">
                <div className="flex items-center gap-8 w-full bg-[#B9E0FF] px-6 md:px-8 py-8 rounded-xl">
                    <div className="hidden lg:grid grid-cols-2 gap-4 flex-[42%]">
                        <img src={community_managment1} className="drop-shadow-[7px_4px_10px_rgba(0,0,0,0.25)]" alt="gambar community management" />
                        <img src={community_managment2} className="drop-shadow-[7px_4px_10px_rgba(0,0,0,0.25)]" alt="gambar community management" />
                        <img src={community_managment3} className="drop-shadow-[7px_4px_10px_rgba(0,0,0,0.25)] col-span-2" alt="gambar community management" />
                    </div>
                    <div className="flex-[58%] text-left md:text-right lg:pr-4">
                        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold lg:leading-tight xl:leading-tight text-pb-normal-active">
                            Community Management
                        </h1>
                        <p className="mt-4 xl:mt-5 text-lg xl:text-2xl lg:pl-16">Our talented content creators will design eye-catching visuals and craft engaging copy that resonates with your audience.</p>
                        <button className="btn-blue w-full md:w-auto lg:px-12 lg:py-2 xl:px-14 xl:py-3 mt-6 lg:mt-8 xl:mt-10 font-bold xl:text-xl rounded-xl">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunityManagement