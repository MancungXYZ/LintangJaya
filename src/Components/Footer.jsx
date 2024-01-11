import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Divider from '@mui/material/Divider';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from '../media/logi.png'

const Footer = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    gap: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const IconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  }));

  const Title = styled(Typography)(({theme}) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
  }));

  const FooterLink = styled("span")(({ theme }) => ({
    fontSize: "16px",
    color: "#7A7A7E",
    fontWeight: "300",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  return (
    <Box sx={{ paddingTop: 10 }}>
      <CustomContainer>
        <Box>
            <img src={logo} alt="Logo" style={{
              width: "200px",
              marginBottom: "15px"
            }}>
            
            </img>

            <Title>Whatsapp</Title>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#1C1C1D",
                fontWeight: "700"
              }}
            >
              +62 822-4893-1314
            </Typography>
            <br />
            <Title>Email</Title>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#1C1C1D",
                fontWeight: "700"
              }}
            >
              Lintangjayamandiri@gmail.com
            </Typography>
          </Box>
        <CustomContainer>
          <Box>
            <Title>Alamat</Title>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#1C1C1D",
                fontWeight: "700"
              }}
            >
              Jln Jambe Lor, Jambearum, Kec. Patebon, Kabupaten Kendal, Jawa Tengah 51351
            </Typography>
            <Title>Tentang Kami</Title>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#1C1C1D",
                fontWeight: "700"
              }}
            >
              CV Jaya Lintang Mandiri merupakan toko bahan bangunan yang menyediakan berbagai bahan material secara lengkap untuk kebutuhan proyek pengerjaan bangunan mulai dari rumah, ruko, hingga gedung perkantoran. Anda dapat beli bahan bangunan dengan lengkap dan terpercaya, serta memiliki mutu kualitas yang terjamin dari toko bangunan lengkap.
            </Typography>
          </Box>
        </CustomContainer>
      </CustomContainer>

      <Box sx={{paddingTop: 5}}>
        <Divider />
        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          px: "1.5rem"
        }}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "#7A7A7E",
                    fontWeight: "700",
                    my: 1,
                  }}
                >
                  © 2023 Lintang Jaya Mandiri.
                </Typography>
              </Box>

              <Box>
                <IconButton aria-label="wa">
                  <WhatsAppIcon />
                </IconButton>
                <IconButton aria-label="email">
                  <EmailIcon />
                </IconButton>
                <IconButton aria-label="ig">
                  <InstagramIcon />
                </IconButton>
              </Box>
        </Box>

        </Box>
    </Box>
  );
};

export default Footer;
