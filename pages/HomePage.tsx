import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Music, PlayCircle } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [version, setVersion] = useState('');

  useEffect(() => {
    fetch('/package.json')
      .then(response => response.json())
      .then(data => setVersion(data.version))
      .catch(error => console.error('Error fetching version:', error));
  }, []);

  const handleCreateGame = () => {
    navigate('/setup');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in relative">
        <div className="relative mb-8">
            <Music className="text-indigo-400" size={128} strokeWidth={1} />
            <PlayCircle className="absolute -bottom-4 -right-4 text-emerald-400 bg-slate-900 rounded-full" size={48} strokeWidth={1.5} />
        </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 mb-4">
        Welcome to BlindTest Pro
      </h1>
      <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
        The ultimate music quiz experience. Create your own game, invite friends, and see who has the best musical knowledge.
      </p>
      <button
        onClick={handleCreateGame}
        className="flex items-center gap-3 px-8 py-4 bg-indigo-600 text-white font-bold text-xl rounded-full shadow-lg hover:bg-indigo-500 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300"
      >
        <PlayCircle size={28} />
        Create a New Game
      </button>

      {version && (
        <footer className="absolute bottom-4 text-slate-500 text-xs">
          v{version}
        </footer>
      )}
    </div>
  );
};

export default HomePage;
