import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero";
import Assets from "../Assets/night.jpg";
import Footer from "../Components/Footer";
import AboutUs from "../Components/AboutUs";
function About() {
  return (
    <>
      <Navbar></Navbar>
      <Hero cName="hero-mid" heroImg={Assets} title="About" btnClass="hide" />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
