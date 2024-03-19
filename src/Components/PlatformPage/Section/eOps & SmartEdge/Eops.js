import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import SmarterEdge from "./SmarterEdge";

import eOps from "../../../../Assets/PlatformPage/Platform/plat.png";

function Eops() {
  return (
    <Box
      height={"163vh"}
      sx={{
        backgroundColor: "#FFFBEF",
      }}
    >
      <Grid container xs={12}>
        <Typography
          variant="h4"
          sx={{ marginLeft: "4%", marginTop: "4%", fontWeight: "bold" }}
        >
          Why eOps?
        </Typography>
        <Box
          sx={{
            backgroundImage: `url(${eOps})`,
            backgroundRepeat: "no-repeat",
            width: "160px",
            height: "22vh",
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginLeft: "-14%",
            marginTop: "7%",
          }}
        ></Box>
        <Typography
          sx={{ marginTop: "17%", marginLeft: "-8%", fontSize: "15px" }}
        >
          this is a sample,
          <Typography sx={{ fontSize: "15px" }}> eops logo</Typography>
        </Typography>
      </Grid>
      <Grid container xs={12}>
        <Typography sx={{ marginLeft: "29%", marginTop: "-16%" }}>
          <CheckIcon /> Turnkey enterprise platform for all data integration &
          <Typography sx={{ marginLeft: "7%", marginTop: "2%" }}>
            analytics needs.
          </Typography>
        </Typography>
        <Typography sx={{ marginLeft: "8%", marginTop: "-16%" }}>
          <CheckIcon /> Industry-proven ML models.
        </Typography>
        <Typography sx={{ marginLeft: "29%", marginTop: "-10%" }}>
          <CheckIcon />
          No implementation delays with minimal
          <Typography sx={{ marginLeft: "7%", marginTop: "1%" }}>
            customizations.
          </Typography>
        </Typography>
        <Typography sx={{ marginLeft: "14%", marginTop: "-10%" }}>
          <CheckIcon />
          Consistent CSAT ratings of 95% and above.
        </Typography>
        <Typography sx={{ marginLeft: "29%", marginTop: "-4%" }}>
          <CheckIcon /> Seamless deployments & built for global scale.
        </Typography>
        <Typography sx={{ marginLeft: "10%", marginTop: "-4%" }}>
          <CheckIcon />
          Low/No code data ingestion, harmonization & ML
          <Typography sx={{ marginLeft: "7%", marginTop: "1%" }}>
            features.
          </Typography>
        </Typography>
      </Grid>
      <SmarterEdge />
    </Box>
  );
}
export default Eops;
