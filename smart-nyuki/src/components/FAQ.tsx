import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How does Smart Nyuki monitor my beehives?',
      answer: 'Smart Nyuki uses IoT sensors to track temperature, humidity, weight, and sound patterns inside your hive. Data is transmitted in real-time to our cloud platform where you can access it via web or mobile app.'
    },
    {
      question: 'What kind of alerts will I receive?',
      answer: 'You\'ll receive instant notifications for temperature extremes, sudden weight changes (indicating swarming or theft), humidity issues, and unusual sound patterns that may indicate queen problems or disease.'
    },
    {
      question: 'How long does the battery last?',
      answer: 'Our sensors are powered by solar panels with backup batteries that last up to 6 months without sunlight. Under normal conditions, the system runs indefinitely on solar power.'
    },
    {
      question: 'Is installation difficult?',
      answer: 'Not at all! Installation takes about 15 minutes per hive. We provide detailed instructions and video tutorials. No technical expertise required.'
    },
    {
      question: 'Can I monitor multiple hives?',
      answer: 'Yes! Our platform supports unlimited hives. You can manage everything from a single dashboard and compare performance across your apiaries.'
    },
    {
      question: 'What if I lose internet connection?',
      answer: 'The sensors store data locally for up to 7 days. Once connectivity is restored, all data syncs automatically. Critical alerts are sent via SMS as a backup.'
    },
    {
      question: 'Do you offer technical support?',
      answer: 'Yes! We provide 24/7 email support, phone support during business hours, and a comprehensive knowledge base. Premium plans include priority support.'
    },
    {
      question: 'What is your warranty and return policy?',
      answer: 'All hardware comes with a 2-year warranty. We offer a 30-day money-back guarantee if you\'re not satisfied with the system.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about Smart Nyuki</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="text-yellow-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-white px-6 pb-6 rounded-b-lg shadow-sm">
                  <p className="text-gray-600 pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
