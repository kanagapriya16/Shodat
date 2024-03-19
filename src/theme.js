import { Button, styled } from "@mui/material";

export const CustomButtoncenter = styled(Button)({
  background: "#F3D157",
  border: 0,
  justifyContent: "center",
  display: "flex",
  position: "absolute",
  width: "80px",
  marginTop: "-5%",
  fontSize: 12,
  color: "white",
  height: 50, // Increased height
  padding: "0 30px",
  transition: "background-color 0.3s",
});
export const CustomButton = styled(Button)({
  background: "#016C7B",
  border: 0,
  borderRadius: "50px",
  width: "150px",

  color: "white",
  height: 44,
  padding: "0 30px",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  transition: "background-color 0.3s",
  whiteSpace: "nowrap",
  "&:hover": {
    background:
      "linear-gradient(110.53deg, #00C4CC -8.24%, #3E4499 32.83%, #5E027F 82.38%, #F4BE00 106.38%)",
    borderRadius: 2,
  },
});

export const CustomButton2 = styled(Button)({
  background: " #016C7B",
  textTransform:"none",
  border: 0,
  borderRadius: 40,
  width: 100,
  
  fontSize: 16,
  fontFamily:"Open Sans",
  fontWeight:400,

  color: " #FFFFFF",

  height: "50px",
  padding: "10px 20px 10px 20px",
  transition: "background-color 0.3s",
  "&:hover": {
    background:
      "linear-gradient(110.53deg, #00C4CC -8.24%, #3E4499 32.83%, #5E027F 82.38%, #F4BE00 106.38%)",

    borderRadius: 14,
  },
});
export const Iconstyle = {
  bgcolor: "white",
  height: "20px",
  width: "20px",
  borderRadius: 100,
  color: "black",
};
