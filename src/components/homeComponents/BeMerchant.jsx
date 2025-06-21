import merchant from "../../assets/location-merchant.png";
import Button from "../ui/Button";

const BeMerchant = () => {
  return (
    <div
      data-aos="flip-up"
      className="max-w-6xl mx-auto py-12 rounded-2xl px-6 flex flex-col md:flex-row gap-6 justify-center items-center bg-img bg-[#03373D]"
    >
      <div className="max-w-2xl">
        <h2 className="text-3xl md:text-4xl max-w-xl text-white font-bold mb-4">
          Merchant and Customer Satisfaction is Our First Priority
        </h2>
        <p className="text-gray-300 mb-4">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Button variant="round">Become a Merchant</Button>
          <Button variant="outline">Earn with ProFast Courier </Button>
        </div>
      </div>
      <div>
        <img src={merchant} alt="" className="w-[375px]" />
      </div>
    </div>
  );
};

export default BeMerchant;
