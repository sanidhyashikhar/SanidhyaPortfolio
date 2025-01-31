import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Fade,
  IconButton,
  Divider,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { styled } from "@mui/system";

// Styled AppBar without animation
const AnimatedAppBar = styled(AppBar)(() => ({
  background: "linear-gradient(45deg, #1a1a1a, #333333)", // Dark gradient background
  color: "#ffffff", // White text
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
}));

// Global CSS for animation
const globalStyles = `
  @keyframes slideDown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [isHovered, setIsHovered] = useState(false);

  // Handle menu open
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Inject global styles for the animation
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = globalStyles;
    document.head.appendChild(styleTag);

    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <AnimatedAppBar
      position="static"
      sx={{
        animation: "slideDown 1s ease-out", // Apply animation
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Image Instead of My Portfolio */}
        <IconButton
          onClick={() => (window.location.href = "/")} // Navigate to '/'
          sx={{ padding: 0 }}
        >
          <img
            src={
              isHovered
                ? "src/assets/ss-high-resolution-logo-grayscale-transparent.png"
                : "src/assets/ss-high-resolution-logo-transparent.png"
            }
            alt="Portfolio"
            style={{
              width: "75px", // Size of the image
              height: "80px",
              borderRadius: "50%", // Circular shape
              objectFit: "contain", // Ensures the image covers the circle without distortion
              transition: "opacity 0.3s ease, border 0.3s ease", // Smooth transition for hover effect
              border: isHovered ? "2px solid #888" : "2px solid #379e70", // Ternary operator (though redundant in this case)
              // Border with a grey color
            }}
            onMouseEnter={() => setIsHovered(true)} // Hover effect to change the image
            onMouseLeave={() => setIsHovered(false)} // Revert back when not hovered
          />
        </IconButton>

        {/* Show buttons on larger screens */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              color="inherit"
              href="#home"
              sx={{
                "&:hover": {
                  backgroundColor: "#555", // Grey hover effect
                },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              href="#about"
              sx={{
                "&:hover": {
                  backgroundColor: "#555", // Grey hover effect
                },
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              href="#projects"
              sx={{
                "&:hover": {
                  backgroundColor: "#555", // Grey hover effect
                },
              }}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              href="#contact"
              sx={{
                "&:hover": {
                  backgroundColor: "#555", // Grey hover effect
                },
              }}
            >
              Contact
            </Button>

            {/* LinkedIn and GitHub Icons */}
            <IconButton
              color="inherit"
              href="https://www.linkedin.com/in/sanidhya-shikhar-58b3731a1/"
              sx={{
                "&:hover": {
                  backgroundColor: "#555",
                },
              }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://github.com/sanidhyashikhar"
              sx={{
                "&:hover": {
                  backgroundColor: "#555",
                },
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </IconButton>
          </div>
        )}

        {/* Show dropdown icon on smaller screens */}
        {isMobile && (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
            <Menu
              id="dropdown-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              TransitionComponent={Fade}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "#333", // Dark background for dropdown
                  color: "#fff", // White text
                  borderRadius: "8px", // Rounded corners
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)", // Subtle shadow
                },
              }}
            >
              <MenuItem onClick={handleMenuClose} component="a" href="#home">
                Home
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#about">
                About
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component="a"
                href="#projects"
              >
                Projects
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component="a" href="#contact">
                Contact
              </MenuItem>

              {/* Divider */}
              <Divider sx={{ my: 1, backgroundColor: "#fff" }} />

              {/* LinkedIn and GitHub Icons in Dropdown */}
              <MenuItem
                onClick={handleMenuClose}
                component="a"
                href="https://www.linkedin.com/in/sanidhya-shikhar-58b3731a1/"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ marginRight: "8px" }}
                />
                LinkedIn
              </MenuItem>
              <MenuItem
                onClick={handleMenuClose}
                component="a"
                href="https://github.com/sanidhyashikhar"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ marginRight: "8px" }}
                />
                GitHub
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AnimatedAppBar>
  );
}

export default Header;
