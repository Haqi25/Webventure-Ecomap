import { Search, Users, MapPin, Heart, ArrowRight } from 'lucide-react';
import { mockHowItWorksSteps } from '../data/mock';

const HowItWorksSection = () => {
  const getIcon = (iconName) => {
    const icons = {
      Search: Search,
      Users: Users,
      MapPin: MapPin,
      Heart: Heart
    };
    const IconComponent = icons[iconName] || Search;
    return <IconComponent size={48} />;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">How Our WebGIS Platform Works</h2>
          <p className="body-large text-[var(--text-secondary)] max-w-2xl mx-auto">
            Supporting local sustainable businesses is simple with our interactive mapping platform. 
            Follow these four easy steps to make a positive impact in your community.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {mockHowItWorksSteps.map((step, index) => (
              <div key={step.id} className="relative text-center">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[var(--accent-primary)] text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {step.id}
                </div>
                
                {/* Card */}
                <div className="bg-white border border-[var(--border-light)] rounded-2xl p-6 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-[var(--accent-wash)] rounded-full text-[var(--accent-text)]">
                      {getIcon(step.icon)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="heading-3 mb-4">{step.title}</h3>
                  <p className="body-medium text-[var(--text-secondary)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow (hidden on mobile, shown on desktop between steps) */}
                {index < mockHowItWorksSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-[var(--accent-primary)] z-20">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* WebGIS Highlight Section */}
        <div className="mt-16 bg-gradient-to-r from-[var(--accent-wash)] to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white rounded-2xl shadow-md">
                <MapPin className="text-[var(--accent-primary)]" size={48} />
              </div>
            </div>
            <h3 className="heading-2 mb-4 text-[var(--text-primary)]">
              Powered by Advanced WebGIS Technology
            </h3>
            <p className="body-large text-[var(--text-secondary)] mb-8 max-w-3xl mx-auto">
              Our interactive mapping system provides real-time location data, sustainability metrics, 
              and detailed business information all in one intuitive platform. Discover local businesses 
              like never before.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[var(--accent-wash)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin size={24} className="text-[var(--accent-text)]" />
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Real-time Mapping</h4>
                <p className="text-sm text-[var(--text-secondary)]">Live business locations with up-to-date information</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search size={24} className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Smart Filtering</h4>
                <p className="text-sm text-[var(--text-secondary)]">Advanced search by sustainability, location, and category</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[var(--accent-wash)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-[var(--accent-text)]" />
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Community Driven</h4>
                <p className="text-sm text-[var(--text-secondary)]">Reviews and ratings from local community members</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-8">
                <MapPin size={18} className="mr-2" />
                Explore the Map
              </button>
              <button className="btn-secondary px-8">
                Learn More About WebGIS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;