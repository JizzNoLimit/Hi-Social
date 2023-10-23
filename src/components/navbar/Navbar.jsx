import { Link } from "react-router-dom"
import { hi_social } from "../../assets/img/logo"

const Navbar = () => {

    return (
        <nav className="w-full sticky top-0 h-auto px-32 xl:px-0 bg-white drop-shadow-navbar z-50">
            <div className="flex items-center justify-between max-w-[1180px] w-full h-[74px] lg:h-20 xl:h-[100px] mx-auto">
                <img src={hi_social} className="cursor-pointer hidden sm:block md:block xl:block h-12 xl:h-14" />

                <ul className="flex items-center space-x-7 xl:space-x-10">
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
            </div>
        </nav>
    )
}

export default Navbar