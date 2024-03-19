import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import img3 from "../../../../Assets/SliderHome/Home1.png";
import img2 from "../../../../Assets/SliderHome/Home2.png";
import { CustomButtoncenter } from "../../../../theme";
import { ArrowDownward } from "@mui/icons-material";
import {
  CustomButtonStyled,
  StyledBox,
  TypographyContent,
} from "./SliderStyles";
import ArrowForward from "@mui/icons-material/ArrowForward";

const SliderHome = () => {
  const [isFirstVisible, setIsFirstVisible] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(img2);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFirstVisible((prev) => !prev);
      setBackgroundImage((prevImage) => (prevImage === img2 ? img3 : img2));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <StyledBox style={{ backgroundImage: `url(${backgroundImage})` }}>
      <TypographyContent style={{ opacity: isFirstVisible ? 1 : 0 }}>
        <Typography variant="h2">Innovating Insights,</Typography>
        <Typography variant="h2">Accelerating Growth</Typography>
        <Typography variant="h4">Your Data, Our Expertise</Typography>
        <CustomButtonStyled
          startIcon={
            <ArrowForward
              sx={{
                bgcolor: "white",
                height: "20px",
                width: "20px",
                borderRadius: "100%",
                color: "black",
              }}
            />
          }
        >
          Get Started
        </CustomButtonStyled>
      </TypographyContent>
      <TypographyContent style={{ opacity: isFirstVisible ? 0 : 1 }}>
        <Typography variant="h2">Frictionless AI with Shodat</Typography>
        <Typography variant="h4">
          Our AI Solutions pave the way for a
        </Typography>
        <Typography variant="h4">frictionless future,</Typography>
        <CustomButtonStyled
          startIcon={
            <ArrowForward
              sx={{
                bgcolor: "white",
                height: "20px",
                width: "20px",
                borderRadius: "100%",
                color: "black",
              }}
            />
          }
        >
          Get Started
        </CustomButtonStyled>
      </TypographyContent>
      <CustomButtoncenter
        style={{
          background: "#F3D157",
          justifyContent: "center",
          display: "flex",
          marginLeft: "50%",
          marginTop: "37.8%",
          height: "15vh",
          fontSize: "20px",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <ArrowDownward sx={{}} />
      </CustomButtoncenter>
    </StyledBox>
  );
};

export default SliderHome;
