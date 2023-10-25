import DesignPrices from "../../../components/design-prices/DesignPrices"
import AnalyticReporting from "../../../components/social-media-managment/AnalyticReporting"
import Banner from "../../../components/social-media-managment/Banner"
import ClientSay from "../../../components/social-media-managment/ClientSay"
import CommunityManagement from "../../../components/social-media-managment/CommunityManagement"
import ContentCreation from "../../../components/social-media-managment/ContenCreation"
import CorporateCollaboration from "../../../components/social-media-managment/CorporateCollaboration"
import OurSuccessProject from "../../../components/social-media-managment/OurSucsessProject"
import PaidAdvertising from "../../../components/social-media-managment/PaidAdvertising"
import SocialMediaStrategy from "../../../components/social-media-managment/SocialMediaStrategy"
import WhyChooseUs from "../../../components/social-media-managment/WhyChooseUs"
import TransformYourBrand from "../../../components/transform-your-brand/TransformYourBrand"
import LandingPage from "../../../layouts/LandingPage"

const SocialMediaManagement = () => {
    return (
        <LandingPage>
            <>
                <Banner />
                <CorporateCollaboration />
                <WhyChooseUs />
                <div className="w-full lg:mt-14 lg:pt-28">
                    <SocialMediaStrategy />
                    <ContentCreation />
                    <CommunityManagement />
                    <PaidAdvertising />
                    <AnalyticReporting />
                </div>
                <OurSuccessProject />
                <ClientSay />
                <DesignPrices />
                <TransformYourBrand />
            </>
        </LandingPage>
    )
}

export default SocialMediaManagement