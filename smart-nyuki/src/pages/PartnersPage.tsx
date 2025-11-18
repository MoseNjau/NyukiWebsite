import React from 'react';
import { Briefcase, Users, Building2, GraduationCap, UserCheck } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const strategicPartners = [
    {
      logo: '🌳',
      name: 'ICRAF Africa',
      type: 'Technology Partner',
      description: 'Technology, innovation and collaboration support'
    },
    {
      logo: '🐝',
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
      color: 'bg-yellow-50',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Users,
      title: 'Farmer Cooperatives',
      description: 'Beekeeping associations, farmer cooperatives and agricultural organizations',
      color: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Building2,
      title: 'NGOs & Researchers',
      description: 'Environmental NGOs and research institutions',
      color: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: GraduationCap,
      title: 'Distributors',
      description: 'Regional distributors and retail partners',
      color: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    }
  ];

  const technologyPartnerBenefits = [
    'Access to growing African AgTech market',
    'Co-development of innovative solutions',
    'Integration with existing IoT platforms',
    'Joint research and development initiatives'
  ];

  const farmerCooperativeBenefits = [
    'Discounted access to smart beekeeping tools',
    'Training and capacity building resources',
    'Market linkage and value chain development',
    'Enhanced bargaining power and productivity'
  ];

  const ngoResearcherBenefits = [
    'Research data sharing agreements',
    'Access to real-time field data',
    'Collaborative engagement programs',
    'Impact measurement frameworks'
  ];

  const distributorBenefits = [
    'Exclusive regional distribution rights',
    'Revenue sharing opportunities',
    'Marketing and sales support materials',
    'After-sales service infrastructure'
  ];

  const corporatePartnershipBenefits = [
    'Direct visibility to beekeeping communities',
    'Employee volunteer and CSR programs',
    'Brand association with sustainability',
    'Access to agricultural innovation projects',
    'First-mover advantage positioning',
    '750,000 smallholder beekeeping support',
    'CSR impact marketing opportunities',
    'Innovation-driven partnerships'
  ];

  const strategicAllianceBenefits = [
    'Co-development of joint solutions',
    'Shared go-to-market strategies',
    'Mutual research projects',
    'Joint branding opportunities'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Partnership Opportunities</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building an ecosystem of partners committed to transforming beekeeping across Africa. Join us in empowering farmers with innovative technology.
          </p>
        </div>
      </section>

      {/* Our Strategic Partners */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Strategic Partners</h2>
            <p className="text-xl text-gray-600">
              Collaborating with leading organizations to revolutionize beekeeping across Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {strategicPartners.map((partner, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100 hover:border-yellow-300 transition-all">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                    {partner.logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                    <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {partner.type}
                    </span>
                    <p className="text-gray-600">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Partnership Network */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Partnership Network</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((type, index) => (
              <div key={index} className={`${type.color} p-6 rounded-xl`}>
                <div className={`w-14 h-14 ${type.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  <type.icon className={type.iconColor} size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partnership Benefits</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For Technology Partners */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Technology Partners</h3>
              <ul className="space-y-3">
                {technologyPartnerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-yellow-600 font-bold">•</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Farmer Cooperatives */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Farmer Cooperatives</h3>
              <ul className="space-y-3">
                {farmerCooperativeBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">•</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For NGOs & Researchers */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For NGOs & Researchers</h3>
              <ul className="space-y-3">
                {ngoResearcherBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* For Distributors */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Distributors</h3>
              <ul className="space-y-3">
                {distributorBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-500 rounded-lg mb-6">
                <Building2 className="text-white" size={28} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Corporate Partnerships</h2>
              <p className="text-gray-600 mb-6">
                We partner with corporations seeking to make an impact through innovation, technology, or CSR programs. Smart Nyuki provides a unique opportunity for corporate engagement in agriculture innovation and social transformation.
              </p>
              <ul className="space-y-3 mb-8">
                {corporatePartnershipBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Partner With Us</h4>
              <p className="text-gray-600 mb-6">
                We believe in partnerships built on mutual value, shared goals, and a commitment to making a difference. Whether you're a startup, NGO, corporate, or cooperative, there's a place for you in the Smart Nyuki ecosystem.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">
                Explore Partnership Options
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Alliances */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Strategic Alliance Opportunities</h4>
              <p className="text-gray-600 mb-6">
                We seek long-term strategic partnerships with like-minded organizations. Whether you're in agritech, technology, development, or research, we explore collaborations aligned with our mission and vision.
              </p>
              <ul className="space-y-3 mb-6">
                {strategicAllianceBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-purple-600 font-bold">•</span>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
              <button className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors w-full">
                Discuss Strategic Alliances
              </button>
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-500 rounded-lg mb-6">
                <UserCheck className="text-white" size={28} />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Strategic Alliances</h2>
              <p className="text-gray-600 mb-4">
                We actively seek strategic partnerships with organizations that share our vision for transforming beekeeping through technology. Whether you're in agriculture, development, or conservation, we explore partnership models aligned with shared goals and impact-driven collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Become a Partner CTA */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Become a Partner</h2>
            <p className="text-xl text-gray-600 mb-8">
              Interested in partnering with Smart Nyuki? We'd love to hear from you. Whether you have a specific partnership proposal or want to explore possibilities, our team is ready to discuss how we can work together to transform African beekeeping.
            </p>
            <p className="text-gray-600 mb-8">
              Contact us to share your partnership idea and opportunity. We're keen to discuss, share our expertise, and engage in partnerships that add value to farmers, your organization, and the greater Smart Nyuki mission.
            </p>
            <button className="bg-yellow-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-lg">
              Contact Partnership Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
