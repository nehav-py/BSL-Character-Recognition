
import React from "react";

const FeatureSection: React.FC = () => {
  return (
    <section className="py-20 bg-custom-gray" id="features">
      <div className="container px-4 mx-auto">
        {/* BSL Alphabet Chart */}
        <div className="mb-12 text-center">
          <img 
            src="/lovable-uploads/eeb4bf2e-8815-4181-9b2e-b3cdb89a68f8.png" 
            alt="British Sign Language Alphabet Chart showing hand signs for letters A-Z"
            className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-custom-blue">
            Advanced Features
          </h2>
          <p className="text-lg text-custom-text max-w-2xl mx-auto">
            Our BSL recognition system combines cutting-edge technology with user-friendly design to make sign language more accessible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-custom-blue/50 transition-all duration-300 shadow-sm">
            <div className="w-14 h-14 bg-custom-blue/10 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-blue">
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>
                <path d="M7 9h10"/>
                <path d="M12 12h5"/>
                <path d="M7 12h2"/>
                <path d="M7 3v4"/>
                <path d="M7 21v-3"/>
                <path d="M17 3v4"/>
                <path d="M17 21v-3"/>
                <path d="M4 9v8h16V9A2 2 0 0 0 18 7H6a2 2 0 0 0-2 2Z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-custom-blue">Convolutional Neural Networks</h3>
            <p className="text-custom-text">
              Our model utilizes advanced CNN architecture specifically optimized for gesture and sign recognition, ensuring high accuracy even in challenging lighting conditions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-custom-blue/50 transition-all duration-300 shadow-sm">
            <div className="w-14 h-14 bg-custom-blue/10 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-blue">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-custom-blue">Multi-platform Accessibility</h3>
            <p className="text-custom-text">
              Access our BSL recognition system across all devices and platforms, from desktop browsers to mobile applications, ensuring accessibility wherever you are.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-custom-blue/50 transition-all duration-300 shadow-sm">
            <div className="w-14 h-14 bg-custom-blue/10 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-blue">
                <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-custom-blue">Extensive BSL Dataset</h3>
            <p className="text-custom-text">
              Trained on a comprehensive dataset of British Sign Language characters, ensuring recognition accuracy across different signing styles and variations.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-custom-blue/50 transition-all duration-300 shadow-sm">
            <div className="w-14 h-14 bg-custom-blue/10 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-blue">
                <path d="m12 14 4-4"/>
                <path d="M3.34 19a10 10 0 1 1 17.32 0"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-custom-blue">Low-latency Processing</h3>
            <p className="text-custom-text">
              Our optimized algorithms deliver real-time recognition with minimal delay, making communication seamless and natural.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-custom-blue/50 transition-all duration-300 shadow-sm">
            <div className="w-14 h-14 bg-custom-blue/10 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-blue">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-custom-blue">Privacy-focused Design</h3>
            <p className="text-custom-text">
              All processing happens locally on your device, ensuring your sign language communication remains private and secure.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-custom-blue/50 transition-all duration-300 shadow-sm">
            <div className="w-14 h-14 bg-custom-blue/10 rounded-xl flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-blue">
                <path d="M17 7.82v-.82a5 5 0 0 0-10 0v.82m10 0c.24.38.44.79.6 1.23.17.44.3.9.4 1.38.1.47.15.96.15 1.45 0 2.07-.67 3.96-1.81 5.5"/>
                <path d="M16.2 15.65c-.95 1.19-2.19 2.12-3.6 2.67s-2.94.53-4.4-.11c-1.47-.63-2.69-1.77-3.48-3.26-.79-1.48-1.07-3.2-.81-4.94.26-1.75 1.04-3.35 2.2-4.58"/>
                <path d="M5 7.82v-.82"/>
                <path d="M14.9 16.5c-.33.46-.69.88-1.1 1.24-.67.59-1.43 1.02-2.3 1.26"/>
                <path d="m9.11 7.48 1.56.32L12 7M10.67 19c-1.1 0-2.13-.45-3.01-1.38"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-custom-blue">Continuous Learning</h3>
            <p className="text-custom-text">
              Our model improves over time by continuously learning from new data, ensuring ever-increasing accuracy and recognition capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
