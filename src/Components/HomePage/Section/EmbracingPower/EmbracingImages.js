import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import trace from "../../../../Assets/eops trace.jpg";
import watch from "../../../../Assets/eops watch.jpg";
import prosense from "../../../../Assets/eops prosense.jpg";
import insights from "../../../../Assets/eops Insights.jpg";

export default function EmbracingImages() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={6} mt={5}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper
              elevation={3}
              sx={{
                pb: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 100,
                width: 150,
              }}
            >
              <img
                src={watch}
                alt="eOps Watch"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: 8,
                  height: 100,
                }}
              />
              <Typography variant="subtitle1" align="center" mt={1}>
                eOps Watch
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                pb: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 150,
                width: 190,
              }}
            >
              <img
                src={prosense}
                alt="eOps Presense"
                style={{ width: "100%", objectFit: "cover", borderRadius: 8 }}
              />
              <Typography variant="subtitle1" align="center" mt={1}>
                eOps Prosense
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper
              elevation={3}
              sx={{
                pb: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 100,
                width: 150,
              }}
            >
              <img
                src={trace}
                alt="eOps Trace"
                style={{
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: 8,
                  height: 100,
                }}
              />
              <Typography variant="subtitle1" align="center" mt={1}>
                eOps Trace
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper
              elevation={3}
              sx={{
                pb: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: 150,
                width: 190,
              }}
            >
              <img
                src={insights}
                alt="eOps Presense"
                style={{ width: "100%", objectFit: "cover", borderRadius: 8 }}
              />
              <Typography variant="subtitle1" align="center" mt={1}>
                eOps Insights
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
