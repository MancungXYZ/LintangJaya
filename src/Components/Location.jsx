import React from 'react'
import { Box} from "@mui/material";
function Location() {
  return (
    <Box sx={{
      display: "flex"
    }}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.665801084581!2d110.1710308!3d-6.930489499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e705d3904b179f3%3A0xa7a185b120e8f380!2sTB.%20Jaya%20Lintang%20Mandiri!5e0!3m2!1sid!2sid!4v1704943770592!5m2!1sid!2sid" width="750" height="450" style={{ border: 0, borderRadius: "10px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </Box>
  )
}

export default Location