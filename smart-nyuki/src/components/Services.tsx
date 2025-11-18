import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Hive Monitoring System',
      description: 'Complete IoT solution with sensors and cloud dashboard',
      price: 'From $299'
    },
    {
      title: 'Mobile Application',
      description: 'iOS and Android apps for on-the-go monitoring',
      price: 'Free with system'
    },
    {
      title: 'Consulting Services',
      description: 'Expert advice on hive management and optimization',
      price: 'From $50/hr'
    },
    {
      title: 'Training Programs',
      description: 'Learn to maximize your smart beekeeping setup',
      price: 'From $199'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive solutions for modern beekeepers</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-yellow-500 transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-2xl font-bold text-yellow-500">{service.price}</p>
              <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;