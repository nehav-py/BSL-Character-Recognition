import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-custom-gray to-white"></div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-custom-blue opacity-10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-custom-blue opacity-10 blur-[100px] rounded-full"></div>
          
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-custom-blue">
              Ready to Break Communication Barriers?
            </h2>
            
            <p className="text-lg md:text-xl text-custom-text max-w-2xl mx-auto mb-8">
              Join thousands of users who are already using our BSL recognition technology to make communication more accessible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                className="bg-white hover:bg-gray-100 text-black border border-gray-300 px-6 py-6 text-lg rounded-lg"
              >
                Get Started Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-custom-blue text-custom-blue hover:bg-custom-blue hover:text-white px-6 py-6 text-lg rounded-lg"
              >
                View Documentation
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-green">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span className="text-custom-text">Free to use</span>
              </div>
              
              <div className="w-1.5 h-1.5 rounded-full bg-custom-blue"></div>
              
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-green">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span className="text-custom-text">No installation needed</span>
              </div>
              
              <div className="w-1.5 h-1.5 rounded-full bg-custom-blue"></div>
              
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-custom-green">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                <span className="text-custom-text">Works on all devices</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
