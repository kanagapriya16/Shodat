import { Typography, Box, Stack, Button } from "@mui/material";
import React from "react";
import "./production-ready.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DiscoverDifference from ".././discover/DiscoverDifference";

const ProductionReadyAi = () => {
  return <Box>
    <Box className="production">
      <Stack direction="column">
        <Typography variant="h3" sx={{
          marginTop: '5%',
          marginLeft: "4%",
          color: '#340D73',
          fontWeight: "bold"
        }}>Production-ready AI,</Typography>
        <Typography variant="h3" sx={{
          marginLeft: "4%",

        }}>enriched with industry experience</Typography>

        <Box sx={{
          backgroundColor: '#340D73',
          marginLeft: "4%",
          marginTop: "3%",
          width: "40%",
          height: "40vh",
          borderRadius: '10px'
        }}>
          <Typography variant="h5" sx={{ color: "white", marginLeft: "10%", marginTop: "9%", }}>Our market ready solutions provide flexible </Typography>
          <Typography variant="h5" sx={{ color: "white", marginLeft: "10%", marginTop: "2%" }}>and scalable capabilities that enterprises </Typography>
          <Typography variant="h5" sx={{ color: "white", marginLeft: "10%", marginTop: "2%" }}>need to successfully become AI-fueled  </Typography>
          <Typography variant="h5" sx={{ color: "white", marginLeft: "10%", marginTop: "2%" }}>organizations</Typography>
        </Box>
        <Box sx={{ marginLeft: "49%", marginTop: "-20%" }}>
          <Typography variant="h6" fontWeight="bold" color="#57647C">Redefining the infusion of machine learning in heavy </Typography>
          <Typography variant="h6" fontWeight="bold" color="#57647C">  industries for a decade, we at Shodat Inc are poised for </Typography>
          <Typography variant="h6" fontWeight="bold" color="#57647C"> a paradigm shift in the industry with ready AI—eOps </Typography>
          <Typography variant="h6" fontWeight="bold" color="#57647C"> Fabric™, an edge analytics, and operations platform. </Typography>
          <Typography variant="h6" fontWeight="bold" color="#57647C"> The platform leverages a powerful combination of </Typography>
          <Typography variant="h6" fontWeight="bold" color="#57647C"> computer vision, predictive analytics, and generative </Typography>
          <Typography variant="h6" fontWeight="bold" color="#57647C"> AI to predict operational defects, automate RCA </Typography>
          <Typography variant="h6" fontWeight="bold" color="#57647C"> reports, and propose impactful enhancements that </Typography>
          <Typography variant="h6" fontWeight="bold" color="#57647C"> promise significant cost benefits.</Typography>
          <Button
            sx={{
              background: 'linear-gradient(110.53deg, #00C4CC -8.24%, #3E4499 32.83%, #5E027F 82.38%, #F4BE00 106.38%)',
              color: '#fff',
              width: "20%",
              borderRadius: "15px",
              marginTop: "4%",
              padding: "10px 20px 10px 20px",
              '&:hover': {
                background: 'linear-gradient(110.53deg, #00C4CC -8.24%, #3E4499 32.83%, #5E027F 82.38%, #F4BE00 106.38%)',
                opacity: 0.9, 
              },
            }}
          ><ArrowForwardIosIcon fontSize="4px"/>
            Let's Talk AI
          </Button>
        </Box>
      </Stack>
    </Box>
    <DiscoverDifference />
  </Box>

};

export default ProductionReadyAi;
