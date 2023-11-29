import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Skills from './containers/Skills/Skills';
import Testimonials from './containers/Testimonials/Testimonials';
import NavigationDots from './components/NavigationDots/NavigationDots';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(isDarkMode ? 'dark' : 'light');
    const root = window.document.documentElement;
    root.style.colorScheme = theme;
  }, [theme, isDarkMode]);


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Footer />
      <NavigationDots />
    </div>
  )
}

export default App;
