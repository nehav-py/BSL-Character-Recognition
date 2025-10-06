
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 md:py-28 bg-transparent">
      {/* Background gradient */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-custom-turquoise opacity-5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-custom-blue opacity-5 blur-[100px] rounded-full"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-50 border border-custom-blue/20">
            <span className="text-sm text-custom-blue">AI-Powered Sign Language Recognition</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight text-custom-blue">
            British Sign Language (BSL) Character Recognition
          </h1>
          
          <p className="text-lg md:text-xl text-custom-text max-w-2xl mb-10">
            Our advanced computer vision system recognizes BSL characters in real-time,
            making communication more accessible for everyone.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              onClick={() => handleScroll("demo")}
              className="bg-custom-orange hover:bg-orange-600 text-white px-6 py-6 text-lg rounded-lg font-semibold"
            >
              Try It Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              onClick={() => handleScroll("how-it-works")}
              variant="outline" 
              className="border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white px-6 py-6 text-lg rounded-lg"
            >
              Learn How It Works
            </Button>
          </div>
          
          <div className="rounded-xl border-2 border-custom-blue/20 p-6 bg-custom-gray shadow-lg max-w-5xl backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-custom-blue/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-blue">
                    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                    <circle cx="12" cy="13" r="3"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-custom-turquoise">Real-time Recognition</h3>
                <p className="text-custom-text">Instantly identifies BSL characters through your webcam with high accuracy.</p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-custom-blue/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-blue">
                    <circle cx="6" cy="12" r="4"/>
                    <circle cx="18" cy="12" r="4"/>
                    <line x1="6" y1="16" x2="18" y2="16"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-custom-turquoise">Deep Learning Powered</h3>
                <p className="text-custom-text">Trained on diverse datasets for reliable character-level recognition.</p>
              </div>
              
              <div className="p-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-custom-blue/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-blue">
                    <path d="M21 15V6"/>
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                    <path d="M12 12H3"/>
                    <path d="M16 6H3"/>
                    <path d="M12 18H3"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-custom-turquoise">Easy Integration</h3>
                <p className="text-custom-text">Simple API to integrate with your existing applications or websites.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
