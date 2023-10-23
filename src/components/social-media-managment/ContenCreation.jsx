import { content_creation_bg, content_creation_phone1, content_creation_phone2 } from "../../assets/img/image"

const ContentCreation = () => {
    return (
        <div className="px-32 xl:px-0">
            <div className="flex gap-6 items-center max-w-[1180px] w-full mx-auto py-10">
                <div className="flex-[38%]">
                    <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold lg:leading-tight xl:leading-tight text-pb-normal-active">Content Creation</h1>
                    <p className="mt-4 xl:mt-5 text-lg xl:text-2xl">Our talented content creators will design eye-catching visuals and craft engaging copy that resonates with your audience.</p>
                    <button className="btn-blue lg:px-12 lg:py-2 xl:px-14 xl:py-3 lg:mt-11 xl:mt-11 font-bold xl:text-xl rounded-xl">Learn more</button>
                </div>
                <div className="relative flex-[62%]">
                    <img src={content_creation_bg} className="relative" alt="conten creation image" />
                    <img 
                        src={content_creation_phone1}
                        className="absolute top-0 lg:left-[23%] xl:left-[20%] w-[182px] xl:w-auto drop-shadow-[-11px_6px_12px_rgba(0,0,0,0.27)] z-10" 
                        alt="conten creation image" 
                    />
                    <img 
                        src={content_creation_phone2} 
                        className="absolute bottom-0 lg:right-[14%] xl:right-[20%] w-[182px] xl:w-auto drop-shadow-[-11px_6px_12px_rgba(0,0,0,0.27)] z-10" 
                        alt="conten creation image" 
                    />
                </div>
            </div>
        </div>
    )
}

export default ContentCreation