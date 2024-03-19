import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Box, Typography, Stack } from "@mui/material";
import plat from "../../../../Assets/PlatformPage/Platform/plat.png";

const StyledImage = styled("img")({});

const styles = {
  typography: {
    fontSize: "16px",
    color: "#555555",
    marginBottom: "10px",
    lineheight: "24px",
    marginTop: "20px",
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

export const Platform3 = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography
          ml={7}
          wvariant="body1"
          fontWeight={600}
          color={"black"}
          fontSize={"34px"}
          textAlign={"left"}
        >
          Why eOps?
        </Typography>
      </Grid>
      <Grid item xs={12} md={3}>
        <StyledImage src={plat} alt="AI" />
        <Grid item xs={12}>
          <Typography
            ml={7}
            variant="caption"
            align="center"
            fontWeight={300}
            color={"#000000"}
            fontSize={"12px"}
            textAlign={"left"}
          >
            this is a sample, eOps logo
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12} md={6} mt={-25} ml={35}>
        <Stack direction={"row"} spacing={8}>
          <Box p={2} justifyContent={"space-between"}>
            <Typography sx={styles.typography}>
              &#10003; Turnkey enterprise platform for all data integration &
              analytics needs.
            </Typography>
            <Typography sx={styles.typography}>
              &#10003; No implementation delays with minimal customizations.
            </Typography>
            <Typography sx={styles.typography}>
              &#10003; Seamless deployments & built for global scale.
            </Typography>
          </Box>
          <Box p={2}>
            <Typography sx={styles.typography}>
              &#10003; Industry-proven ML models.
            </Typography>
            <Typography sx={styles.typography}>
              &#10003; Consistent CSAT ratings of 95% and above.
            </Typography>
            <Typography sx={styles.typography}>
              &#10003; Low/No code data ingestion, harmonization & ML features.
            </Typography>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};
