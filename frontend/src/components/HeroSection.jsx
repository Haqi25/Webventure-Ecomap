import { useState } from 'react';
import { Search, MapPin, Leaf } from 'lucide-react';
import { mockCategories, mockLocations, mockUMKMs } from '../data/mock';
import InteractiveMap from './InteractiveMap';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [sustainabilityScore, setSustainabilityScore] = useState(70);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const searchFilters = {
    searchTerm,
    category: selectedCategory,
    location: selectedLocation,
    minSustainabilityScore: sustainabilityScore
  };

  const handleSearch = () => {
    console.log('Searching with:', searchFilters);
    // Mock search functionality - will be connected to backend later
    const filteredBusinesses = mockUMKMs.filter(business => {
      const matchesSearch = !searchTerm || 
        business.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        business.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || 
        business.category === selectedCategory;
      const matchesLocation = selectedLocation === 'All Locations' || 
        business.location.includes(selectedLocation.replace(' ', ''));
      const matchesSustainability = business.sustainabilityScore >= sustainabilityScore;
      
      return matchesSearch && matchesCategory && matchesLocation && matchesSustainability;
    });
    
    alert(`Found ${filteredBusinesses.length} businesses matching your criteria!`);
  };

  const handleMarkerClick = (business) => {
    setSelectedBusiness(business);
    console.log('Selected business:', business);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-[var(--bg-section)] to-white">
      {/* Background Map */}
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full opacity-30">
          <InteractiveMap 
            businesses={mockUMKMs}
            searchFilters={searchFilters}
            onMarkerClick={handleMarkerClick}
          />
        </div>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover & Support Local Businesses Through Interactive Maps
          </h1>
          <p className="hero-subtitle">
            Explore sustainable UMKM businesses in your area using our WebGIS platform. 
            Find, connect, and support local entrepreneurs making a positive impact.
          </p>
          
          {/* Interactive Map Section */}
          <div className="w-full max-w-5xl mx-auto mt-8 mb-8">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-[var(--border-light)]">
              {/* Search Controls */}
              <div className="mb-6">
                <div className="flex items-center mb-4 border border-[var(--border-light)] rounded-full px-4 py-3">
                  <Search className="text-[var(--text-muted)] mr-3" size={20} />
                  <input
                    type="text"
                    placeholder="Search for businesses, products, or services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 outline-none text-[var(--text-body)] body-medium"
                  />
                </div>
                
                {/* Filters Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  {/* Category Filter */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full p-3 border border-[var(--border-light)] rounded-full outline-none body-medium bg-white"
                    >
                      {mockCategories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Location Filter */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2 flex items-center">
                      <MapPin size={16} className="mr-1" />
                      Location
                    </label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full p-3 border border-[var(--border-light)] rounded-full outline-none body-medium bg-white"
                    >
                      {mockLocations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  {/* Sustainability Score Filter */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2 flex items-center">
                      <Leaf size={16} className="mr-1" />
                      Min. Sustainability Score
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={sustainabilityScore}
                        onChange={(e) => setSustainabilityScore(parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, var(--accent-primary) 0%, var(--accent-primary) ${sustainabilityScore}%, #e5e5e5 ${sustainabilityScore}%, #e5e5e5 100%)`
                        }}
                      />
                      <div className="flex justify-between text-sm text-[var(--text-muted)] mt-1">
                        <span>0</span>
                        <span className="font-medium text-[var(--accent-text)]">{sustainabilityScore}%</span>
                        <span>100</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Search Button */}
                <button 
                  onClick={handleSearch}
                  className="btn-primary w-full md:w-auto px-8"
                >
                  <Search size={18} className="mr-2" />
                  Search on Map
                </button>
              </div>
              
              {/* Interactive Map */}
              <div className="h-96 bg-gray-50 rounded-2xl border border-[var(--border-light)] overflow-hidden">
                <InteractiveMap 
                  businesses={mockUMKMs}
                  searchFilters={searchFilters}
                  onMarkerClick={handleMarkerClick}
                />
              </div>
              
              {/* Map Info */}
              <div className="mt-4 text-center text-sm text-[var(--text-secondary)]">
                <p>
                  🗺️ Interactive WebGIS platform • Click markers to explore businesses • 
                  {" "}
                  <span className="text-[var(--accent-text)] font-medium">
                    Real-time sustainability data
                  </span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8 text-center">
            <div>
              <div className="text-2xl font-bold text-[var(--text-primary)]">500+</div>
              <div className="text-sm text-[var(--text-secondary)]">Mapped Businesses</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--text-primary)]">50+</div>
              <div className="text-sm text-[var(--text-secondary)]">Cities Covered</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[var(--text-primary)]">10k+</div>
              <div className="text-sm text-[var(--text-secondary)]">Map Views</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;