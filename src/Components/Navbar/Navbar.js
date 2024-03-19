import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/system";
import logo from "../../Assets/NavBar/tem-s-logo 1.png"; // Import your logo file
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import { CustomButton } from "../../theme";
const StyledButton = styled(Button)({
  color: "white",
  textTransform: "none",
  marginRight: "20px",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  "&:hover": {
    color: "#000000",
    backgroundColor: "yellow",
  },
  "&:active": {
    backgroundColor: "yellow",
  },
});
const StyledMenuItem = styled(MenuItem)({
  color: "white",
  "&:hover": {
    color: "yellow",
    backgroundColor: "#400a4a",
  },
});
const StyledMenu = styled(Menu)({
  "& .MuiMenu-paper": {
    borderTop: "3px solid yellow",
    backgroundColor: "#400a4a",
    padding: "10px",
    fontSize: "16px",
    texAlign: "left",
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
  const [isPlatformClicked, setIsPlatformClicked] = useState(false);
  const handleMenuOpen = (event, setAnchorEl, setMenuOpen) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };
  const handlePlatformClick = () => {
    setIsPlatformClicked(true);
  };
  const handleMenuClose = (setAnchorEl, setMenuOpen) => {
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
        position="static"
        elevation={0}
        sx={{ background: isPlatformClicked ? "white" : "none" }}
      >
        <Toolbar
          sx={{
            justifyContent: isMobile ? "center" : "flex-end",
            bgcolor: "transparent",
            color: isPlatformClicked ? "black" : "white",
            backgroundColor: isPlatformClicked ? "white" : "none",
            textTransform: "none",
          }}
        >
          <img src={logo} alt="Logo" style={{ marginRight: "20px" }} />
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
                style={{ color: isPlatformClicked ? "black" : "white" }}
                onClick={handlePlatformClick}
                href="/platform"
              >
                Platform
              </StyledButton>
              <StyledButton
                style={{ color: isPlatformClicked ? "pink" : "white" }}
                onMouseEnter={(event) =>
                  handleMenuOpen(event, setAnchorEl2, setMenuOpen2)
                }
              >
                Solutions{" "}
                {menuOpen2 ? (
                  <ExpandLessOutlinedIcon />
                ) : (
                  <ExpandMoreOutlinedIcon />
                )}
              </StyledButton>
              <StyledButton
                style={{ color: isPlatformClicked ? "black" : "white" }}
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
              <StyledButton
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
          <StyledButton
            style={{ color: isPlatformClicked ? "black" : "white" }}
            sx={{ display: { xs: "none", sm: "inline" } }}
          >
            About
          </StyledButton>

          <CustomButton
            style={{ color: isPlatformClicked ? "black" : "white" }}
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
              onClick={() => handleMenuClose(setAnchorEl1, setMenuOpen1)}
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
              onClick={() => handleMenuClose(setAnchorEl1, setMenuOpen1)}
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
            id="navbar-menu3"
            anchorEl={anchorEl3}
            open={menuOpen3}
            onClose={() => handleMenuClose(setAnchorEl3, setMenuOpen3)}
            onMouseLeave={() => handleMenuClose(setAnchorEl3, setMenuOpen3)}
          >
            <StyledMenuItem
              onClick={() => handleMenuClose(setAnchorEl2, setMenuOpen2)}
            >
              Innovate
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuClose(setAnchorEl2, setMenuOpen2)}
            >
              Manage
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuClose(setAnchorEl2, setMenuOpen2)}
            >
              Modernize
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuClose(setAnchorEl2, setMenuOpen2)}
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
              onClick={() => handleMenuClose(setAnchorEl4, setMenuOpen4)}
            >
              Automative
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuClose(setAnchorEl3, setMenuOpen4)}
            >
              Manufacturing
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuClose(setAnchorEl4, setMenuOpen4)}
            >
              Oil & Gas
            </StyledMenuItem>
            <StyledMenuItem
              onClick={() => handleMenuClose(setAnchorEl4, setMenuOpen4)}
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
