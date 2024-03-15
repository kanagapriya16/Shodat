import { Button, styled } from "@mui/material";

export const CustomButton = styled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 40,
  width: 150,
  fontSize: 10,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 30,
  padding: "0 30px",
  transition: "background-color 0.3s",
  "&:hover": {
    background: "#8295b3",
    borderRadius: 14,
  },
});

export const CustomButton2 = styled(Button)({
  background: "blue",
  border: 0,
  borderRadius: 40,
  width: 150,
  fontSize: 10,
  color: "white",
  height: "50px",
  padding: "0 30px",
  transition: "background-color 0.3s",
  "&:hover": {
    background: "#8295b3",
    borderRadius: 14,
  },
});
