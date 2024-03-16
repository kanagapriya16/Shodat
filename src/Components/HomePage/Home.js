import React from "react";
import EmbracingPower from "./Section/EmbracingPower/EmbracingPower";
import CardsComponent from "./Section/AdvancedAI/CardsComponent";
import ProductionReadyAi from "./Section/ProductionReadyAi/ProductionReadyAi";
import ScheduleMeeting from "./Section/ScheduleAMeeting/ScheduleMeeting";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import DiscoverDifference from "./Section/DiscoverShodat/DiscoverShodat";
import SliderHome from "./Section/SlidersHome/SliderHome";

const Home = () => {
  return (
    <div>
      <SliderHome />
      <ProductionReadyAi />
      <EmbracingPower />
      <CardsComponent />
      <DiscoverDifference />
      <ScheduleMeeting />
    </div>
  );
};

export default Home;
