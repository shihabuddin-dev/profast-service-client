// components/BangladeshMap.jsx
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const position = [23.6850, 90.3563]; // Center of Bangladesh

const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function FlyToDistrict({ coords }) {
  const map = useMap();
  if (coords) {
    map.flyTo(coords, 14, { duration: 1.5 });
  }
  return null;
}
const BangladeshMap = ({ serviceCenters, activeCoords, activeDistrict }) => {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-gray-200 shadow-md z-0 h-72 sm:h-96 md:h-[500px] lg:h-[700px]">
      <MapContainer center={position} zoom={8} scrollWheelZoom={true} className="h-full w-full z-0">
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FlyToDistrict coords={activeCoords} />

        {serviceCenters.map((center, index) => (
          <Marker
            key={index}
            position={[center.latitude, center.longitude]}
            icon={customIcon}
          >
            <Popup autoOpen={center.district === activeDistrict}>
              <div>
                <h3 className="font-bold">{center.district}</h3>
                <p>{center.covered_area.join(', ')}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
