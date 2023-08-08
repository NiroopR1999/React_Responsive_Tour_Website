import Mountain1 from "../Assets/1.jpg";
import Mountain2 from "../Assets/img.jpg";
import Mountain3 from "../Assets/4.jpg";
import Mountain4 from "../Assets/10.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyle.css";
const Destination = () => {
  return (
    <>
      <div className="destination">
        <h1>Popular Destinations</h1>
        <p>Tours give you an oppurtunity to see a lot, within a time frame.</p>
        <DestinationData
          cName="first-des"
          heading="Taal Volcano, Batangas"
          text="Explore the wonders of Taal Volcano on this thrilling tour. From Tagaytay Ridge, enjoy scenic views of Taal Lake's captivating crater. A boat ride takes you to the volcanic island for an easy hike to the summit, offering breathtaking vistas. Learn about the volcano's history and cultural significance from our knowledgeable guides. Savor Filipino cuisine during lunch and immerse yourself in the local culture. Experience the beauty and heritage of Taal Volcano on this unforgettable adventure."
          img1={Mountain1}
          img2={Mountain2}
        />
        <DestinationData
          cName="first-des-reverse"
          heading="Mt. Daguldul, Batangas"
          text="Mt. Daguldul, nestled in the province of Batangas, Philippines, is a picturesque gem offering both nature enthusiasts and hikers a memorable experience. With its lush greenery, diverse flora and fauna, and panoramic views of the surrounding landscape and the sea, it's a popular destination for those seeking a refreshing escape from the hustle and bustle of city life. The mountain's well-maintained trails provide varying levels of difficulty, making it accessible to both beginners and experienced trekkers. Whether one is drawn to its breathtaking sunrise or the tranquility of its forests, Mt. Daguldul promises an enchanting retreat into nature's beauty."
          img1={Mountain3}
          img2={Mountain4}
        />
      </div>
    </>
  );
};
export default Destination;
