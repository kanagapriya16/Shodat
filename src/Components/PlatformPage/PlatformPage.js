import React from "react";
import Eops from "./Section/eOps & SmartEdge/Eops";
import PlatformIntro from "./Section/PlatformIntro/PlatformIntro";
import EnterpriseEdge from "./Section/EnterpriseEdge/EnterpriseEdge";
import EopsFabric from "./Section/eOpsFabric/EopsFabric";
import { Platform } from "./Section/ok/platform";
import Platform2 from "./Section/ok/Platform2";
import { Platform3 } from "./Section/ok/Platform3";

const PlatformPage = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <PlatformIntro />
      <Platform2 />
      {/* <Platform3 /> */}
      <Eops />
      <EopsFabric />
      <EnterpriseEdge />
      <Platform />
    </div>
  );
};

export default PlatformPage;
