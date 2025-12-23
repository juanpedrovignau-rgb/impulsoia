import Header from './components/Header';
import Hero from './components/Hero';
import Insight from './components/Insight';
import About from './components/About';
import Services from './components/Services';
import Metrics from './components/Metrics';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Insight />
        <About />
        <Services />
        <Metrics />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
