import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardMedia,
  IconButton,
} from "@mui/material";
import { ArrowForward, ArrowBack, Explore } from "@mui/icons-material"; // Import for icons

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  //const [isButtonDisabled, setIsButtonDisabled] = useState(false); // To disable button after click

  const projects = [
    {
      name: "MedStore",
      details_heading: "Medical equipment's eStore",
      description: [
        "A dynamic e-commerce platform providing seamless shopping experiences with real-time product updates and secure transactions.",
        "Engineered a responsive UI, enhancing user retention by 30% and reducing bounce rate by 25%.",
        "Integrated secure APIs for dynamic product management and user authentication, boosting checkout efficiency by 40%.",
      ],
      stack: ["React", "CSS", "JavaScript", "AWS"],
      image: "src/assets/Screenshot (65).png", // Replace with your actual image path
      url: "http://medstore-v1.0.s3-website-us-east-1.amazonaws.com/", // URL for the project website
    },
    {
      name: "ConvoNext",
      details_heading: "Real Time Chat Application",
      description: [
        "A real-time messaging and media streaming platform enabling seamless communication and collaboration.",
        "Built a responsive real-time chat interface, improving communication efficiency by 60%.",
        "The app has a color theme feature applied which changes global primary and secondary color using Context API",
      ],
      stack: ["HTML", "CSS", "JavaScript", "FireBase", "AWS"],
      image: "src/assets/Screenshot (66).png", // Replace with your actual image path
      url: "http://convonext-v1.0.s3-website-us-east-1.amazonaws.com/", // URL for the project website
    },
    {
      name: "MedLogistics",
      details_heading: "Dashboards and Social Media Tracker",
      description: [
        "An interactive social media dashboard for real-time performance tracking and analytics across multiple platforms.",
        "Developed an interactive dashboard, improving social media tracking efficiency by 50%.",
        "Implemented robust user authentication, enhancing data security and personalized analytics.",
      ],
      stack: ["HTML", "TailwindCSS", "JavaScript", "AWS"],
      image: "src/assets/Screenshot (67).png", // Replace with your actual image path
      url: "http://medlogistics-v1.0.s3-website-us-east-1.amazonaws.com/", // URL for the project website
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null); // Close the project details
  };

  const handleExploreClick = (url) => {
    window.location.href = url; // Navigate to the project's website
  };

  return (
    <Box
      id="projects"
      sx={{
        padding: "4rem 2rem",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dadddf",
        //  marginTop: "2px", // Adds margin-top of 2px
        borderTop: "5px solid #888", // Adds a colored border at the top (light gray color)
      }}
      className="fade-in"
    >
      {selectedProject ? (
        // When a project is selected, show project details
        <Grid
          container
          spacing={3}
          sx={{ display: "flex", alignItems: "center" }}
        >
          {/* Left Section: The clicked project card */}
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{
              animation: "slideInFromLeft 1s ease-out",
              position: "relative",
            }}
          >
            <Card
              sx={{
                borderRadius: "15px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardMedia
                component="img"
                height="250"
                image={selectedProject.image}
                alt={`${selectedProject.name} image`}
                sx={{ objectFit: "cover", borderRadius: "10px" }}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {selectedProject.name}
                </Typography>
                <Box
                  sx={{
                    marginTop: "2rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ textTransform: "none", borderRadius: "20px" }}
                    // onClick={() => {
                    //   setIsButtonDisabled(true); // Disable button after clicking
                    // }}
                    disabled={true} // Disabled initially when the project is viewed
                  >
                    More Details <ArrowForward />
                  </Button>
                </Box>
                <Box
                  sx={{
                    marginTop: "1rem",
                    display: "flex",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  {selectedProject.stack.map((tech, index) => (
                    <Box
                      key={index}
                      sx={{
                        padding: "5px 15px",
                        borderRadius: "25px",
                        backgroundColor: "#e0e0e0",
                        fontSize: "0.9rem",
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Section: Project Details */}
          <Grid
            item
            xs={12}
            sm={6}
            md={8}
            sx={{ position: "relative", padding: "0 2rem" }}
          >
            {/* Back Arrow to go back to the project list */}
            <IconButton
              onClick={handleCloseDetails}
              sx={{
                position: "absolute",
                top: "10px",
                right: "10px",
                backgroundColor: "#333",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#555",
                },
              }}
            >
              <ArrowBack />
            </IconButton>

            <Typography
              variant="h4"
              sx={{ marginBottom: "1rem", animation: "fadeIn 1s ease-out" }}
            >
              {selectedProject.details_heading}
            </Typography>

            <Box sx={{ textAlign: "left", marginBottom: "1rem" }}>
              {selectedProject.description.map((point, index) => (
                <Typography
                  variant="body1"
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <ArrowForward
                    sx={{ marginRight: "8px", fontSize: "1.2rem" }}
                  />
                  {point}
                </Typography>
              ))}
            </Box>

            {/* Open Site Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#333",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "25px", // Rounded corners to make it button-like
                "&:hover": {
                  backgroundColor: "#555",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => handleExploreClick(selectedProject.url)}
            >
              Open Site <Explore sx={{ marginLeft: "8px" }} />
            </Button>
          </Grid>
        </Grid>
      ) : (
        // When no project is selected, show the list of cards
        <Grid container spacing={3} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: "15px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                  },
                }}
                onClick={() => handleProjectClick(project)}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={project.image}
                  alt={`${project.name} image`}
                  sx={{ objectFit: "cover", borderRadius: "10px" }}
                />
                <CardContent>
                  <Typography variant="h6">{project.name}</Typography>
                  <Box
                    sx={{
                      marginTop: "2rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        borderRadius: "20px",
                        border: "1px solid #1e96fc", // 1px border with blue color
                        color: "#1e96fc", // Text color is blue
                        backgroundColor: "white", // Background color is white
                        "&:hover": {
                          backgroundColor: "#1e96fc", // Background becomes blue on hover
                          color: "white", // Text color becomes white on hover
                        },
                      }}
                    >
                      More Details <ArrowForward />
                    </Button>
                  </Box>
                  <Box
                    sx={{
                      marginTop: "1rem",
                      display: "flex",
                      justifyContent: "center",
                      gap: 1,
                    }}
                  >
                    {project.stack.map((tech, index) => (
                      <Box
                        key={index}
                        sx={{
                          padding: "5px 15px",
                          borderRadius: "25px",
                          backgroundColor: "#e0e0e0",
                          fontSize: "0.9rem",
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Projects;
