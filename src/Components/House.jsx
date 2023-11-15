import { Box, styled, Typography } from "@mui/material";
import React from "react";

const House = ({ img }) => {
  const HouseBox = styled(Box)(({ theme }) => ({
    maxWidth: 350,
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(2, 0, 2, 0),
    },
  }));

  const ImgContainer = styled(Box)(() => ({
    width: "100%",
  }));
  

  return (
    <HouseBox>
      <ImgContainer>
        <img src={img} alt="toko" style={{ 
          maxWidth: "100%",
          maxHeight: '80%',
          borderRadius: '10px',
          width:"auto",
          height: 'auto', }} />
      </ImgContainer>
    </HouseBox>
  );
};

export default House;
