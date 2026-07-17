import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import FloatingButtons from './components/Common/FloatingButtons';
import ScrollToTop from './components/Common/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Rooms from './pages/Rooms';
import Restaurant from './pages/Restaurant';
import Banquet from './pages/Banquet';
import Gallery from './pages/Gallery';
import Attractions from './pages/Attractions';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Reviews from './pages/Reviews';
import FAQs from './pages/FAQs';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <LanguageProvider>
      <BookingProvider>
        <Router>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/restaurant" element={<Restaurant />} />
                <Route path="/banquet" element={<Banquet />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/attractions" element={<Attractions />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </main>
            <Footer />
            <FloatingButtons />
          </div>
        </Router>
      </BookingProvider>
    </LanguageProvider>
  );
}

export default App;
