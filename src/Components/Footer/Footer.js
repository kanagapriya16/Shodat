import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import Footer1 from "./Footer1";

const Footer = () => {
  const theme = useTheme();
  const gridContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    bgcolor: "black",
    color: "#CDCBD4",
    minHeight: "80vh",
    pt: 7,
    pb: 7,

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flex: 1,
    },
  };
  const gridItemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    mt: "9%",
    width: "100%",
  };
  const LinkStyle = {
    whiteSpace: "nowrap",
    marginBottom: "20px",
  };
  const textFieldStyle = {
    borderRadius: "50px",
    height: "54px",
    width: "450px",
  };
  const TypographyStyle = {
    fontFamily: "Open Sans,sans-serif",
    fontSize: "22px",
    lineHeight: "29.96px",
    letterSpacing: "0em",
    fontWeight: 600,
    color: "#ffffff",
  };

  return (
    <>
      <Grid container spacing={3} sx={gridContainerStyle}>
        <Box
          justifyContent={"space-between"}
          position={"absolute"}
          display={"flex"}
          flexDirection={"row"}
          gap={38}
          mt={2}
          ml={11}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", width: "100%" }}
            gutterBottom
          >
            <Typography variant="subtitle1" style={TypographyStyle}>
              How can AI help scale your business?
            </Typography>
            <Typography variant="subtitle1" style={TypographyStyle}>
              Let's talk and discover the answers together.
            </Typography>
          </Box>

          <Box ml={4}>
            <Typography variant="body1" style={TypographyStyle} gutterBottom>
              Our Newsletter
            </Typography>
            <Box style={TypographyStyle}>
              <input
                id="email"
                placeholder="Business Email Address"
                style={{
                  ...textFieldStyle,
                  color: "#666666",
                  paddingLeft: "20px",
                }}
              />
            </Box>
          </Box>
        </Box>

        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            Shodat
          </Typography>
          <a style={LinkStyle}>Innovating Insights </a>
          <a style={LinkStyle}> Accelerating Growth</a>
          <a style={LinkStyle}>+123(000)8899</a>
          <a style={LinkStyle}>contact@shodat.com</a>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            Solution
          </Typography>
          <a style={LinkStyle}>Data Engineering</a>
          <a style={LinkStyle}>Vision AI</a>
          <a style={LinkStyle}>ERP Systems</a>
          <a style={LinkStyle}>Edge Analytics</a>
          <a h style={LinkStyle}>
            Intelligent Enterprise
          </a>
          <a style={LinkStyle}>cloud transformation</a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            {" "}
            Services
          </Typography>
          <a style={LinkStyle}>Innovate</a>
          <a style={LinkStyle}>Manage</a>
          <a style={LinkStyle}>Modernize</a>
          <a style={LinkStyle}>Secure</a>
          <a style={LinkStyle}>SAP HANA CoE</a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            ShodatAI
          </Typography>
          <a style={LinkStyle}>AI Innovation</a>
          <a style={LinkStyle}>Frictionless AI</a>
          <a style={LinkStyle}>Pillers of AI</a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            eOps Platform
          </Typography>
          <a style={LinkStyle}>eOps Watch</a>
          <a style={LinkStyle}>eOps Trace</a>
          <a style={LinkStyle}>eOps Prosense</a>
          <a style={LinkStyle}>eOps Insights</a>
        </Grid>
      </Grid>

      <Footer1 />
    </>
  );
};
export default Footer;
