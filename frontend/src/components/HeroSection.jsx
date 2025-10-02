import { useState } from 'react';
import { Search, MapPin, Leaf } from 'lucide-react';
import { mockCategories, mockLocations } from '../data/mock';

const HeroSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [sustainabilityScore, setSustainabilityScore] = useState(70);

  const handleSearch = () => {
    console.log('Searching with:', {
      searchTerm,
      selectedCategory,
      selectedLocation,
      sustainabilityScore
    });
    // Mock search functionality - will be connected to backend later
    alert(`Searching for: ${searchTerm || 'all businesses'} in ${selectedLocation} with sustainability score ≥${sustainabilityScore}`);
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Discover & Support Local Businesses That Care
        </h1>
        <p className="hero-subtitle">
          Find sustainable UMKM businesses in your area. Support local entrepreneurs 
          who are making a positive impact on the community and environment.
        </p>
        
        {/* Search Section */}
        <div className="w-full max-w-4xl mx-auto mt-8">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-[var(--border-light)]">
            {/* Search Input */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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
              Search Local Businesses
            </button>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
          <div>
            <div className="text-2xl font-bold text-[var(--text-primary)]">500+</div>
            <div className="text-sm text-[var(--text-secondary)]">Local Businesses</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[var(--text-primary)]">50+</div>
            <div className="text-sm text-[var(--text-secondary)]">Cities Covered</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-[var(--text-primary)]">10k+</div>
            <div className="text-sm text-[var(--text-secondary)]">Happy Customers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;