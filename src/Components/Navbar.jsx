import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ContactPageIcon from '@mui/icons-material/ContactPage';
import CollectionsIcon from '@mui/icons-material/Collections';
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import logoLintang from "../media/logi.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import { Link } from "react-scroll";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";

export const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.type === "Tab" || event.type === "Shift")
    ) {
      return;
    }

    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "Why Us", "Gallery", "Contact Us"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <RocketLaunchIcon />}
                  {index === 2 && <CollectionsIcon />}
                  {index === 3 && <ListAltIcon />}
                  {index === 4 && <ContactPageIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#4F5361",
    fontWeight: "bold",
    cursor: "pointer",
    "&:hover": {
      color: "#fff",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    marginTop: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    width: "200px",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }));

  return (
    <NavbarContainer>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CustomMenuIcon onClick={toggleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavbarLogo src={logoLintang} alt="logo" />
        </Box>

        <NavbarLinksBox>
          <NavLink variant="body2">
            <Link to="Hero" offset={true} spy={true} duration={500} smooth={true} >Home</Link>
          </NavLink>
          <NavLink variant="body2">
            <Link to="Guide" offset={true} spy={true} duration={500} smooth={true} >Why Us</Link>
          </NavLink>
          <NavLink variant="body2">
            <Link to="Propertis" offset={true} spy={true} duration={500} smooth={true} >Gallery</Link>
          </NavLink>
          <NavLink variant="body2">
            <Link to="Map" offset={true} spy={true} duration={500} smooth={true}>Contact Us</Link>
          </NavLink>
        </NavbarLinksBox>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <a style={{
          textDecoration: "none"
        }} href="https://maps.app.goo.gl/wHJD4C3tYDrY6XeM6?g_st=iw">
           <NavLink variant="body2">Lihat Rute</NavLink> 
        </a>
        <a
        style={{
          textDecoration: "none"
        }} href="https://api.whatsapp.com/send/?phone=6282333845639&text&type=phone_number&app_absent=0">
          <CustomButton
            backgroundColor="#0F1B4C"
            color="#fff"
            buttonText="TELEPON" 
          />
        </a>
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
