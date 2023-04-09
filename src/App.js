import AboutComp from "./components/AboutComp";
import HeroComp from "./components/HeroComp";
import NavbarComp from "./components/NavbarComp";
import ServiceComp from "./components/ServiceComp";



function App() {
  return (
  <>
  <NavbarComp />

  {/* content */}
    <HeroComp />
    <ServiceComp />
    <AboutComp />
  {/* end */}
  </>
  );
}

export default App;
