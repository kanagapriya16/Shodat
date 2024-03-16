import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Engineering from "../../../../Assets/AdvancedAI/Data Engineering.png";
import Innovation from "../../../../Assets/AdvancedAI/AI Innovation.png";
import Vision from "../../../../Assets/AdvancedAI/Vision AI.png";
import Analytics from "../../../../Assets/AdvancedAI/Edge Analytics.png";
import Enterprise from "../../../../Assets/AdvancedAI/Inteligent Enterprise.png";
import ERP from "../../../../Assets/AdvancedAI/ERP System.png";
import Cloud from "../../../../Assets/AdvancedAI/Cloud Transformation.png";
import { styled } from "@mui/material/styles";

const cards = [
  {
    title: "",
    fontFamily: "Open Sans,sans-serif",
    fontSize: "44px",
    lineHeight: "55px",
    letterSpacing: "0em",
    lg: 8,
  },
  {
    title: "Data Engineering",
    image: Engineering,
    content: "Empowering Insights through robust data engineering",
    lg: 4,
  },
  {
    title: "AI Innovation",
    image: Innovation,
    content:
      "Pioneering AI innovations transforming data into intelligent action",
    lg: 4,
  },
  {
    title: "Vision AI",
    image: Vision,
    content: "Seeing beyond data revolutionize decision-making with vision AI",
    lg: 4,
  },
  {
    title: "Edge Analytics",
    image: Analytics,
    content:
      "Step into the era of instant intelligence with our edge analytics solutions",
    lg: 4,
  },
  {
    title: "Inteligent Enterprise",
    image: Enterprise,
    content:
      "Transforming businesses into intelligent enterprises explore the power of data",
    lg: 4,
  },
  {
    title: "ERP Systems & Analytics",
    image: ERP,
    content: "Unleashing the power of ERP systems & addvanced analytics",
    lg: 4,
  },
  {
    title: "Cloud Transformation",
    image: Cloud,
    content:
      "Discover how the power of the cloud redefines the way businesses leverage data analytics",
    lg: 4,
  },
];
const CenteredContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "100px",
});
const CardsComponent = () => {
  const [hovered, setHovered] = useState(Array(cards.length).fill(false));

  const handleMouseEnter = (index) => {
    setHovered((prevHovered) => {
      const newHovered = [...prevHovered];
      newHovered[index] = true;
      return newHovered;
    });
  };

  const handleMouseLeave = (index) => {
    setHovered((prevHovered) => {
      const newHovered = [...prevHovered];
      newHovered[index] = false;
      return newHovered;
    });
  };

  const handleImageClick = () => {};

  return (
    <CenteredContainer>
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid key={index} item xs={12} sm={12} md={card.lg} lg={card.lg}>
            <Paper
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{
                position: "relative",
                transition: "background-color 0.3s, color 0.3s",
                overflow: "hidden",
                height: 250,
                width: "100%",
                borderRadius: 8,
                boxShadow:
                  index === 0 ? "none" : "0px 4px 20px rgba(0, 0, 0, 0.1)",
              }}
              elevation={index === 0 ? 0 : 3}
            >
              {index === 0 && (
                <Typography
                  gutterBottom
                  style={{
                    fontSize: card.fontSize,
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      color: "#432071",
                      marginRight: "10px",
                    }}
                  >
                    Discover
                  </span>
                  <span style={{ fontWeight: 300, color: "#000000" }}>
                    how Shodat can elevate your business with our bespoke data
                    analytics solutions
                  </span>
                </Typography>
              )}
              {index === 0 && (
                <Typography
                  variant="h3"
                  gutterBottom
                  style={{
                    color: card.color,
                    fontSize: card.fontSize,
                    padding: "20px",
                  }}
                >
                  {card.title}
                </Typography>
              )}
              {index !== 0 && (
                <>
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      backgroundColor:
                        index !== 0 && hovered[index]
                          ? "rgba(67, 32, 113, 0.7)"
                          : "transparent",
                      padding: "20px",
                      borderRadius: "8px",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="left"
                      mt={12}
                      ml={3}
                      gutterBottom
                      style={{
                        color: hovered[index] ? "#e6c458" : "black",
                        fontFamily: "Open Sans,sans-serif",
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "30px",
                        letterSpacing: "0em",
                        opacity: hovered[index] ? 1 : 0.9,
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="left"
                      ml={3}
                      style={{
                        color: hovered[index] ? "#e6c458" : "#5E5E5E",
                        fontFamily: "Open Sans,sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "21px",
                        letterSpacing: "0em",
                      }}
                    >
                      {card.content}
                    </Typography>
                  </div>
                  <IconButton
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: hovered[index] ? "8px" : "24px",
                      transition: "right 0.3s, opacity 0.3s",
                      opacity: hovered[index] ? 1 : 0,
                      color: "#e6c458",
                      zIndex: 3,
                    }}
                  >
                    <ArrowForwardIcon />
                  </IconButton>
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: -20,
                      transition: "transform 0.3s",
                      transformOrigin: "top right",
                      transform: hovered[index] ? "scale(1.8)" : "scale(1)",
                      zIndex: 1,
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{ width: "220px", height: "auto" }}
                      onClick={handleImageClick}
                    />
                  </div>
                </>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </CenteredContainer>
  );
};

export default CardsComponent;
