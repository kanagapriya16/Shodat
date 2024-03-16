import { Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  const gridContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    bgcolor: "black",
    color: "#CDCBD4",
    minHeight: "80vh",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      flex: 1,
    },
  };
  const gridItemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start",
    mt: "4%",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      flex: 1,
    },
  };
  const LinkStyle = {
    whiteSpace: "nowrap",
    marginBottom: "20px",
  };
  return (
    <>
      <Grid container sx={gridContainerStyle}>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h5" style={LinkStyle}>
            Shodat
          </Typography>
          <a style={LinkStyle}>Innovating Insights, Accelerating Growth</a>
          <a style={LinkStyle}>+123(000)8899</a>
          <a style={LinkStyle}>contact@shodat.com</a>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h5" style={LinkStyle}>
            Solution
          </Typography>
          <a style={LinkStyle}>Data Engineering</a>
          <a style={LinkStyle}>Vision Ai</a>
          <a style={LinkStyle}>ERP Systems</a>
          <a style={LinkStyle}>Edge Analytics</a>
          <a h style={LinkStyle}>
            Intelligent Enterprise
          </a>
          <a style={LinkStyle}>loud transformation</a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h5" style={LinkStyle}>
            Services
          </Typography>
          <a style={LinkStyle}>Innovate</a>
          <a style={LinkStyle}>Manage</a>
          <a style={LinkStyle}>Modernize</a>
          <a style={LinkStyle}>Secure</a>
          <a style={LinkStyle}>SAP HANA CoE</a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h5" style={LinkStyle}>
            ShodatAI
          </Typography>
          <a style={LinkStyle}>AI Innovation</a>
          <a style={LinkStyle}>Frictionless AI</a>
          <a style={LinkStyle}>Pillers of AI</a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h5" style={LinkStyle}>
            eOps Platform
          </Typography>
          <a style={LinkStyle}>eOps Watch</a>
          <a style={LinkStyle}>eOps Trace</a>
          <a style={LinkStyle}>eOps Prosense</a>
          <a style={LinkStyle}>eOps Insights</a>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
