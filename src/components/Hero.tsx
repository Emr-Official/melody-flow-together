
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Waveform from './Waveform';

const Hero = () => {
  return (
    <section className="py-20 md:py-32 container">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Collaborate in Real-Time on 
          <span className="bg-clip-text text-transparent bg-purple-gradient"> Music Projects</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          A seamless platform for musicians, producers, and songwriters to create, 
          edit, and share music together from anywhere in the world.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button className="bg-gradient-to-r from-melody-purple to-melody-dark-purple hover:opacity-90 transition-opacity text-lg py-6 px-8">
            Start Collaborating
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" className="border-melody-purple text-melody-purple hover:bg-melody-purple/10 text-lg py-6 px-8">
            How It Works
          </Button>
        </div>

        <div className="w-full relative">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-melody-purple/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-melody-blue/20 rounded-full blur-3xl"></div>
          <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
            <div className="p-3 bg-slate-900/80 border-b border-slate-700 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-melody-red"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-center font-medium flex-1 pr-6">MelodyFlow - Collaborative Project</div>
            </div>
            <div className="p-6">
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="w-32 md:w-40 text-sm font-semibold bg-slate-700/50 text-white p-2 rounded-l-md">
                    Vocals
                  </div>
                  <div className="flex-1 bg-slate-700/20 rounded-r-md p-2 flex items-center justify-center">
                    <Waveform />
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-32 md:w-40 text-sm font-semibold bg-slate-700/50 text-white p-2 rounded-l-md">
                    Guitar
                  </div>
                  <div className="flex-1 bg-slate-700/20 rounded-r-md p-2 flex items-center justify-center">
                    <Waveform />
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-32 md:w-40 text-sm font-semibold bg-slate-700/50 text-melody-purple p-2 rounded-l-md flex items-center justify-between">
                    <span>Bass</span>
                    <span className="w-2 h-2 bg-melody-purple rounded-full animate-pulse-light"></span>
                  </div>
                  <div className="flex-1 bg-slate-700/20 rounded-r-md p-2 flex items-center justify-center">
                    <Waveform active={true} />
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-32 md:w-40 text-sm font-semibold bg-slate-700/50 text-white p-2 rounded-l-md">
                    Drums
                  </div>
                  <div className="flex-1 bg-slate-700/20 rounded-r-md p-2 flex items-center justify-center">
                    <Waveform />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
