import { Box, Typography, Button, Grid, IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material"; // Material-UI icon for left arrow
import { useState, useEffect } from "react";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State for hover effect
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current content index

  const paragraphs = [
    "As a front-end developer, I specialize in creating beautiful, responsive, and interactive user interfaces. I am experienced with HTML, CSS, JavaScript, and modern frameworks like React.js. My goal is to deliver a seamless user experience by ensuring that websites and applications are fast, accessible, and user-friendly.",
    "I am passionate about using cutting-edge web technologies to build solutions that not only look great but also perform efficiently. I am skilled in writing clean, maintainable code and following best practices for version control, testing, and deployment.",
    "In addition to my technical skills, I have a strong understanding of UI/UX principles, ensuring that the designs I implement are not only functional but also visually appealing. I strive to stay updated on the latest trends in front-end development and continuously learn new tools and techniques to enhance my development process.",
    "Collaboration is key to successful projects. I work well in a team environment, communicating effectively with back-end developers, designers, and project managers to deliver high-quality products. I am always ready to take on new challenges and contribute to the success of any project I am involved in.",
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? paragraphs.length - 1 : prevIndex - 1
    ); // Go to previous paragraph
  };

  // Trigger the animation after the component is mounted
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Left section animation starts after 1 second
  }, []);

  // Handle mouse enter and leave for hover effect
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <Box
      id="home"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "auto", // Ensure the height is based on the content
        background: "linear-gradient(135deg, #2C3E50, #BDC3C7)", // Gradient background
        color: "#222121", // Dark text for contrast
        textAlign: "center",
        paddingTop: "2rem", // Optional, for additional spacing
        paddingBottom: "2rem", // Optional, for additional spacing
      }}
    >
      <Grid container sx={{ width: "100%", maxWidth: "1200px" }}>
        {/* Left Section - Text Section */}
        <Grid
          item
          xs={12} // Full width on smaller screens
          md={6} // Half width on larger screens
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "2rem",
            opacity: isVisible ? 1 : 0, // Opacity animation for the left section
            transform: isVisible ? "translateX(0)" : "translateX(-100%)", // Slide-in effect from left
            transition: "transform 1s ease-out, opacity 1s ease-out", // Animation for left section
          }}
        >
          <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            Hello, I&apos;m Sanidhya Shikhar
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontStyle: "italic", marginBottom: "1rem" }}
          >
            Front-End Developer
          </Typography>

          {/* Left Arrow Button to Navigate */}
          <IconButton
            sx={{
              position: "absolute",
              top: "50%",
              left: "-60px", // Arrow on the left side of the text
              transform: "translateY(-50%)",
              backgroundColor: "#333",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#555",
              },
              "@media (max-width: 1350px)": {
                position: "absolute", // Remove position for smaller screens
                top: "84%", // Position the arrow to 45% from top
                left: "50%", // Center the arrow horizontally
                transform: "translateX(-50%) translateY(10px)", // Position it below the text
              },
              "@media (max-width: 1135px)": {
                position: "absolute", // Remove position for smaller screens
                top: "86%", // Position the arrow to 45% from top
                left: "50%", // Center the arrow horizontally
                transform: "translateX(-50%) translateY(10px)", // Position it below the text
              },
              "@media (max-width: 900px)": {
                position: "absolute", // Remove position for smaller screens
                top: "78%", // Position the arrow to 45% from top
                left: "50%", // Center the arrow horizontally
                transform: "translateX(-50%) translateY(10px)", // Position it below the text
              },
              "@media (max-width: 800px)": {
                position: "absolute", // Remove position for smaller screens
                top: "87%", // Position the arrow to 45% from top
                left: "50%", // Center the arrow horizontally
                transform: "translateX(-50%) translateY(10px)", // Position it below the text
              },
              "@media (max-width: 700px)": {
                position: "absolute", // Remove position for smaller screens
                top: "87%", // Position the arrow to 45% from top
                left: "53%", // Center the arrow horizontally
                transform: "translateX(-50%) translateY(10px)", // Position it below the text
              },
            }}
            onClick={handlePrevClick}
          >
            <ArrowBack />
          </IconButton>

          <Typography
            variant="body1"
            sx={{ marginBottom: "1rem", fontSize: "1.2rem" }}
          >
            {paragraphs[currentIndex]} {/* Display the current paragraph */}
          </Typography>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#333", // Dark gray color for background
              color: "#fff", // White text color
              position: "relative", // Position relative for ripple effect
              overflow: "hidden", // Ensure ripple effect is contained within the button
              "&:hover": {
                backgroundColor: "#e5e5e5", // Light gray on hover
                color: "black", // Black text on hover
              },
            }}
            href="#projects"
          >
            View My Work
          </Button>
        </Grid>

        {/* Right Section - Image Section */}
        <Grid
          item
          xs={12} // Full width on smaller screens
          md={6} // Half width on larger screens
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateX(0)" : "translateX(100%)", // Animation for right section
            transition: "transform 1s ease-out 1s, opacity 1s ease-out 1s", // Animation for right section
          }}
        >
          <div
            style={{
              position: "relative",
              width: "700px",
              height: "400px",
              cursor: "pointer", // Add cursor pointer to indicate interactivity
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {/* Initial Image */}
            <img
              src="src/assets/profile-pic__1_-removebg-preview.png" // Initial image
              alt="Sanidhya Shikhar"
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                transition: "opacity 0.5s ease", // Smooth fade-out effect
                opacity: isHovered ? 0 : 1, // Fade out when hovered
                zIndex: 1, // Ensure this image stays on top initially
                borderRadius: "10px",
              }}
            />
            {/* New Image */}
            <img
              src="src/assets/profile-pic__4_-removebg-preview.png" // New image to replace the old one
              alt="Sanidhya Shikhar"
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                transition: "opacity 0.5s ease", // Smooth fade-in effect
                opacity: isHovered ? 1 : 0, // Fade in when hovered
                zIndex: 0, // Ensure this image is initially behind the first image
                borderRadius: "10px",
              }}
            />
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
