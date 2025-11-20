import React from 'react';
import beehivesField from '/images/beehives-field.png';
import beekeeperSmoke from '/images/beekeeper-smoke.png';
import { Users, Award, Heart, Github, Linkedin, Twitter, Lightbulb, Sprout, Target, Eye } from 'lucide-react';

const AboutPage: React.FC = () => {
  const visionCards = [
    {
      icon: Lightbulb,
      title: 'Modernizing African Beekeeping',
      description: 'Equipping farmers with cutting-edge IoT technology and data analytics to improve hive health, increase yields, and make informed decisions based on real-time insights.',
      color: 'bg-yellow-50',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Users,
      title: 'Empowering Farmers with Data',
      description: 'Building a connected community of beekeepers who can share knowledge, collaborate on best practices, and access expert support through our digital platform.',
      color: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Sprout,
      title: 'Supporting Sustainable Agriculture',
      description: 'Promoting healthier bee colonies to support ecosystems, ensure long-term sustainability, and contribute to environmental conservation across the continent.',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    }
  ];

  const teamMembers = [
    {
      name: 'Dr. Lawrence Nderu',
      role: 'Principal Investigator',
      description: 'Researcher in AI/ML',
      image: '/images/team/lawrence.png',
      socials: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Moses Njau',
      role: 'Software Engineer / Team Lead',
      description: '',
      image: '/images/team/moses.png',
      socials: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'James Karanja',
      role: 'IoT Engineer',
      description: '',
      image: '/images/team/james.png',
      socials: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Charles Mwangi',
      role: 'AI Engineer & Lead Researcher',
      description: '',
      image: '/images/team/charles.png',
      socials: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Kerren Hapuch',
      role: 'Data Scientist, Data Analytics',
      description: '',
      image: '/images/team/kerren.png',
      socials: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Methusselah Nyongesa',
      role: 'Software Engineer, ML Engineer',
      description: '',
      image: '/images/team/methusselah.png',
      socials: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'Brian Rop',
      role: 'Technical Writer and IoT Engineer',
      description: '',
      image: '/images/team/brian.png',
      socials: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Mission-Driven',
      description: 'We\'re committed to empowering African beekeepers through accessible, affordable technology that makes a real difference in their livelihoods.'
    },
    {
      icon: Target,
      title: 'Innovation for Impact',
      description: 'We combine cutting-edge IoT technology with deep understanding of local beekeeping practices to create solutions that work in African contexts.'
    },
    {
      icon: Eye,
      title: 'Transparency & Trust',
      description: 'Your data is yours. We\'re committed to open-source development, data ownership, and building trust with our beekeeping community.'
    },
    {
      icon: Award,
      title: 'Quality & Reliability',
      description: 'We build robust, field-tested technology designed for real-world conditions, backed by continuous support and improvement.'
    }
  ];

  const sdgGoals = [
    {
      number: 2,
      title: 'Zero Hunger',
      description: 'Supporting food security through improved beekeeping practices and increased honey production for local communities.',
      color: 'bg-yellow-500',
    },
    {
      number: 9,
      title: 'Industry, Innovation and Infrastructure',
      description: 'Bringing IoT technology and digital infrastructure to rural agricultural communities across Africa.',
      color: 'bg-orange-500',
    },
    {
      number: 15,
      title: 'Life on Land',
      description: 'Protecting pollinators and promoting biodiversity through sustainable beekeeping and ecosystem preservation.',
      color: 'bg-green-500',
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
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
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img 
                src={beehivesField} 
                alt="Smart Nyuki Beehives in a field" 
                className="rounded-lg w-full h-full object-cover aspect-[4/3]"
              />
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
      <section className="py-12 sm:py-16 md:py-20">
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
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
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
              <div key={index} className={`bg-white p-6 sm:p-8 rounded-xl text-center border transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-6 flex items-center justify-center">
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
      <section className="py-12 sm:py-16 md:py-20">
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
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 bg-gray-200 object-cover"/>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-yellow-600 font-semibold mb-3">{member.role}</p>
                <p className="text-xs sm:text-sm text-gray-600 h-10">{member.description}</p>
                <div className="flex justify-center gap-4 mt-4">
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                    <Linkedin size={20} />
                  </a>
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                    <Twitter size={20} />
                  </a>
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-600">
                    <Github size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 sm:p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
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
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-1 md:order-2">
              <img 
                src={beekeeperSmoke} 
                alt="Beekeeper with smoke" 
                className="rounded-lg shadow-xl w-full h-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-2 md:order-1">
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
      <section className="py-12 sm:py-16 md:py-20 bg-white">
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
              <div key={index} className={`bg-white p-6 sm:p-8 rounded-xl text-left shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                <div className={`w-16 h-16 ${goal.color} rounded-lg mb-4 flex items-center justify-center text-white font-bold text-4xl`}>
                  {goal.number}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                  {goal.title}
                </h3>
                <p className="text-sm text-gray-600">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Journey CTA */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
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
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
