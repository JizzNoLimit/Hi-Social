import { Link } from "react-router-dom"
import { hi_social } from "../../assets/img/logo"
import { useState } from "react"

const Navbar = () => {

    const [togleMenu, setTogleMenu] = useState(false)

    return (
        <>
        <nav className="w-full sticky top-0 h-auto px-6 lg:px-32 xl:px-0 bg-white drop-shadow-navbar z-50">
            <div className="relative flex items-center justify-between max-w-[1180px] w-full h-[74px] lg:h-20 xl:h-[100px] mx-auto z-50">
                <img src={hi_social} className="cursor-pointer h-11 lg:h-12 xl:h-14" />

                <ul className="hidden lg:flex items-center space-x-7 xl:space-x-10">
                    <li className=" hover:text-gray-400">
                        <Link to="/" onClick={() => (window.location.href = "#top")}>
                        Home
                        </Link>
                    </li>
                    <li className=" hover:text-gray-400">
                        <Link to="/service" onClick={() => (window.location.href = "#top")}>
                        Service
                        </Link>
                    </li>
                    <li className=" hover:text-gray-400">
                        <Link to="/service" onClick={() => (window.location.href = "#top")}>
                        Portofolio
                        </Link>
                    </li>
                    <li className=" hover:text-gray-400">
                        <Link to="/service" onClick={() => (window.location.href = "#top")}>
                        About Us
                        </Link>
                    </li>
                    <li className=" hover:text-gray-400">
                        <Link to="/service" onClick={() => (window.location.href = "#top")}>
                            <button className="btn-blue ml-6 rounded-full">Contact Us</button>
                        </Link>
                    </li>
                </ul>
                <button 
                    className="lg:hidden"
                    onClick={() => setTogleMenu(!togleMenu)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </nav>
            <div className={`fixed w-screen h-[calc(100vh-74px)] lg:hidden left-0 right-0 ${togleMenu ? 'top-[74px] opacity-100' : '-top-[100vh] opacity-30'} px-6 py-8 bg-white z-40 transition-all duration-700`}>
                <ul className="font-bold space-y-2">
                    <li className="pb-2 hover:text-gray-400 border-b border-b-white hover:border-b-gray-300">
                        <Link to="/" onClick={() => (window.location.href = "#top")}>
                            Home
                        </Link>
                    </li>
                    <li className="pb-2 hover:text-gray-400 border-b border-b-white hover:border-b-gray-300">
                        <Link to="/service" onClick={() => (window.location.href = "#top")}>
                            Service
                        </Link>
                    </li>
                    <li className="pb-2 hover:text-gray-400 border-b border-b-white hover:border-b-gray-300">
                        <Link to="/service" onClick={() => (window.location.href = "#top")}>
                            Portofolio
                        </Link>
                    </li>
                    <li className="pb-2 hover:text-gray-400 border-b border-b-white hover:border-b-gray-300">
                        <Link to="/service" onClick={() => (window.location.href = "#top")}>
                            About Us
                        </Link>
                    </li>
                    <li className="pt-9 hover:text-gray-400">
                        <Link to="/service" onClick={() => (window.location.href = "#top")}>
                            <button className="btn-blue w-full sm:w-auto rounded-full">Contact Us</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar