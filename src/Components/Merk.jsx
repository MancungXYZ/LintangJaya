import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import {data} from '../data'

import toto from '../media/toto.png'
import sig from '../media/sig.png'
import rodatiga from '../media/tigaroda.png'
import sanyo from '../media/sanyo6856.jpg'
import nippon from '../media/nippon.png'
import jotun from '../media/jotun.jpg'
import pilip from '../media/pilip.png'
import aqua from '../media/aquaproof.jpg'

const Hero = () => {
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "30px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      textAlign: "center"
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    width: "100%",
    gap: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0",
      flexDirection: "column",
    },
  }));

  const GuideBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
      alignItems: "center",
      textAlign: "center"
    },
  }));

  return (
    <Box data-aos="zoom-out" sx={{ minHeight: "35vh" }}>
      <Container>
        <Title>
            Merk Terdaftar
        </Title>
        <GuidesBox>
          {data.map((item) => (
            <GuideBox>
              <img src={item.img} alt="buyIcon" style = {{
                width: '100px',
                height: '100px'
              }} />
            </GuideBox>
          ))}
        </GuidesBox>
      </Container>
    </Box>
  );
};

export default Hero;
