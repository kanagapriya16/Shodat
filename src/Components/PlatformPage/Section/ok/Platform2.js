import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import ecl1 from "../../../../Assets/PlatformPage/Platform/Ellipse 1569.png";
import ecl2 from "../../../../Assets/PlatformPage/Platform/Ellipse 1576.png";
import ecl4 from "../../../../Assets/PlatformPage/Platform/Ellipse 1568.png";
import ecl5 from "../../../../Assets/PlatformPage/Platform/Ellipse 1572.png";
import ecl6 from "../../../../Assets/PlatformPage/Platform/Ellipse 1574.png";
import ecl7 from "../../../../Assets/PlatformPage/Platform/Ellipse 1570.png";

const StyledBox = styled(Grid)({
  padding: "40px",
});

const Line = styled("line")({
  stroke: "#340D73",
  strokeWidth: 1,
});

const Styledcontend2Box = styled(Grid)(({ theme }) => ({
  gap: "20px",
  padding: "40px",
  borderRadius: "5px",
  flexWrap: "nowrap",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const Styledcontend3Box = styled(Grid)(({ theme }) => ({
  padding: "40px",
  flexWrap: "nowrap",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const IconBox = styled(Box)({
  width: "20vw",
  height: "100px",
  borderRadius: "10px",
  backgroundColor: "black",
  padding: "20px",
});

const IconBox2 = styled(Box)({
  width: "20vw",
  height: "59.95px",
  display: "flex",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  alignItems: "center",
  textAlign: "center",
  justifyContent: "center",
});

const StyledTypography = styled(Typography)({
  color: "white",
  fontSize: "18px",
  fontWeight: "400",
});

export const Platform2 = () => {
  return (
    <StyledBox container spacing={4}>
      <Grid item xs={12}>
        <Typography
          variant="body1"
          color={"black"}
          fontSize={"27px"}
          textAlign={"left"}
        >
          A one-stop cloud-native operations platform that transforms raw
          operational data into business values and discovers potential
          operational inefficiencies, risks & security threats faster by
          providing
        </Typography>
      </Grid>

      <Styledcontend2Box
        ml={1}
        mt={2}
        item
        container
        xs={12}
        alignItems="center"
        justifyContent={"center"}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <IconBox>
          <StyledTypography>Easy asset onboarding & tracking</StyledTypography>
        </IconBox>
        <IconBox>
          <StyledTypography>
            Vision & telemetry powered ops visibility
          </StyledTypography>
        </IconBox>
        <IconBox>
          <StyledTypography>Predictive maintenance</StyledTypography>
        </IconBox>
        <IconBox>
          <StyledTypography>Edge-enabled cognitive models</StyledTypography>
        </IconBox>
        <IconBox>
          <StyledTypography>Adaptive BI</StyledTypography>
        </IconBox>
      </Styledcontend2Box>

      <Grid item xs={12}>
        <Typography
          variant="body1"
          fontWeight={600}
          color={"black"}
          fontSize={"34px"}
          textAlign={"left"}
        >
          Why Shodat Platform?
        </Typography>
      </Grid>

      <Styledcontend3Box
        ml={1}
        mt={20}
        item
        container
        xs={12}
        alignItems="center"
        justifyContent={"center"}
        flexDirection="row"
      >
        <IconBox2 bgcolor={"#340D73"}>
          <img src={ecl1} style={{ marginTop: "" }} alt="Ellipse 1" />
          <img src={ecl2} style={{ marginLeft: "-26px" }} alt="Ellipse 2" />
          <svg
            width="100%"
            height="150%"
            style={{ position: "absolute", bottom: 30, left: 0 }}
          >
            <Line x1="50%" y1="0%" x2="50%" y2="100%" />
          </svg>
          <img
            src={ecl4}
            style={{
              position: "absolute",
              bottom: "120px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            alt="Ellipse 4"
          />
          <Typography
            color={"#555555"}
            fontWeight={600}
            fontSize={14}
            align="center"
            style={{
              position: "absolute",
              top: "-140px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Reduce cost to adopt PDM & BI strategies by - 40%
          </Typography>
        </IconBox2>
        <IconBox2 bgcolor={"#F9C407"}>
          <img src={ecl1} style={{ marginTop: "" }} alt="Ellipse 1" />
          <img src={ecl2} style={{ marginLeft: "-26px" }} alt="Ellipse 2" />
          <svg
            width="100%"
            height="100%"
            style={{ position: "absolute", bottom: 30, left: 0 }}
          >
            <Line x1="50%" y1="0%" x2="50%" y2="100%" />
          </svg>
          <img
            src={ecl7}
            style={{
              position: "absolute",
              bottom: "80px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            alt="Ellipse 4"
          />
          <Typography
            color={"#555555"}
            fontWeight={600}
            fontSize={14}
            align="center"
            style={{
              position: "absolute",
              top: "-100px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Predict & reduce operational failures by - 35%
          </Typography>
        </IconBox2>
        <IconBox2 bgcolor={"#01A79D"}>
          <img src={ecl1} style={{ marginTop: "" }} alt="Ellipse 1" />
          <img src={ecl2} style={{ marginLeft: "-26px" }} alt="Ellipse 2" />
          <svg
            width="100%"
            height="150%"
            style={{ position: "absolute", bottom: 30, left: 0 }}
          >
            <Line x1="50%" y1="0%" x2="50%" y2="100%" />
          </svg>
          <img
            src={ecl5}
            style={{
              position: "absolute",
              bottom: "120px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            alt="Ellipse 4"
          />
          <Typography
            color={"#555555"}
            fontWeight={600}
            fontSize={14}
            align="center"
            textAlign={"center"}
            style={{
              position: "absolute",
              top: "-140px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Predict time for complex RCA by - 80%
          </Typography>
        </IconBox2>
        <IconBox2 bgcolor={"#000000"}>
          <img src={ecl1} style={{ marginTop: "" }} alt="Ellipse 1" />
          <img src={ecl2} style={{ marginLeft: "-26px" }} alt="Ellipse 2" />
          <svg
            width="100%"
            height="100%"
            style={{ position: "absolute", bottom: 30, left: 0 }}
          >
            <Line x1="50%" y1="0%" x2="50%" y2="100%" />
          </svg>
          <img
            src={ecl6}
            style={{
              position: "absolute",
              bottom: "80px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            alt="Ellipse 4"
          />
          <Typography
            color={"#555555"}
            fontWeight={600}
            fontSize={14}
            align="center"
            style={{
              position: "absolute",
              top: "-117px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Reduce time for auditing & compliance by-66%
          </Typography>
        </IconBox2>
      </Styledcontend3Box>
    </StyledBox>
  );
};

export default Platform2;
