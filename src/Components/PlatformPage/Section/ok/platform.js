import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import v1 from "../../../../Assets/PlatformPage/Platform/v1.png";
import v2 from "../../../../Assets/PlatformPage/Platform/v2.png";
import v3 from "../../../../Assets/PlatformPage/Platform/v3.png";
import v4 from "../../../../Assets/PlatformPage/Platform/v4.png";
import v5 from "../../../../Assets/PlatformPage/Platform/v5.png";
import v6 from "../../../../Assets/PlatformPage/Platform/v6.png";

const StyledBox = styled(Grid)({
  backgroundColor: "#F3ECFF",
  padding: "40px",
  borderRadius: "5px",
});

const StyledcontendBox = styled(Grid)({
  backgroundColor: "#F3ECFF",
  padding: "40px",
  borderRadius: "5px",
});

const Styledcontend2Box = styled(Grid)({
  gap: "20px",
  padding: "40px",
  borderRadius: "5px",
});

const IconBox = styled(Box)({
  width: "100px",
  height: "10vh",
  borderRadius: "10px",
  backgroundRepeat: "no-repeat",
});

const StyledTypography = styled(Typography)({
  color: "#340D73",
  fontSize: "37px",
  fontWeight: "600",
  textAlign: "left",
  lineHeight: "55.5px",
  wordWrap: "break-word",
});

export const Platform = () => {
  return (
    <StyledBox container spacing={4}>
      <StyledcontendBox container spacing={4}>
        <Grid item xs={12}>
          <StyledTypography>
            A suite of turnkey products to quickly unlock the value of data for
            solving everyday business & operational challenges
          </StyledTypography>
        </Grid>
        <Styledcontend2Box item container xs={12} md={6} alignItems="center">
          <Box display="flex" alignItems="center">
            <IconBox style={{ backgroundImage: `url(${v3})` }}></IconBox>
            <Box ml={2}>
              <Typography variant="h5" color="#340D73" fontWeight={700}>
                Scalable Architecture
              </Typography>
              <Typography variant="body1" color="#57647C" fontWeight={400}>
                Built on a scalable architecture to handle diverse datasets.
              </Typography>
            </Box>
          </Box>
        </Styledcontend2Box>
        <Styledcontend2Box item container xs={12} md={6} alignItems="center">
          <Box display="flex" alignItems="center">
            <IconBox style={{ backgroundImage: `url(${v6})` }}></IconBox>
            <Box ml={2}>
              <Typography variant="h5" color="#340D73" fontWeight={700}>
                Predictive Analytics
              </Typography>
              <Typography variant="body1" color="#57647C" fontWeight={400}>
                Harness the power of predictive analytics for informed
                decision-making.
              </Typography>
            </Box>
          </Box>
        </Styledcontend2Box>
      </StyledcontendBox>

      <StyledcontendBox container spacing={4}>
        <Styledcontend2Box item container xs={12} md={6} alignItems="center">
          <Box display="flex" alignItems="center">
            <IconBox style={{ backgroundImage: `url(${v2})` }}></IconBox>
            <Box ml={2}>
              <Typography variant="h5" color="#340D73" fontWeight={700}>
                Real-Time Insights
              </Typography>
              <Typography variant="body1" color="#57647C" fontWeight={400}>
                Get real-time insights into your data for immediate actions.
              </Typography>
            </Box>
          </Box>
        </Styledcontend2Box>
        <Styledcontend2Box item container xs={12} md={6} alignItems="center">
          <Box display="flex" alignItems="center">
            <IconBox style={{ backgroundImage: `url(${v5})` }}></IconBox>
            <Box ml={2}>
              <Typography variant="h5" color="#340D73" fontWeight={700}>
                User Interface
              </Typography>
              <Typography variant="body1" color="#57647C" fontWeight={400}>
                User-friendly interface for seamless navigation and analysis.
              </Typography>
            </Box>
          </Box>
        </Styledcontend2Box>
      </StyledcontendBox>

      <StyledcontendBox container spacing={4}>
        <Styledcontend2Box item container xs={12} md={6} alignItems="center">
          <Box display="flex" alignItems="center">
            <IconBox style={{ backgroundImage: `url(${v1})` }}></IconBox>
            <Box ml={7}>
              <Typography variant="h5" color="#340D73" fontWeight={700}>
                Data Security
              </Typography>
              <Typography variant="body1" color="#57647C" fontWeight={400}>
                Data is handled with the utmost care, and our AI solutions
                comply with the highest standards of security.
              </Typography>
            </Box>
          </Box>
        </Styledcontend2Box>
        <Styledcontend2Box item container xs={12} md={6} alignItems="center">
          <Box display="flex" alignItems="center">
            <IconBox style={{ backgroundImage: `url(${v4})` }}></IconBox>
            <Box ml={7}>
              <Typography variant="h5" color="#340D73" fontWeight={700}>
                User-Centric Design
              </Typography>
              <Typography variant="body1" color="#57647C" fontWeight={400}>
                highly usable and accessible addressing organisation's unique
                needs and abilities
              </Typography>
            </Box>
          </Box>
        </Styledcontend2Box>
      </StyledcontendBox>
    </StyledBox>
  );
};
