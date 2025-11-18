import React from 'react';
import { Thermometer, Droplets, Weight, Volume2, Zap, Wifi, Sun, Shield, Check } from 'lucide-react';

const SmartBasePage: React.FC = () => {
  const keyFeatures = [
    {
      icon: Thermometer,
      title: 'Temperature monitoring',
      description: 'Track the hive interior and external temperature'
    },
    {
      icon: Droplets,
      title: 'Precision weight tracking',
      description: 'Monitor honey production and consumption in real-time'
    },
    {
      icon: Volume2,
      title: 'Audio analysis',
      description: 'Detect swarming, queen activity, and colony health through sound'
    },
    {
      icon: Zap,
      title: 'Solar powered',
      description: 'Sustainable energy with 6-month backup battery'
    },
    {
      icon: Wifi,
      title: '4G/WiFi connectivity',
      description: 'Real-time data transmission to cloud platform'
    },
    {
      icon: Shield,
      title: '6+ months battery life',
      description: 'Reliable operation with minimal maintenance'
    }
  ];

  const technicalSpecs = [
    {
      category: 'Dimensions',
      specs: [
        { label: 'Size', value: '442 x 394 x 60 mm' }
      ]
    },
    {
      category: 'Power Source',
      specs: [
        { label: 'Primary', value: '7V 6W solar panel' }
      ]
    },
    {
      category: 'Battery Life',
      specs: [
        { label: 'Duration', value: '6+ months (no sunlight)' }
      ]
    },
    {
      category: 'Temperature Sensor',
      specs: [
        { label: 'Range', value: '-40°C to +125°C (+/-0.5°C)' }
      ]
    },
    {
      category: 'Weight Sensor',
      specs: [
        { label: 'Capacity', value: '0-120 kg (+-100 accuracy)' }
      ]
    },
    {
      category: 'Microphone',
      specs: [
        { label: 'Type', value: 'High-fidelity IP-rated (IPX)' }
      ]
    },
    {
      category: 'Connectivity',
      specs: [
        { label: 'Options', value: '4G/WiFi/LoRa/BLE/mesh' }
      ]
    },
    {
      category: 'Range',
      specs: [
        { label: 'Distance', value: 'Up to 100m (LoRa)' }
      ]
    },
    {
      category: 'Data Storage',
      specs: [
        { label: 'Capacity', value: 'Multi-device, remote reporting' }
      ]
    }
  ];

  const useCases = [
    'Monitor honey yield, collection and consumption',
    'Early detection of swarming events',
    'Identify colony and nest changes',
    'Track brood expansion and reduction cycles',
    'Reduce theft activity patterns',
    'Compare productivity across multiple locations',
    'Optimize harvest timing for maximum yield',
    'Weather impact and colony behavior',
    'Optimize harvest timing for maximum yield'
  ];

  const installationSteps = [
    {
      step: 1,
      title: 'Unbox & Prepare',
      description: 'Remove device from packaging and ensure all components are included. Check battery charge level.'
    },
    {
      step: 2,
      title: 'Position Under Hive',
      description: 'Place the Smart Nyuki Base under your beehive on a level surface. Ensure proper weight distribution.'
    },
    {
      step: 3,
      title: 'Connect to Power',
      description: 'Position solar panel for maximum sun exposure. Connect power cables securely to the device.'
    },
    {
      step: 4,
      title: 'Activate & Configure',
      description: 'Turn on the device and follow app instructions to connect via WiFi or 4G. Register your hive in the app.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-yellow-100">
        <div className="container-custom">
          <div className="text-center mb-4">
            <span className="inline-block bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              FLAGSHIP PRODUCT
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-6">
            Smart Nyuki Base
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-8">
            The Smart Nyuki Base is an automatic measurement system that you place under your hive. The built-in sensors turn on every 15 minutes to measure key metrics and send data to your Smart Nyuki app, giving you 24/7 insights into your bees' health and productivity.
          </p>
        </div>
      </section>

      {/* Product Image & Key Features */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/images/smart-nyuki-base-product.jpg" 
                alt="Smart Nyuki Base Device" 
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
              <div className="space-y-6">
                {keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-yellow-600" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
            <p className="text-xl text-gray-600">
              Engineered for reliability and precision in African conditions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {technicalSpecs.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-3">
                  {section.category}
                </h3>
                {section.specs.map((spec, specIndex) => (
                  <div key={specIndex} className="mb-3 last:mb-0">
                    <p className="text-sm text-gray-500 mb-1">{spec.label}</p>
                    <p className="font-semibold text-gray-900">{spec.value}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <Shield className="text-blue-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Built for African Conditions</h4>
                <p className="text-gray-600">
                  Weatherproof IP65 rating, operating temperature range of -20°C to +60°C, and dust-resistant design. 
                  Tested extensively in Kenya, Uganda, and Tanzania to ensure reliability in diverse climates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications & Use Cases */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Applications & Use Cases
              </h2>
              <p className="text-gray-600 mb-8">
                The sensors provide a comprehensive range of measurement possibilities for understanding hive behavior and securing best beekeeping operations.
              </p>
              <ul className="space-y-4">
                {useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="text-yellow-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-600">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img 
                src="/images/beehives-field.jpg" 
                alt="Multiple beehives in the field" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Easy to Install</h2>
            <p className="text-xl text-gray-600">
              The Smart Nyuki Base installs in less than 15 minutes with no technical expertise required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {installationSteps.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
            <p className="text-gray-600 mb-4">
              We provide detailed installation guides and video tutorials for support center.
            </p>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
              View Installation Guide
            </button>
          </div>
        </div>
      </section>

      {/* Wireless Data Transmission */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="/images/data-transmission.jpg" 
                alt="Wireless connectivity" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg mb-6">
                <Wifi className="text-blue-600" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Wireless Data Transmission
              </h2>
              <p className="text-gray-600 mb-4">
                Data is transmitted via 4G/WiFi network to your Smart Nyuki app. Works perfectly in areas without WiFi by using GSM cellular network. If your location has LoRa gateway, you can opt for ultra-low power LoRaWAN for even better battery life.
              </p>
              <p className="text-gray-600 mb-4">
                With built-in mesh networking capability, one base unit can relay data for hives up to 100m away, reducing connectivity costs.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-gray-700 font-semibold">
                  ✓ Data stored locally for 7 days if connection is lost
                </p>
                <p className="text-gray-700 font-semibold">
                  ✓ Automatic sync when connectivity is restored
                </p>
                <p className="text-gray-700 font-semibold">
                  ✓ SMS alerts as backup for critical events
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Will My Hive Fit? */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Will My Hive Fit?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The Smart Nyuki Base fits almost all common Kenyan hive types including Langstroth, Kenya Top Bar Hives, and Custom Hives. The base comes with adjustable clamps to secure it to different bottom surfaces and hive types. Whether standard Langstroth or unique artisan hives, we've got you covered.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-bold text-gray-900 mb-2">Langstroth Hives</h3>
              <p className="text-sm text-gray-600">Standard 10-frame and 8-frame boxes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-bold text-gray-900 mb-2">Top Bar Hives</h3>
              <p className="text-sm text-gray-600">Kenya TBH and custom designs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="font-bold text-gray-900 mb-2">Custom Hives</h3>
              <p className="text-sm text-gray-600">Adaptable to unique configurations</p>
            </div>
          </div>

          <div className="bg-yellow-50 border-2 border-yellow-200 p-6 rounded-xl max-w-3xl mx-auto text-center">
            <p className="text-gray-700 font-semibold mb-2">
              Not sure if your hive will fit? Contact our team!
            </p>
            <p className="text-gray-600 mb-4">
              We offer free consultation to ensure compatibility with your setup.
            </p>
            <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </section>

      {/* Pricing & Purchase CTA */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-12 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Get Your Smart Nyuki Base Today
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join hundreds of beekeepers who have transformed their operations with smart technology.
                </p>
                
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-xl mb-8">
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    KSh 24,999
                  </div>
                  <p className="text-gray-600 mb-4">One-time purchase • Lifetime updates</p>
                  <div className="space-y-2 text-left max-w-md mx-auto">
                    <div className="flex items-center gap-2">
                      <Check className="text-green-600" size={20} />
                      <span className="text-gray-700">Smart Nyuki Base device</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="text-green-600" size={20} />
                      <span className="text-gray-700">Solar panel & mounting kit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="text-green-600" size={20} />
                      <span className="text-gray-700">Free Smart Nyuki app access</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="text-green-600" size={20} />
                      <span className="text-gray-700">2-year warranty</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="text-green-600" size={20} />
                      <span className="text-gray-700">Free installation support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check className="text-green-600" size={20} />
                      <span className="text-gray-700">1 year free data connectivity</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-yellow-500 text-white px-10 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors text-lg">
                    Order Now
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors text-lg">
                    Request Demo
                  </button>
                </div>

                <p className="text-sm text-gray-500 mt-6">
                  Volume discounts available for 10+ units • Financing options available
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold text-gray-900 cursor-pointer">
                How long does installation take?
              </summary>
              <p className="text-gray-600 mt-4">
                Installation typically takes 10-15 minutes per hive. Simply place the base under your hive, position the solar panel, and activate the device through the app.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold text-gray-900 cursor-pointer">
                What happens if my internet connection is lost?
              </summary>
              <p className="text-gray-600 mt-4">
                The device stores up to 7 days of data locally. When connectivity is restored, all data syncs automatically. Critical alerts can also be sent via SMS as a backup.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold text-gray-900 cursor-pointer">
                How accurate is the weight measurement?
              </summary>
              <p className="text-gray-600 mt-4">
                The precision weight scale has an accuracy of ±100g, which is sufficient to track honey production, consumption patterns, and detect swarming events.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold text-gray-900 cursor-pointer">
                Is the device weatherproof?
              </summary>
              <p className="text-gray-600 mt-4">
                Yes, the Smart Nyuki Base has an IP65 rating, making it dust-tight and protected against water jets. It's designed to withstand African weather conditions including heavy rain and extreme heat.
              </p>
            </details>

            <details className="bg-white p-6 rounded-lg shadow-sm">
              <summary className="font-bold text-gray-900 cursor-pointer">
                What warranty do you offer?
              </summary>
              <p className="text-gray-600 mt-4">
                We offer a 2-year warranty covering manufacturing defects and hardware failures. We also provide a 30-day money-back guarantee if you're not satisfied.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartBasePage;
