import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import logo from '/images/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 text-gray-600">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="Smart Nyuki Logo" className="h-12" />
            </div>
            <p className="text-sm mb-4">
              Mission-driven technology platform empowering African beekeepers through IoT monitoring, data analytics, and sustainable agricultural practices.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions" className="hover:text-gray-900 transition-colors text-sm">Solutions</Link></li>
              <li><Link to="/smart-hive" className="hover:text-gray-900 transition-colors text-sm">Smart Base</Link></li>
              <li><Link to="/research" className="hover:text-gray-900 transition-colors text-sm">Research</Link></li>
              <li><Link to="/about" className="hover:text-gray-900 transition-colors text-sm">About</Link></li>
              <li><Link to="/partners" className="hover:text-gray-900 transition-colors text-sm">Partners</Link></li>
              <li><Link to="/contact" className="hover:text-gray-900 transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@smartnyuki.jkhubafrica.com" className="hover:text-gray-900">info@smartnyuki.jkhubafrica.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+254 710 429 497</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Juja, Kiambu County, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Smart Nyuki. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Open Source</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;