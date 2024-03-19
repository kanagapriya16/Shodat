import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

const Footer1 = () => {
  const theme = useTheme();
  const gridContainerStyle = {
    borderTop: "5px solid gray",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    bgcolor: "black",
    color: "#CDCBD4",
    minHeight: "10vh",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      flex: 1,
    },
  };
  const gridItemStyle = {
    display: "flex",

    justifyContent: "space-around",
    ml: "0px",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      alignItems: "center",
    },
  };

  return (
    <>
      <Grid container sx={gridContainerStyle}>
        <Grid
          item
          xs={12}
          sx={{ ...gridItemStyle, flexDirection: "row", rowGap: "50px" }}
        >
          <Typography>Refund Policy</Typography>
          <Typography>Cookie Policy</Typography>
          <Typography>Terms of use</Typography>
          <Typography>Accesblity Statement</Typography>
          <Typography>Code of Business Ethics</Typography>
          <Typography>Copyright Policy</Typography>
          <Typography>CalOPPA</Typography>
          <Typography>ABAC Policy</Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer1;
