import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import AiButton from "../../../Button/AiButton";

const ProductionReadyAi = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <Grid container spacing={3} sx={{ background: "#E6F0F2" }}>
      {/* Top Grid (lg 12) */}
      <Grid item xs={12} lg={12}>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Open Sans,sans serif",
            fontSize: "44px",
            lineHeight: "52.8px",
            letterSpacing: "0em",
            textAlign: "left",
            pl: "40px",
            pt: "40px",
            ml: 2,
            color: "#000000",
            fontWeight: 300,
          }}
        >
          <span style={{ fontWeight: 700, color: "#340D73" }}>
            Production-ready AI,
          </span>{" "}
          <br /> enriched with industry experience
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Typography
          variant="body1"
          sx={{
            background: "#340D73",
            color: "#FFFFFF",
            fontFamily: "Open Sans,sans serif",
            fontSize: "27px",
            fontWeight: 300,
            lineHeight: "41px",
            letterSpacing: "0em",
            textAlign: "left",
            padding: "40px",
            borderRadius: "8px",
            ml: 5,
          }}
        >
          Our market ready solutions provide flexible and scalable capabilities
          that enterprises need to successfully become AI-fueled organizations
        </Typography>
      </Grid>
      {/* Bottom Grids (lg 6) */}
      <Grid item xs={12} sm={12} md={6} lg={6}>
        <Typography
          variant="body1"
          sx={{
            color: " #57647C",
            fontFamily: "Open Sans,Poppins",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "30px",
            letterSpacing: "0em",
            textAlign: "left",
            pl: "40px",
            pb: "20px",
            borderRadius: "8px",
            mr: 10,
          }}
        >
          Redefining the infusion of machine learning in heavy industries for a
          decade, we at Shodat Inc are poised for a paradigm shift in the
          industry with ready AI—eOps Fabric™, an edge analytics, and operations
          platform. The platform leverages a powerful combination of computer
          vision, predictive analytics, and generative AI to predict operational
          defects, automate RCA reports, and propose impactful enhancements that
          promise significant cost benefits.
        </Typography>
        <Box sx={{ mb: 5, ml: 5 }}>
          <AiButton onClick={handleClick} showArrow={true} width={180}>
            Let's Talk AI
          </AiButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductionReadyAi;
