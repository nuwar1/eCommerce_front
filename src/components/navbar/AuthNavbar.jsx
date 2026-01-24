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
import { useTranslation } from "react-i18next";

const navItems = [
  { key: "home", to: "/home" },
  { key: "shop", to: "/products" },
  { key: "pages", to: "/pages" },
  { key: "blog", to: "/blog" },
  { key: "contact", to: "/contact" },
];

export default function AuthNavbar() {
  const {t} = useTranslation();
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
                {t(`nav.${item.key}`)}
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
                <ListItemText primary={t(`nav.${item.key}`)} />
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
