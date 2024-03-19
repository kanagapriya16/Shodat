import React from "react";
import { styled } from "@mui/material/styles";
import Ai from "../../../../../Assets/PartnerOfChoice/TabsContent/Aitab.png";
import { Grid, Box, Typography } from "@mui/material";

const StyledImage = styled("img")({
  width: "80%",

  height: "80%",
});

const styles = {
  typography: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "10px",
  },
  box: {
    fontSize: "30px",
    color: "black",
    marginBottom: "10px",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
  },
};

export const Proven = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <StyledImage src={Ai} alt="AI" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2}>
          <Typography variant="h6" color="black" fontWeight={700} gutterBottom>
            Shodat's global experience in developing AI technology includes
          </Typography>
          <Typography sx={styles.typography}>
            &#10003; Turnkey enterprise platform for all data integration &
            analytics needs
          </Typography>
          <Typography sx={styles.typography}>
            &#10003; No implementation delays with minimal customizations
          </Typography>
          <Typography sx={styles.typography}>
            &#10003; Seamless deployment & build for global scale
          </Typography>
          <Typography sx={styles.typography}>
            &#10003; Low/No code data ingestion, harmonization & ML features
          </Typography>
          <Typography sx={styles.typography}>
            &#10003; Industry-proven ML Models
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <Box sx={{ ...styles.box, background: "#D3F5F" }}>
                <Typography fontWeight={400}>consistent</Typography>
                <Typography fontWeight={400}>CSAT ratings</Typography>
                <Typography fontWeight={600} variant="h4">
                  97%
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ ...styles.box, bgcolor: "#E4E5FF" }}>
                <Typography fontWeight={400}>Renewal</Typography>
                <Typography fontWeight={400}>ratio</Typography>
                <Typography fontWeight={600} variant="h4">
                  95
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ ...styles.box, bgcolor: "#EEDEFF" }}>
                <Typography fontWeight={400}>successful</Typography>
                <Typography fontWeight={400}>projects</Typography>
                <Typography fontWeight={600} variant="h4">
                  100+
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} md={3}>
              <Box sx={{ ...styles.box, bgcolor: "#EAEAEA" }}>
                <Typography fontWeight={400}>consistent</Typography>
                <Typography fontWeight={400}>CSAT ratings</Typography>
                <Typography fontWeight={600} variant="h4">
                  100TB
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
