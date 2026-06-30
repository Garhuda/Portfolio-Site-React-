import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Courses from './Pages/Courses';
import Resume from './Pages/Resume';
import Layout from './Components/Layout';
import MutualFundViewer from './Pages/MutualFundViewer';
import SportsPro from './Pages/SportsPro';
import StudentTesterUI from './Pages/StudentTesterUI';
import HTTPServer from './Pages/HTTPServer';
import CalculatorApp from './Pages/CalculatorApp';
import BlackJack from './Pages/BlackJack';
import AlgorithmAnalyzer from './Pages/AlgorithmAnalyzer';
import './App.css'; 

function ScrollEnhancer() {
    useEffect(() => {
        const updateParallax = () => {
            if (typeof window === 'undefined') return;
            const offset = Math.min((window.scrollY || 0) * 0.08, 80);
            try {
                document.documentElement.style.setProperty('--scroll-offset', `${offset}px`);
            } catch (e) {
                // ignore
            }
        };

        let revealObserver = null;
        try {
            if (typeof IntersectionObserver !== 'undefined') {
                revealObserver = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                entry.target.classList.remove('hidden');
                                entry.target.classList.add('is-visible');
                                if (revealObserver) revealObserver.unobserve(entry.target);
                            }
                        });
                    },
                    { threshold: 0.12 }
                );

                document.querySelectorAll('.scroll-reveal').forEach((element) => {
                    // hide initially, then reveal when observed
                    try { element.classList.add('hidden'); } catch (e) {}
                    revealObserver.observe(element);
                });
            } else {
                // fallback: make all reveal elements visible immediately
                document.querySelectorAll('.scroll-reveal').forEach((el) => el.classList.add('is-visible'));
            }
        } catch (err) {
            // If IntersectionObserver or DOM access fails, reveal elements so nothing stays hidden
            try {
                document.querySelectorAll('.scroll-reveal').forEach((el) => el.classList.add('is-visible'));
            } catch (e) {
                // ignore
            }
        }

        updateParallax();
        window.addEventListener('scroll', updateParallax, { passive: true });

        return () => {
            try {
                if (revealObserver) revealObserver.disconnect();
            } catch (e) {}
            try {
                window.removeEventListener('scroll', updateParallax);
            } catch (e) {}
        };
    }, []);

    return null;
}

function App() {
    return (
      <>
        <ScrollEnhancer />
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    {<Route path="Projects" element={<Projects />} />}
                    {<Route path="Courses" element={<Courses />} />}
                    {<Route path="Resume" element={<Resume />} />}
                    {<Route path="MutualFundViewer" element={<MutualFundViewer />} />}
                    {<Route path="SportsPro" element={<SportsPro />} />}
                    {<Route path="StudentTesterUI" element={<StudentTesterUI />} />}
                    {<Route path="HTTPServer" element={<HTTPServer />} />}
                    {<Route path="CalculatorApp" element={<CalculatorApp />} />}
                    {<Route path="AlgorithmAnalyzer" element={<AlgorithmAnalyzer />} />}
                    {<Route path="BlackJack" element={<BlackJack />} />}
                </Route>
            </Routes>
        </Router>
      </>
    );
}

export default App;