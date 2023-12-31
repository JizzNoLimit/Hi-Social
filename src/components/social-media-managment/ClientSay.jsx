import { client_say1, client_say2, client_say_texture } from "../../assets/img/image"

const ClientSay = () => {
    return (
        <div className="w-full px-6 lg:px-32 xl:px-0 py-20">
            <div className="relative lg:flex gap-6 max-w-[1180px] w-full mx-auto p-8 bg-[#E6F1FA] rounded-2xl overflow-hidden lg:overflow-visible">
                <img src={client_say_texture} className="absolute lg:top-0 lg:bottom-0 right-0 lg:right-0 h-[200px] max-w-none lg:max-w-full lg:h-full z-0" alt="texture" />
                <div className="absolute hidden lg:block -top-[10%] right-[4%] space-y-4">
                    <img src={client_say1} className=" h-[106px] xl:h-auto drop-shadow-[-4px_4px_8px_rgba(0,0,0,0.25)]" alt="gambar client say" />
                    <img src={client_say2} className=" h-[106px] xl:h-auto -translate-x-[60%] drop-shadow-[-4px_4px_8px_rgba(0,0,0,0.25)]" alt="gambar client say" />
                </div>
                <div className="relative flex-[40%] z-10">
                    <h1 className="text-2xl lg:text-4xl xl:text-5xl font-bold lg:leading-tight xl:leading-tight text-pb-normal-active">What our Happy<br/>Client  say.</h1>
                    <p className="mt-4 xl:mt-5 text-lg xl:text-2xl">Recommendations from satisfied costumers that offirm the value of a product or service.</p>
                </div>
                <div className="hidden lg:block flex-[60%]">

                </div>
            </div>
        </div>
    )
}

export default ClientSay