import React from "react";
import { styled } from "@mui/material/styles";
import AI from "../../../../../Assets/PartnerOfChoice/TabsContent/tabimg.png";
import { Grid, Box, Typography } from "@mui/material";

const StyledImage = styled("img")({
  width: "100%",
  maxWidth: "100%",
  height: "100%",
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
    width: "100%", // Adjusted width to 100% for responsiveness
  },
};

export const Tabs5 = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <StyledImage src={AI} alt="AI" />
      </Grid>
      <Grid item xs={12} md={6}>
        <Box p={2}>
          <Typography
            variant="subtitle2"
            color="black"
            fontWeight={600}
            gutterBottom
            fontSize={20}
          >
            Ai Should empower, not complicate . we t prioritize user-friendly
            and seamless integratio, ensuring that our Ai Solutions are note
            only powerful but also easy to adopt and use across your
            organization
          </Typography>

          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Box sx={{ ...styles.box, bgcolor: "#D3F5FF" }}>
                <Typography
                  variant="h5"
                  color="black"
                  fontWeight={600}
                  gutterBottom
                >
                  Data Security and Privacy
                </Typography>
                <Typography fontWeight={400} color={"#000000"}>
                  Trust is Paramount Our commitment to data security and privacy
                  is unvering. Rest assured that your data is handled with the
                  utmot,care,and our Ai Solutions comply with the the highest
                  standards of security
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};
