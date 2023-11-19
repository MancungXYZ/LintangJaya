import { Box, styled, Typography } from "@mui/material";
import React from "react";

const House = ({ img }) => {
  const HouseBox = styled(Box)(({ theme }) => ({
    maxWidth: 350,
    margin: theme.spacing(1, 1, 1, 1),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%"
  }));
  

  return (
    <HouseBox>
      <ImgContainer>
        <img src={img} alt="toko" style={{ 
          backgroundSize: "cover",
          maxWidth: "100%",
          // maxHeight: '80%',
          width: "350px",
          height: "250px",
          borderRadius: '5px', 
          }} />
      </ImgContainer>
    </HouseBox>
  );
};

export default House;
