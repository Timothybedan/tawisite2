import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="p-6 bg-green-900 text-white shadow-md">
        <h1 className="text-3xl font-bold">TekTawi</h1>
        <p className="text-sm">African tech</p>
      </header>

      <section className="p-6 text-center bg-green-50">
        <h2 className="text-2xl font-semibold">Powering Africa’s future through smart, sustainable energy solutions.</h2>
        <div className="mt-4">
          <button className="mr-2 bg-green-700 text-white px-4 py-2 rounded">Request a Free Consultation</button>
          <button className="border border-green-700 text-green-700 px-4 py-2 rounded">Explore Our Services</button>
        </div>
      </section>

      <section className="p-6 grid md:grid-cols-3 gap-4">
        {['Solar PV & Thermal', 'Wind Energy', 'Biogas', 'Energy Audits', 'EIA Services'].map(service => (
          <div key={service} className="border rounded-xl p-4 shadow-sm">
            <h3 className="text-lg font-bold mb-2">{service}</h3>
            <p className="text-sm">Learn how TekTawi delivers custom clean energy solutions for Africa.</p>
          </div>
        ))}
      </section>

      <section className="p-6 text-center bg-green-100">
        <h3 className="text-xl font-semibold mb-2">Let’s build your energy future together.</h3>
        <button className="bg-green-700 text-white px-4 py-2 rounded">Book a Consultation</button>
      </section>

      <footer className="p-6 text-center text-xs bg-green-900 text-white">
        &copy; {new Date().getFullYear()} TekTawi. All rights reserved.
      </footer>
    </main>
  );
}
