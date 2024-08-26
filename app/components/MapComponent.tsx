"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { SearchResultData } from "../Types/app";
import { getCenter } from "geolib";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapComponent = ({
  searchResultData,
}: {
  searchResultData: SearchResultData;
}) => {
  const coordinates = searchResultData.map((listing) => ({
    longitude: listing.long,
    latitude: listing.lat,
  }));
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });

  const center = getCenter(coordinates) as {
    longitude: number;
    latitude: number;
  };
  return (
    <MapContainer
      center={[center.latitude, center.longitude]}
      zoom={11}
      style={{ width: "100%", height: "100%",  zIndex:'0'}}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {searchResultData.map((listing) => (
        <Marker key={listing.title} position={[listing.lat, listing.long]}>
          <Popup>{listing.location}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
