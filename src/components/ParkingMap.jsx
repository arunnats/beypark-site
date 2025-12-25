import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ref, onValue } from "firebase/database";
import { db } from "../helpers/Firebase";

const getStatusColor = (occupied, capacity) => {
  if (!capacity || capacity === 0) return "text-gray-500";
  const percentage = (occupied / capacity) * 100;

  if (percentage >= 90) return "text-red-600";
  if (percentage >= 70) return "text-amber-500";
  return "text-green-600";
};

function MapController({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, 16, { duration: 1.5 });
    }
  }, [center, map]);
  return null;
}

function CustomZoomControl() {
  const map = useMap();

  return (
    <div className="absolute top-4 right-4 z-[400] flex flex-col bg-white border-[2.5px] border-black rounded-lg shadow-sm overflow-hidden">
      <button
        onClick={() => map.zoomIn()}
        className="p-2 hover:bg-gray-100 border-b-[2.5px] border-black transition-colors flex items-center justify-center w-9 h-9"
        aria-label="Zoom In"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>

      <button
        onClick={() => map.zoomOut()}
        className="p-2 hover:bg-gray-100 transition-colors flex items-center justify-center w-9 h-9"
        aria-label="Zoom Out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
        </svg>
      </button>
    </div>
  );
}

const parkingIcon = L.divIcon({
  className: "custom-parking-icon",
  html: `
    <div style="
      background-color: black; 
      color: white; 
      width: 36px; 
      height: 36px; 
      border-radius: 8px; 
      display: flex; 
      align-items: center; 
      justify-content: center;
      border: 2px solid white;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
    ">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>
      </svg>
    </div>
  `,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -40],
});

export default function ParkingMap() {
  const [isOpen, setIsOpen] = useState(false);
  const [locations, setLocations] = useState([]);
  const [mapCenter, setMapCenter] = useState([11.2588, 75.7804]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lotsRef = ref(db, "/locations");

    const unsubscribe = onValue(lotsRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;

      const validLots = [];
      let totalLat = 0;
      let totalLng = 0;

      Object.keys(data).forEach((deviceId) => {
        const device = data[deviceId];
        if (device.config && device.config.parking_lots) {
          Object.keys(device.config.parking_lots).forEach((lotId) => {
            const config = device.config.parking_lots[lotId];
            const live = device.live_status?.[lotId]?.occupancy || {};

            if (config.master_node === undefined) {
              const lat = parseFloat(config.lat);
              const lng = parseFloat(config.long);

              if (!isNaN(lat) && !isNaN(lng)) {
                // Extract combined flag and relevant capacities
                const capacities = config.capacities || {};
                const combined = capacities.combined === true;
                let lotData = {
                  id: `${deviceId}_${lotId}`,
                  name: config.display_name || lotId,
                  lat: lat,
                  lng: lng,
                  combined: combined,
                };
                if (combined) {
                  lotData.cap_total = capacities.total || 0;
                  lotData.occ_total = live.net_occupancy || 0;
                } else {
                  lotData.cap_car = capacities.car || 0;
                  lotData.cap_bike = capacities.bike || 0;
                  lotData.occ_car = live.car_occupancy || 0;
                  lotData.occ_bike = live.bike_occupancy || 0;
                }

                validLots.push(lotData);
                totalLat += lat;
                totalLng += lng;
              }
            }
          });
        }
      });

      setLocations(validLots);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="relative w-full h-[50vh] md:h-[60vh] mt-2 rounded-xl border-[3px] border-black overflow-hidden shadow-sm bg-gray-100 z-0">
      <div
        className={`absolute top-4 left-4 z-[1000] bg-white border-[2.5px] border-black rounded-lg shadow-xl overflow-hidden transition-all duration-300 ease-in-out flex flex-col ${
          isOpen ? "max-h-[300px] w-56" : "max-h-[38px] w-36"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-1.5 bg-white hover:bg-gray-50 transition-colors shrink-0"
        >
          <span className="font-bold text-sm">Locations</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-4 h-4 ml-2 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>

        <div className="flex flex-col px-1 pb-2 overflow-y-auto custom-scrollbar">
          {locations.map((loc) => (
            <button
              key={loc.id}
              className="text-left px-3 py-2 text-sm font-medium hover:bg-gray-100 rounded-md transition-colors truncate border-b last:border-0 border-gray-100"
              onClick={() => {
                setMapCenter([loc.lat, loc.lng]);
                setIsOpen(false);
              }}
            >
              {loc.name}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-200 animate-pulse">
          <p className="text-gray-500 font-bold">Loading Live Map...</p>
        </div>
      ) : (
        <MapContainer
          center={mapCenter}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
          zoomControl={false}
        >
          <TileLayer
            attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapController center={mapCenter} />

          <CustomZoomControl />

          {locations.map((loc) => {
            if (loc.combined) {
              const totalAvailable = Math.max(0, (loc.cap_total || 0) - (loc.occ_total || 0));
              return (
                <Marker
                  key={loc.id}
                  position={[loc.lat, loc.lng]}
                  icon={parkingIcon}
                >
                  <Popup className="font-poppins min-w-[200px]">
                    <div className="p-1">
                      <h3 className="font-extrabold text-lg mb-2 border-b pb-1">
                        {loc.name}
                      </h3>
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-bold text-gray-700">
                            Total Slots:
                          </span>
                          <span
                            className={`font-bold ${getStatusColor(
                              loc.occ_total || 0,
                              loc.cap_total || 0
                            )}`}
                          >
                            {totalAvailable}{" "}
                            <span className="text-black font-normal">
                              / {loc.cap_total || 0}
                            </span>
                          </span>
                        </div>
                      </div>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-black text-white text-xs font-bold py-2 rounded hover:bg-gray-800 transition-colors"
                      >
                        Get Directions
                      </a>
                    </div>
                  </Popup>
                </Marker>
              );
            } else {
              const carAvailable = Math.max(0, (loc.cap_car || 0) - (loc.occ_car || 0));
              const bikeAvailable = Math.max(0, (loc.cap_bike || 0) - (loc.occ_bike || 0));
              return (
                <Marker
                  key={loc.id}
                  position={[loc.lat, loc.lng]}
                  icon={parkingIcon}
                >
                  <Popup className="font-poppins min-w-[200px]">
                    <div className="p-1">
                      <h3 className="font-extrabold text-lg mb-2 border-b pb-1">
                        {loc.name}
                      </h3>
                      <div className="space-y-2 mb-3">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-bold text-gray-700">
                            Car Slots:
                          </span>
                          <span
                            className={`font-bold ${getStatusColor(
                              loc.occ_car || 0,
                              loc.cap_car || 0
                            )}`}
                          >
                            {carAvailable}{" "}
                            <span className="text-black font-normal">
                              / {loc.cap_car || 0}
                            </span>
                          </span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-bold text-gray-700">
                            Bike Slots:
                          </span>
                          <span
                            className={`font-bold ${getStatusColor(
                              loc.occ_bike || 0,
                              loc.cap_bike || 0
                            )}`}
                          >
                            {bikeAvailable}{" "}
                            <span className="text-black font-normal">
                              / {loc.cap_bike || 0}
                            </span>
                          </span>
                        </div>
                      </div>
                      <a
                        href={`https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-black text-white text-xs font-bold py-2 rounded hover:bg-gray-800 transition-colors"
                      >
                        Get Directions
                      </a>
                    </div>
                  </Popup>
                </Marker>
              );
            }
          })}
        </MapContainer>
      )}
    </div>
  );
}
