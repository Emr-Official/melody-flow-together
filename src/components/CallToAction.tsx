
import React from 'react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-16 container">
      <div className="relative bg-gradient-to-r from-melody-purple/20 to-melody-dark-purple/20 backdrop-blur-sm rounded-2xl overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNjAgMEgwVjYwSDYwVjBaIiBmaWxsPSJ1cmwoI3BhaW50MF9yYWRpYWwpIi8+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJwYWludDBfcmFkaWFsIiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDMwIDMwKSByb3RhdGUoOTApIHNjYWxlKDMwKSI+PHN0b3Agb2Zmc2V0PSIwLjE1NjI1IiBzdG9wLWNvbG9yPSJ3aGl0ZSIgc3RvcC1vcGFjaXR5PSIwLjA0Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOGI1Y2YwIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48L3N2Zz4=')]"></div>
        
        <div className="relative p-8 md:p-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your <span className="bg-clip-text text-transparent bg-purple-gradient">Music Collaboration</span>?
            </h2>
            
            <p className="text-lg text-gray-200 mb-8">
              Join thousands of musicians who are already creating amazing music together on MelodyFlow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-melody-purple hover:bg-melody-dark-purple text-lg py-6 px-8">
                Start Your Free Trial
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10 text-lg py-6 px-8">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
