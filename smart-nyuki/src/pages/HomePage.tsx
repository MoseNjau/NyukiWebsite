import React from 'react';
import { Activity, Bell, CloudRain, TrendingUp, Users, Target, Leaf, BarChart3, MapPin, Briefcase } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Revolutionizing Beekeeping in Africa Through Smart Technology
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Smart Nyuki leverages IoT technology, solar solutions, and data analysis to make beekeeping easier, more productive, and sustainable for farmers across Africa.
              </p>
              <div className="flex gap-4">
                <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                  Watch Demo
                </button>
              </div>
            </div>
            <div>
              <img 
                src="/images/beekeeper-hero.png" 
                alt="Beekeeper with Smart Nyuki" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-gray-600">Active Hives Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">3</div>
              <div className="text-gray-600">Countries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">40%</div>
              <div className="text-gray-600">Increase in Honey Yield</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">1,000+</div>
              <div className="text-gray-600">Beekeepers Empowered</div>
            </div>
          </div>
        </div>
      </section>

      {/* The Future of Beekeeping */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Future of Beekeeping is Here</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smart Nyuki combines cutting-edge IoT technology with solar-powered solutions to bring real-time insights and automation to beekeepers across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="w-14 h-14 bg-blue-500 rounded-lg flex items-center justify-center mb-6">
                <Activity className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time IoT Monitoring</h3>
              <p className="text-gray-600">
                Track temperature, humidity, hive weight, and activity patterns 24/7 from anywhere through our cloud-based platform.
              </p>
            </div>

            <div className="bg-yellow-50 p-8 rounded-xl">
              <div className="w-14 h-14 bg-yellow-500 rounded-lg flex items-center justify-center mb-6">
                <Bell className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Alerts & Warnings</h3>
              <p className="text-gray-600">
                Receive instant notifications for critical events like swarming, temperature extremes, pest intrusions, and hive health issues.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <div className="w-14 h-14 bg-green-500 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Access comprehensive analytics on hive productivity, seasonal trends, and actionable recommendations to maximize honey yield.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Nyuki Base Product */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Smart Nyuki Base</h2>
            <p className="text-xl text-gray-600">
              Get all the essentials for smart beekeeping in one compact, solar-powered solution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/images/smart-nyuki-device.png" 
                alt="Smart Nyuki Base Device" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Features:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Temperature & humidity sensors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Precision weight scale (0.1kg accuracy)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Sound pattern analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Real-time cloud connectivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-600">Solar-powered with battery backup</span>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4">Technical Specifications:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Connectivity:</span>
                    <p className="font-semibold">4G LTE / WiFi</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Power:</span>
                    <p className="font-semibold">Solar + Battery</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Weight Capacity:</span>
                    <p className="font-semibold">Up to 200kg</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Battery Life:</span>
                    <p className="font-semibold">6+ months</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Beekeeping Challenges */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Traditional Beekeeping Challenges</h2>
            <p className="text-xl text-gray-600">
              We solve the problems that have held beekeepers back for generations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Inspection of Hive Activity</h3>
                  <p className="text-gray-600">
                    Physical inspections are time-consuming, disruptive to colonies, and often inaccurate. Smart Nyuki provides continuous, non-invasive monitoring.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Inconsistent Honey Production</h3>
                  <p className="text-gray-600">
                    Without data, beekeepers struggle to understand yield patterns. Our analytics help optimize production and predict harvests.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Limited Access to Trends</h3>
                  <p className="text-gray-600">
                    Traditional beekeepers lack historical data and market insights. We provide trend analysis and forecasting tools.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lack of Theft Data</h3>
                  <p className="text-gray-600">
                    Hive theft costs beekeepers thousands annually. Our weight sensors and GPS tracking detect and alert on suspicious activity instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision for a Sweeter Future</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smart Nyuki is committed to making beekeeping smarter through insights and data where every person has access to healthy honey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modernizing African Beekeeping</h3>
              <p className="text-gray-600">
                Bringing state-of-the-art technology to every beekeeper, enabling them to increase yields and improve hive management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Empowering Farmers with Data</h3>
              <p className="text-gray-600">
                Building a smarter community of beekeepers who use data to make informed decisions and boost productivity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Leaf className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supporting Sustainable Agriculture</h3>
              <p className="text-gray-600">
                Promoting eco-friendly practices through solar-powered solutions that protect the environment and support sustainable beekeeping.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact So Far */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact So Far</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-600 mb-2">127</div>
              <div className="text-gray-600">Hives Currently Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-600 mb-2">450+</div>
              <div className="text-gray-600">Beekeepers Registered</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-600 mb-2">32%</div>
              <div className="text-gray-600">Average Increase in Yield</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-600 mb-2">15,000+</div>
              <div className="text-gray-600">Data Points Collected Daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* Go-to-Market Strategy */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Go-to-Market Strategy</h2>
            <p className="text-xl text-gray-600">
              A comprehensive approach to reach and empower beekeepers across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                Phase 1 (2025)
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Engage Cities</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Launch in major cities</li>
                <li>• Partner with urban beekeepers</li>
                <li>• Build brand awareness</li>
                <li>• Establish proof of concept</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                Phase 2 (Growing)
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Expansion</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Expand to regional markets</li>
                <li>• Form strategic partnerships</li>
                <li>• Scale production capacity</li>
                <li>• Enhance product features</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                Phase 3 (Scaling)
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pan-Africa & Beyond</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Continental expansion</li>
                <li>• International partnerships</li>
                <li>• Advanced AI features</li>
                <li>• Market leadership</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-yellow-50 rounded-lg">
              <div className="text-3xl font-bold text-yellow-600 mb-2">1.5M+</div>
              <div className="text-gray-600">Target Market (Beekeepers in Kenya)</div>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <div className="text-3xl font-bold text-orange-600 mb-2">20%</div>
              <div className="text-gray-600">Expected Market Penetration by 2027</div>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">$100M+</div>
              <div className="text-gray-600">Projected Market Value by 2030</div>
            </div>
          </div>
        </div>
      </section>

      {/* UN SDG Goals */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Supporting UN Sustainable Development Goals
            </h2>
            <p className="text-xl text-gray-600">
              Smart Nyuki contributes to global sustainability through technology-driven beekeeping.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-orange-50 p-8 rounded-xl text-center border-2 border-orange-200">
              <div className="w-20 h-20 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-3xl">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Zero Hunger</h3>
              <p className="text-gray-600 text-sm">
                Supporting beekeepers helps boost pollination and food production, contributing to food security across Africa.
              </p>
            </div>

            <div className="bg-orange-50 p-8 rounded-xl text-center border-2 border-orange-200">
              <div className="w-20 h-20 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-3xl">
                9
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry, Innovation and Infrastructure</h3>
              <p className="text-gray-600 text-sm">
                Bringing IoT solutions and digital infrastructure to rural areas, fostering innovation and economic growth.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl text-center border-2 border-green-200">
              <div className="w-20 h-20 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center text-white font-bold text-3xl">
                15
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Life on Land</h3>
              <p className="text-gray-600 text-sm">
                Promoting bee conservation protects ecosystems, biodiversity, and supports environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Strategic Partners</h2>
            <p className="text-xl text-gray-600">
              Collaborating with leading organizations to scale our impact across Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">ICRAF Africa</h3>
              <p className="text-gray-600">
                Partnership for research and capacity building in sustainable agriculture and agroforestry practices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                <Briefcase className="text-yellow-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Beekeeper</h3>
              <p className="text-gray-600">
                Technology collaboration to enhance IoT solutions and expand market reach across East Africa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Partnership Network */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Partnership Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We welcome collaboration with like-minded organizations committed to transforming agriculture through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">Technology Partners</h4>
              <p className="text-sm text-gray-600">IoT, AI & hardware innovators</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">Distribution Partners</h4>
              <p className="text-sm text-gray-600">Retail & supply chain networks</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">NGO & Government</h4>
              <p className="text-sm text-gray-600">Agricultural development programs</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <h4 className="font-bold text-gray-900 mb-2">Research Institutions</h4>
              <p className="text-sm text-gray-600">Universities & research centers</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
              Become a Partner
            </button>
          </div>
        </div>
      </section>

      {/* Research Platform */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Platform</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smart Nyuki serves as a powerful research tool for studying bee behavior, climate impacts, and agricultural optimization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Current Research Areas:</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Climate impact on colony health and productivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Seasonal patterns and optimal harvesting times</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Disease detection through acoustic analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Forage availability and pollen diversity mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">AI-driven predictive models for bee behavior</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600">Economic impact of precision beekeeping</span>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm">
                <p className="text-gray-600 italic">
                  "Smart Nyuki's data has revolutionized our understanding of tropical bee behavior. The platform provides invaluable insights for researchers worldwide."
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  - Dr. Jane Kariuki, Lead Researcher, Agricultural Research Institute
                </p>
              </div>
            </div>
            <div>
              <img 
                src="/images/research-dashboard.jpg" 
                alt="Research Platform Dashboard" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Pilot Program */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Join Our Pilot Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're looking for passionate beekeepers to join our pilot program. Get early access to Smart Nyuki technology at a special discounted rate.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Who We're Looking For:</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• Active beekeepers with 5+ hives</li>
                <li>• Willing to provide feedback</li>
                <li>• Located in Kenya, Uganda, or Tanzania</li>
                <li>• Committed to sustainable practices</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What You'll Get:</h3>
              <ul className="space-y-3 text-gray-600">
                <li>• 50% discount on hardware</li>
                <li>• Free platform access for 1 year</li>
                <li>• Priority technical support</li>
                <li>• Training and onboarding</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-yellow-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-lg">
              Apply for Pilot Program
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
