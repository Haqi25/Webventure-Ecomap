import { Star, Quote } from 'lucide-react';
import { mockTestimonials } from '../data/mock';

const TestimonialsSection = () => {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-16 bg-[var(--bg-section)]">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-[var(--accent-wash)] rounded-full">
              <Quote className="text-[var(--accent-text)]" size={32} />
            </div>
          </div>
          <h2 className="heading-2 mb-4">What Our Community Says</h2>
          <p className="body-large text-[var(--text-secondary)] max-w-2xl mx-auto">
            Hear from customers and business owners who are part of our sustainable 
            local business community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl border border-[var(--border-light)] hover:shadow-lg transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-2 bg-[var(--accent-wash)] rounded-full">
                  <Quote className="text-[var(--accent-text)]" size={24} />
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex justify-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Testimonial Text */}
              <blockquote className="body-medium text-[var(--text-body)] text-center mb-6 italic">
                "{testimonial.comment}"
              </blockquote>
              
              {/* Author Info */}
              <div className="flex items-center justify-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[var(--accent-primary)]"
                />
                <div className="text-center">
                  <div className="font-semibold text-[var(--text-primary)]">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-[var(--text-primary)] mb-2">4.9/5</div>
            <div className="text-sm text-[var(--text-secondary)]">Average Rating</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[var(--text-primary)] mb-2">10,000+</div>
            <div className="text-sm text-[var(--text-secondary)]">Happy Customers</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[var(--text-primary)] mb-2">500+</div>
            <div className="text-sm text-[var(--text-secondary)]">Partner Businesses</div>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-[var(--text-primary)] mb-2">50+</div>
            <div className="text-sm text-[var(--text-secondary)]">Cities Covered</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;