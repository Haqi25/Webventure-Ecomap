import { Leaf, Users, Recycle, Award } from 'lucide-react';
import { mockSustainabilityFeatures } from '../data/mock';

const SustainabilitySection = () => {
  const getIcon = (iconName) => {
    const icons = {
      Leaf: Leaf,
      Users: Users,
      Recycle: Recycle
    };
    const IconComponent = icons[iconName] || Leaf;
    return <IconComponent size={32} />;
  };

  return (
    <section className="py-16 bg-[var(--bg-section)]">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-[var(--accent-wash)] rounded-full">
              <Award className="text-[var(--accent-text)]" size={32} />
            </div>
          </div>
          <h2 className="heading-2 mb-4">Sustainability at the Heart</h2>
          <p className="body-large text-[var(--text-secondary)] max-w-2xl mx-auto">
            We connect you with businesses that are committed to environmental 
            responsibility and community development. Every business is evaluated 
            based on their sustainable practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {mockSustainabilityFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className="text-center p-6 bg-white rounded-2xl border border-[var(--border-light)] hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-[var(--accent-wash)] rounded-full text-[var(--accent-text)]">
                  {getIcon(feature.icon)}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="heading-3 mb-3">{feature.title}</h3>
              <p className="body-medium text-[var(--text-secondary)] mb-4">
                {feature.description}
              </p>
              
              {/* Stats */}
              <div className="inline-flex items-center px-4 py-2 bg-[var(--accent-wash)] rounded-full">
                <span className="text-sm font-semibold text-[var(--accent-text)]">
                  {feature.count}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="body-medium text-[var(--text-secondary)] mb-6">
            Join thousands of conscious consumers supporting sustainable local businesses
          </p>
          <button className="btn-primary px-8">
            <Leaf size={18} className="mr-2" />
            Find Sustainable Businesses
          </button>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;