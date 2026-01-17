import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToHash from './components/ScrollToHash';
import WhatsAppFloat from './components/WhatsAppFloat';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import LegalPage from './pages/LegalPage';

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="app">
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
    </Router>
  );
}

export default App;
