import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero";
import img from "../Assets/12.jpg";
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";
function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero
        cName="hero"
        heroImg={img}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
