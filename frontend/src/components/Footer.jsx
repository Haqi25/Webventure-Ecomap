import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Leaf } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: "Platform",
      links: [
        { label: "Discover Businesses", href: "#discover" },
        { label: "How It Works", href: "#how-it-works" },
        { label: "Sustainability Score", href: "#sustainability" },
        { label: "Categories", href: "#categories" }
      ]
    },
    {
      title: "For Businesses",
      links: [
        { label: "List Your Business", href: "#list-business" },
        { label: "Business Dashboard", href: "#dashboard" },
        { label: "Sustainability Certification", href: "#certification" },
        { label: "Success Stories", href: "#stories" }
      ]
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#help" },
        { label: "Contact Us", href: "#contact" },
        { label: "Community Guidelines", href: "#guidelines" },
        { label: "Report Issue", href: "#report" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Mission", href: "#mission" },
        { label: "Careers", href: "#careers" },
        { label: "Press", href: "#press" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#facebook", label: "Facebook" },
    { icon: Twitter, href: "#twitter", label: "Twitter" },
    { icon: Instagram, href: "#instagram", label: "Instagram" },
    { icon: Linkedin, href: "#linkedin", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-[var(--text-primary)] text-white">
      <div className="container py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-[var(--accent-primary)] rounded-full">
                <Leaf className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold">Media UMKM</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Connecting communities with sustainable local businesses. 
              Discover, support, and grow together for a better future.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail size={16} />
                <span>hello@mediaumkm.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone size={16} />
                <span>+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin size={16} />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[var(--accent-primary)] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 pt-12 mb-12">
          <div className="max-w-md mx-auto text-center lg:text-left lg:max-w-none lg:flex lg:items-center lg:justify-between">
            <div className="mb-6 lg:mb-0">
              <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">
                Get the latest news about new sustainable businesses in your area.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-300">
              <p>&copy; 2024 Media UMKM. All rights reserved.</p>
            </div>
            
            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-300 hover:text-[var(--accent-primary)] transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-300 hover:text-[var(--accent-primary)] transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-300 hover:text-[var(--accent-primary)] transition-colors">
                Cookie Policy
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-gray-800 hover:bg-[var(--accent-primary)] rounded-full transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;