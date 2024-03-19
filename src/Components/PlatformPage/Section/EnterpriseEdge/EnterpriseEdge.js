import React from "react";
import { Grid, Typography, Paper } from "@mui/material";
import eOpsWatch from "../../../../Assets/EmbracingPower/eOps Watch.png";
import eOpsTrace from "../../../../Assets/EmbracingPower/eOps Trace.png";
import eOpsInsights from "../../../../Assets/EmbracingPower/eOps Insights.png";
import eOpsProsense from "../../../../Assets/EmbracingPower/eOps Prosense.png";
import { styled } from "@mui/material/styles";

const paperStyle = {
  padding: 30,
  marginBottom: 20,
  width: "250px",
  height: "350px",
};

const typoStyle = {
  fontSize: "36px",
  lineHeight: "54px",
  letterSpacing: "0em",
  textAlign: "left",
};
const titleStyle = {
  fontFamily: "Open Sans,sans-serif",
  color: "#000000",
  fontSize: "18px",
  fontWeight: 600,
  lineHeight: "27px",
  m: "15px 0",
};
const paraStyle = {
  fontFamily: "Open Sans,sans-serif",
  fontSize: "14px",
  color: "#57647C",
  fontWeight: 400,
  lineHeight: "21px",
  m: "15px 2px",
};
const imgStyle = {
  width: "100%",
  padding: "0 10px",
  alignItem: "center",
};

const CenteredContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "50px",
});
const EnterpriseEdge = () => {
  return (
    <CenteredContainer>
      <Grid container spacing={1}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography sx={typoStyle} gutterBottom>
            <span
              style={{
                fontWeight: 600,
                fontFamily: "Open Sans,sans-serif",
              }}
            >
              Enterprise Edge Operations Application -
            </span>
            <span
              style={{
                fontWeight: 100,
                fontFamily: "Open Sans,Poppins",
              }}
            ></span>
            (SaaS)
          </Typography>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Paper elevation={3} style={paperStyle}>
            <img src={eOpsWatch} alt="eOps Watch" style={imgStyle} />
            <Typography variant="h6" gutterBottom sx={titleStyle}>
              eOps Watch
            </Typography>
            <Typography variant="body2" sx={paraStyle}>
              Vision AI capabilities to provide edge asset recognition & anomaly
              detection
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Paper elevation={3} style={paperStyle}>
            <img src={eOpsTrace} alt="eOps Trace" style={imgStyle} />
            <Typography variant="h6" gutterBottom sx={titleStyle}>
              eOps Trace
            </Typography>
            <Typography variant="body2" sx={paraStyle}>
              Event- based edge asset tracking monitors & telemetry processing
              framework
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Paper elevation={3} style={paperStyle}>
            <img src={eOpsProsense} alt="eOps Prosense" style={imgStyle} />
            <Typography variant="h6" gutterBottom sx={titleStyle}>
              eOps Prosense
            </Typography>
            <Typography variant="body2" sx={paraStyle}>
              Proactive operations & predictive maintenance framework with
              anomaly detection, forecasting & problems/claims management
              features
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          <Paper elevation={3} style={paperStyle}>
            <img src={eOpsInsights} alt="eOps Insights" style={imgStyle} />
            <Typography variant="h6" gutterBottom sx={titleStyle}>
              eOps Insights
            </Typography>
            <Typography variant="body2" sx={paraStyle}>
              Cognitive business intelligence functions including risk
              management & fraud detection
            </Typography>
          </Paper>
        </Grid>
      </Grid>{" "}
    </CenteredContainer>
  );
};

export default EnterpriseEdge;
