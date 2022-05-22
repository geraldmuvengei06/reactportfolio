// components 
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Divider from "./components/Divider";
import Portfolio from "./components/Portfolio";
import Articles from "./components/Articles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";




import './App.css';


function App() {
  return (

    <main>
      {/* navbar */}
      <Navbar className="z-40" />
      {/* hero */}
      <Hero />
      {/* about*/}
      <About id="about" />
      {/* divider */}
      <Divider />
      {/* skills */}
      <Skills id="skills" />
      {/* portfolio */}
      <Portfolio id="portfolio" />
      {/* articles */}
      <Articles />
      {/* contact */}
      <Contact id="contact" />
      {/* footer */}
      <Footer />
      
    </main>


  );
}



export default App;
