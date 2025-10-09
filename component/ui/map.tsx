"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon (supaya icon tampil benar)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function MapComponent() {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md border border-green-200">
      <MapContainer
        center={[-2.5489, 118.0149]} // Koordinat tengah Indonesia
        zoom={5}
        scrollWheelZoom={true}
        className="w-full h-full rounded-2xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Contoh marker */}
        <Marker position={[-6.2, 106.8]}>
          <Popup>Jakarta - UMKM Center</Popup>
        </Marker>

        <Marker position={[-7.25, 112.75]}>
          <Popup>Surabaya - UMKM Kreatif</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
