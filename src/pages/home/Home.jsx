import Banner from "../../components/homeComponents/Banner";
import BeMerchant from "../../components/homeComponents/BeMerchant";
import ClientMarquee from "../../components/homeComponents/ClientMarquee";
import Faq from "../../components/homeComponents/Faq";
import HowItWorks from "../../components/homeComponents/HowItWorks";
import Hr from "../../components/homeComponents/Hr";
import ParcelTrackingSection from "../../components/homeComponents/ParcelTrackingSection";
import Services from "../../components/homeComponents/Services";
import WhatOurCustomerSaid from "../../components/homeComponents/WhatOurCustomerSaid";

const Home = () => {
  return (
    <div className="space-y-16 md:space-y-26">
      <Banner />
      <HowItWorks />
      <Services />
      <ClientMarquee />
      <Hr />
      <ParcelTrackingSection />
      <BeMerchant />
      <WhatOurCustomerSaid />
      <Faq />
    </div>
  );
};

export default Home;
