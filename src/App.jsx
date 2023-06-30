import Navbar from './components/Navbar/Navbar';
import About from './containers/About/About';
import Projects from './containers/Projects/Projects';
import Skills from './containers/Skills/Skills';
import Testimonials from './containers/Testimonials/Testimonials';
import NavigationDots from './components/NavigationDots/NavigationDots';

import './App.css';

function App() {

  return (
    <>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <NavigationDots />
    </>
  )
}

export default App;
