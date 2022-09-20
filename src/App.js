import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import LandingPage from './Components/LandingPage';
import Sec2 from './Components/section2';
import Section3 from './Components/section3';
import Section4 from './Components/section4';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
      <Sec2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  );
}

export default App;
