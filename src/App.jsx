import Contact from "./Components/Contact";
import FeatureSection from "./Components/FeatureSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import Organize from "./Components/Organize";
import Partners from "./Components/Partners";
import Pricing from "./Components/Pricing";
import Subscribe from "./Components/Subscribe";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Organize />
      <Subscribe />
      <Partners />
      <Testimonial />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
