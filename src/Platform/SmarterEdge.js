import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import AiButton from '../Components/Button/AiButton'
import eopsai from "../Assets/eopsai.png"
function SmarterEdge() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <Box>
      <Grid >
        <Typography variant='h3' sx={{ fontWeight: "bold", marginTop: "8%", marginLeft: "4%" }}>
          Smarter Operations with Intelligent Edge</Typography>
        <Box sx={{ marginLeft: "68%", marginTop: "-5%" }}>
          <AiButton
            width="35%" background="#F3D157" color="black"
            onClick={handleClick} showArrow={true}>
            free Trail
          </AiButton>
        </Box>
        <Grid >
          <Typography variant='h4' sx={{
            fontWeight: "bold", marginTop: "5%",
            marginLeft: "4%"
          }}>Edge Infrastructure</Typography>
          <Typography sx={{
            marginTop: "2%",
            marginLeft: "4%", fontSize: "30px", color: "#57647C"
          }}>Data integration fabric deployable at global scale for bespoke customer needs. Compute and storage designed for the Edge
            to enable fast and secure data aggregation and harmonization.</Typography>
        </Grid>

        <Box sx={{
          backgroundColor: "#F9C407", width: "55%", height: "50vh", marginTop: "3%",
          marginLeft: "4%", borderRadius: "10px"
        }}>
          <Typography sx={{ fontSize: "27px", fontWeight: "bold", marginLeft: "5%", paddingTop: "5%" }}>eOps Fabric Platform</Typography>
          <Typography sx={{ fontSize: "24px", marginLeft: "5%", paddingTop: "5%", color: "#57647C" }}>Edge enabled data mesh with management,</Typography>
          <Typography sx={{ fontSize: "24px", marginLeft: "5%", paddingTop: "0.1%", color: "#57647C" }}>processing, orchestration & compliance features to</Typography>
          <Typography sx={{ fontSize: "24px", marginLeft: "5%", paddingTop: "0.1%", color: "#57647C" }}>enable agile development and secured delivery of</Typography>
          <Typography sx={{ fontSize: "24px", marginLeft: "5%", paddingTop: "0.1%", color: "#57647C" }}>analytics  applications and ML optimised data models</Typography>
          <Typography sx={{ fontSize: "24px", marginLeft: "5%", paddingTop: "0.1%", color: "#57647C" }}>to meet high paced business demands.</Typography>
        </Box>
        <Box sx={{
          backgroundImage: `url(${eopsai})`,
          backgroundRepeat: "no-repeat",
          width: "30%",
          height: "50vh",
          backgroundSize: "cover",
          backgroundPosition:"center",
          borderRadius:"10px",
          marginLeft:"63%",
          marginTop:"-24%"
        }}>
        </Box>
      </Grid>

    </Box>
  )
}

export default SmarterEdge


