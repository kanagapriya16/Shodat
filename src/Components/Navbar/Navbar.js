import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/system";
import logo from "../../Assets/NavBar/tem-s-logo 1.png"; // Import your logo file
import logo2 from "../../Assets/NavBar/image.png"; // Import your logo file
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import { CustomButton } from "../../theme";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const StyledButton = styled(Button)(({ isPlatformClicked }) => ({
  color: "#FFFFFF",
  fontFamily:"Open Sans",
  textTransform: "none",
  marginRight: "20px",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  "&:hover": {
    color: isPlatformClicked ? "black" : "black", 
    backgroundColor: "#F3D157",
    fontWeight: "400",
    
  },
  "&:active": {
    backgroundColor: "#F3D157",
  },
}));


const StyledMenuItem = styled(MenuItem)({
  color: "white",
  fontWeight: "400",
  fontFamily:"Open Sans",
  justifyContent:"space-between",
  gap:"200px",
  fontSize:"14px",
  "&:hover": {
    color: "yellow",
    backgroundColor: "#400a4a",
  },
});

const StyledMenu = styled(Menu)({
  "& .MuiMenu-paper": {
    borderTop: "5px solid #F3D157",
    backgroundColor: "#400a4a",
    padding: " 0px  60px 0px  0px",
    fontSize: "16px",
    textAlign: "left",

    
  },
});

const Navbar = () => {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const [anchorEl4, setAnchorEl4] = useState(null);
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [menuOpen2, setMenuOpen2] = useState(false);
  const [menuOpen3, setMenuOpen3] = useState(false);
  const [menuOpen4, setMenuOpen4] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isButtonActive, setButtonActive] = useState(true); // Initially set to true

  const [isPlatformClicked, setIsPlatformClicked] = useState(false);
  const history = useNavigate();
