import React from "react";
import {
  FaShippingFast,
  FaMapMarkedAlt,
  FaWarehouse,
  FaMoneyBillWave,
  FaHandshake,
  FaUndoAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaShippingFast className="text-3xl text-[#00464f] mx-auto mb-4" />,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery possible in Dhaka within 4–6 hours from a pick-up spot.",
  },
  {
    icon: <FaMapMarkedAlt className="text-3xl text-[#00464f] mx-auto mb-4" />,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    highlight: true,
  },
  {
    icon: <FaWarehouse className="text-3xl text-[#00464f] mx-auto mb-4" />,
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, order and sales processing, packaging, and other value support.",
  },
  {
    icon: <FaMoneyBillWave className="text-3xl text-[#00464f] mx-auto mb-4" />,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery everywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    icon: <FaHandshake className="text-3xl text-[#00464f] mx-auto mb-4" />,
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customer and corporate services which includes warehouse and inventory management support.",
  },
  {
    icon: <FaUndoAlt className="text-3xl text-[#00464f] mx-auto mb-4" />,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers/vendors to exchange their products with online business merchants.",
  },
];

const Services = () => {
  return (
    <section className="bg-[#00464f] py-10 px-6 rounded-3xl">
      <div className="max-w-7xl mx-auto text-white text-center">
        <h2 className="text-3xl font-semibold mb-3">Our Services</h2>
        <p className="text-sm text-gray-200 max-w-2xl mx-auto mb-10">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              key={index}
              className=" rounded-2xl p-6 text-left 
                bg-white hover:bg-lime-200 transition-all duration-300"
            >
              .{service.icon}
              <h3 className="text-[#00464f] font-semibold text-base md:text-xl mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
