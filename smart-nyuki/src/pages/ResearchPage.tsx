import React from 'react';
import { Database, BarChart3, FileText, Brain, Users, Globe, CheckCircle } from 'lucide-react';
import researchDashboard from '/images/research.png';

const ResearchPage: React.FC = () => {
  const researchCapabilities = [
    {
      icon: Database,
      title: 'Standardized Data Collection',
      description: 'Use pre-defined taxonomic criteria and protocols to ensure data quality, consistency, and comparability across studies.',
    },
    {
      icon: BarChart3,
      title: 'Automated IoT Measurements',
      description: 'Smart Nyuki Base automatically collects weight, temperature, and sensor data, synchronized with inspection records.',
    },
    {
      icon: FileText,
      title: 'Multi-Model Data Input',
      description: 'Combine data from innovative IoT sensors with traditional surveys, qualitative data, images, and field notes.',
    },
    {
      icon: Brain,
      title: 'Comprehensive Analytics',
      description: 'Visualize data using built-in charts and tools. Export your datasets to Excel or CSV for advanced analysis.',
    },
    {
      icon: Users,
      title: 'Collaborative Research',
      description: 'Share projects, protocols, and data with research teams across institutions. Manage multi-site studies seamlessly.',
    },
    {
      icon: Globe,
      title: 'Custom Algorithms',
      description: 'Develop, test, and deploy your own data analysis algorithms through our API. Integrate machine learning models.',
    }
  ];

  const benefits = [
    'Automated data collection reduces manual labor',
    'Streamlined protocols improve research efficiency',
    'Real-time monitoring of research progress',
    'Secure data storage with SOC 2 compliance',
    'Export capabilities for statistical analysis',
    'Integration with existing lab information systems',
    'Multilingual interface for international studies',
    'Technical support for research projects'
  ];

  const supportServices = [
    {
      title: 'Grant proposal design and implementation',
      description: 'We help researchers design beekeeping studies and integrate Smart Nyuki into grant proposals.'
    },
    {
      title: 'Data quality assurance services',
      description: 'Our team reviews protocols and ensures data integrity throughout your research project.'
    },
    {
      title: 'API integration for custom tools',
      description: 'Connect Smart Nyuki data to your existing research infrastructure and analysis pipelines.'
    },
    {
      title: 'Co-design of research and designs',
      description: 'We work directly with researchers to customize the platform for specific study requirements.'
    },
    {
      title: 'Compliance support and assistance',
      description: 'Guidance on ethical approvals, data protection regulations, and research compliance standards.'
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Research Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Smart Nyuki app and Smart Nyuki Base are powerful tools for collecting both qualitative and quantitative data in honeybee research projects. Design your study, collect standardized data, and collaborate with research teams across Africa.
          </p>
        </div>
      </section>

      {/* Open Research Platform */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src={researchDashboard}
                alt="Research Platform Dashboard"
                className="rounded-lg w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Research Platform</h2>
              <p className="text-gray-600 mb-4">
                Smart Nyuki is an open research platform that allows you to design high-quality scientific data in a standardized and shareable data way. Honeybee research can now be designed based on real data to strengthen guidelines for beekeeping researchers using trusted practices.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're studying pollinator health, testing new beekeeping techniques, monitoring climate impacts, or exploring bee acoustics, Smart Nyuki provides the infrastructure for systematic, scalable data collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Capabilities */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchCapabilities.map((capability, index) => (
              <div key={index} className={`bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}>
                <div className={`w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6`}>
                  <capability.icon className="text-yellow-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits for Researchers */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Benefits for Researchers</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-yellow-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Support</h3>
              <p className="text-gray-600 mb-6">
                Our team provides technical support for research projects, including:
              </p>
              <ul className="space-y-3">
                {supportServices.map((service, index) => (
                  <li key={index} className="pb-3 border-b border-yellow-200 last:border-0">
                    <h4 className="font-bold text-gray-900 mb-1">• {service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Smart Nyuki for Your Research */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Use Smart Nyuki for Your Research</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Universities, research institutions, and organizations across Kenya and East Africa are using Smart Nyuki to advance our understanding of pollination, health and sustainable beekeeping practices.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-sm max-w-4xl mx-auto mb-8">
            <p className="text-gray-600 text-center mb-6">
              To discuss how Smart Nyuki can support your research project, please contact our research team. We're ready to provide demo, discuss customization opportunities, and explore collaboration options for your scientific research needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="w-full sm:w-auto bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Contact Research Team
              </button>
              <button className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                View Research Partners
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