const handleNextButtonOpen = (event) => {
  event.currentTarget.style.backgroundColor = "none";
};

  const handleMenuOpen = (event, setAnchorEl, setMenuOpen) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
   
    event.currentTarget.style.backgroundColor = "#F3D157";
    event.currentTarget.style.color = "black";
  
  };

  const handlePlatformClick = () => {
   
    history("/platform");
    if (!isPlatformClicked) {
      setIsPlatformClicked(true);
      history("/platform");
    } else {
      setIsPlatformClicked(false);
      history("/"); 
    }
  };
  const handleAboutClick = () => {
    history("/about");
  };
  

  const handleMenuClose = (setAnchorEl, setMenuOpen) => {
    setAnchorEl(null);
    setMenuOpen(false);
   
    document.querySelectorAll(".menu-button").forEach(button => {
      button.style.backgroundColor = "transparent";
      button.style.color= isPlatformClicked? "black":"white"
    
    });
  };

  const handleMenuItemClick = (setAnchorEl, setMenuOpen) => {
    setAnchorEl(null);
    setMenuOpen(false);
  };

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <AppBar 
        position="fixed"
        elevation={0}
        sx={{ background: isPlatformClicked ? "white" : "transparent" }}
      >
        <Toolbar
          sx={{
            justifyContent: isMobile ? "center" : "center",
            color: isPlatformClicked ? "black" : "white",
            backgroundColor: isPlatformClicked ? "white" :"transparent",
            textTransform: "none",
            fontFamily:"serif"
          }}
        >
          {isPlatformClicked ? (

<img src={logo2} alt="Logo" style={{ marginRight: "20px", width:"200px",height:"40px" }} />

          ):(

            <img src={logo} alt="Logo" style={{ marginRight: "20px",  }} />

          )}
  
  


          {isMobile ? (
            <div
              style={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                edge="end"
              >
                <MenuIcon />
              </IconButton>
            </div>
          ) : (
            <>
              <StyledButton
                style={{
                  color: isPlatformClicked ? "black" : "white",
                  
                 
                }}
                onClick={handlePlatformClick}
                href="#"
              >
                Platform
              </StyledButton>

              <StyledButton  className="menu-button" // Add the menu-button class here
               style={{ color: isPlatformClicked ? "black" : "white" }}
               onMouseEnter={(event) => {
                 handleMenuOpen(event, setAnchorEl2, setMenuOpen2);
                 handleNextButtonOpen(event);
                 
               }}
              >
                Solutions{" "}
                {menuOpen2 ? (
                  <ExpandLessOutlinedIcon />
                ) : (
                  <ExpandMoreOutlinedIcon />
                )}
              </StyledButton>
              <StyledButton  className="menu-button" // Add the menu-button class here
              
                style={{ color: isPlatformClicked ? "black" : "white",
              
              
              
              }}
                onMouseEnter={(event) =>
                  handleMenuOpen(event, setAnchorEl3, setMenuOpen3)
                }
              >
                Services{" "}
                {menuOpen3 ? (
                  <ExpandLessOutlinedIcon />
                ) : (
                  <ExpandMoreOutlinedIcon />
                )}
              </StyledButton>
              <StyledButton className="menu-button" // Add the menu-button class here
                style={{ color: isPlatformClicked ? "black" : "white" }}
                onMouseEnter={(event) =>
                  handleMenuOpen(event, setAnchorEl4, setMenuOpen4)
                }
              >
                Industries{" "}
                {menuOpen4 ? (
                  <ExpandLessOutlinedIcon />
                ) : (
                  <ExpandMoreOutlinedIcon />
                )}
              </StyledButton>
            </>
          )}

          <StyledButton
            style={{ color: isPlatformClicked ? "black" : "white" }}
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            Customer Success
          </StyledButton>
          <StyledButton
            style={{ color: isPlatformClicked ? "black" : "white" }}
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            Shodat AI
          </StyledButton>
          <StyledButton onClick={handleAboutClick}
            style={{ color: isPlatformClicked ? "black" : "white" ,}}
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            About
          </StyledButton >

          <CustomButton style={{
            textTransform:"none",
            marginLeft:"5%",
          }}
           
          >
            {" "}
            RequestDemo
          </CustomButton>

          <StyledMenu
            id="navbar-menu1"
            anchorEl={anchorEl1}
            open={menuOpen1}
            onClose={() => handleMenuClose(setAnchorEl1, setMenuOpen1)}
            onMouseLeave={() => handleMenuClose(setAnchorEl1, setMenuOpen1)}
          >
            <StyledMenuItem
              onClick={() => handleMenuItemClick(setAnchorEl1, setMenuOpen1)}
            >
              Data Engineering
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuItemClick(setAnchorEl1, setMenuOpen1)}
            >
              AI Innovation
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuItemClick(setAnchorEl1, setMenuOpen1)}
            >
              ERP System & Analytics
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuItemClick(setAnchorEl1, setMenuOpen1)}
            >
              Vision AI
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuItemClick(setAnchorEl1, setMenuOpen1)}
            >
              Edge Analytics
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuItemClick(setAnchorEl1, setMenuOpen1)}
            >
              Intelligent Enterprise
            </StyledMenuItem>
          </StyledMenu>
          <StyledMenu
            id="navbar-menu2"
            anchorEl={anchorEl2}
            open={menuOpen2}
            onClose={() => handleMenuClose(setAnchorEl2, setMenuOpen2)}
            onMouseLeave={() => handleMenuClose(setAnchorEl2, setMenuOpen2)}
          >
          <StyledMenuItem
           onClick={() => {
            handleMenuItemClick(setAnchorEl1, setMenuOpen1);
            // Add any additional actions here, such as navigation
          }}
            >
              Data Engineering
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuClose(setAnchorEl1, setMenuOpen1)}
            >
              AI Innovation
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuClose(setAnchorEl1, setMenuOpen1)}
            >
              ERP System & Analytics
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuClose(setAnchorEl1, setMenuOpen1)}
            >
              Vision AI
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuClose(setAnchorEl1, setMenuOpen1)}
            >
              Edge Analytics
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuClose(setAnchorEl1, setMenuOpen1)}
            >
              Intelligent Enterprise
            </StyledMenuItem>
          </StyledMenu>
          <StyledMenu
            id="navbar-menu2"
            anchorEl={anchorEl2}
            open={menuOpen2}
            onClose={() => handleMenuClose(setAnchorEl2, setMenuOpen2)}
            onMouseLeave={() => handleMenuClose(setAnchorEl2, setMenuOpen2)}
          >
            <StyledMenuItem
              onClick={() => handleMenuClose(setAnchorEl2, setMenuOpen2)}
            >
              Data Engineering
            </StyledMenuItem>
            <StyledMenuItem
               onClick={() => handleMenuClose(setAnchorEl2, setMenuOpen2)}
            >
              AI Innovation
            </StyledMenuItem>
            <StyledMenuItem
               onClick={() => handleMenuClose(setAnchorEl2, setMenuOpen2)}
            >
              ERP System & Analytics
            </StyledMenuItem>
            <StyledMenuItem
                onClick={() => handleMenuClose(setAnchorEl2, setMenuOpen2)}
            >
              Vision AI
            </StyledMenuItem>
            <StyledMenuItem
               onClick={() => handleMenuClose(setAnchorEl2, setMenuOpen2)}
            >
              Edge Analytics
            </StyledMenuItem>
            <StyledMenuItem
               onClick={() => handleMenuClose(setAnchorEl2, setMenuOpen2)}
            >
              Intelligent Enterprise
            </StyledMenuItem>
          </StyledMenu>
          <StyledMenu
            id="navbar-menu3"
            anchorEl={anchorEl3}
            open={menuOpen3}
            onClose={() => handleMenuClose(setAnchorEl3, setMenuOpen3)}
            onMouseLeave={() => handleMenuClose(setAnchorEl3, setMenuOpen3)}
          >
          <StyledMenuItem
              onClick={() => handleMenuClose(setAnchorEl3, setMenuOpen3)}
            >
              Innovate
            </StyledMenuItem>
            <StyledMenuItem
               onClick={() => handleMenuClose(setAnchorEl3, setMenuOpen3)}
            >
              Manage
            </StyledMenuItem>
            <StyledMenuItem
               onClick={() => handleMenuClose(setAnchorEl3, setMenuOpen3)}
            >
              Modernize
            </StyledMenuItem>
            <StyledMenuItem
               onClick={() => handleMenuClose(setAnchorEl3, setMenuOpen3)}
            >
              Security
            </StyledMenuItem>
          </StyledMenu>
          <StyledMenu
            id="navbar-menu4"
            anchorEl={anchorEl4}
            open={menuOpen4}
            onClose={() => handleMenuClose(setAnchorEl4, setMenuOpen4)}
            onMouseLeave={() => handleMenuClose(setAnchorEl4, setMenuOpen4)}
          >
            <StyledMenuItem
              onClick={() => handleMenuItemClick(setAnchorEl4, setMenuOpen4)}
            >
              Automative
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuItemClick(setAnchorEl4, setMenuOpen4)}
            >
              Manufacturing
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuItemClick(setAnchorEl4, setMenuOpen4)}
            >
              Oil & Gas
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuItemClick(setAnchorEl4, setMenuOpen4)}
            >
              Transportation
            </StyledMenuItem>
          </StyledMenu>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <div style={{ width: "200px" }}>
          <MenuItem onClick={handleDrawerToggle}>Platform</MenuItem>
          <MenuItem onClick={handleDrawerToggle}>Solutions</MenuItem>
          <MenuItem onClick={handleDrawerToggle}>Services</MenuItem>
          <MenuItem onClick={handleDrawerToggle}>Industries</MenuItem>
        </div>
      </Drawer>
    </div>
  );
};
export default Navbar;
