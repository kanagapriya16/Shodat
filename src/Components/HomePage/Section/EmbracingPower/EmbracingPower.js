import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AiButton from "../../../Button/AiButton";
import EmbracingImages from "./EmbracingImages";

const CenteredContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "50px",
});
export default function EmbracingPower() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <CenteredContainer>
      <Grid container spacing={2}>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography variant="h3" gutterBottom>
                <span style={{ color: "#340D73", fontWeight: "bold" }}>
                  <b>Embracing</b>
                </span>{" "}
                {""}
                power of data and advanced AI for the automotive industry
              </Typography>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="#57647C"
                gutterBottom
              >
                How a subsidiary of the japanese automotive manufacturer
                producing commercial <br /> vehicles and disel engines achieved
                30% reduction in year on year IT spend with <br /> improved
                infrastructure efficiency and minimal operational overhead
              </Typography>
            </Grid>
            <Grid item xs>
              <AiButton onClick={handleClick} showArrow={true}>
                Watch AI In Action
              </AiButton>
            </Grid>
          </Grid>
        </Grid>
        {/* Right side content */}
        <Grid item xs={12} sm={6}>
          <EmbracingImages />
        </Grid>
      </Grid>
    </CenteredContainer>
  );
}
