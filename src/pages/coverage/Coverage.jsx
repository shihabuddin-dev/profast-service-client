import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FiSearch } from "react-icons/fi";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import branches from "../../assets/data/districts.json";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const Coverage = () => {
  const [search, setSearch] = useState("");

  const filteredBranches = branches.filter((item) =>
    item.district.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className=" bg-white rounded-xl shadow p-6 space-y-6">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center">
        We are available in <span className="text-[#a4c73a] ">64 </span>
        districts
      </h2>

      {/* Search Box */}
      <div className="flex items-center bg-gray-100 rounded-full px-2 py-1 w-full max-w-md mx-auto">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search district here"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-transparent focus:outline-none flex-grow"
        />
        <button className="btn btn-sm bg-[#CAEB66]  text-black rounded-full px-4">
          Search
        </button>
      </div>

      {/* Subtitle */}
      <h4 className="text-lg font-semibold text-center">
        We deliver almost all over Bangladesh
      </h4>

      {/* Map */}
      <div className="w-full h-[600px] rounded-lg border overflow-hidden z-0">
        <MapContainer
          center={[23.685, 90.3563]}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {filteredBranches.map((branch, i) => (
            <Marker key={i} position={[branch.latitude, branch.longitude]}>
              <Popup>
                <div>
                  <h3 className="font-bold">{branch.city}</h3>
                  <p>
                    <strong>District:</strong> {branch.district}
                  </p>
                  <p>
                    <strong>Region:</strong> {branch.region}
                  </p>
                  <p>
                    <strong>Covered Areas:</strong>
                  </p>
                  <ul className="list-disc pl-4">
                    {branch.covered_area.map((area, idx) => (
                      <li key={idx}>{area}</li>
                    ))}
                  </ul>
                  <a
                    href={branch.flowchart}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 underline text-sm"
                  >
                    View Flowchart
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
