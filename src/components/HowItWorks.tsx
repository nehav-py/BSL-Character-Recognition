
import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-custom-blue">
            How It Works
          </h2>
          <p className="text-lg text-custom-text max-w-2xl mx-auto">
            Our advanced BSL recognition system uses deep learning and computer vision to transform the way we understand sign language.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Step 1 */}
          <div className="lg:col-span-3 bg-custom-gray rounded-2xl p-8 border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-custom-blue opacity-10 rounded-full blur-3xl"></div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="shrink-0">
                <div className="w-24 h-24 bg-custom-blue/10 rounded-xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-custom-blue">1</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-custom-blue">Data Collection &amp; Preprocessing</h3>
                <p className="text-custom-text mb-4">
                  Our system starts with a comprehensive dataset of BSL characters. Each image in the dataset undergoes preprocessing to normalize lighting, size, and position, ensuring consistent input for the AI model.
                </p>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-xs text-custom-blue mb-1">PREPROCESSING PIPELINE</div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="px-3 py-1 rounded-full bg-custom-blue/20 text-sm text-custom-blue">Image Normalization</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-blue">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    <div className="px-3 py-1 rounded-full bg-custom-blue/20 text-sm text-custom-blue">Background Removal</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-blue">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                    <div className="px-3 py-1 rounded-full bg-custom-blue/20 text-sm text-custom-blue">Feature Extraction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="lg:col-span-2 bg-custom-gray rounded-2xl p-8 border border-gray-200 relative overflow-hidden">
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-custom-blue opacity-10 rounded-full blur-3xl"></div>
            <div className="flex flex-col gap-8">
              <div className="shrink-0">
                <div className="w-24 h-24 bg-custom-blue/10 rounded-xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-custom-blue">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-custom-blue">Model Training</h3>
                <p className="text-custom-text mb-4">
                  We train a convolutional neural network (CNN) on thousands of BSL character images. The model learns to identify unique features of each sign through multiple convolutional layers.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-custom-blue">Model Architecture:</span>
                  <span className="text-custom-blue font-mono">CNN + ResNet</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="lg:col-span-2 bg-custom-gray rounded-2xl p-8 border border-gray-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 -ml-10 -mt-10 w-40 h-40 bg-custom-blue opacity-10 rounded-full blur-3xl"></div>
            <div className="flex flex-col gap-8">
              <div className="shrink-0">
                <div className="w-24 h-24 bg-custom-blue/10 rounded-xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-custom-blue">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-custom-blue">Real-time Detection</h3>
                <p className="text-custom-text mb-4">
                  The system uses computer vision to detect and isolate hand gestures in real-time from webcam input, tracking hand movements even in complex environments.
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-custom-blue">Detection Rate:</span>
                  <span className="text-custom-blue font-mono">30+ FPS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="lg:col-span-3 bg-custom-gray rounded-2xl p-8 border border-gray-200 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-40 h-40 bg-custom-blue opacity-10 rounded-full blur-3xl"></div>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="shrink-0">
                <div className="w-24 h-24 bg-custom-blue/10 rounded-xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-custom-blue">4</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-custom-blue">Character Mapping &amp; Output</h3>
                <p className="text-custom-text mb-4">
                  Once a gesture is recognized, the system maps it to the corresponding BSL character. The result is displayed instantly, enabling real-time communication and translation.
                </p>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {['A', 'B', 'C', 'D', 'E', 'F'].map((letter) => (
                    <div key={letter} className="aspect-square flex items-center justify-center rounded-lg border border-gray-300 bg-white">
                      <span className="text-2xl font-bold text-custom-blue">{letter}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
