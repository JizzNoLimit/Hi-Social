import { paid_advertising } from "../../assets/img/image"

const PaidAdvertising = () => {
    return (
        <div className="px-32 xl:px-0">
            <div className="relative max-w-[1180px] w-full mx-auto py-10">
                <div className="relative flex justify-center items-center">
                    <div className="absolute w-[65%] h-[84%] top-[50%] bottom-[50%] left-0 right-0 px-10 py-8 bg-white border z-10 -translate-y-[50%]">
                        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold lg:leading-tight xl:leading-tight text-pb-normal-active">Paid Advertising</h1>
                        <p className="mt-4 xl:mt-5 text-lg xl:text-2xl">Boost your reach and drive conversions with our targeted social media advertising campaigns.</p>
                        <button className="btn-blue lg:px-12 lg:py-2 xl:px-14 xl:py-3 lg:mt-7 xl:mt-9 font-bold xl:text-xl rounded-xl">Learn more</button>
                    </div>
                    <div className="relative flex-1 w-full">
                    </div>
                    <div className="relative flex-1 rounded-xl overflow-hidden">
                        <img src={paid_advertising} alt="gambar paid advertising" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaidAdvertising