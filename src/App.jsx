import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import { revealOnScroll } from "./utils/reveal";
function App() {
  const [toast, setToast] = useState("");
  
  useEffect(() => {
    revealOnScroll();
  }, []);
  return (
    <>
     <Navbar />
      <Hero />
      <About />
      <Services />
      <Contact setToast={setToast} />
      <Footer />
      <Toast message={toast} setToast={setToast} />

    </>
  );
}

export default App;
