import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WelcomePopup } from './components/WelcomePopup';
import { FloatingCTA } from './components/FloatingCTA';
import { Home } from './pages/Home';
import { OurOffice } from './pages/OurOffice';
import { OurTeam } from './pages/OurTeam';
import { Services } from './pages/Services';
import { GBT } from './pages/GBT';
import { CDCP } from './pages/CDCP';
import { Booking } from './pages/Booking';
import { Contact } from './pages/Contact';
import { Promotions } from './pages/Promotions';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
    setShowPopup(true);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      {!showSplash && (
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about/office" element={<OurOffice />} />
              <Route path="/about/team" element={<OurTeam />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gbt" element={<GBT />} />
              <Route path="/cdcp" element={<CDCP />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/promotions" element={<Promotions />} />
            </Routes>
          </main>
          <Footer />
          <FloatingCTA />
          <WelcomePopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
