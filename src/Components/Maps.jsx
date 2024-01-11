import React from 'react'
import Location from './Location';
import { Box, Container, styled, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function Maps() {
const position = [-6.930494825223211, 110.17103080000504]

const MapTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

const MapWrapper = styled(Box)(({theme}) => ({
  display: "flex",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column"
  }
}))

const AddressWraper = styled(Box)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  borderRadius: "10px",
  backgroundColor: "#FFE7C1",
  padding: theme.spacing(2),
  maxWidth: "450px",
  width: "400px",
  [theme.breakpoints.down("md")]: {
    width : "700px"
  }
  
}))

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

  const Paragraph = styled(Typography)(({ theme }) => ({
    fontSize: "15px",
    color: "#00183E",
    fontWeight: 700,
    marginTop: "10px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      textAlign: "center"
    },
  }));
  const IsiText = styled(Typography)(({ theme }) => ({
    fontSize: "20px",
    color: "#00183E",
    fontWeight: "bold",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      textAlign: "center"
    },
  }));
  // L.Icon.Default.mergeOptions({
  //   iconRetinaUrl: iconRetina,
  //   iconUrl: iconMarker,
  //   shadowUrl: iconShadow,
  // });
  return (
    <Box sx={{ backgroundColor: "#F5FAFE", mt: 5, py: 10 }}>
        <Container className='Map'>
        <Title>
            Hubungi Kami
        </Title>
        <MapWrapper>
          <Location />
          <AddressWraper>
              <Paragraph>Alamat</Paragraph>
              <IsiText>Jln Jambe Lor, Jambearum, Kec. Patebon, Kabupaten Kendal</IsiText>

              <Paragraph>Jadwal</Paragraph>
              <IsiText>Senin-Sabtu</IsiText>

              <Paragraph>Phone</Paragraph>
              <IsiText>+62 822-4893-1314</IsiText>

              <Paragraph>Email</Paragraph>
              <IsiText>Lintangjayamandiri@gmail.com</IsiText>

              {/* <Box sx={{
                display: "flex",
                justifyContent: "flex-end"
              }}>
                <IconButton aria-label="wa">
                    <WhatsAppIcon />
                </IconButton>
                <IconButton aria-label="wa">
                    <WhatsAppIcon/>
                </IconButton>
              </Box> */}
          </AddressWraper>
        </MapWrapper>
        </Container>
    </Box>
  )
}

export default Maps