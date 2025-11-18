import React from 'react';
import { Database, BarChart3, Users, Brain, FileText, Globe, CheckCircle } from 'lucide-react';

const ResearchPage: React.FC = () => {
  const researchCapabilities = [
    {
      icon: Database,
      title: 'Standardized Data Collection',
      description: 'Use pre-defined taxonomic criteria and protocols to ensure data quality, consistency, and comparability across studies.',
      color: 'bg-yellow-50',
      iconBg: 'bg-yellow-100',
      iconColor: 'text-yellow-600'
    },
    {
      icon: BarChart3,
      title: 'Automated IoT Measurements',
      description: 'Smart Nyuki Base automatically collects weight, temperature, and sensor data, synchronized with inspection records.',
      color: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600'
    },
    {
      icon: FileText,
      title: 'Multi-Model Data Input',
      description: 'Combine data from innovative IoT sensors with traditional surveys, qualitative data, images, and field notes.',
      color: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600'
    },
    {
      icon: Brain,
      title: 'Comprehensive Analytics',
      description: 'Visualize data using built-in charts and tools. Export your datasets to Excel or CSV for advanced analysis.',
      color: 'bg-purple-50',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Collaborative Research',
      description: 'Share projects, protocols, and data with research teams across institutions. Manage multi-site studies seamlessly.',
      color: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600'
    },
    {
      icon: Globe,
      title: 'Custom Algorithms',
      description: 'Develop, test, and deploy your own data analysis algorithms through our API. Integrate machine learning models.',
      color: 'bg-red-50',
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600'
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
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Research Platform</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Smart Nyuki app and Smart Nyuki Base are powerful tools for collecting both qualitative and quantitative data in honeybee research projects. Design your study, collect standardized data, and collaborate with research teams across Africa.
          </p>
        </div>
      </section>

      {/* Open Research Platform */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/research-dashboard.jpg" 
                alt="Research Platform Dashboard" 
                className="rounded-lg shadow-2xl w-full"
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
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                View Research Partners
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Capabilities</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {researchCapabilities.map((capability, index) => (
              <div key={index} className={`${capability.color} p-8 rounded-xl`}>
                <div className={`w-14 h-14 ${capability.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                  <capability.icon className={capability.iconColor} size={28} />
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
                    <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Research Support</h3>
              <p className="text-gray-600 mb-6">
                Our team provides technical support for research projects, including:
              </p>
              <ul className="space-y-3">
                {supportServices.map((service, index) => (
                  <li key={index} className="pb-3 border-b border-blue-200 last:border-0">
                    <h4 className="font-bold text-gray-900 mb-1">• {service.title}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Current Research Projects */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Use Smart Nyuki for Your Research</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Universities, research institutions, and organizations across Kenya and East Africa are using Smart Nyuki to advance our understanding of pollination, health and sustainable beekeeping practices.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto mb-8">
            <p className="text-gray-600 text-center mb-6">
              To discuss how Smart Nyuki can support your research project, please contact our research team. We're ready to provide demo, discuss customization opportunities, and explore collaboration options for your scientific research needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Contact Research Team
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                View Research Partners
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Active Research Areas</h2>
            <p className="text-xl text-gray-600">
              Smart Nyuki data is currently being used in these research domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="font-bold text-gray-900 mb-2">Climate Change Impact</h3>
              <p className="text-sm text-gray-600">Studying how temperature and weather patterns affect colony health</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🦠</div>
              <h3 className="font-bold text-gray-900 mb-2">Disease Detection</h3>
              <p className="text-sm text-gray-600">Using acoustic analysis and weight patterns to identify diseases early</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="font-bold text-gray-900 mb-2">Pollination Studies</h3>
              <p className="text-sm text-gray-600">Tracking foraging behavior and crop pollination effectiveness</p>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="font-bold text-gray-900 mb-2">AI & Machine Learning</h3>
              <p className="text-sm text-gray-600">Developing predictive models for swarm detection and yield optimization</p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="font-bold text-gray-900 mb-2">Biodiversity Mapping</h3>
              <p className="text-sm text-gray-600">Assessing bee species diversity across different ecosystems</p>
            </div>

            <div className="bg-red-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-gray-900 mb-2">Economic Analysis</h3>
              <p className="text-sm text-gray-600">Quantifying the economic benefits of precision beekeeping</p>
            </div>

            <div className="bg-pink-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🔬</div>
              <h3 className="font-bold text-gray-900 mb-2">Behavioral Science</h3>
              <p className="text-sm text-gray-600">Understanding bee communication and colony decision-making</p>
            </div>

            <div className="bg-indigo-50 p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="font-bold text-gray-900 mb-2">Sustainable Agriculture</h3>
              <p className="text-sm text-gray-600">Integrating beekeeping with regenerative farming practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research Partner */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-xl shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <FileText className="text-blue-600" size={32} />
              </div>
              <div>
                <span className="text-sm text-gray-500 uppercase tracking-wide">Case Study</span>
                <h3 className="text-2xl font-bold text-gray-900">University of Nairobi Research</h3>
              </div>
            </div>
            <p className="text-gray-600 mb-4 italic text-lg">
              "Smart Nyuki's data has revolutionized our understanding of tropical bee behavior. The platform provides invaluable insights for researchers worldwide. We've been able to collect over 2 million data points across 50 hives, leading to 3 published papers and ongoing PhD research."
            </p>
            <div className="flex items-center gap-4 pt-4 border-t">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-semibold text-gray-900">Dr. Jane Kariuki</p>
                <p className="text-sm text-gray-500">Lead Researcher, Department of Agricultural Sciences</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Privacy & Ethics */}
      <section className="py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
              <Globe className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Privacy & Research Ethics</h2>
            <p className="text-gray-600 mb-6">
              We take research ethics and data privacy seriously. All research projects are subject to ethical review, and participant data is protected according to international standards including GDPR compliance.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">✓ Data Ownership</h4>
                <p className="text-sm text-gray-600">Researchers retain full ownership of collected data</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">✓ Secure Storage</h4>
                <p className="text-sm text-gray-600">ISO 27001 certified cloud infrastructure</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">✓ Ethical Compliance</h4>
                <p className="text-sm text-gray-600">Support for IRB approvals and consent management</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Research?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Join leading institutions in using Smart Nyuki for cutting-edge beekeeping and pollination research. Our team is ready to discuss your project requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Consultation
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Download Research Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
