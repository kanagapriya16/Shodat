import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import dot1 from "../../Assets/dot1.png";
import { styled } from "@mui/material/styles";

const cards = [
  {
    title: "Data Engineering",
    image: dot1,
    content: "Empowering Insights through robust data engineering",
  },
  {
    title: "AI Innovation",
    image: dot1,
    content:
      "Pioneering AI innovations transforming data into intelligent action",
  },
  {
    title: "Vision AI",
    image: dot1,
    content: "Seeing beyond data revolutionize decision-making with vision AI",
  },
  {
    title: "Edge Analytics",
    image: dot1,
    content:
      "Step into the era of instant intelligence with our edge analytics solutions",
  },
  {
    title: "Inteligent Enterprise",
    image: dot1,
    content:
      "Transforming businesses into intelligent enterprises explore the power of data",
  },
  {
    title: "ERP Systems & Analytics",
    image: dot1,
    content: "Unleashing the power of ERP systems & addvanced analytics",
  },
  {
    title: "Cloud Transformation",
    image: dot1,
    content:
      "Discover how the power of the cloud redefines the way businesses leverage data analytics",
  },
];
const CenteredContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "100px",
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
        <Grid>
          <Typography variant="h3" gutterBottom>
            <span style={{ color: "#340D73", fontWeight: "bold" }}>
              <b>Embracing</b>
            </span>{" "}
            {""}
            power of data and advanced AI for the automotive industry
          </Typography>
        </Grid>
        {cards.map((card, index) => (
          <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
            <Paper
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{
                position: "relative",
                transition: "background-color 0.3s, color 0.3s",
                overflow: "hidden",
                height: 250,
                width: 400,
                borderRadius: 8,
                backgroundColor: hovered[index] ? "#422070" : "inherit",
              }}
              elevation={3}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: -20,
                  transition: "transform 0.3s",
                  transformOrigin: "top right",
                  transform: hovered[index] ? "scale(2)" : "scale(1)",
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{ width: "200px", height: "auto" }}
                  onClick={handleImageClick}
                />
              </div>
              <IconButton
                style={{
                  position: "absolute",
                  top: "8px",
                  right: hovered[index] ? "8px" : "24px",
                  transition: "right 0.3s, opacity 0.3s",
                  opacity: hovered[index] ? 1 : 0,
                  color: "goldenrod",
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
              <Typography
                variant="h6"
                align="left"
                mt={12}
                ml={3}
                gutterBottom
                style={{
                  color: hovered[index] ? "goldenrod" : "inherit",
                  fontWeight: "bold",
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
                  color: hovered[index] ? "goldenrod" : "inherit",
                }}
              >
                {card.content}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </CenteredContainer>
  );
};

export default CardsComponent;
