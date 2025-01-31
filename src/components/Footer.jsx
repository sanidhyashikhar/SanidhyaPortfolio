// src/components/Footer.jsx
import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "1rem 0",
        textAlign: "center",
        marginTop: "auto",
      }}
    >
      <Typography variant="body2" gutterBottom>
        © {new Date().getFullYear()} SANIDHYA SHIKHAR. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
