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

const App = () => {
  return (
    <PetProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/shelter" element={<ShelterPage />} />
            <Route path="/adopt" element={<AdoptPage />} />
            <Route path="/adopt/:petName" element={<PetCardPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/help" element={<HelpPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </PetProvider>
  );
};

export default App;
