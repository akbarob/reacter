import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import Sec2 from './Components/section2';
import Section3 from './Components/section3';
import Section4 from './Components/section4';
import Footer from './Components/footer';
import { motion, useScroll } from "framer-motion"


function App() {
  const { scrollYProgress } = useScroll();
  return (
    <>
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
        sticky="top"
      /> 
      <Header/>
      <LandingPage/>
      <Sec2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </>
  );
}

export default App;
