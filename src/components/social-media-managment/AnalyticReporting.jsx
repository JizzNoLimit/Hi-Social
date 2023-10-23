import { analytic_and_reporting } from "../../assets/img/image"

const AnalyticReporting = () => {
    return (
        <div className="px-32 xl:px-0">
            <div className="flex items-center max-w-[1180px] w-full mx-auto py-10">
                <div className="flex-1">
                    <img 
                        src={analytic_and_reporting}
                        className="h-[518px] xl:h-[548px]"
                        alt="gambar analytic and reporting" 
                    />
                </div>
                <div className="flex-1 text-right pb-28">
                    <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold lg:leading-tight xl:leading-tight text-pb-normal-active">Analytics and Reporting</h1>
                    <p className="mt-4 xl:mt-5 text-lg xl:text-2xl">Access valuable insights into your social media performance, allowing you to make data-driven decisions.</p>
                    <button className="btn-blue lg:px-12 lg:py-2 xl:px-14 xl:py-3 lg:mt-7 xl:mt-9 font-bold xl:text-xl rounded-xl">Learn more</button>
                </div>
            </div>
        </div>
    )
}

export default AnalyticReporting