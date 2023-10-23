import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"

const LandingPage = ({children}) => {
    return (
        <>
            <Navbar />
            <div className="relative overflow-hidden">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default LandingPage