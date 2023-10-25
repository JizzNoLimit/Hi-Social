import banner from "../../assets/img/banner-social-media-management.png"

const Banner = () => {
    return (
        <div className="relative w-screen h-[calc(100vh-74px)] lg:h-[calc(100vh-80px)] xl:h-[calc(100vh-100px)] mx-auto">
            <img 
                src={banner}
                className="relative w-full h-full object-cover object-center z-10"
                alt="banner-social-media-management" 
            />
            <div className="absolute left-0 right-0 px-6 lg:px-0 text-left top-[10%] md:top-[16%] font-plus-jakarta-sans md:text-center space-y-4 lg:space-y-6 xl:space-y-9 z-20">
                <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold lg:leading-tight xl:leading-tight text-pb-normal-active">Unlock the Power of Social Media with<br className="hidden md:block"/>Our <span className="text-p-normal">Expert Management Service</span></h1>
                <p className="font-normal text-sm lg:text-base xl:text-xl">Welcome to Hisocial your trusted partner in navigating the dynamic world of social media. We understand that managing<br className="hidden md:block"/> your social media presence can be overwhelming. That's why we're here to offer you a comprehensive Social Media<br className="hidden md:block"/>Management Service that takes your brand to the next level.</p>
                <div>
                    <button className="btn-blue w-full md:w-auto lg:px-14 lg:py-3 xl:px-16 xl:py-4 mt-8 lg:mt-6 xl:mt-8 font-bold xl:text-xl rounded-full lg:rounded-xl">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Banner