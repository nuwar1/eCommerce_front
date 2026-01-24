import React from "react";
import {
  AppBar, Toolbar, Box, Container, Typography, IconButton, Badge, Button,
  Menu, MenuItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const navLinkSx = {
  color: "#000",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 16,
  px: 2,
  py: 1,
  borderRadius: 1,
  "&:hover": { color: "#e11d48" },
};

export default function ShopNavbar() {
  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);
  const isAccountOpen = Boolean(accountAnchorEl);
  const token = useAuthStore(state => state.token);
  const logout = useAuthStore(state => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  }

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleMobileMenu = () => setMobileOpen((value) => !value);

  const navItems = [
    { label: "Home", to: "/home" },
    { label: "Shop", to: "/products" },
    { label: "Pages", to: "/pages" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  const handleAccountOpen = (event) => setAccountAnchorEl(event.currentTarget);
  const handleAccountClose = () => setAccountAnchorEl(null);

  return (
    <AppBar position="sticky" elevation={0}>
      <Box sx={{ bgcolor: "#fff", color: "#000", py: { xs: 2, md: 4 } }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1.5, gap: 0.5 }}>
            <Box sx={{ minWidth: 160 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: 900, letterSpacing: 2, cursor: "pointer" }}
                component={RouterLink}
                to="/home"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                KASHOP
              </Typography>
            </Box>

            <IconButton
              onClick={handleMobileMenu}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                color: "#000",
                ml: "auto",
                "&:hover": { color: "#e11d48", backgroundColor: "transparent" },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                flex: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                gap: { md: 0.5, lg: 1.5 },
              }}
            >
              {navItems.map((item) => (
                <Box
                  key={item.to}
                  component={RouterLink}
                  to={item.to}
                  sx={navLinkSx}
                >
                  {item.label}
                </Box>
              ))}
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
              <IconButton
                onClick={handleAccountOpen}
                sx={{
                  color: "#000",
                  "&:hover": { color: "#e11d48", backgroundColor: "transparent" },
                }}
              >
                <PersonOutlineIcon sx={{ fontSize: 28 }} />
              </IconButton>

              <IconButton
                component={RouterLink}
                to="/wishlist"
                sx={{
                  color: "#000",
                  "&:hover": { color: "#e11d48", backgroundColor: "transparent" },
                }}
              >
                <Badge
                  badgeContent={0}
                  showZero
                  sx={{ "& .MuiBadge-badge": { backgroundColor: "#e11d48", color: "#fff" } }}
                >
                  <FavoriteBorderIcon sx={{ fontSize: 28 }} />
                </Badge>
              </IconButton>

              <IconButton
                component={RouterLink}
                to="/cart"
                sx={{
                  color: "#000",
                  "&:hover": { color: "#e11d48", backgroundColor: "transparent" },
                }}
              >
                <Badge
                  badgeContent={0}
                  showZero
                  sx={{ "& .MuiBadge-badge": { backgroundColor: "#e11d48", color: "#fff" } }}
                >
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 28 }} />
                </Badge>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </Box>

      <Menu
        anchorEl={accountAnchorEl}
        open={isAccountOpen}
        onClose={handleAccountClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        {token != null ?
          <MenuItem color="inherit"
            onClick={() => {
              handleAccountClose();
              handleLogout();
            }}>
            Logout
          </MenuItem>
          : <MenuItem
            component={RouterLink}
            to="/auth/login"
            onClick={handleAccountClose}
          >
            Login
          </MenuItem>}
        <MenuItem component={RouterLink} to="/auth/register" onClick={handleAccountClose}>
          Register
        </MenuItem>
      </Menu>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleMobileMenu}
        sx={{ display: { xs: "block", md: "none" } }}
        slotProps={{ paper: { sx: { width: 280 } } }}
      >
        <Box sx={{ p: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography sx={{ fontWeight: 900, letterSpacing: 1 }}>KASHOP</Typography>
            <IconButton onClick={handleMobileMenu}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ my: 2 }} />

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
    </AppBar>
  );
}
