import React from "react";
import {
  FaTruckLoading,
  FaMoneyCheckAlt,
  FaWarehouse,
  FaBuilding,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaTruckLoading className="text-3xl text-[#00464f]" />,
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <FaMoneyCheckAlt className="text-3xl text-[#00464f]" />,
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <FaWarehouse className="text-3xl text-[#00464f]" />,
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    icon: <FaBuilding className="text-3xl text-[#00464f]" />,
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#edf1f2] py-10 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#00464f] mb-8">How it Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
            data-aos="fade-up"
              key={idx}
              className="bg-white hover:bg-lime-200 rounded-2xl p-6 flex flex-col items-start text-left shadow-sm hover:shadow-md transition"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-base md:text-xl font-semibold text-[#00464f] mb-1">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
