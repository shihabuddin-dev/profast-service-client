import liveTracking from "../../assets/live-tracking.png";
import support from "../../assets/safe-delivery.png";
import delivery from "../../assets/tiny-deliveryman.png";

const features = [
  {
    img: liveTracking, // Place your image here
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.",
  },
  {
    img: delivery, // Place your image here
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    img: support, // Place your image here
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const ParcelTrackingSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 grid gap-6">
      {features.map((feature, index) => (
        <div
          data-aos="fade-up"
          key={index}
          className="flex items-center md:items-start flex-col md:flex-row  gap-4 bg-white rounded-xl p-6 shadow-sm border border-gray-100"
        >
          <img
            src={feature.img}
            alt={feature.title}
            className="w-24 h-24 object-contain"
          />
          <div className="border-l-2 border-dashed border-gray-200 pl-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ParcelTrackingSection;
