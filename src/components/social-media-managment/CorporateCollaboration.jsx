import { LogoEduwork, LogoElvron, LogoSisko, LogoUpscale } from "../../assets/img/logo"


const CorporateCollaboration = () => {
    
    return (
        <div className="relative w-full h-64 xl:h-[260px] bg-p-dark-hover overflow-hidden">
            <div className="absolute top-0 left-0 w-[1640px] h-[820px] xl:w-[1899px] xl:h-[949px] rounded-[50%] bg-[#005699] z-10"></div>
            <div className="relative flex flex-col justify-center w-full h-full text-center space-y-8 z-20 text-white">
                <p className="xl:text-xl">We Have Collaborated With Companies And Educational Agencies.</p>
                <div className="flex justify-center space-x-8">
                    <img src={LogoElvron} alt={"logo elvron"} />
                    <img src={LogoEduwork} alt={"logo eduwork"} />
                    <img src={LogoUpscale} alt={"logo upscale"} />
                    <img src={LogoSisko} alt={"logo sisko"} />
                </div>
            </div>
        </div>
    )
}

export default CorporateCollaboration