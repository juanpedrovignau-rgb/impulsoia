import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SEO from './components/SEO';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';
import WhatsAppFloat from './components/WhatsAppFloat';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import LegalPage from './pages/LegalPage';
import SalPatagoniaPage from './pages/SalPatagoniaPage';

function AppContent() {
  const location = useLocation();
  const isStandalone = location.pathname === '/saldelapatagonia';

  if (isStandalone) {
    return (
      <Routes>
        <Route path="/saldelapatagonia" element={<SalPatagoniaPage />} />
      </Routes>
    );
  }

  return (
    <div className="app">
      <SEO />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
          <Route path="/legal/:type" element={<LegalPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <AppContent />
    </Router>
  );
}

export default App;
