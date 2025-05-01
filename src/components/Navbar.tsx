
import React from 'react';
import { Button } from '@/components/ui/button';
import { Music2, Users, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="border-b border-slate-700 bg-melody-dark-bg">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Music2 className="h-6 w-6 text-melody-purple" />
          <span className="font-bold text-xl bg-clip-text text-transparent bg-purple-gradient">MelodyFlow</span>
        </div>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#features" className="text-sm font-medium text-white hover:text-melody-purple transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm font-medium text-white hover:text-melody-purple transition-colors">How It Works</a>
          <a href="#pricing" className="text-sm font-medium text-white hover:text-melody-purple transition-colors">Pricing</a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex">Sign In</Button>
          <Button className="bg-gradient-to-r from-melody-purple to-melody-dark-purple hover:opacity-90 transition-opacity">
            Get Started
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
