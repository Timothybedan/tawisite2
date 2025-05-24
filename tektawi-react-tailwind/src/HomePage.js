// src/pages/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
      {/* Header */}
      <header className="p-6 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide">
          <span className="text-lime-400">T</span>
          <span className="transform -scale-y-100 inline-block text-lime-400">T</span>
        </div>
        <nav className="space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-lime-400">About</a>
          <a href="#services" className="hover:text-lime-400">Solutions</a>
          <a href="#contact" className="hover:text-lime-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
          African Tech<br />
          <span className="text-lime-400">Rooted. Refined. Reimagined.</span>
        </h1>
        <p className="text-gray-300 max-w-xl mb-6">
          Tektawi empowers sustainable futures through clean energy innovation and environmental engineering, tailored for Africa’s tomorrow.
        </p>
        <a href="#contact" className="bg-lime-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-lime-300 transition">
          Let’s Collaborate
        </a>
      </main>

      {/* Footer */}
      <footer className="text-sm text-gray-500 text-center py-6 border-t border-gray-700">
        © {new Date().getFullYear()} Tektawi Co. — REN.SUST.ENERG.
      </footer>
    </div>
  );
};

export default HomePage;
