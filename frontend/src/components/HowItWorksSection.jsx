import { Search, Users, Heart, ArrowRight } from 'lucide-react';
import { mockHowItWorksSteps } from '../data/mock';

const HowItWorksSection = () => {
  const getIcon = (iconName) => {
    const icons = {
      Search: Search,
      Users: Users,
      Heart: Heart
    };
    const IconComponent = icons[iconName] || Search;
    return <IconComponent size={48} />;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">How It Works</h2>
          <p className="body-large text-[var(--text-secondary)] max-w-2xl mx-auto">
            Supporting local sustainable businesses is simple with our platform. 
            Follow these three easy steps to make a positive impact.
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {mockHowItWorksSteps.map((step, index) => (
              <div key={step.id} className="relative text-center">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[var(--accent-primary)] text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
                  {step.id}
                </div>
                
                {/* Card */}
                <div className="bg-white border border-[var(--border-light)] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-[var(--accent-wash)] rounded-full text-[var(--accent-text)]">
                      {getIcon(step.icon)}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="heading-3 mb-4">{step.title}</h3>
                  <p className="body-medium text-[var(--text-secondary)]">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow (hidden on mobile, shown on desktop between steps) */}
                {index < mockHowItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-[var(--accent-primary)] z-20">
                    <ArrowRight size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-[var(--accent-wash)] rounded-2xl">
          <h3 className="heading-3 mb-4 text-[var(--text-primary)]">
            Ready to Support Local Businesses?
          </h3>
          <p className="body-medium text-[var(--text-secondary)] mb-6 max-w-lg mx-auto">
            Join our community and start discovering amazing local businesses 
            that align with your values today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary px-8">
              Start Exploring
            </button>
            <button className="btn-secondary px-8">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;