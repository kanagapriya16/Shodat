import { Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

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
    mt: "6%",
    width: "100%",
  };
  const LinkStyle = {
    whiteSpace: "nowrap",
    marginBottom: "20px",
  };
  return (
    <>
      <Grid container spacing={3} sx={gridContainerStyle}>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            Shodat
          </Typography>
          <a style={LinkStyle}>Innovating Insights, Accelerating Growth</a>
          <a style={LinkStyle}>+123(000)8899</a>
          <a style={LinkStyle}>contact@shodat.com</a>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            Solution
          </Typography>
          <a style={LinkStyle}>Platform</a>{" "}
          <a style={LinkStyle}>Data Engineering</a>
          <a style={LinkStyle}>vision Ai</a>
          <a style={LinkStyle}>ERP Systems</a>
          <a style={LinkStyle}>Edge Analytics</a>
          <a h style={LinkStyle}>
            intelligent Enterprise
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
            ShodatAi
          </Typography>
          <a style={LinkStyle}>Ai innovation</a>
          <a style={LinkStyle}>Frictionless Ai</a>
          <a style={LinkStyle}>Pillers of Ai</a>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={1} sx={{ ...gridItemStyle }}>
          <Typography variant="h4" style={LinkStyle}>
            eops Platform
          </Typography>
          <a style={LinkStyle}>eops Watch</a>
          <a style={LinkStyle}>eops Trace</a>
          <a style={LinkStyle}>eops Prosense</a>
          <a style={LinkStyle}>eops Insights</a>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
