import React from "react";
import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import eOpsai from "../../../../Assets/PlatformPage/eOps & smartEdge/eOpsai.png";
import AiButton from "../../../Button/AiButton";
import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

const theme = createTheme();
const SmarterEdge = () => {
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));

  // const textStyles = {
  //   fontFamily: "Open Sans,sans-serif",
  //   fontSize: isSmallScreen ? "12px" : isMediumScreen ? "22px" : "56px",
  //   lineHeight: isSmallScreen ? "15px" : "70px",
  //   letterSpacing: "0em",
  //   fontWeight: 700,
  // };
  // const buttonTypographyStyles = {
  //   fontFamily: "Open Sans,sans-serif",
  //   fontSize: isSmallScreen ? "10px" : isMediumScreen ? "12px" : "16px",
  //   letterSpacing: "0em",
  //   fontWeight: 400,
  //   whiteSpace: "nowrap",
  // };
  const buttonWidth = isSmallScreen
    ? "120px"
    : isMediumScreen
    ? "150px"
    : "180px";

  const buttonpadding = isSmallScreen
    ? "2px 2px"
    : isMediumScreen
    ? "8px 15px"
    : "";
  const imgStyle = {
    width: isSmallScreen
      ? "100%"
      : isMediumScreen
      ? "90%"
      : isLargeScreen
      ? "70%"
      : "90%",
    height: isSmallScreen ? "auto" : isMediumScreen ? "40vh" : "60vh",
    objectFit: "cover",
    borderRadius: "10px",
  };
  const CenteredContainer = styled("div")({ margin: "50px 0 50px 30px" });
  return (
    <CenteredContainer>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Typography
            sx={{
              fontFamily: "Open sans,sans serif",
              color: "#000000",
              fontSize: isSmallScreen
                ? "26px"
                : isMediumScreen
                ? "34px"
                : "44px",
              lineHeight: isSmallScreen
                ? "25px"
                : isMediumScreen
                ? "30px"
                : "50px",
              fontWeight: 700,
              // fontSize: "34px",
              paddingTop: "20px",
              // lineHeight: "51px",
            }}
            gutterBottom
          >
            Smarter Operations with Intelligent Edge
          </Typography>{" "}
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <AiButton
            onClick={() => console.log("Button clicked!")}
            showArrow={true}
            width={buttonWidth}
            padding={buttonpadding}
            background="#F3D157"
            color="#000000"
          >
            <Typography
              sx={{
                fontFamily: "Open Sans,sans-serif",
                fontSize: isSmallScreen
                  ? "14px"
                  : isMediumScreen
                  ? "16px"
                  : "20px",
                letterSpacing: "0em",
                fontWeight: 400,
                whiteSpace: "nowrap",
              }}
            >
              Free Trail
            </Typography>
          </AiButton>
        </Grid>

        <Grid item lg={12}>
          <Typography
            gutterBottom
            sx={{
              fontFamily: "Open sans,sans serif",
              color: "#000000",
              fontSize: isSmallScreen
                ? "24px"
                : isMediumScreen
                ? "28px"
                : "34px",
              lineHeight: isSmallScreen ? "25px" : "51px",
              fontWeight: 600,
              // fontSize: "34px",
              paddingTop: "20px",
              // lineHeight: "51px",
            }}
          >
            Edge Infrastructure
          </Typography>
          <Typography
            gutterBottom
            sx={{
              color: "#57647C",
              fontFamily: "Open sans,sans serif",
              fontSize: isSmallScreen
                ? "18px"
                : isMediumScreen
                ? "20px"
                : "27px",
              lineHeight: isSmallScreen ? "25px" : "40.5px",
              fontWeight: 400,
              // fontSize: "27px",
              paddingTop: "20px",
              // lineHeight: "40.5px",
            }}
          >
            Data integration fabric deployable at global scale for bespoke
            customer needs. Compute and storage designed for the Edge to enable
            fast and secure data aggregation and harmonization.
          </Typography>
        </Grid>

        <Grid item lg={7}>
          <Box
            sx={{
              backgroundColor: "#F9C407",
              borderRadius: "10px",
              padding: "20px",
              position: "relative",
              height: "100%",
            }}
          >
            <Typography
              gutterBottom
              sx={{
                color: "#000000",
                fontFamily: "Open sans,sans serif",
                fontWeight: 600,
                fontSize: isSmallScreen
                  ? "18px"
                  : isMediumScreen
                  ? "20px"
                  : "27px",
                lineHeight: isSmallScreen ? "25px" : "40.5px",
                // fontSize: "27px",
                paddingTop: "20px",
                // lineHeight: "40.5px",
              }}
            >
              eOps Fabric Platform
            </Typography>
            <Typography
              gutterBottom
              sx={{
                color: "#57647C",
                fontFamily: "Open sans,sans serif",
                fontSize: isSmallScreen
                  ? "18px"
                  : isMediumScreen
                  ? "20px"
                  : "27px",
                lineHeight: isSmallScreen ? "25px" : "40.5px",
                // fontWeight: 400,
                // fontSize: "27px",
                paddingTop: "10px",
              }}
            >
              Edge enabled data mesh with management, processing, orchestration
              & compliance features to enable agile development and secured
              delivery of analytics applications and ML optimised data models to
              meet high paced business demands.
            </Typography>
          </Box>
        </Grid>

        <Grid
          item
          lg={5}
          sx={{
            marginLeft: isExtraSmallScreen
              ? "0px"
              : isSmallScreen
              ? "5%"
              : isMediumScreen
              ? "130px"
              : isLargeScreen
              ? "40px"
              : "0",
          }}
        >
          <img src={eOpsai} alt="AI Power" style={imgStyle} />
        </Grid>
      </Grid>{" "}
    </CenteredContainer>
  );
};

export default SmarterEdge;
