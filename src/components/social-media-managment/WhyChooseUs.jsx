import { consistent_engagement, content_that_captivates, data_driven_insights, expertise_that_matters, tailored_strategies } from "../../assets/icon/icon"

const WhyChooseUs = () => {
    return (
        <div className="w-full px-32 xl:px-0 py-11">
            <div className="grid grid-cols-2 gap-9 xl:gap-11 max-w-[1180px] w-full mx-auto">
                <div className="flex items-center">
                    <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold lg:leading-tight xl:leading-tight text-pb-normal-active">Why you should <span className="block text-p-normal">choose us?</span></h1>
                </div>
                <div className="h-64 xl:h-[282px] pt-10 px-9 space-y-4  rounded-xl bg-white drop-shadow-card">
                    <div className="flex items-center gap-2 xl:gap-3">
                        <img src={expertise_that_matters} alt="icon" className="w-9" />
                        <h4 className="text-xl xl:text-2xl font-bold">Expertise That Matters</h4>
                    </div>
                    <p className="text-justify">At Hisocial, our team consists of social media experts who live and breathe the digital landscape. We stay ahead of trends, algorithms, and updates to ensure your brand remains relevant and engaging.</p>
                </div>
                <div className="h-64 xl:h-[282px] pt-10 px-9 space-y-4  rounded-xl bg-white drop-shadow-card">
                    <div className="flex items-center gap-2 xl:gap-3">
                        <img src={tailored_strategies} alt="icon" className="w-9" />
                        <h4 className="text-xl xl:text-2xl font-bold">Tailored Strategies</h4>
                    </div>
                    <p className="text-justify">We know that one size doesn't fit all. We'll craft a customized social media strategy to meet your unique goals and objectives. Whether it's increasing brand awareness, driving leads, or boosting sales, we've got you covered.</p>
                </div>
                <div className="h-64 xl:h-[282px] pt-10 px-9 space-y-4  rounded-xl bg-white drop-shadow-card">
                    <div className="flex items-center gap-2 xl:gap-3">
                        <img src={content_that_captivates} alt="icon" className="w-9" />
                        <h4 className="text-xl xl:text-2xl font-bold">Content That Captivates</h4>
                    </div>
                    <p className="text-justify">Our skilled content creators know how to craft compelling, shareable content that resonates with your target audience. From eye-catching visuals to engaging captions, we'll make sure your brand shines.</p>
                </div>
                <div className="h-64 xl:h-[282px] pt-10 px-9 space-y-4  rounded-xl bg-white drop-shadow-card">
                    <div className="flex items-center gap-2 xl:gap-3">
                        <img src={consistent_engagement} alt="icon" className="w-9" />
                        <h4 className="text-xl xl:text-2xl font-bold">Consistent Engagement</h4>
                    </div>
                    <p className="text-justify">Social media is all about being social! We'll engage with your followers, respond to comments, and foster a community around your brand, increasing loyalty and trust.</p>
                </div>
                <div className="h-64 xl:h-[282px] pt-10 px-9 space-y-4  rounded-xl bg-white drop-shadow-card">
                    <div className="flex items-center gap-2 xl:gap-3">
                        <img src={data_driven_insights} alt="icon" className="w-9" />
                        <h4 className="text-xl xl:text-2xl font-bold">Data-Driven Insights</h4>
                    </div>
                    <p className="text-justify">We don't guess; we measure. Our data analysts will provide you with regular reports, allowing you to see the impact of our efforts and make informed decisions.</p>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs