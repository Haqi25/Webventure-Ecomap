import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Discover', href: '#discover' },
    { label: 'Categories', href: '#categories' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' }
  ];

  return (
    <header className="nav-header">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-[var(--text-primary)]">Media UMKM</h1>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>
      
      <div className="flex items-center space-x-3">
        <button className="btn-secondary hidden md:inline-flex">
          Sign In
        </button>
        <button className="btn-primary">
          Join Now
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white border border-[var(--border-light)] rounded-lg mt-2 p-4 md:hidden shadow-lg">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="block py-2 nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col space-y-2 mt-4">
            <button className="btn-secondary">Sign In</button>
            <button className="btn-primary">Join Now</button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;