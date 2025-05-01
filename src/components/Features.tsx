
import React from 'react';
import { Circle, Music, MessageSquare, Video, Share2 } from 'lucide-react';

const featuresList = [
  {
    icon: <Music className="h-6 w-6" />,
    title: "Real-time Track Editing",
    description: "Edit audio tracks simultaneously with multiple collaborators, with changes synced instantly."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Integrated Chat",
    description: "Communicate with your team via text chat without leaving the workspace."
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Audio & Video Calls",
    description: "Discuss ideas face-to-face with built-in audio and video call functionality."
  },
  {
    icon: <Share2 className="h-6 w-6" />,
    title: "Seamless File Sharing",
    description: "Upload, download, and share audio files and project data with ease."
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Everything You Need to <span className="bg-clip-text text-transparent bg-purple-gradient">Create Together</span>
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Our platform offers a comprehensive suite of tools designed specifically for music collaboration.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {featuresList.map((feature, index) => (
          <div 
            key={index}
            className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700 p-8 rounded-xl overflow-hidden group hover:border-melody-purple/50 transition-colors"
          >
            <div className="mb-4 p-3 bg-melody-dark-bg rounded-lg w-fit border border-slate-700">
              {React.cloneElement(feature.icon, { className: "h-6 w-6 text-melody-purple" })}
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-300">{feature.description}</p>
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-melody-purple to-melody-dark-purple w-0 group-hover:w-full transition-all duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
