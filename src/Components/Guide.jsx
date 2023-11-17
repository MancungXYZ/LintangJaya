import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";

import price from "../media/price.png";
import service from "../media/services.png";
import bestprice from "../media/bestprice.png";
import gudang from "../media/gudang.png";

import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CustomButton from "./CustomButton";

const Guide = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));

  const GuidesBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-around",
    width: "80%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
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
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(3),
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(2, 0, 2, 0),
      alignItems: "center",
      textAlign: "center"
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "35px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
      alignItems: "center",
      textAlign: "center"
    },
  }));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      <Title>
        Kenapa Lintang Jaya Mandiri?
      </Title>

      <GuidesBox>

        <GuideBox>
          <img src={gudang} alt="buyIcon" style = {{
            width: '100px',
            height: '100px'
          }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "18px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Barang Lengkap
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF"}}
            >
              Berbagai produk dan merek bahan material, 100% original
            </Typography>
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={service} alt="buyIcon" style = {{
            width: '100px',
            height: '100px'
          }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "18px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Pelayanan Terbaik
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              Melayani dengan tulus dan sepenuh hati
            </Typography>
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={bestprice} alt="buyIcon" style = {{
            width: '100px',
            height: '100px'
          }}/>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "18px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Harga Bersaing
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              Mengikuti harga pasar terkini dan harga khusus untuk akun bisnis
            </Typography>
          </Box>
        </GuideBox>

        <GuideBox>
          <img src={price} alt="buyIcon" style = {{
            width: '100px',
            height: '100px'
          }}/>
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "18px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Beragam Opsi Pembayaran
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", fontSize: "14px", color: "#0689FF" }}
            >
              Mengikuti kebutuhan dan mendukung beragam opsi pembayaran
            </Typography>
          </Box>
        </GuideBox>
      </GuidesBox>
    </Box>
  );
};

export default Guide;
