import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom/cjs/react-router-dom";
import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
      <Container className="Hero">
        <Navbar />
        <CustomBox>
          <Box sx={{ flex: "1" }}>
            <Title variant="h1">
              CV Jaya Lintang Mandiri
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
             CV Jaya Lintang Mandiri merupakan toko bahan bangunan yang menyediakan berbagai bahan material secara lengkap untuk kebutuhan proyek pengerjaan bangunan mulai dari rumah, ruko, hingga gedung perkantoran. Anda dapat beli bahan bangunan dengan lengkap dan terpercaya, serta memiliki mutu kualitas yang terjamin dari toko bangunan lengkap.
            </Typography>
            <a href="https://api.whatsapp.com/send/?phone=6282248931314&text&type=phone_number&app_absent=0" style={{
              textDecoration: "none"
            }}>
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Hubungi 082248931314"
                heroBtn={true}
              />
            </a>
          </Box>
        
            <Box sx>
              <img
                src={heroImg}
                alt="heroImg"
                style={{ maxWidth: "100%", marginBottom: "2rem"}}
              />
            </Box>
          
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;
