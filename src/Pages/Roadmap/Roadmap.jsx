import { FaSeedling, FaLeaf, FaHandsHelping, FaChartLine, FaGlobeAsia, FaUsers } from "react-icons/fa";

const Roadmap = () => {
  const roadmapData = [
    {
      phase: "Phase 1",
      title: "Foundation & Launch",
      period: "2023 - 2024",
      description: "Establish the core platform and connect local farmers with consumers in Bangladesh.",
      goals: [
        "Launch MVP with basic farmer-consumer connection",
        "Onboard 100+ local farmers",
        "Establish partnerships with 5 agricultural cooperatives",
        "Implement secure payment system",
        "Achieve 1,000+ registered users"
      ],
      status: "completed"
    },
    {
      phase: "Phase 2",
      title: "Growth & Expansion",
      period: "2024 - 2025",
      description: "Expand our reach and enhance platform capabilities.",
      goals: [
        "Extend services to 5 additional districts",
        "Introduce mobile app for iOS and Android",
        "Launch farmer education programs",
        "Implement real-time inventory tracking",
        "Achieve 10,000+ active users"
      ],
      status: "in-progress"
    },
    {
      phase: "Phase 3",
      title: "National Scale",
      period: "2025 - 2026",
      description: "Scale operations across Bangladesh with advanced features.",
      goals: [
        "Expand to all major agricultural regions",
        "Introduce AI-powered crop recommendations",
        "Launch Krishi Bondhu Marketplace",
        "Implement blockchain for supply chain transparency",
        "Connect 50,000+ farmers nationwide"
      ],
      status: "upcoming"
    },
    {
      phase: "Phase 4",
      title: "Regional Expansion",
      period: "2026 - 2028",
      description: "Expand beyond Bangladesh to neighboring countries.",
      goals: [
        "Enter markets in India and Nepal",
        "Establish cross-border logistics network",
        "Launch multilingual platform support",
        "Partner with international agricultural organizations",
        "Achieve 100,000+ farmers across regions"
      ],
      status: "upcoming"
    }
  ];

  const visionData = [
    {
      icon: <FaSeedling className="text-3xl text-green-600" />,
      title: "Empowering Farmers",
      description: "Providing farmers with tools and market access to improve their livelihoods and income."
    },
    {
      icon: <FaLeaf className="text-3xl text-green-600" />,
      title: "Sustainable Agriculture",
      description: "Promoting eco-friendly farming practices and supporting organic agriculture."
    },
    {
      icon: <FaHandsHelping className="text-3xl text-green-600" />,
      title: "Community Building",
      description: "Creating a strong community of farmers, consumers, and agricultural experts."
    },
    {
      icon: <FaChartLine className="text-3xl text-green-600" />,
      title: "Economic Growth",
      description: "Contributing to the local and national economy through agricultural innovation."
    },
    {
      icon: <FaGlobeAsia className="text-3xl text-green-600" />,
      title: "Regional Impact",
      description: "Expanding our positive impact across South Asia and beyond."
    },
    {
      icon: <FaUsers className="text-3xl text-green-600" />,
      title: "Food Security",
      description: "Ensuring access to fresh, nutritious food for communities across the region."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen py-10 animate__animated animate__fadeIn">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 animate__animated animate__fadeInDown">
            Our Roadmap & Vision
          </h1>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
            Building a sustainable future for agriculture and communities
          </p>
        </div>

        {/* Vision Section */}
        <div className="max-w-6xl mx-auto mb-20 animate__animated animate__fadeInUp">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Vision</h2>
            <p className="text-gray-700 text-lg mb-10 text-center max-w-4xl mx-auto">
              At Krishi Bondhu, we envision a world where farmers are empowered, communities are nourished, 
              and agriculture thrives sustainably. Our mission is to bridge the gap between rural producers 
              and urban consumers, creating a transparent, efficient, and equitable marketplace.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visionData.map((vision, index) => (
                <div 
                  key={index} 
                  className="bg-green-50 p-6 rounded-xl border border-green-100 transform transition-all duration-300 hover:scale-105"
                >
                  <div className="flex justify-center mb-4">
                    {vision.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{vision.title}</h3>
                  <p className="text-gray-600 text-center">{vision.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-xl font-semibold mb-2">Transparency</h4>
                  <p>Open and honest communication between all stakeholders in our ecosystem.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Sustainability</h4>
                  <p>Promoting environmentally responsible practices for long-term agricultural health.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Inclusivity</h4>
                  <p>Ensuring equal opportunities for all farmers regardless of size or location.</p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Innovation</h4>
                  <p>Continuously improving through technology and creative solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="max-w-6xl mx-auto animate__animated animate__fadeInUp animate__delay-1s">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Journey Ahead</h2>
            <p className="text-gray-700 text-lg mb-12 text-center max-w-4xl mx-auto">
              Our roadmap outlines the strategic steps we&#39;re taking to achieve our vision and create lasting impact 
              in the agricultural sector. Each phase builds upon the previous one, expanding our reach and capabilities.
            </p>
            
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden md:block"></div>
              
              <div className="space-y-12">
                {roadmapData.map((phase, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                  >
                    <div className="md:w-1/2 mb-6 md:mb-0 md:px-8">
                      <div className={`p-6 rounded-2xl shadow-lg ${
                        phase.status === 'completed' ? 'bg-green-50 border border-green-200' : 
                        phase.status === 'in-progress' ? 'bg-yellow-50 border border-yellow-200' : 
                        'bg-blue-50 border border-blue-200'
                      }`}>
                        <div className="flex justify-between items-start mb-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            phase.status === 'completed' ? 'bg-green-500 text-white' : 
                            phase.status === 'in-progress' ? 'bg-yellow-500 text-white' : 
                            'bg-blue-500 text-white'
                          }`}>
                            {phase.phase}
                          </span>
                          <span className="text-gray-500 font-medium">{phase.period}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{phase.title}</h3>
                        <p className="text-gray-600 mb-4">{phase.description}</p>
                        <ul className="space-y-2">
                          {phase.goals.map((goal, goalIndex) => (
                            <li key={goalIndex} className="flex items-start">
                              <span className={`mr-2 mt-1 ${
                                phase.status === 'completed' ? 'text-green-500' : 
                                phase.status === 'in-progress' ? 'text-yellow-500' : 
                                'text-blue-500'
                              }`}>•</span>
                              <span className="text-gray-700">{goal}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="hidden md:flex md:w-1/2 justify-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        phase.status === 'completed' ? 'bg-green-500' : 
                        phase.status === 'in-progress' ? 'bg-yellow-500' : 
                        'bg-blue-500'
                      }`}>
                        <div className="w-4 h-4 rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-20 text-center animate__animated animate__fadeInUp animate__delay-2s">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Us on This Journey</h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
              Whether you&#39;re a farmer looking to expand your market reach or a consumer seeking fresh, 
              local produce, Krishi Bondhu is here to serve you. Together, we can build a more sustainable 
              and equitable food system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Become a Farmer Partner
              </button>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Start Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;