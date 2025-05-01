
import React from 'react';
import { Users, Music4, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Create a Project & Invite Collaborators",
    description: "Start a new music project and invite your team to collaborate in real-time."
  },
  {
    icon: <Music4 className="h-8 w-8" />,
    title: "Record, Upload & Edit Tracks",
    description: "Record directly in your browser or upload existing files, then edit them together."
  },
  {
    icon: <MessageCircle className="h-8 w-8" />,
    title: "Communicate & Perfect Your Sound",
    description: "Use chat, audio, and video calls to discuss ideas and refine your creation."
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-slate-900/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="bg-clip-text text-transparent bg-purple-gradient">MelodyFlow</span> Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our streamlined workflow makes remote collaboration as easy as being in the same studio.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 relative">
              <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-xl h-full">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-melody-purple/20 rounded-full blur-xl"></div>
                    <div className="relative bg-slate-800 border border-melody-purple text-melody-purple rounded-full p-4">
                      {React.cloneElement(step.icon, { className: "h-8 w-8" })}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-melody-dark-purple flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-300 text-center">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-0 md:rotate-[-20deg]">
                  <svg width="40" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
