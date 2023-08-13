import { useState } from "react";
import { Box, AppBar, Toolbar, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavDrawer } from "./NavDrawer";
import { NavBarCart } from "@/components/header/NavBarCart";

const Navbar = ({ toggleDrawer, isDrawerOpen }) => {
  return (
    <AppBar position="fixed" className="bg-white">
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer}
          className="text-black"
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <NavBarCart />
      </Toolbar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <NavDrawer />
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
