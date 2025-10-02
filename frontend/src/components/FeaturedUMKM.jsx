import { useState } from 'react';
import { Star, MapPin, Leaf, Users, Recycle } from 'lucide-react';
import { mockUMKMs } from '../data/mock';

const FeaturedUMKM = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const getSustainabilityIcon = (badge) => {
    switch (badge) {
      case 'eco-friendly':
        return <Leaf size={14} />;
      case 'local-workers':
        return <Users size={14} />;
      case 'green-practices':
        return <Recycle size={14} />;
      default:
        return <Leaf size={14} />;
    }
  };

  const getSustainabilityColor = (score) => {
    if (score >= 90) return 'var(--accent-primary)';
    if (score >= 80) return '#81DD67';
    if (score >= 70) return '#F59E0B';
    return '#EF4444';
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Featured Local Businesses</h2>
          <p className="body-large text-[var(--text-secondary)] max-w-2xl mx-auto">
            Discover outstanding UMKM businesses that excel in sustainability, 
            community impact, and quality products or services.
          </p>
        </div>
        
        <div className="ai-grid">
          {mockUMKMs.map((umkm) => (
            <div
              key={umkm.id}
              className="product-card"
              onMouseEnter={() => setHoveredCard(umkm.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Business Image */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={umkm.image}
                  alt={umkm.name}
                  className="w-full h-48 object-cover transition-transform duration-300"
                  style={{
                    transform: hoveredCard === umkm.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                {/* Sustainability Score Badge */}
                <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 shadow-md">
                  <div className="flex items-center space-x-1">
                    <Leaf size={12} style={{ color: getSustainabilityColor(umkm.sustainabilityScore) }} />
                    <span className="text-xs font-medium" style={{ color: getSustainabilityColor(umkm.sustainabilityScore) }}>
                      {umkm.sustainabilityScore}%
                    </span>
                  </div>
                </div>
                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-[var(--text-primary)]">
                    {umkm.category}
                  </span>
                </div>
              </div>
              
              {/* Business Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="product-card-title">{umkm.name}</h3>
                  <div className="flex items-center space-x-2 text-sm text-[var(--text-secondary)]">
                    <MapPin size={14} />
                    <span>{umkm.location}</span>
                    <span className="text-[var(--text-muted)]">•</span>
                    <span className="text-[var(--text-secondary)]">{umkm.priceRange}</span>
                  </div>
                </div>
                
                <p className="product-card-description">
                  {umkm.description}
                </p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    <Star size={14} fill="currentColor" className="text-yellow-400" />
                    <span className="text-sm font-medium text-[var(--text-primary)]">
                      {umkm.rating}
                    </span>
                  </div>
                  <span className="text-sm text-[var(--text-muted)]">
                    ({Math.floor(Math.random() * 100) + 20} reviews)
                  </span>
                </div>
                
                {/* Sustainability Badges */}
                <div className="flex flex-wrap gap-2">
                  {umkm.sustainabilityBadges.map((badge) => (
                    <div
                      key={badge}
                      className="flex items-center space-x-1 bg-[var(--accent-wash)] text-[var(--accent-text)] px-2 py-1 rounded-full text-xs"
                    >
                      {getSustainabilityIcon(badge)}
                      <span className="font-medium capitalize">
                        {badge.replace('-', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-2 pt-2">
                  <button className="btn-primary flex-1">
                    Visit Business
                  </button>
                  <button className="btn-secondary px-4">
                    <Star size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-8">
            View All Local Businesses
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedUMKM;