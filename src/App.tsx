import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Bread from "./Pages/Bread";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Intro from "./Pages/Intro";
import Services from "./Pages/Services";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Intro />
      <Bread />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
