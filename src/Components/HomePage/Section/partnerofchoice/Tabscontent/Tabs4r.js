import React from "react";
import { styled } from "@mui/material/styles";
import Ai from "../.../../../../../../Assets/PartnerOfChoice/TabsContent/image 132.png";
import { Grid, Box, Typography } from "@mui/material";

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  maxWidth: "100%",
});

const styles = {
  typography: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "10px",
  },
  box: {
    fontSize: "18px", // Adjusted font size for better readability
    color: "black",
    marginBottom: "10px",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "left",
    width: "100%d", // Adjusted width to 100% for responsiveness
    height: "100%", // Fixed height for consistency
  },
};

export const Tabsr4 = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <StyledImage src={Ai} alt="AI" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2}>
          <Typography
            variant="subtitle2"
            color="black"
            fontWeight={600}
            fontSize={20}
            gutterBottom
          >
            The AI landscape is dynamic, and so are we. Our commitment to
            continuous innovation means that you'll always have access to the
            latest features and functionalities, keeping your business on the
            cutting edge.
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ ...styles.box, bgcolor: "rgba(211, 245, 255, 1)" }}>
                <Typography variant="h6" fontWeight={600}>
                  Cutting-Edge Ai Solutions
                </Typography>
                <Typography fontWeight={400}>
                  Harness the power of the latest advancements in artificial
                  intelligence. We are committed to delivering cutting-edge AI
                  solutions that keep your business at the forefront of
                  innovation.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ ...styles.box, bgcolor: "rgba(228, 229, 255, 1)" }}>
                <Typography variant="h6" fontWeight={600}>
                  Future-Proof Solutions
                </Typography>
                <Typography fontWeight={400}>
                  AI is an investment in the future. Our commitment to providing
                  future-proof solutions means that our AI software evolves with
                  your business, adapting to new challenges and opportunities in
                  the ever-changing technological landscape.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
