import React from "react";
import Button from "@mui/material/Button";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import { color, styled } from "@mui/system";

// Styled icon with rotation
const RotatedIcon = styled(ExpandCircleDownRoundedIcon)({
  transform: "rotate(-90deg)", // Rotate the icon 90 degrees clockwise
});

export default function AiButton({
  children,
  onClick,
  showArrow = false,
  width,
  color,
  background,
}) {
  return (
    <Button
      onClick={onClick}
      startIcon={
        showArrow && <RotatedIcon style={{ fontSize: 32, color: "white" }} />
      }
      sx={{
        background:
          background ||
          "linear-gradient(110.53deg, #00C4CC -8.24%, #3E4499 32.83%, #5E027F 82.38%, #F4BE00 106.38%)",
        color: color || "#fff",
        width: width || "50%",
        borderRadius: "15px",
        marginTop: "4%",
        padding: "10px 20px 10px 20px",
        borderRadius: 10,
        "&:hover": {
          backgroundColor: background || "#340d73",
        },
        "&:active": {
          backgroundColor: background || "#340d73",
        },
      }}
    >
      {children}
    </Button>
  );
}
