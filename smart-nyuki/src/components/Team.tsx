import React from 'react';

const Team: React.FC = () => {
  const team = [
    { name: 'John Kamau', role: 'CEO & Founder', image: '' },
    { name: 'Sarah Wanjiru', role: 'CTO', image: '' },
    { name: 'David Ochieng', role: 'Lead Engineer', image: '' },
    { name: 'Grace Akinyi', role: 'Beekeeping Expert', image: '' }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600">Passionate experts driving innovation</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Team Photo</span>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-yellow-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;