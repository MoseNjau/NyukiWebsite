import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      icon: '📊',
      title: 'Real-Time Monitoring',
      description: 'Track temperature, humidity, and hive weight 24/7'
    },
    {
      icon: '🔔',
      title: 'Smart Alerts',
      description: 'Get instant notifications for critical hive conditions'
    },
    {
      icon: '📱',
      title: 'Mobile Access',
      description: 'Monitor your hives from anywhere with our mobile app'
    },
    {
      icon: '📈',
      title: 'Analytics Dashboard',
      description: 'Visualize trends and optimize hive productivity'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">Everything you need for smart beekeeping</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;