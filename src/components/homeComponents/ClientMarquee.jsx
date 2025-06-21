import React from "react";
import Marquee from "react-fast-marquee";
import casio from "../../assets/brands/casio.png";
import amazon from "../../assets/brands/amazon.png";
import moonstar from "../../assets/brands/moonstar.png";
import starplus from "../../assets/brands/start.png";
import startpeople from "../../assets/brands/start-people 1.png";
import randstad from "../../assets/brands/randstad.png";

const clients = [
  { name: "casio", logo: casio },
  { name: "amazon", logo: amazon },
  { name: "moonstar", logo: moonstar },
  { name: "STAR+", logo: starplus },
  { name: "startpeople", logo: startpeople },
  { name: "randstad", logo: randstad },
];

const ClientMarquee = () => {
  return (
    
      <div>
        <h2 className="text-lg md:text-2xl font-semibold text-center text-[#00464f] mb-6">
          We've helped thousands of sales teams
        </h2>
        <Marquee
          pauseOnHover={true}
          gradient={false}
          speed={40}
          className="py-2"
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center h-12 w-32 flex-shrink-0 mx-6"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </Marquee>
      </div>
  );
};

export default ClientMarquee;
