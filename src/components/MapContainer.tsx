import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  LoadScript,
} from "@react-google-maps/api";

interface Bus {
  id: number;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
}

const MapContainer: React.FC = () => {
  const [busLocations, setBusLocations] = useState<Bus[]>([]);
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);

  // Dummy data for demonstration
  const dummyBusLocations: Bus[] = [
    { id: 1, name: "Bus 1", position: { lat: 40.7128, lng: -74.006 } },
    { id: 2, name: "Bus 2", position: { lat: 34.0522, lng: -118.2437 } },
    { id: 3, name: "Bus 3", position: { lat: 41.8781, lng: -87.6298 } },
  ];

  useEffect(() => {
    // Simulate fetching bus locations from API
    // Replace this with actual API call to fetch real-time bus locations
    // setBusLocations(response.data);
    setBusLocations(dummyBusLocations);
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        zoom={10}
        center={{ lat: 40.7128, lng: -74.006 }} // Default center (New York)
      >
        {busLocations.map((bus) => (
          <Marker
            key={bus.id}
            position={bus.position}
            onClick={() => setSelectedBus(bus)}
          />
        ))}

        {selectedBus && (
          <InfoWindow
            position={selectedBus.position}
            onCloseClick={() => setSelectedBus(null)}
          >
            <div>
              <h3>{selectedBus.name}</h3>
              <p>Latitude: {selectedBus.position.lat}</p>
              <p>Longitude: {selectedBus.position.lng}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
