import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { CustomButton2 } from "../../../../theme";

export const StyledBox = styled(Box)({
  display: "flex",
  height: "100vh",
  alignItems: "center",
  borderRadius: "0px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "background-image 0.5s ease-in-out", // Add transition for background image change
  
});
export const StyledBox2 = styled(Box)({

  height: "100px",
  width:"100px",
backgroundColor:"#F3D157",
  alignItems: "center",
bottom:0,
left:670,
alignContent:"center",
textAlign:"center",
justifyContent:"center",
position:"absolute",
  backgroundSize: "cover",
  backgroundPosition: "center",
 
});

export const TypographyContent = styled(Box)(({ theme }) => ({
  color: "white",
  position: "absolute",
  left: "9%",
  top: "60%",
  textAlign:"left",
  transform: "translateY(-50%)",
  opacity: 0,
  transition: "opacity 0.5s ease-in-out",
  display:"flex",

  flexDirection:"column",
  fontSize:"40px",
  width:"100%"

  
  
}));

export const CustomButtonStyled = styled(CustomButton2)({
  marginTop: "20px",
  borderRadius:"100px",
});
