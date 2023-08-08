import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero";
import Assets from "../Assets/2.jpg";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <Hero cName="hero-mid" heroImg={Assets} title="Contact" btnClass="hide" />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
