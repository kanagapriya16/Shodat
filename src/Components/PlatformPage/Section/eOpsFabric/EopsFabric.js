import React from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
const typoStyle = {
  fontFamily: "Open Sans,sans-serif",
  fontSize: "30px",
  lineHeight: "40.8px",
  letterSpacing: "0em",
  textAlign: "left",
  color: "#FFFFFF",
};
const titleStyle = {
  fontFamily: "Open Sans,sans-serif",
  color: "#FFFFFF",
  fontSize: "24px",
  fontWeight: 400,
  lineHeight: "40.5px",
};
const paraStyle = {
  fontFamily: "Open Sans,sans-serif",
  fontSize: "22px",
  color: "#FFFFFF",
  fontWeight: 600,
  lineHeight: "33px",
};
const ulStyle = {
  fontFamily: "Open Sans,sans-serif",
  fontSize: "14px",
  color: "#FFFFFF",
  fontWeight: 600,
  lineHeight: "21px",
};
const CenteredGridItem = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  height: "146px",
  [theme.breakpoints.up("sm")]: {
    marginTop: "40px",
  },
}));

const EopsFabric = () => {
  const CenteredContainer = styled("div")({ margin: "100px 0 30px 30px" });
  return (
    <div style={{ background: "#000000", padding: "0px 30px 3px 0px" }}>
      <CenteredContainer>
        <Grid container spacing={3}>
          <Grid
            item
            lg={4}
            md={6}
            sm={12}
            xs={12}
            sx={{ paddingRight: "30px" }}
          >
            <Typography sx={{ ...typoStyle, fontWeight: 600 }} gutterBottom>
              What is eOps fabric ?
            </Typography>
            <Typography sx={{ ...titleStyle }}>
              A tenant-based edge operations platform to manage edge assets &
              subscribe to eOps™ applications
            </Typography>
          </Grid>

          <CenteredGridItem
            item
            xs={12}
            sm={6}
            md={12}
            lg={3}
            xl={3}
            sx={{ borderLeft: "4px solid #F9C407", marginTop: "20px" }}
          >
            <Typography sx={paraStyle} gutterBottom>
              Key features
            </Typography>
            <ul style={ulStyle}>
              <li>Edge Asset Mgmt</li>
              <li>Data Aggregators & API Frameworks</li>
            </ul>
          </CenteredGridItem>
          <CenteredGridItem item xs={12} sm={6} md={6} lg={3} xl={3}>
            <Typography variant="h6" gutterBottom>
              &nbsp;
            </Typography>
            <ul style={ulStyle}>
              <li>AI/ML Enrichment</li>
              <li>Business Intelligence & Data-Lakes</li>
            </ul>
          </CenteredGridItem>
          <CenteredGridItem item xs={12} sm={6} md={6} lg={2} xl={3}>
            <Typography variant="h6" gutterBottom>
              &nbsp;
            </Typography>
            <ul style={ulStyle}>
              <li>Data Encryption & Security</li>
              <li>Compliance & Governance</li>
            </ul>
          </CenteredGridItem>
        </Grid>
      </CenteredContainer>
    </div>
  );
};
export default EopsFabric;
