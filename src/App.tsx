import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer';
import ShelterPage from './pages/ShelterPage';
import AdoptPage from './pages/AdoptPage';
import NewsPage from './pages/NewsPage';
import ContactsPage from './pages/ContactsPage';
import HelpPage from './pages/HelpPage';
import { PetProvider } from './context/PetContext';
import PetCardPage from './pages/PetCardPage';
import MainPage from './pages/MainPage';
import ScrollToTop from './components/ScrollToTop';
import AdminPage from './admin/AdminPage';
import React from 'react';
import HowToAdoptPage from './pages/HowToAdoptPage';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return(
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
};

const App = () => {
  return (
    <PetProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout><MainPage /></Layout>} />
          <Route path="/shelter" element={<Layout><ShelterPage /></Layout>} />
          <Route path="/adopt" element={<Layout><AdoptPage /></Layout>} />
		  <Route path="/how-to-adopt" element={<Layout><HowToAdoptPage /></Layout>} />
          <Route path="/adopt/:petName" element={<Layout><PetCardPage /></Layout>} />
          <Route path="/news" element={<Layout><NewsPage /></Layout>} />
          <Route path="/contacts" element={<Layout><ContactsPage /></Layout>} />
          <Route path="/help" element={<Layout><HelpPage /></Layout>} />

          <Route path="/admin/*" element={<AdminPage />} />
        </Routes>
      </Router>
    </PetProvider>
  );
};

export default App;