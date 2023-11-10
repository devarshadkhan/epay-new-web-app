"use client"
import  React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container, Grid } from "@mui/material";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
import styles from "./Navbar.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";
function Navbar(props) {
    const router = usePathname();
    console.log(router);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  /**
   *  Responsive Show side panel content
   * NavItems
   */
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
    // useEffect(() => {
    //     const updateScroll = () => {
    //       window.scrollY >= 90 ? setScroll(true) : setScroll(false);
    //     };
      
    //     // Add the event listener
    //     window.addEventListener("scroll", updateScroll);
      
    //     // Cleanup the event listener when the component is unmounted
    //     return () => {
    //       window.removeEventListener("scroll", updateScroll);
    //     };
    //   }, []);
  return (
    <Box className={styles.header_wrp} >
      <AppBar component="nav">
        <Toolbar className={styles.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Container>
            <Grid container>
              {/* Logo Here */}
              <Grid item lg={3}>
                <Box className={styles.logo_set} component={"div"} >
                <h6>Zupay<sub>.com</sub></h6>
                </Box>
              </Grid>
              {/* Listing Items for Linking */}
              <Grid item lg={9} sx={{ display: { xs: "none", sm: "block" }}} >
                <Box className={styles.list_wrp_ul} component={"ul"}>
                  <Box className={styles.list_wrp_li} component={"li"}>
                    <Link href={"/"}  className={router === "/" ? styles.active : ""} >Home</Link>
                  </Box>
                  <Box className={styles.list_wrp_li} component={"li"}>
                    <Link  href={""}>Services</Link>
                  </Box>
                  <Box className={styles.list_wrp_li} component={"li"}>
                    <Link  href={""}>About us</Link>
                  </Box>
                  <Box className={styles.list_wrp_li} component={"li"}>
                    <Link  href={""}>Contact us</Link>
                  </Box>
                  <Box className="list_wrp_li" component={"li"}>
                    <Link href={"/auth/login"} className={styles.loginBtn}>Login</Link>
                  </Box>
                  <Box className="list_wrp_li" component={"li"}>
                    <Link href={""} className={styles.signupBtn} >Sign up</Link>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>

      {/* Responsive Show navbar sidepanel  */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navbar;
// sx={{ display: { xs: "none", sm: "block" }, alignItems:"center", justifyContent:"flex-end" }} responsive hide list item
