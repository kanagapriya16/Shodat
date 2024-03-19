import React from "react";
import EmbracingPower from "./Section/EmbracingPower/EmbracingPower";
import CardsComponent from "./Section/AdvancedAI/CardsComponent";
import ProductionReadyAi from "./Section/ProductionReadyAi/ProductionReadyAi";
import ScheduleMeeting from "./Section/ScheduleAMeeting/ScheduleMeeting";
import DiscoverDifference from "./Section/DiscoverShodat/DiscoverShodat";
import SliderHome from "./Section/SlidersHome/SliderHome";
import { Partnerofchoice1 } from "./Section/partnerofchoice/Partnerofchoice1";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <SliderHome />
      <ProductionReadyAi />
      <EmbracingPower />
      <CardsComponent />
      <DiscoverDifference />
      <Partnerofchoice1 />
      <ScheduleMeeting />
    </div>
  );
};

export default Home;
