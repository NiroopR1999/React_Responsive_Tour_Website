import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero";
import Trip from "../Components/Trip";
import Assets from "../Assets/night.jpg";
import Footer from "../Components/Footer";
function Service() {
  return (
    <>
      <Navbar></Navbar>
      <Hero cName="hero-mid" heroImg={Assets} title="Service" btnClass="hide" />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
