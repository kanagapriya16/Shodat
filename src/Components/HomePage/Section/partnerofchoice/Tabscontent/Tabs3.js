import React from "react";
import { styled } from "@mui/material/styles";
import tab4 from "../../../../../Assets/PartnerOfChoice/TabsContent/tabimg3.png";
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
    fontSize: "32px",
    color: "black",
    marginBottom: "10px",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "left",
    width: "100%", // Adjusted width to 100% for responsiveness
  },
};

export const Tabs3 = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <StyledImage src={tab4} alt="AI" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2}>
          <Typography variant="h5" color="black" fontWeight={600} gutterBottom>
            Benefit from deep industry expertise
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ ...styles.box, background: "#D3F5FF", width: "100%" }}>
                <Typography variant="h6" fontWeight={400}>
                  Seasoned Professionals
                </Typography>
                <Typography fontWeight={400}>
                  Our team comprises seasoned professionals with a wealth of
                  experience ensuring that our AI solutions are tailored to meet
                  the specific needs and challenges of your industry
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box sx={{ ...styles.box, background: "#E4E5FF", width: "100%" }}>
                <Typography variant="h6" fontWeight={400}>
                  Collaborative Partnership
                </Typography>
                <Typography fontWeight={500}>
                  We have the advantage of using proprietary network
                  intelligence to enhance precision and detection above and
                  beyond client's datasets
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{ ...styles.box, background: " #EEDEFF", width: "45vw" }}
              >
                <Typography variant="h6" fontWeight={400}>
                  Exceptional Support
                </Typography>
                <Typography fontWeight={400}>
                  We provide exceptional support to our clients to ensure smooth
                  operations and address any issues promptly
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
