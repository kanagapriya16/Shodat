import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import img3 from "../../../../Assets/SliderHome/Home1.png";
import img2 from "../../../../Assets/SliderHome/Home2.png";
import { CustomButtoncenter } from "../../../../theme";
import { ArrowDownward } from "@mui/icons-material";
import ArrowRight from "../../../../Assets/SliderHome/arrow-right.png";
import {
  CustomButtonStyled,
  StyledBox,
  StyledBox2,
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
        <Typography variant="h1" color={"#FFFFFF"} fontSize={61}  Poppins fontWeight={600}  >Innovating Insights,</Typography>
        <Typography variant="h1"    color={"#FFFFFF"} fontSize={61}  Poppins fontWeight={600 } >Accelerating Growth</Typography>
        <Typography variant="h3" mt={2} color={"#FFFFFF"}  Poppins fontWeight={500}>Your Data, Our Expertise</Typography>
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
        <Typography variant="h1" fontSize={61} fontWeight={600}>Frictionless AI with Shodat</Typography>
        <Typography  fontWeight={500} fontSize={39} color={"#FFFFFF"}>
          Our AI Solutions pave the way for a
          
        </Typography>
        <Typography fontSize={39} fontWeight={500}  color={"#FFFFFF"}>frictionless future,</Typography>
      
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
      <StyledBox2>
        <img style={{
  
          marginTop:"12px",
        }}
          
         src={ArrowRight}></img>
      </StyledBox2>
    </StyledBox>
  );
};

export default SliderHome;
