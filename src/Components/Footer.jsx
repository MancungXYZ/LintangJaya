import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Divider from '@mui/material/Divider';

import fbIcon from "../media/fbicon.png";
import twitterIcon from "../media/twittericon.png";
import linkedinIcon from "../media/linkedinicon.png";
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
            <br />
            <Title>Alamat</Title>
            <Typography
              sx={{
                fontSize: "18px",
                color: "#1C1C1D",
                fontWeight: "700"
              }}
            >
              Jl. Gadog Raya No.169, Cisalak Ps., Kec. Cimanggis, Kota Depok, Jawa Barat 16452
            </Typography>
          </Box>
        <CustomContainer>
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Products
            </Typography>

            <FooterLink>Listing</FooterLink>
            <br />
            <FooterLink>Properties</FooterLink>
            <br />
            <FooterLink>Agents</FooterLink>
            <br />
            <FooterLink>Blog</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Resources
            </Typography>

            <FooterLink>Our Homes</FooterLink>
            <br />
            <FooterLink>Stories</FooterLink>
            <br />
            <FooterLink>Video</FooterLink>
            <br />
            <FooterLink>Free Trial</FooterLink>
          </Box>

          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "#1C1C1D",
                fontWeight: "700",
                mb: 2,
              }}
            >
              Company
            </Typography>

            <FooterLink>Partnerships</FooterLink>
            <br />
            <FooterLink>Terms of use</FooterLink>
            <br />
            <FooterLink>Privacy</FooterLink>
            <br />
            <FooterLink>Sitemap</FooterLink>
          </Box>


        </CustomContainer>
      </CustomContainer>

      <Box sx={{paddingTop: 5}}>
        <Divider />
        <Typography
              sx={{
                fontSize: "14px",
                color: "#7A7A7E",
                fontWeight: "700",
                my: 2,
                textAlign: "center"
              }}
            >
              © 2023 Mancung Code. All Rights Reserved
            </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
