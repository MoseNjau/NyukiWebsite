import React from 'react';
import { Smartphone, Cloud, Bell, BarChart3, Users, Shield, Check } from 'lucide-react';

const AppPage: React.FC = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Digital Hive Management',
      description: 'Seamlessly track all of your hives, view real-time data, and manage inspections, tasks, and diaries.',
      color: 'bg-yellow-50',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Synchronized',
      description: 'Your data is stored in the cloud, synced in real-time, and accessible from anywhere.',
      color: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Visualize trends with in-depth charts and data. Get actionable insights and advanced analytics tools.',
      color: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Bell,
      title: 'Smart Alerts',
      description: 'Get notified about real-time changes, important events, and critical alerts via notifications.',
      color: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: Users,
      title: 'Collaboration Tools',
      description: 'Share data with your beekeeping teams, cooperatives, or family members for collaborative management.',
      color: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Shield,
      title: 'Data Ownership',
      description: 'Your data belongs to you, is secured with encryption, and is stored in our ISO-certified data facilities.',
      color: 'bg-red-50',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600'
    }
  ];

  const appCapabilities = [
    'Create and manage multiple apiaries',
    'Track hive details (name, health, treatment)',
    'Custom inspection checklists',
    'Plan inspections by efficiency',
    'Real-time sensor data integration',
    'Collaborate with other beekeepers',
    'Alert notifications via dashboard',
    'Download and export your data',
    'Weather data integration',
    'Multilingual app localization'
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Smart Nyuki App
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            The free Smart Nyuki app is a digital registration system for beekeepers and researchers. It provides a total overview of all apiaries and hives, with comprehensive tracking, collaboration tools, and integration with IoT monitoring devices.
          </p>
          <button className="bg-yellow-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors inline-flex items-center gap-2">
            <Smartphone size={20} />
            Download App
          </button>
        </div>
      </section>

      {/* App Preview with Management Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">📱</div>
                  <p className="text-gray-600">App Preview Image</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Complete Hive Management
              </h2>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                The Smart Nyuki software combines a streamlined design and intuitive layout for monitoring bee activities and scientific condition. Register hive locations, track apiary health, monitor treatments, and never lose important inspection records all in one place.
              </p>
              <button className="bg-yellow-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-sm sm:text-base">
                Start the App
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className={`${feature.color} p-6 sm:p-8 rounded-xl`}>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4 sm:mb-6`}>
                  <feature.icon className={feature.iconColor} size={28} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Can You Do with the App */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                What Can You Do with the App?
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {appCapabilities.map((capability, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-sm sm:text-base text-gray-600">{capability}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">👥</div>
                  <p className="text-gray-600">Beekeepers Group Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              For Whom?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              The Smart Nyuki app is free to use for everyone. Our current users include both professional and hobby beekeepers, researchers, agricultural cooperatives, and training institutions across Kenya and East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-yellow-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                Commercial Beekeepers
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Manage large-scale operations efficiently
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-green-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                Hobby Beekeepers
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Track your backyard hives with ease
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <BarChart3 className="text-blue-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                Researchers
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Collect and analyze field data
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="text-purple-600" size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                Cooperatives
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Coordinate member activities
              </p>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12 bg-white p-6 sm:p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Would you like to use Smart Nyuki for your research project or cooperative? Contact us for more information about advanced features.
            </p>
            <button className="bg-yellow-500 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-sm sm:text-base">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Smart Nyuki App?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Built by beekeepers, for beekeepers, with a focus on simplicity and power.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 sm:p-8 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Free Forever
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                The Smart Nyuki app is completely free to use. No hidden fees, no subscriptions. We believe every beekeeper deserves access to modern tools.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 sm:p-8 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Works Offline
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Record inspections and manage hives even without internet. Data syncs automatically when you're back online.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 sm:p-8 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Cross-Platform
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Available on iOS, Android, and web browsers. Access your data from any device, anywhere, anytime.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 sm:p-8 rounded-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                Regular Updates
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                We continuously improve the app based on user feedback. New features and enhancements are released regularly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Users Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6 italic">
                "This app has completely transformed how I manage my 30+ hives. The inspection tracking is brilliant!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">John Kamau</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Commercial Beekeeper, Nakuru</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6 italic">
                "Perfect for research! The data export feature makes it easy to analyze trends and share findings with colleagues."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Dr. Sarah Wanjiru</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Researcher, University of Nairobi</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6 italic">
                "As a beginner, this app helped me learn and track everything. The collaborative features are amazing for our cooperative!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Grace Achieng</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Hobby Beekeeper, Kisumu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Download the Smart Nyuki app today and join thousands of beekeepers who are already managing their hives smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <span className="text-sm sm:text-base">Download on App Store</span>
            </button>
            <button className="w-full sm:w-auto bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-3">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <span className="text-sm sm:text-base">Get it on Google Play</span>
            </button>
          </div>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500">
            Also available on web at <a href="#" className="text-yellow-600 underline">app.smartnyuki.com</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AppPage;
