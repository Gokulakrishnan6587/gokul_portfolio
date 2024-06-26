import './App.css';
import { ThemeProvider } from './common/ThemeContext';
import Head from './sections/Hero/Head';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <ThemeProvider>
    <div> 
    <Head/>
    <Projects/> 
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
    </ThemeProvider>

  );
}

export default App;
