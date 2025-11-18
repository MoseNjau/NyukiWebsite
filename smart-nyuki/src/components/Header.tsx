import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl">🐝</span>
            <span className="text-xl font-bold text-gray-900">Smart Nyuki</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/solutions" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Solutions
            </Link>
            <Link to="/smart-hive" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Smart Hive
            </Link>
            <Link to="/research" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Research
            </Link>
            <Link to="/partners" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Partners
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
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
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-yellow-600 py-2" 
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/solutions" 
                className="text-gray-700 hover:text-yellow-600 py-2" 
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link 
                to="/app" 
                className="text-gray-700 hover:text-yellow-600 py-2" 
                onClick={() => setIsMenuOpen(false)}
              >
                Smart Hive
              </Link>
              <Link 
                to="/research" 
                className="text-gray-700 hover:text-yellow-600 py-2" 
                onClick={() => setIsMenuOpen(false)}
              >
                Research
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-yellow-600 py-2" 
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/partners" 
                className="text-gray-700 hover:text-yellow-600 py-2" 
                onClick={() => setIsMenuOpen(false)}
              >
                Partners
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-yellow-600 py-2" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t space-y-2">
                <Link 
                  to="/app" 
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
                  Get $100
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