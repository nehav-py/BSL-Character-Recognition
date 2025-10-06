import React from "react";
import WebcamCapture from "./WebcamCapture";

const DemoSection: React.FC = () => {
  return (
    <section className="py-20 bg-transparent relative" id="demo">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-custom-blue opacity-5 blur-[150px] rounded-full"></div>
        <div className="absolute top-0 left-1/4 w-1/4 h-1/4 bg-custom-orange opacity-5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container px-4 mx-auto relative">
        {/* BSL Example Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-custom-blue">
            Example for BSL
          </h2>
          <img 
            src="/lovable-uploads/6b0cebe4-4933-4fd1-8b48-b92a430a208e.png" 
            alt="BSL alphabet example showing hand signs"
            className="mx-auto max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 text-custom-blue">
            Try It Yourself
          </h2>
          <p className="text-lg text-custom-text max-w-2xl mx-auto">
            Experience our BSL character recognition technology in action. Enable your camera and sign a letter to see instant recognition results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="gradient-border p-1 rounded-xl bg-custom-gray">
            <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <WebcamCapture />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-bold mb-4 text-custom-blue">How to use the demo:</h3>
                  <ol className="space-y-4 text-custom-text">
                    <li className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-custom-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm text-custom-orange font-medium">1</span>
                      </div>
                      <span>Click "Start Camera" to enable your webcam</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-custom-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm text-custom-orange font-medium">2</span>
                      </div>
                      <span>Position your hand in the frame and form a BSL letter</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-custom-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm text-custom-orange font-medium">3</span>
                      </div>
                      <span>Click "Recognize Sign" to detect the letter</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-custom-orange/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-sm text-custom-orange font-medium">4</span>
                      </div>
                      <span>See the predicted letter appear instantly</span>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-custom-gray rounded-xl p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-custom-blue">BSL Alphabet Reference</h3>
            <div className="grid grid-cols-5 sm:grid-cols-9 gap-2">
              {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter) => (
                <div key={letter} className="aspect-square flex items-center justify-center rounded-lg bg-white border border-gray-300 hover:border-custom-orange hover:bg-custom-orange/10 transition duration-200 cursor-pointer">
                  <span className="text-2xl font-bold text-custom-blue">{letter}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
