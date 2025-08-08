import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useAppStore } from './store/useAppStore';
import { resumeData } from './data/resumeData';
import { AnimatePresence } from 'framer-motion';

import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const { theme } = useAppStore();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{resumeData.profile.name} | Portfolio</title>
        <meta name="description" content={resumeData.profile.summary} />
      </Helmet>
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;