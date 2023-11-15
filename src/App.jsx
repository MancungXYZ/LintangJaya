import Companies from "./Components/Companies";
import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
import Merk from "./Components/Merk";
import Properties from "./Components/Properties";
import Details from "./Components/Details";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";
import Maps from "./Components/Maps";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init()

function App() {
  return (
    <>
      <Hero />
      <Guide />
      <Properties />
      <Merk />
      <Maps />
      {/* <Details />
      <GetStarted /> */}
      <Footer />
    </>
  );
}

export default App;
