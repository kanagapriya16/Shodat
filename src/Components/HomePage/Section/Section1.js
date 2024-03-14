import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";

import img2 from "../../../Assets/img2.jpg";
import img3 from "../../../Assets/img3.jpg";
import {
  CustomButtonStyled,
  StyledBox,
  TypographyContent,
} from "./Section1css";

const Section1 = () => {
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
        <Typography variant="h2" fontWeight={800}>
          innovating insights,
        </Typography>
        <Typography variant="h2" fontWeight={800}>
          Accelarting Growth
        </Typography>
        <Typography variant="h4" fontWeight={800}>
          Your data, our Expertise
        </Typography>
        <CustomButtonStyled>Get Started</CustomButtonStyled>
      </TypographyContent>
      <TypographyContent style={{ opacity: isFirstVisible ? 0 : 1 }}>
        <Typography variant="h2" fontWeight={800}>
          Frictionless Ai With Shodat
        </Typography>
        <Typography variant="h4" fontWeight={800}>
          our Ai Solutions Pave the way for a{" "}
        </Typography>
        <Typography variant="h4" fontWeight={800}>
          frictional future,
        </Typography>
        <CustomButtonStyled>Get Started</CustomButtonStyled>
      </TypographyContent>
    </StyledBox>
  );
};

export default Section1;
