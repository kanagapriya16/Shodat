import React from "react";
import TabsContainer from "./TabsContainer";
import { Box, styled } from "@mui/material";
import FullWidthTabs from "./TabsContainer";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#DBECF9",
  width: "100%",
  padding: "40px",
  borderRadius: "5px",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
});

const StyledTypography = styled("div")({
  color: "black",
  fontSize: "40px",
  fontWeight: "700",
  textAlign: "center",
});

export const Partnerofchoice1 = () => {
  return (
    <StyledBox>
      <StyledTypography>
        What makes Shodat,your preferred partner of choice
      </StyledTypography>
      <FullWidthTabs />
    </StyledBox>
  );
};
