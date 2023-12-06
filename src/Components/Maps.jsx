import React from 'react'
import { Box, Container, styled, Typography } from "@mui/material";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'

function Maps() {
const position = [-6.374910, 106.868087]

const MapTextBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
    },
  }));

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

  L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow,
  });
  return (
    <Box sx={{ backgroundColor: "#F5FAFE", mt: 5, py: 10 }}>
        <Container className='Map'>
        <Title>
            Hubungi Kami
        </Title>
            <MapContainer style={{display: "flex", height: "100vh", minWidth: "100%"}} center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            <Marker position={position}>
            </Marker>
            </MapContainer>
        </Container>
    </Box>
  )
}

export default Maps