import React from 'react';
import AnimatedBees from '../components/AnimatedBees';
import { Link } from 'react-router-dom';
import { Activity, Bell, TrendingUp, Users, Leaf, BarChart3, MapPin, Briefcase, Clock, TrendingDown, Database, Check, Lightbulb, Sprout, AlertCircle } from 'lucide-react';
import beekeeperHero from '/images/beekeeper-hero.png';
import smartNyukiDevice from '/images/smart-nyuki-device.png';
import researchDashboard from '/images/research-dashboard.png';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-cover bg-center" 
        style={{ backgroundImage: `url(${beekeeperHero})` }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        <AnimatedBees />
        <div className="container-custom relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Revolutionizing Beekeeping in Africa Through Smart Technology
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8">
                Smart Nyuki leverages IoT technology and data analytics to empower African beekeepers with real-time insights, optimize honey production, and support sustainable agricultural practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <button className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                  Access Web App
                </button>
                <Link to="/solutions" className="border-2 border-yellow-500 text-yellow-500 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 hover:text-white transition-colors">
                  Discover Solutions
                </Link>
              </div>
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span>Beta Phase Live</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                  <span>Pilot Program Active</span>
                </div>
              </div>
            </div>
            <div>
              <img 
                src={beekeeperHero} 
                alt="Beekeeper with Smart Nyuki" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-gray-600">Target Farmers (Year 1)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">3</div>
              <div className="text-gray-600">Pilot Counties</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">40%</div>
              <div className="text-gray-600">Projected Yield Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">1,000+</div>
              <div className="text-gray-600">Hives in Pilot</div>
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
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <Activity className="text-yellow-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time IoT Monitoring</h3>
              <p className="text-gray-600">
                Track temperature, humidity, hive weight, and activity patterns 24/7 from anywhere through our cloud-based platform.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <Bell className="text-yellow-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Alerts & Warnings</h3>
              <p className="text-gray-600">
                Receive instant notifications for critical events like swarming, temperature extremes, pest intrusions, and hive health issues.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="text-yellow-600" size={28} />
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={smartNyukiDevice} 
                alt="Smart Nyuki Base Device" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Leaf className="text-white" size={16} />
                  </div>
                  <p className="font-semibold text-gray-700">Solar Powered</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet the Smart Nyuki Base</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our flagship product, the Smart Nyuki Base, is a revolutionary IoT device that sits under your hive, providing 24/7 monitoring and real-time data. It's the cornerstone of a smarter, more productive beekeeping operation.
              </p>
              <Link to="/smart-hive" className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Discover the Smart Hive
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Beekeeping Challenges */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Traditional Beekeeping Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Smart Nyuki addresses critical gaps in traditional beekeeping practices</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="text-red-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Disturbance of Bee Activity</h3>
                  <p className="text-gray-600 mb-3">Unnecessary manual inspections disrupt bee colonies, causing stress and reducing productivity.</p>
                  <p className="flex items-center gap-2 text-yellow-500 font-semibold"><Check size={20} /><span>Remote monitoring eliminates need for frequent physical inspections</span></p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="text-red-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Inconsistent Honey Production</h3>
                  <p className="text-gray-600 mb-3">Estimation-based harvesting leads to poor timing and reduced honey quality and quantity.</p>
                  <p className="flex items-center gap-2 text-yellow-500 font-semibold"><Check size={20} /><span>Weight sensors detect optimal harvest timing for maximum yield</span></p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-red-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Delayed Response to Threats</h3>
                  <p className="text-gray-600 mb-3">Late detection of pests and diseases causes significant damage before intervention.</p>
                  <p className="flex items-center gap-2 text-yellow-500 font-semibold"><Check size={20} /><span>Real-time alerts enable immediate action when anomalies are detected</span></p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="text-red-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Lack of Timely Data</h3>
                  <p className="text-gray-600 mb-3">Missing critical insights about swarming and hive health changes leads to losses.</p>
                  <p className="flex items-center gap-2 text-yellow-500 font-semibold"><Check size={20} /><span>24/7 monitoring captures all critical events and trends</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vision for a Sweeter Future</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smart Nyuki is committed to transforming beekeeping across Africa through three core pillars
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Lightbulb className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modernizing African Beekeeping</h3>
              <p className="text-gray-600">
                Equipping farmers with cutting-edge IoT technology and data analytics to improve hive health, increase yields, and make informed decisions based on real-time insights.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Empowering Farmers with Data</h3>
              <p className="text-gray-600">
                Building a connected community of beekeepers who can share knowledge, collaborate on best practices, and access expert support through our digital platform.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Sprout className="text-yellow-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Supporting Sustainable Agriculture</h3>
              <p className="text-gray-600">
                Promoting healthier bee colonies to support ecosystems, ensure long-term sustainability, and contribute to environmental conservation across the continent.
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
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Go-to-Market Strategy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A phased approach to introduce smart beekeeping solutions across Kenya, starting from our hub in Juja
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Phase 1: Pilot</h3>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">Active</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '100%'}}></div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>Kiambu</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>Murang'a</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>Baringo</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Phase 2: Expansion</h3>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">Planning</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '25%'}}></div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>Machakos</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>Kitui</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Phase 3: Scaling</h3>
                <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">Future</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-yellow-500 h-2 rounded-full" style={{width: '0%'}}></div>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>Nakuru</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 bg-yellow-500 rounded-full"></span>National Rollout</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">1.53M</div>
              <div className="text-gray-600">Total Hives in Kenya</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">20%</div>
              <div className="text-gray-600">Agri-Tech Adoption Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-600 mb-2">$50M+</div>
              <div className="text-gray-600">Market Opportunity</div>
            </div>
          </div>
        </div>
      </section>


      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">A Collaborative Ecosystem</h2>
              <p className="text-lg text-gray-600 mb-6">
                We partner with technology leaders, research institutions, and on-the-ground farmer cooperatives to build a sustainable and innovative future for African beekeeping. Our network is the backbone of our success.
              </p>
              <Link to="/partners" className="bg-yellow-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
                Meet Our Partners
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Users className="text-yellow-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold">Farmer Co-ops</h4>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <Briefcase className="text-yellow-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold">Tech Innovators</h4>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <BarChart3 className="text-yellow-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold">Research Institutions</h4>
              </div>
              <div className="bg-white p-6 rounded-lg text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <MapPin className="text-yellow-600 mx-auto mb-2" size={32} />
                <h4 className="font-semibold">NGOs & Government</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Platform Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={researchDashboard} 
                alt="Research Platform Dashboard" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Advancing Beekeeping Through Research</h2>
              <p className="text-lg text-gray-600 mb-6">
                Our platform provides invaluable data for researchers studying everything from climate impact to disease detection. We are committed to advancing the science of apiculture in Africa.
              </p>
              <Link to="/research" className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors">
                Explore Our Research
              </Link>
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
            <Link to="/contact" className="bg-yellow-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-lg">
              Apply for Pilot Program
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
