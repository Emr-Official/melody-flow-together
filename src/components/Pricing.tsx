
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '0',
      description: 'Perfect for solo musicians just getting started',
      features: [
        '3 projects',
        'Basic track editor',
        'Chat functionality',
        '500MB storage',
        'Export in MP3 format'
      ],
      isPopular: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Pro',
      price: '19',
      description: 'For professionals and serious collaborators',
      features: [
        'Unlimited projects',
        'Advanced track editor',
        'Chat & video calls',
        '10GB storage',
        'Export in multiple formats',
        'Priority support'
      ],
      isPopular: true,
      buttonText: 'Start 14-Day Trial'
    },
    {
      name: 'Studio',
      price: '49',
      description: 'For studios and production teams',
      features: [
        'Everything in Pro',
        '100GB storage',
        'Admin controls',
        'Custom branding',
        'API access',
        'Dedicated support'
      ],
      isPopular: false,
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-20 container">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Simple, <span className="bg-clip-text text-transparent bg-purple-gradient">Transparent</span> Pricing
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Choose the plan that works for you and your team. No hidden fees.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div key={plan.name} className="relative">
            {plan.isPopular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-melody-purple text-white text-xs font-bold py-1 px-3 rounded-full">
                MOST POPULAR
              </div>
            )}
            <div className={`h-full bg-slate-800/40 backdrop-blur-sm border ${plan.isPopular ? 'border-melody-purple' : 'border-slate-700'} rounded-xl overflow-hidden flex flex-col`}>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-melody-purple mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-auto p-8 pt-0">
                <Button 
                  className={`w-full ${plan.isPopular ? 'bg-melody-purple hover:bg-melody-dark-purple' : 'bg-slate-700 hover:bg-slate-600'}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl text-center">
        <p className="text-lg">
          Need a custom solution? <a href="#contact" className="text-melody-purple font-semibold hover:underline">Contact our sales team</a>
        </p>
      </div>
    </section>
  );
};

export default Pricing;
