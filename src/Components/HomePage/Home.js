import React from "react";
import EmbracingPower from "./Section/EmbracingPower/EmbracingPower";
import Section1 from "./Section/Section1";
import CardsComponent from "../cards/CardsComponent";
import ProductionReadyAi from "./Section/ProductionReadyAi/ProductionReadyAi";
import ScheduleMeeting from "./Section/ScheduleAMeeting/ScheduleMeeting";

const Home = () => {
  return (
    <div>
      <Section1 />
      <ProductionReadyAi />
      <EmbracingPower />
      <CardsComponent />
      <ScheduleMeeting />
    </div>
  );
};

export default Home;
