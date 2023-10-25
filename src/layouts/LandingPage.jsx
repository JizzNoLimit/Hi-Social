import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"

const LandingPage = ({children}) => {
    return (
        <div className="relative">
            <Navbar />
            <div className="relative overflow-hidden">
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage