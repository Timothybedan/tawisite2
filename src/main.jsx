import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans p-4">
      <header className="text-4xl font-bold text-center text-green-700 py-8">
        African Tech
      </header>
      <main className="max-w-3xl mx-auto">
        <section className="bg-green-50 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Welcome to TekTawi</h2>
          <p className="text-base">
            TekTawi blends African identity with cutting-edge renewable energy innovation.
            Our work focuses on impactful, inclusive, and clean energy engineering solutions for the continent.
          </p>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-1">Our Mission</h3>
          <p>
            Empower Africa with accessible, advanced, and culturally grounded energy solutions.
          </p>
        </section>
        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-1">Contact</h3>
          <p>Email: info@tektawi.africa</p>
        </section>
      </main>
      <footer className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} TekTawi Co. All rights reserved.
      </footer>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
