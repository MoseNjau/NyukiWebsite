import React from 'react';
import { Target, Users, Leaf, Award, Heart, Shield, UserCircle } from 'lucide-react';

const AboutPage: React.FC = () => {
  const visionCards = [
    {
      icon: Target,
      title: 'Modernizing African Beekeeping',
      description: 'Bring cutting-edge technology to every beekeeper, enabling them to scale their operations and improve productivity.',
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Users,
      title: 'Empowering Farmers with Data',
      description: 'Building a smarter community of beekeepers who use data to make informed decisions and boost productivity.',
      color: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Leaf,
      title: 'Supporting Sustainable Agriculture',
      description: 'Promoting eco-friendly practices through solar-powered solutions that protect the environment.',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Lawrence Maina',
      role: 'CEO & Founder',
      description: 'Over 15 years in AgriTech innovation. Inventor of M',
      icon: '👤'
    },
    {
      name: 'Moses Tioti',
      role: 'CTO',
      description: 'IoT specialist with expertise in hardware and software',
      icon: '👤'
    },
    {
      name: 'Dolphin Mwendai',
      role: 'COO',
      description: 'Operations and supply chain specialist with 15 years\' experience',
      icon: '👤'
    },
    {
      name: 'John Kariara',
      role: 'CFO',
      description: 'Ex-M at Kenyan tech company and fundraising specialist',
      icon: '👤'
    },
    {
      name: 'Ronnie Oganga',
      role: 'Software Engineer',
      description: 'Top-tier developer of software, integrations and UX designs',
      icon: '👤'
    },
    {
      name: 'Bartholomew Munyanya',
      role: 'Electronics Engineer',
      description: 'Leading the engineering of devices and IoT Solutions',
      icon: '👤'
    },
    {
      name: 'Brian Bisor',
      role: 'Sales',
      description: 'Sales lead for hubs distributing across East Africa',
      icon: '👤'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to making an actual difference in Africa through the lives we impact, and the many more lives that benefit from sustainable practices.'
    },
    {
      icon: Heart,
      title: 'Innovation for Impact',
      description: 'We pursue innovation that matters. Our goal is not innovation for its own sake but technology that creates measurable impact for farmers, bees, and ecosystems.'
    },
    {
      icon: Shield,
      title: 'Transparency & Trust',
      description: 'Data transparency is at our core. Beekeepers own their data, and we build trust with our community. We\'re upfront about costs, we honor commitments.'
    },
    {
      icon: Leaf,
      title: 'Quality & Reliability',
      description: 'From product design to customer service, quality is non-negotiable. We strive for excellence, build sturdy and reliable products, deliver exceptional support and continually improve.'
    }
  ];

  const sdgGoals = [
    {
      number: 2,
      title: 'Zero Hunger',
      description: 'Supporting beekeepers helps boost pollination and food production, contributing to food security across Africa.',
      color: 'bg-orange-100',
      textColor: 'text-orange-800'
    },
    {
      number: 9,
      title: 'Industry, Innovation and Infrastructure',
      description: 'Bringing IoT solutions and digital infrastructure to rural areas, fostering innovation and economic growth.',
      color: 'bg-orange-100',
      textColor: 'text-orange-800'
    },
    {
      number: 15,
      title: 'Life on Land',
      description: 'Promoting bee conservation protects ecosystems, biodiversity, and supports environmental sustainability.',
      color: 'bg-green-100',
      textColor: 'text-green-800'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About Smart Nyuki
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Revolutionizing beekeeping across Kenya and East Africa through technology, solar power and accessible IoT, empowering farmers to increase honey production while supporting sustainable agriculture.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👥</div>
                  <p className="text-gray-600 text-sm">Team Meeting Image</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Story
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Smart Nyuki was started by a small team looking to solve issues affecting beekeepers in Kenya. Through innovation, solar technology, IoT & data-analysis of 85 hives over 6 months, we realized beekeepers needed immediate, accessible data on their beehives. Our mission became to bring accessible technologies to all beekeepers in Zimbabwe & Africa.
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                Started in a small region in Yatta we realized the staff & IoT, we are a fully operational company with the capital to scale up bringing more beekeepers, farmer cooperatives.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mt-4">
                We've seen the transformational potential of data-driven beekeeping, community-led innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledged by Ministry */}
      <section className="py-12 sm:py-16 md:py-20 bg-yellow-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border-l-4 border-yellow-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Award className="text-yellow-600" size={28} />
              </div>
              <div>
                <span className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3">
                  GOVERNMENT RECOGNITION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Acknowledged by the Ministry of ICT Kenya
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Our SaaS IoT drone technology has earned recognition for its impact and innovation. This recognition reaffirms our commitment to building world-class AgriTech solutions for Africa and has opened doors for collaborations, new partnerships and significant opportunities to scale innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision for a Sweeter Future */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision for a Sweeter Future
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Smart Nyuki is committed to transforming beekeeping through insights and data where every person has access to healthy honey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visionCards.map((card, index) => (
              <div key={index} className={`${card.color} p-6 sm:p-8 rounded-xl text-center`}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center">
                  <card.icon className={card.iconColor} size={28} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              We are a team of passionate beekeepers, engineers, data scientists, entrepreneurs, and specialists united by a shared mission to modernize beekeeping across Africa. With decades of combined experience in AgriTech and our members have come together for change.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl sm:text-4xl">
                  {member.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-yellow-600 font-semibold mb-3">{member.role}</p>
                <p className="text-xs sm:text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="text-yellow-600" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Beekeeping Matters */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🐝</div>
                  <p className="text-gray-600 text-sm">Beekeeper with Smoke</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Beekeeping Matters
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Bees are crucial to agriculture; more than 75% of the world's crops depend on pollination. In Kenya and across Africa, bees play an essential role in food security, ecosystem health, and rural livelihoods.
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                By empowering beekeepers with better tools, we're not just improving honey yields. We're supporting pollination, enabling eco-agriculture practices, preserving local environments, strengthening rural economies, and creating sustainable income streams for smallholder farmers.
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                We're here to unlock the potential of bees to transform agriculture and bring sweeter futures for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting UN SDG Goals */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Supporting UN Sustainable Development Goals
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Smart Nyuki contributes to global sustainability through technology-driven beekeeping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {sdgGoals.map((goal, index) => (
              <div key={index} className={`${goal.color} p-6 sm:p-8 rounded-xl text-center border-2 ${goal.color.replace('100', '200')}`}>
                <div className={`w-16 h-16 sm:w-20 sm:h-20 ${goal.color.replace('100', '500')} rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl sm:text-3xl`}>
                  {goal.number}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {goal.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Journey CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Join Our Journey
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 px-4">
            Whether you're a beekeeper, a technology partner, or simply passionate about sustainable agriculture. Join us as we work to revolutionize beekeeping across Africa and support beekeepers towards a sweeter future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-sm sm:text-base">
              Become a Partner
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors text-sm sm:text-base">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
