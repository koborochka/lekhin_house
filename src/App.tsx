import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import ShelterPage from './pages/ShelterPage';
import AdoptPage from './pages/AdoptPage';
import NewsPage from './pages/NewsPage';
import ContactsPage from './pages/ContactsPage';
import HelpPage from './pages/HelpPage';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/shelter" element={<ShelterPage />} />
          <Route path="/adopt" element={<AdoptPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/help" element={<HelpPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
