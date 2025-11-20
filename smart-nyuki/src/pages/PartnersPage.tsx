import React from 'react';
import { Briefcase, Users, Building2, GraduationCap } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const strategicPartners = [
    {
      logo: '/images/jhub.png',
      name: 'J-Hub',
      type: 'Technology Partner',
      description: 'Technology, innovation and collaboration support'
    },
    {
      logo: '/images/yatta.png',
      name: 'Yatta Beekeepers',
      type: 'Strategic Partner',
      description: 'Regional and farmer collaboration'
    }
  ];

  const partnershipTypes = [
    {
      icon: Briefcase,
      title: 'Technology Partners',
      description: 'Innovative companies, IoT platform providers, and tech companies',
    },
    {
      icon: Users,
      title: 'Farmer Cooperatives',
      description: 'Beekeeping associations, farmer cooperatives and agricultural organizations',
    },
    {
      icon: Building2,
      title: 'NGOs & Researchers',
      description: 'Environmental NGOs and research institutions',
    },
    {
      icon: GraduationCap,
      title: 'Distributors',
      description: 'Regional distributors and retail partners',
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Partners</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            We're building an ecosystem of partners committed to transforming beekeeping across Africa. Join us in empowering farmers with innovative technology.
          </p>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Strategic Partners</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {strategicPartners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm flex flex-col sm:flex-row items-center gap-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <img src={partner.logo} alt={partner.name} className="w-24 h-24 object-contain flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                  <p className="text-yellow-600 font-semibold mb-3">{partner.type}</p>
                  <p className="text-gray-600">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Partnership Network</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <type.icon className="text-yellow-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Become a Partner</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Interested in partnering with Smart Nyuki? We'd love to hear from you. Whether you have a specific partnership proposal or want to explore possibilities, our team is ready to discuss how we can work together to transform African beekeeping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="w-full sm:w-auto bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Become a Partner
              </button>
              <button className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;