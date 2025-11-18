import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Peter Mwangi',
      role: 'Commercial Beekeeper',
      text: 'Smart Nyuki has transformed my beekeeping business. I can now monitor 50+ hives effortlessly!'
    },
    {
      name: 'Mary Njeri',
      role: 'Hobby Beekeeper',
      text: 'The alerts helped me save my colony from overheating. This system pays for itself!'
    },
    {
      name: 'James Otieno',
      role: 'Agricultural Consultant',
      text: 'I recommend Smart Nyuki to all my clients. The data insights are invaluable.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Real feedback from real beekeepers</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="text-yellow-500 text-4xl mb-4">"</div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;