import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import jsLogo from "../assets/jslogo.png";
import reactLogo from "../assets/React-logo.png";
import htmlLogo from "../assets/html-Logo.png";
import cssLogo from "../assets/CSS-Logo.png";
import nodejsLogo from "../assets/Node.js_logo.png";
import awsLogo from "../assets/Amazon_Web_Services_Logo.png";
import reduxLogo from "../assets/reduxlogo.png";
import pythonLogo from "../assets/Python_logo.png";

// Array of skills with names and imported logos
const skills = [
  { name: "JavaScript", logo: jsLogo },
  { name: "React.Js", logo: reactLogo },
  { name: "HTML 5", logo: htmlLogo },
  { name: "CSS", logo: cssLogo },
  { name: "Node.js", logo: nodejsLogo },
  { name: "AWS", logo: awsLogo },
  { name: "Redux Toolkit", logo: reduxLogo },
  { name: "Python", logo: pythonLogo },
];

function About() {
  return (
    <Box
      id="about"
      sx={{
        padding: "4rem 2rem",
        textAlign: "center",
        backgroundColor: " #BDC3C7", // Gradient background
        // borderRadius: "15px", // Rounded corners for the section
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Subtle shadow for the section
      }}
      className="fade-in"
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#2C3E50" }}
      >
        Tech Stack
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{ color: "#2C3E50", fontSize: "1.1rem", marginBottom: "1rem" }}
      >
        I am a front-end developer with 3+ years of experience in creating
        engaging web applications.
      </Typography>
      <Typography variant="body1" sx={{ color: "#2C3E50", fontSize: "1.1rem" }}>
        This Portfolio Website is made on React.js with Material UI
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
          marginTop: 4,
        }}
      >
        {skills.map((skill) => (
          <Card
            key={skill.name}
            sx={{
              width: 350,
              textAlign: "center",
              borderRadius: "12px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)", // Card shadow for depth
              transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
              "&:hover": {
                transform: "translateY(-10px)", // Lift the card on hover
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)", // Increase shadow on hover
              },
            }}
          >
            <CardMedia
              component="img"
              height="100"
              image={skill.logo}
              alt={`${skill.name} logo`}
              sx={{
                objectFit: "contain",
                marginTop: 2,
                padding: "10px",
                transition: "transform 0.3s ease", // Smooth transition for image on hover
                "&:hover": {
                  transform: "scale(1.2)", // Slight zoom on image hover
                },
              }}
            />
            <CardContent sx={{ padding: "8px" }}>
              <Typography variant="h6" sx={{ color: "#333" }}>
                {skill.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default About;
