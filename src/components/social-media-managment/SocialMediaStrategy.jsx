import { 
    social_media_strategy_1, 
    social_media_strategy_2, 
    social_media_strategy_3, 
    social_media_strategy_4 
} from "../../assets/img/image"

const SocialMediaStrategy = () => {
    return (    
        <div className="px-6 md:px-32 xl:px-0">
            <div className="flex flex-col md:flex-row items-center gap-6 max-w-[1180px] w-full mx-auto py-10">
                <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4 flex-1">
                    <img src={social_media_strategy_1} alt="social media stategi image" />
                    <img src={social_media_strategy_2} alt="social media stategi image" />
                    <img src={social_media_strategy_3} alt="social media stategi image" />
                    <img src={social_media_strategy_4} alt="social media stategi image" />
                </div>
                <div className="flex-1 text-left md:text-right">
                    <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold lg:leading-tight xl:leading-tight text-pb-normal-active">Social Media Strategy</h1>
                    <p className="mt-4 xl:mt-5 lg:pl-8 text-lg xl:text-2xl">We'll work closely with you to develop a comprehensive social media strategy aligned with your business objectives.</p>
                    <button className="btn-blue w-full md:w-auto lg:px-12 lg:py-2 xl:px-14 xl:py-3 mt-8 lg:mt-11 xl:mt-11 font-bold xl:text-xl rounded-xl">Learn more</button>
                </div>
            </div>
        </div>    
    )
}

export default SocialMediaStrategy