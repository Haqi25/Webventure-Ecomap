import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Star, Leaf, MapPin } from 'lucide-react';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom marker icon
const createCustomIcon = (sustainabilityScore) => {
  const color = sustainabilityScore >= 90 ? '#8FEC78' : 
                sustainabilityScore >= 80 ? '#81DD67' : 
                sustainabilityScore >= 70 ? '#F59E0B' : '#EF4444';
  
  return L.divIcon({
    html: `<div style="
      background-color: ${color}; 
      width: 24px; 
      height: 24px; 
      border-radius: 50%; 
      border: 3px solid white; 
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      font-size: 12px;
    ">${sustainabilityScore}</div>`,
    className: 'custom-marker-icon',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15]
  });
};

const MapController = ({ searchFilters, businesses }) => {
  const map = useMap();
  
  useEffect(() => {
    if (businesses.length > 0) {
      const group = new L.featureGroup(
        businesses.map(business => L.marker([business.coordinates.lat, business.coordinates.lng]))
      );
      map.fitBounds(group.getBounds().pad(0.1));
    }
  }, [businesses, map]);
  
  return null;
};

const InteractiveMap = ({ businesses = [], searchFilters = {}, onMarkerClick }) => {
  const [mapCenter] = useState([-6.2088, 106.8456]); // Jakarta center
  const [mapZoom] = useState(11);

  const filteredBusinesses = businesses.filter(business => {
    if (searchFilters.category && searchFilters.category !== 'All Categories' && 
        business.category !== searchFilters.category) return false;
    if (searchFilters.location && searchFilters.location !== 'All Locations' && 
        !business.location.includes(searchFilters.location.replace(' ', ''))) return false;
    if (searchFilters.minSustainabilityScore && 
        business.sustainabilityScore < searchFilters.minSustainabilityScore) return false;
    return true;
  });

  return (
    <div className="w-full h-full relative">
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '100%', width: '100%', borderRadius: '16px' }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {filteredBusinesses.map((business) => (
          <Marker
            key={business.id}
            position={[business.coordinates.lat, business.coordinates.lng]}
            icon={createCustomIcon(business.sustainabilityScore)}
            eventHandlers={{
              click: () => onMarkerClick && onMarkerClick(business)
            }}
          >
            <Popup>
              <div className="p-2 min-w-[200px]">
                <div className="flex items-start space-x-3">
                  <img
                    src={business.image}
                    alt={business.name}
                    className="w-16 h-12 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm text-[var(--text-primary)]">
                      {business.name}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] mb-1">
                      {business.category}
                    </p>
                    <div className="flex items-center space-x-2 text-xs">
                      <div className="flex items-center space-x-1">
                        <Star size={12} fill="currentColor" className="text-yellow-400" />
                        <span className="font-medium">{business.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Leaf size={12} className="text-[var(--accent-primary)]" />
                        <span className="font-medium text-[var(--accent-text)]">
                          {business.sustainabilityScore}%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 mt-1 text-xs text-[var(--text-muted)]">
                      <MapPin size={10} />
                      <span>{business.location}</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onMarkerClick && onMarkerClick(business)}
                  className="w-full mt-2 bg-[var(--accent-primary)] text-white text-xs py-1 px-2 rounded-full hover:bg-[var(--accent-strong)] transition-colors"
                >
                  View Details
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
        
        <MapController searchFilters={searchFilters} businesses={filteredBusinesses} />
      </MapContainer>
      
      {/* Map Controls */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-md p-2 z-[1000]">
        <div className="text-xs text-[var(--text-muted)] mb-1">Legend</div>
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-3 bg-[#8FEC78] rounded-full border border-white"></div>
            <span>90%+ Sustainable</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-3 bg-[#81DD67] rounded-full border border-white"></div>
            <span>80-89% Sustainable</span>
          </div>
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-3 h-3 bg-[#F59E0B] rounded-full border border-white"></div>
            <span>70-79% Sustainable</span>
          </div>
        </div>
      </div>
      
      {/* Business count indicator */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md px-3 py-2 z-[1000]">
        <div className="text-xs text-[var(--text-muted)]">Showing</div>
        <div className="text-sm font-semibold text-[var(--text-primary)]">
          {filteredBusinesses.length} businesses
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;