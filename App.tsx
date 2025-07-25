import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { GameProvider } from './contexts/GameContext';
import HomePage from './pages/HomePage';
import SetupPage from './pages/SetupPage';
import GamePage from './pages/GamePage';
import Header from './components/Header';

const AppContent = () => (
  <HashRouter>
    <div className="min-h-screen bg-slate-900 text-white flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 md:p-6 lg:p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/setup" element={<SetupPage />} />
          <Route path="/game/:gameId" element={<GamePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  </HashRouter>
);

function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}

export default App;
