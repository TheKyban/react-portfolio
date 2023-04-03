import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import TimeLine from "./components/TimeLine";
import Work from "./components/Work";
import Services from "./components/Services";
import "./styles/app.scss"
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="App">
      <HeaderPhone/>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home />
      <Work />
      <TimeLine />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
