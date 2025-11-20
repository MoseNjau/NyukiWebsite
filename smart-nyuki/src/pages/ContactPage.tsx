import React, { useState } from 'react';
import { Send, Paperclip, Wrench } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    location: '',
    numberOfHives: '',
    beekeepingExperience: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about Smart Nyuki? Want to join our pilot program? We're here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>


      {/* Join Our Pilot Program Form */}
      <section className="py-12 sm:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-md">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Join Our Pilot Program</h2>
              <p className="text-lg text-gray-600">
                Be among the first to experience the next-generation of beekeeping technology. We're looking for innovative farmers to help shape the future of Smart Nyuki.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="emailAddress" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="+254 700 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                    Location (County)
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="e.g., Nairobi"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="numberOfHives" className="block text-sm font-semibold text-gray-700 mb-2">
                  Number of Hives
                </label>
                <input
                  type="text"
                  id="numberOfHives"
                  name="numberOfHives"
                  value={formData.numberOfHives}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="e.g., 10-15 hives"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="beekeepingExperience" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tell us about your beekeeping experience
                </label>
                <textarea
                  id="beekeepingExperience"
                  name="beekeepingExperience"
                  value={formData.beekeepingExperience}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-none"
                  placeholder="Share your beekeeping journey, challenges, and why you're interested in Smart Nyuki..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* General Inquiries & Technical Support */}
      <section className="py-12 sm:py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* General Inquiries */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Paperclip className="text-yellow-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">General Inquiries</h3>
              </div>
              <p className="text-gray-600 mb-6">
                For general questions about Smart Nyuki, our products, or services, please email us at{' '}
                <a href="mailto:info@smartnyuki.com" className="text-yellow-600 underline">
                  info@smartnyuki.com
                </a>
                . We typically respond within 24 hours during business days.
              </p>
            </div>

            {/* Technical Support */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Wrench className="text-yellow-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Technical Support</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Need help with the app or Smart Nyuki Base? Our technical support team is available via WhatsApp for quick assistance. For detailed technical issues, please email{' '}
                <a href="mailto:support@smartnyuki.com" className="text-yellow-600 underline">
                  support@smartnyuki.com
                </a>{' '}
                with your service information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Our Hub */}
      <section className="py-12 sm:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center bg-white p-6 sm:p-8 rounded-lg shadow-md">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Visit Our Hub</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8">
              Want to see Smart Nyuki in action? Visit us at the JHUB Africa innovation Hub in Juja. We offer demonstrations of our technology, training sessions, and consultation for beekeepers and partners. Schedule your visit by contacting us in advance.
            </p>
            <p className="text-gray-600 mb-8">
              <strong>Operating hours:</strong> Monday – Friday, 9:00 AM – 5:00 PM EAT
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;