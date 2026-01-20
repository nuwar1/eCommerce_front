import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Link,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link as RouterLink } from "react-router-dom";

const navItems = [
    { label: "Home", to: "/home" },
    { label: "Shop", to: "/products" },
    { label: "Pages", to: "/pages" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
];

export default function AuthNavbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleMobileMenu = () => setMobileOpen((value) => !value);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#fff", color: "#000" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={RouterLink}
            to="/home"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            KAShop
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 2,
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                component={RouterLink}
                to={item.to}
                color="inherit"
                underline="none"
                sx={{ "&:hover": { color: "#e11d48" } }}
              >
                {item.label}
              </Link>
            ))}
          </Box>

          <IconButton
            onClick={handleMobileMenu}
            sx={{
              display: { xs: "inline-flex", md: "none" },
              color: "#000",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleMobileMenu}
        sx={{ display: { xs: "block", md: "none" } }}
        slotProps={{ paper: { sx: { width: 260 } } }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
            <Typography sx={{ fontWeight: 700 }}>KAShop</Typography>
            <IconButton onClick={handleMobileMenu}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List disablePadding>
            {navItems.map((item) => (
              <ListItemButton
                key={item.to}
                component={RouterLink}
                to={item.to}
                onClick={handleMobileMenu}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
