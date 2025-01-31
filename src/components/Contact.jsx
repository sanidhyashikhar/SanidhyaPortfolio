import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Divider,
} from "@mui/material";
import { Download } from "@mui/icons-material"; // Import for download icon

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        padding: "4rem 2rem",
        textAlign: "center",
        backgroundColor: "#f4f4f9",
        borderTop: "5px solid #888", // Soft background color for contrast
      }}
      className="fade-in"
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#333" }}
      >
        Contact Me
      </Typography>

      <Typography
        variant="h6"
        sx={{ marginBottom: "2rem", color: "#555", fontStyle: "italic" }}
      >
        Feel free to reach out to me for any queries or opportunities!
      </Typography>

      {/* Contact Info Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 6,
          marginBottom: "3rem",
          flexWrap: "wrap", // Ensure it wraps well on smaller screens
        }}
      >
        <Box sx={{ textAlign: "left", maxWidth: "250px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
            Phone:
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", fontSize: "1rem" }}>
            +91 8210742867
          </Typography>
        </Box>

        <Box sx={{ textAlign: "left", maxWidth: "250px" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
            Email:
          </Typography>
          <Typography variant="body1" sx={{ color: "#555", fontSize: "1rem" }}>
            sanidhya.shikhar8575@gmail.com
          </Typography>
        </Box>
      </Box>

      {/* Divider */}
      <Divider
        sx={{
          marginBottom: "3rem",
          borderColor: "#ddd",
          width: "80%",
          margin: "auto",
        }}
      />

      {/* Resume Card with Download Button */}
      <Card
        sx={{
          maxWidth: 400,
          margin: "20px auto 0", // Added margin-top of 20px
          padding: "2rem",
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
          borderRadius: "0px 50px 0px 50px", // No border radius on the left, 10px radius on the right
          backgroundColor: "#fff",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: "0px 12px 36px rgba(0, 0, 0, 0.15)",
          },
        }}
      >
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>
            Download My Resume
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#555", marginBottom: "1.5rem", fontSize: "1rem" }}
          >
            Click below to download my resume and get to know more about my
            skills and experiences.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: "none",
              padding: "12px 30px",
              borderRadius: "50px",
              fontSize: "1rem",
              display: "flex",
              alignItems: "center",
              gap: 1,
              "&:hover": {
                backgroundColor: "#1a73e8", // Blue hover effect
              },
            }}
            startIcon={<Download />}
            href="/sanidhya_shikhar_resume.pdf" // Add the path to your resume PDF file here
            download="Resume.pdf"
          >
            Download Resume
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Contact;
