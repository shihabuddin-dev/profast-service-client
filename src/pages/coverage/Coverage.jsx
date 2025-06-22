// components/Coverage.jsx
import { useLoaderData } from "react-router";
import { useState } from "react";
import BangladeshMap from "../../components/bangladeshMap/BangladeshMap";

const Coverage = () => {
  const serviceCenters = useLoaderData();
  const [searchText, setSearchText] = useState("");
  const [activeCoords, setActiveCoords] = useState(null);
  const [activeDistrict, setActiveDistrict] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const district = serviceCenters.find((d) =>
      d.district.toLowerCase().includes(searchText.toLowerCase())
    );
    if (district) {
      setActiveCoords([district.latitude, district.longitude]);
      setActiveDistrict(district.district);
    }
  };

  return (
    <div className=" bg-white rounded-2xl shadow-md p-6 space-y-6">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800">
        We are available in <span className="text-[#9fc52e]">64 </span>districts
      </h2>

      {/* Search Box */}
      <form
        onSubmit={handleSearch}
        className="w-full max-w-md mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0 lg:bg-gray-100 rounded-full px-4 py-2 lg:shadow-sm"
      >
        <input
          type="text"
          placeholder="Search district here"
          className="w-full px-1 py-0 bg-transparent focus:outline-none text-gray-700 rounded-full sm:rounded-none sm:rounded-l-full border border-gray-300 sm:border-none"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          type="submit"
          className="w-full sm:w-auto btn btn-sm bg-[#CAEB66] text-black px-5 py-2 rounded-full sm:rounded-r-full"
        >
          Search
        </button>
      </form>

      <p className="text-xl font-semibold text-center">
        We deliver almost all over Bangladesh
      </p>

      {/* Map Component */}
      <BangladeshMap
        serviceCenters={serviceCenters}
        activeCoords={activeCoords}
        activeDistrict={activeDistrict}
      />
    </div>
  );
};

export default Coverage;
