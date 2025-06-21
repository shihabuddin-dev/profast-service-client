import Banner from "../../components/homeComponents/Banner";
import BeMerchant from "../../components/homeComponents/BeMerchant";
import ClientMarquee from "../../components/homeComponents/ClientMarquee";
import HowItWorks from "../../components/homeComponents/HowItWorks";
import Hr from "../../components/homeComponents/Hr";
import ParcelTrackingSection from "../../components/homeComponents/ParcelTrackingSection";
import Services from "../../components/homeComponents/Services";

const Home = () => {
  return (
    <div className="space-y-8 md:space-y-12">
      <Banner />
      <HowItWorks />
      <Services />
      <ClientMarquee />
      <Hr />
      <ParcelTrackingSection />
      <BeMerchant />

      {/* <SalesTeams/> */}
    </div>
  );
};

export default Home;
