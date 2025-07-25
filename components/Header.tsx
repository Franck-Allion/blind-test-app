
import React from 'react';
import { Link } from 'react-router-dom';
import { Music2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <Music2 className="text-indigo-400" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">BlindTest Pro</span>
          </Link>
          {/* Future navigation items can go here */}
        </div>
      </div>
    </header>
  );
};

export default Header;
