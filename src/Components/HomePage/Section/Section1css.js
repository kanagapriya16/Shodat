import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { CustomButton2 } from '../../../theme';

export const StyledBox = styled(Box)({
    display: "flex",
    height: "90vh",
    alignItems: "center",
    borderRadius: '0px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transition: 'background-image 0.5s ease-in-out', // Add transition for background image change
  });
  
  export const TypographyContent = styled(Box)(({ theme }) => ({
    color: "white",
    position: "absolute",
    left: '3%',
    top: '60%',
    transform: 'translateY(-50%)',
    opacity: 0,
    transition: 'opacity 0.5s ease-in-out',
    
  }));
  
  export const CustomButtonStyled = styled(CustomButton2)({
    marginTop: '20px',
  });
  