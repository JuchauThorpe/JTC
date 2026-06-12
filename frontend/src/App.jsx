import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import TopNav from './TopNav';
import WhoWeAre from './pages/WhoWeAre';
import Services from './pages/Services';
import Testimonials from './pages/Testimonials';
import ContactUs from './pages/ContactUs';

function HoldingPage() {
  const [message, setMessage] = useState('Hellowings');

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage('Hellowings'));
  }, []);

  return (
    <main className="holding-page">
      <div className="content">
        <h1>{message}</h1>
        <p>Something exciting is on its way.</p>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="app-shell">

      <TopNav />

      <div className="app-body">

        {/* Left sidebar */}
        <nav className="left-nav">
          {/* Left menu goes here */}
        </nav>

        {/* Page content */}
        <Routes>
          <Route path="/"              element={<HoldingPage />} />
          <Route path="/who-we-are"    element={<WhoWeAre />} />
          <Route path="/services"      element={<Services />} />
          <Route path="/testimonials"  element={<Testimonials />} />
          <Route path="/contact-us"    element={<ContactUs />} />
        </Routes>

      </div>
    </div>
  );
}
