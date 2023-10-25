import { paid_advertising } from "../../assets/img/image"

const PaidAdvertising = () => {
    return (
        <div className="px-6 lg:px-32 xl:px-0">
            <div className="relative max-w-[1180px] w-full mx-auto py-10">
                <div className="relative flex justify-center items-center">
                    <div className="lg:absolute lg:w-[65%] lg:h-[84%] lg:top-[50%] lg:bottom-[50%] lg:left-0 lg:right-0 px-6 lg:px-10 py-8 lg:py-8 bg-white border z-10 lg:-translate-y-[50%] rounded-xl lg:rounded-none">
                        <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold lg:leading-tight xl:leading-tight text-pb-normal-active">Paid Advertising</h1>
                        <p className="mt-4 xl:mt-5 text-lg xl:text-2xl">Boost your reach and drive conversions with our targeted social media advertising campaigns.</p>
                        <button className="btn-blue w-full md:w-auto lg:px-12 lg:py-2 xl:px-14 xl:py-3 mt-8 lg:mt-7 xl:mt-9 font-bold xl:text-xl rounded-xl">Learn more</button>
                    </div>
                    <div className="relative flex-1 w-full">
                    </div>
                    <div className="relative hidden lg:block flex-1 rounded-xl overflow-hidden">
                        <img src={paid_advertising} alt="gambar paid advertising" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaidAdvertising