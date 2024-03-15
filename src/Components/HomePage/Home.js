import React from "react";
import EmbracingPower from "./Section/EmbracingPower/EmbracingPower";
import CardsComponent from "../cards/CardsComponent";
import ProductionReadyAi from "./Section/ProductionReadyAi/ProductionReadyAi";
import ScheduleMeeting from "./Section/ScheduleAMeeting/ScheduleMeeting";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import SliderHome from "./Section/SliderHome";
import DiscoverDifference from "./Section/DiscoverShodat/DiscoverShodat";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SliderHome />
      <ProductionReadyAi />
      <EmbracingPower />
      <CardsComponent />
      <DiscoverDifference />
      <ScheduleMeeting />
      <Footer />
    </div>
  );
};

export default Home;
