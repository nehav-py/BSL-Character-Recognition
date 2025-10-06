
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-bsl-black-dark py-10 border-t border-gray-800">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-xl bg-bsl-yellow flex items-center justify-center mr-3">
                <span className="text-bsl-black font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold">BSL Recognition</span>
            </div>
            <p className="text-gray-400 mb-6">
              Breaking barriers with British Sign Language recognition technology powered by deep learning and computer vision.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-bsl-black-light hover:bg-bsl-yellow hover:text-bsl-black transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-bsl-black-light hover:bg-bsl-yellow hover:text-bsl-black transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-bsl-black-light hover:bg-bsl-yellow hover:text-bsl-black transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-bsl-black-light hover:bg-bsl-yellow hover:text-bsl-black transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-bsl-yellow transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-bsl-yellow transition-colors">How It Works</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-bsl-yellow transition-colors">Demo</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors">API Access</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors">BSL Learning</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-lg">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} BSL Recognition. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors text-sm">Privacy Policy</a>
            <div className="w-1 h-1 rounded-full bg-gray-700"></div>
            <a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors text-sm">Terms of Service</a>
            <div className="w-1 h-1 rounded-full bg-gray-700"></div>
            <a href="#" className="text-gray-400 hover:text-bsl-yellow transition-colors text-sm">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
