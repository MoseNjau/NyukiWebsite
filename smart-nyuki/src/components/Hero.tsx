import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-yellow-50 to-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Smart Beekeeping for the Modern Farmer
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Revolutionize your beekeeping with IoT-powered hive monitoring. 
              Track health, productivity, and environmental conditions in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition">
                Get Started
              </button>
              <button className="border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-50 transition">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-yellow-400 rounded-3xl p-8 shadow-2xl">
              <div className="bg-white rounded-2xl p-6">
                <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">Beehive Illustration</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;