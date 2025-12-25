import React from 'react';
import Hero from '../components/Hero';
import Insight from '../components/Insight';
import About from '../components/About';
import Services from '../components/Services';
import Metrics from '../components/Metrics';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function HomePage() {
    return (
        <>
            <Hero />
            <Insight />
            <About />
            <Services />
            <Metrics />
            <Testimonials />
            <Blog />
            <Contact />
        </>
    );
}
