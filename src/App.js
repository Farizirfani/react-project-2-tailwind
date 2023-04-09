import AboutComp from "./components/AboutComp";
import FooterComp from "./components/FooterComp";
import HeroComp from "./components/HeroComp";
import NavbarComp from "./components/NavbarComp";
import PromotionComp from "./components/PromotionComp";
import ServiceComp from "./components/ServiceComp";



function App() {
  return (
  <>
  <NavbarComp />

  {/* content */}
    <HeroComp />
    <ServiceComp />
    <AboutComp />
    <PromotionComp />
  {/* end */}

  <FooterComp />
  </>
  );
}

export default App;
