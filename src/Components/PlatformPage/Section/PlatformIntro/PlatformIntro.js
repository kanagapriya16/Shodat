import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import PlatformIntroImage from "../../../../Assets/Components/Pages/PlatformPage/PlatformIntroImage.png";
import AiButton from "../../../Button/AiButton";
import { createTheme } from "@mui/material/styles";

const handleClick = () => {
  console.log("Button clicked!");
};
const theme = createTheme();
const PlatformIntro = () => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const textStyles = {
    fontFamily: "Open Sans,sans-serif",
    fontSize: isSmallScreen ? "12px" : isMediumScreen ? "22px" : "56px",
    lineHeight: isSmallScreen ? "15px" : "70px",
    letterSpacing: "0em",
    fontWeight: 700,
  };
  const buttonTypographyStyles = {
    fontFamily: "Open Sans,sans-serif",
    fontSize: isSmallScreen ? "10px" : isMediumScreen ? "12px" : "16px",
    letterSpacing: "0em",
    fontWeight: 400,
    whiteSpace: "nowrap",
  };
  const buttonWidth = isSmallScreen
    ? "150px"
    : isMediumScreen
    ? "170px"
    : "220px";

  const buttonpadding = isSmallScreen
    ? "2px 2px"
    : isMediumScreen
    ? "8px 15px"
    : "";
  const imgStyle = {
    width: "100%",
    height: isSmallScreen
      ? "auto"
      : isMediumScreen
      ? "auto"
      : isLargeScreen
      ? "auto"
      : "80vh",
    objectFit: "cover",
    borderRadius: "15px",
  };
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        padding: "20px",
        mt: "40px",
      }}
    >
      <img src={PlatformIntroImage} alt="Poster Image" style={imgStyle} />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "left",
          color: "#fff",
          padding: "20px ",
          width: "88%",
        }}
      >
        <Typography variant="body1" gutterBottom sx={textStyles}>
          The value of data lies not in having it, but in its precise and
          strategic utilization through advanced AI
        </Typography>
        <AiButton
          onClick={handleClick}
          showArrow={true}
          width={buttonWidth}
          padding={buttonpadding}
          background="#F3D157"
          color="#000000"
        >
          <Typography sx={buttonTypographyStyles}>Explore Solutions</Typography>
        </AiButton>
      </Box>
    </Box>
  );
};

export default PlatformIntro;
