
import React from 'react';
import { Music2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-12 bg-melody-dark-bg">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Music2 className="h-6 w-6 text-melody-purple" />
              <span className="font-bold text-xl bg-clip-text text-transparent bg-purple-gradient">MelodyFlow</span>
            </div>
            <p className="text-gray-400 mb-4">
              Real-time music collaboration for modern creators.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-melody-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-melody-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-melody-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-melody-purple transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-melody-purple transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-melody-purple transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-melody-purple transition-colors">What's New</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-melody-purple transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-melody-purple transition-colors">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-melody-purple transition-colors">Support</a></li>
              <li><a href="#" className="text-gray-400 hover:text-melody-purple transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-melody-purple transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-melody-purple transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-melody-purple transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-melody-purple transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 MelodyFlow. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 text-sm hover:text-melody-purple transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 text-sm hover:text-melody-purple transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 text-sm hover:text-melody-purple transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
