
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
 useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 100,
    });
  }, []);
  useEffect(()=>{
    Aos.refresh()
  },[darkMode])
  const toogleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle("dark");
  };
  return (
    <div className={
      darkMode ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900 min-h-screen" : "bg-linear-to-br from-gray-50 to-blue-50 min-h-screen"
    }>
      <Navbar darkMode = {darkMode} toogleDarkMode={toogleDarkMode} />
      <Hero darkMode={darkMode}/>
      <About darkMode={darkMode}/>
      <Skills darkMode={darkMode}/>
      <Projects darkMode={darkMode}/>
      <Contact darkMode={darkMode}/>
      <Footer darkMode={darkMode}/>
    </div>
  );
}

export default App;
