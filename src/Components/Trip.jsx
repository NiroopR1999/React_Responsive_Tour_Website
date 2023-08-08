import React from "react";
import "./TripStyle.css"; // Make sure this import is being used
import TripData from "./TripData";
import Trip1 from "../Assets/2.jpg";
import Trip2 from "../Assets/8.jpg";
import Trip3 from "../Assets/5.jpg";

function Trip() {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>
      </div>
      <div className="tripCard">
        <TripData
          img1={Trip1}
          heading="Trip in Indonesia"
          text="
          Embarking on a trip to Indonesia is an adventure brimming with cultural wonders, stunning landscapes, and vibrant experiences. From the breathtaking beaches of Bali, with their crystal-clear waters and vibrant nightlife, to the ancient temples of Borobudur and Prambanan in Yogyakarta, rich in history and spirituality. Don't miss the lush jungles of Sumatra and Borneo, home to diverse wildlife like orangutans and tigers.For those seeking off-the-beaten-path charm, the traditional villages of Toraja in Sulawesi offer a glimpse into unique indigenous cultures."
        />
        <TripData
          img1={Trip2}
          heading="Trip in Malaysia"
          text="Embarking on a trip to Malaysia is an enchanting journey through a mix of modernity and tradition. From the iconic Petronas Twin Towers in Kuala Lumpur to the historic streets of Penang, there's a rich cultural tapestry to explore. Immerse yourself in the vibrant markets and delicious street food of Melaka, or venture into the lush rainforests of Borneo to encounter unique wildlife like orangutans. Whether you're wandering through ancient temples or indulging in the fusion of Malay, Chinese, and Indian flavors, Malaysia offers a captivating blend of experiences that leave a lasting impression."
        />
        <TripData
          img1={Trip3}
          heading="Trip in France"
          text="A trip to France promises a mesmerizing blend of art, culture, and history. From the romantic streets of Paris, where the Eiffel Tower and Louvre captivate hearts, to the charming villages of Provence, adorned with lavender fields and vineyards. Explore the fairytale châteaux of the Loire Valley and savor the culinary delights of Lyon. Bask in the sun-kissed beaches of the French Riviera, or journey through the picturesque landscapes of the French Alps.Every corner reveals a new facet of France's timeless allure, making it a journey of elegance, flavors, and endless discovery."
        />
      </div>
    </>
  );
}

export default Trip;
