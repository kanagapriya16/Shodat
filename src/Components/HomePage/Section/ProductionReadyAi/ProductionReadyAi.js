import { Typography, Box, Stack, Button } from "@mui/material";
import React from "react";
import "./production-ready.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AiButton from "../../../Button/AiButton";
const ProductionReadyAi = () => {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <Box>
      <Box className="production">
        <Stack direction="column">
          <Typography
            variant="h3"
            sx={{
              marginTop: "5%",
              marginLeft: "60px",
              color: "#340D73",
              fontWeight: "bold",
            }}
          >
            Production-ready AI,
          </Typography>
          <Typography
            variant="h3"
            sx={{
              marginLeft: "60px",
            }}
          >
            enriched with industry experience
          </Typography>
          <Box
            sx={{
              backgroundColor: "#340D73",
              marginLeft: "60px",
              marginTop: "40px",
              width: "40%",
              height: "40vh",
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "white", marginLeft: "60px", marginTop: "40px" }}
            >
              Our market ready solutions provide flexible{" "}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "white", marginLeft: "60px", marginTop: "20px" }}
            >
              and scalable capabilities that enterprises{" "}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "white", marginLeft: "60px", marginTop: "20px" }}
            >
              need to successfully become AI-fueled{" "}
            </Typography>
            <Typography
              variant="h5"
              sx={{ color: "white", marginLeft: "60px", marginTop: "20px" }}
            >
              organizations
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "730px", marginTop: "-300px" }}>
            <Typography variant="h6" fontWeight="bold" color="#57647C">
              Redefining the infusion of machine learning in heavy{" "}
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="#57647C">
              {" "}
              industries for a decade, we at Shodat Inc are poised for{" "}
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="#57647C">
              {" "}
              a paradigm shift in the industry with ready AI—eOps{" "}
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="#57647C">
              {" "}
              Fabric™, an edge analytics, and operations platform.{" "}
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="#57647C">
              {" "}
              The platform leverages a powerful combination of{" "}
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="#57647C">
              {" "}
              computer vision, predictive analytics, and generative{" "}
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="#57647C">
              {" "}
              AI to predict operational defects, automate RCA{" "}
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="#57647C">
              {" "}
              reports, and propose impactful enhancements that{" "}
            </Typography>
            <Typography variant="h6" fontWeight="bold" color="#57647C">
              {" "}
              promise significant cost benefits.
            </Typography>
            <Button
              sx={{
                background:
                  "linear-gradient(110.53deg, #00C4CC -8.24%, #3E4499 32.83%, #5E027F 82.38%, #F4BE00 106.38%)",
                color: "#fff",
                width: "20%",
                borderRadius: "15px",
                marginTop: "4%",
                padding: "10px 20px 10px 20px",
                // '&:hover': {
                //   background: 'linear-gradient(110.53deg, #00C4CC -8.24%, #3E4499 32.83%, #5E027F 82.38%, #F4BE00 106.38%)',
                //   opacity: 0.9,
                // },
              }}
            >
              <ArrowForwardIosIcon fontSize="15px" width="20%" />
              Let's Talk AI
            </Button>
            {/* <AiButton
              onClick={handleClick}
              showArrow={true}
              width="20%"
              sx={{ padding: "10px 20px 10px 20px" }}
            >
              Let's Talk AI
            </AiButton> */}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
export default ProductionReadyAi;
