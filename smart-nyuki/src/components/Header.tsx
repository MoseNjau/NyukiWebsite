import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/images/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? 'text-yellow-600 font-bold'
      : 'text-gray-500 hover:text-yellow-600 transition-colors font-medium';
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Smart Nyuki Logo" className="h-12" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className={getLinkClass('/')}>
              Home
            </Link>
            <Link to="/about" className={getLinkClass('/about')}>
              About
            </Link>
            <Link to="/solutions" className={getLinkClass('/solutions')}>
              Solutions
            </Link>
            <Link to="/smart-hive" className={getLinkClass('/smart-hive')}>
              Smart Hive
            </Link>
            <Link to="/research" className={getLinkClass('/research')}>
              Research
            </Link>
            <Link to="/partners" className={getLinkClass('/partners')}>
              Partners
            </Link>
            <Link to="/contact" className={getLinkClass('/contact')}>
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="https://smart-nyuki.netlify.app/" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Access Your App
            </Link>
            <Link 
              to="/contact" 
              className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition-colors font-semibold"
            >
              Join Pilot
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              <Link to="/" className={`block py-2 ${getLinkClass('/')}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className={`block py-2 ${getLinkClass('/about')}`} onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/solutions" className={`block py-2 ${getLinkClass('/solutions')}`} onClick={() => setIsMenuOpen(false)}>Solutions</Link>
              <Link to="/smart-hive" className={`block py-2 ${getLinkClass('/smart-hive')}`} onClick={() => setIsMenuOpen(false)}>Smart Hive</Link>
              <Link to="/research" className={`block py-2 ${getLinkClass('/research')}`} onClick={() => setIsMenuOpen(false)}>Research</Link>
              <Link to="/partners" className={`block py-2 ${getLinkClass('/partners')}`} onClick={() => setIsMenuOpen(false)}>Partners</Link>
              <Link to="/contact" className={`block py-2 ${getLinkClass('/contact')}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
              
              <div className="pt-4 border-t space-y-2">
                <Link 
                  to="https://smart-nyuki.netlify.app/" 
                  className="block text-gray-700 hover:text-yellow-600 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Access Your App
                </Link>
                <Link 
                  to="/contact" 
                  className="block bg-yellow-500 text-white px-6 py-3 rounded-lg hover:bg-yellow-600 transition-colors font-semibold text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Pilot
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;