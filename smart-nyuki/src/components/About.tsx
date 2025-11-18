import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-yellow-400 rounded-3xl p-8 shadow-xl">
              <div className="bg-white rounded-2xl p-6">
                <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400">About Image</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Smart Nyuki</h2>
            <p className="text-lg text-gray-600 mb-4">
              Smart Nyuki is revolutionizing beekeeping in Kenya and beyond by combining 
              traditional knowledge with cutting-edge IoT technology.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our mission is to empower beekeepers with real-time data and insights, 
              helping them increase productivity while ensuring bee colony health.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Founded by a team of passionate technologists and beekeeping experts, 
              we're committed to sustainable agriculture and environmental conservation.
            </p>
            <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition">
              Learn Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;