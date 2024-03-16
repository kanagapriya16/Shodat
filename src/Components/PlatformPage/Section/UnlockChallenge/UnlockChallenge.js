import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";

const UnlockChallenge = () => {
  const theme = useTheme();
  const gridContainerStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    color: "#CDCBD4",
    minHeight: "80vh",
    padding: "20px",
    bgcolor: "blue",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flex: 1,
    },
  };
  const gridItemStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    textAlign: "center",
    marginBottom: "20px",
  };
  const iconStyle = {
    fontSize: "48px",
    marginBottom: "10px",
  };
  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
  };
  const paraStyle = {
    fontSize: "16px",
  };

  return (
    <>
      <Grid>
        <Typography
          variant="h4"
          style={{
            color: "red",
            display: "flex",
            justifyContent: "center",
            margin: "20px 50px",
          }}
        >
          A suite of turnkey products to quickly unlock the value of data for
          solving everyday business & operational challenges
        </Typography>
        <Grid sx={gridContainerStyle}>
          <Grid container xs={12} sm={6} md={6} lg={6}>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Grid
                key={index}
                item
                xs={12}
                md={6}
                lg={6}
                sx={{ ...gridItemStyle }}
              >
                <Box>
                  {/* Icon goes here */}
                  <Typography variant="h1" style={iconStyle}>
                    Icon {index}
                  </Typography>
                  <Typography variant="h3" style={titleStyle}>
                    Title {index}
                  </Typography>
                  <Typography variant="body1" style={paraStyle}>
                    Paragraph {index}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default UnlockChallenge;
