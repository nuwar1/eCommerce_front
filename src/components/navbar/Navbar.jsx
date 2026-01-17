import React from "react";
import {
  AppBar, Toolbar, Box, Container, Typography, IconButton, Badge, Button,
  Menu, MenuItem, InputBase
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const SearchWrap = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.common.white,
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
  maxWidth: 680,
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(2, 2)
}));

const SearchBtn = styled(IconButton)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(2, 2),
  backgroundColor: "#e11d48",
  color: "#fff",
  marginRight: theme.spacing(0.6),
  "&:hover": { backgroundColor: "#000", color: "#fff" }
}));

const navLinkSx = {
  color: "rgba(255,255,255,0.85)",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 16,
  px: 2,
  py: 1,
  borderRadius: 1,
  "&:hover": { color: "#e11d48" },
};

export default function Navbar() {
  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);
  const isAccountOpen = Boolean(accountAnchorEl);
  const token = useAuthStore(state => state.token);
  const logout = useAuthStore(state => state.logout);
  const user = useAuthStore(state => state.user);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  }

  const handleAccountOpen = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAccountAnchorEl(null);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleMobileMenu = () => setMobileOpen((value) => !value);

  const [mobileSearchOpen, setMobileSearchOpen] = React.useState(false);

  const openMobileSearch = () => setMobileSearchOpen(true);
  const closeMobileSearch = () => setMobileSearchOpen(false);

  const navItems = [
    { label: "Home", to: "/home" },
    { label: "Shop", to: "/products" },
    { label: "Product", to: "/product" },
    { label: "Pages", to: "/pages" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <AppBar position="sticky" elevation={0}>
      <Box sx={{ bgcolor: "#111827", color: "#fff" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1.5, gap: 2 }}>
            {user != null ?
              <Box sx={{ minWidth: 160, display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 900, letterSpacing: 2, cursor: "pointer" }}
                  component={RouterLink}
                  to="/home"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  KASHOP
                </Typography>
                <Typography
                  variant="subtitle2"
                  style={{ color: "inherit", textDecoration: "none" }}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  welcome {user?.name}
                </Typography>
              </Box> :
              <Box sx={{ minWidth: 160, display: "flex", justifyContent: "center", alignItems: "center", gap: 2 }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 900, letterSpacing: 2, cursor: "pointer" }}
                  component={RouterLink}
                  to="/home"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  KASHOP
                </Typography>
              </Box>}

            <Box sx={{ flex: 1, display: { xs: "none", md: "flex" }, justifyContent: "center" }}>
              <SearchWrap>
                <SearchInput placeholder="Search..." />
                <SearchBtn>
                  <SearchIcon />
                </SearchBtn>
              </SearchWrap>
            </Box>

            <Box sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              ml: "auto",
              justifyContent: {
                xs: "flex-end",
                sm: "flex-end",
                md: "flex-end",
                lg: "flex-start",
              },
            }}>
              <IconButton
                onClick={openMobileSearch}
                sx={{
                  display: { xs: "inline-flex", md: "none" },
                  color: "#fff",
                  "&:hover": { color: "#e11d48", backgroundColor: "transparent" },
                }}
              >
                <SearchIcon />
              </IconButton>

              <Button
                onClick={handleAccountOpen}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": { color: "#e11d48", backgroundColor: "transparent" },
                  minWidth: { xs: 0, md: 64 },
                  px: { xs: 1, md: 2 },
                }}
                startIcon={<PersonOutlineIcon />}
              >
                <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                  Account
                </Box>
              </Button>

              <Button
                component={RouterLink}
                to="/wishlist"
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": { color: "#e11d48", backgroundColor: "transparent" },
                  minWidth: { xs: 0, md: 64 },
                  px: { xs: 0.5, md: 2 },
                }}
                startIcon={
                  <Badge
                    badgeContent={0}
                    showZero
                    sx={{
                      "& .MuiBadge-badge": { backgroundColor: "#e11d48", color: "#fff" },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </Badge>
                }
              >
                <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                  Wishlist
                </Box>
              </Button>

              <Button
                component={RouterLink}
                to="/cart"
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": { color: "#e11d48", backgroundColor: "transparent" },
                  minWidth: { xs: 0, md: 64 },
                  px: { xs: 1, md: 2 },
                }}
                startIcon={
                  <Badge
                    badgeContent={0}
                    showZero
                    sx={{
                      "& .MuiBadge-badge": { backgroundColor: "#e11d48", color: "#fff" },
                    }}
                  >
                    <ShoppingCartOutlinedIcon />
                  </Badge>
                }
              >
                <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
                  Cart
                </Box>
              </Button>
            </Box>

          </Toolbar>
        </Container>
      </Box>

      <Box sx={{ bgcolor: "#111827", color: "#fff" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: 56, display: "flex", gap: 2 }}>
            <IconButton
              onClick={handleMobileMenu}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#fff",
                "&:hover": { color: "#e11d48", backgroundColor: "transparent" },
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box
              sx={{
                display: { xs: "none", md: "block" },
                width: { md: 240, lg: 280, xl: 300 },
                flexShrink: 0,
              }}
            >
              <Button
                startIcon={<GridViewOutlinedIcon />}
                sx={{
                  bgcolor: "#fff",
                  color: "#111827",
                  fontWeight: 800,
                  textTransform: "none",
                  px: 2,
                  py: 2.5,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  width: "100%",
                  justifyContent: "flex-start",
                  "&:hover": { bgcolor: "#f3f4f6" },
                }}
              >
                All Categories
              </Button>
            </Box>

            <Box
              sx={{
                flex: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                gap: {
                  md: 0.2,  
                  lg: 0.5,   
                  xl: 3,   
                },
              }}
            >
              <Box component={RouterLink} to="/home" sx={{ ...navLinkSx, color: "#e11d48" }}>
                Home
              </Box>
              <Box component={RouterLink} to="/products" sx={navLinkSx}>
                Shop
              </Box>
              <Box component={RouterLink} to="/product" sx={navLinkSx}>
                Product
              </Box>
              <Box component={RouterLink} to="/pages" sx={navLinkSx}>
                Pages
              </Box>
              <Box component={RouterLink} to="/blog" sx={navLinkSx}>
                Blog
              </Box>
              <Box component={RouterLink} to="/contact" sx={navLinkSx}>
                Contact
              </Box>
            </Box>

            <Button
              component={RouterLink}
              to="/deals"
              startIcon={<LocalOfferOutlinedIcon />}
              sx={{
                display: "flex",
                color: "#fff",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { color: "#e11d48" },
                justifyContent: {
                  xs: "flex-end",
                  sm: "flex-end",
                  md: "flex-end",
                  lg: "flex-start",
                },
                ml: { xs: "auto", lg: 0 },
              }}
            >
              Shop today’s deal
            </Button>

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
        <MenuItem
          component={RouterLink}
          to="/auth/register"
          onClick={handleAccountClose}
        >
          Register
        </MenuItem>
      </Menu>

      <Dialog
        open={mobileSearchOpen}
        onClose={closeMobileSearch}
        fullWidth
        maxWidth="false"
        slotProps={{
          paper: {
            sx: {
              m: 0,
              width: "100vw",
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              bgcolor: "#fff",
              color: "#000",
              p: 2,
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            mb: 2,
          }}
        >
          <IconButton onClick={closeMobileSearch}>
            <CloseIcon />
          </IconButton>
        </Box>
        <SearchWrap
          style={{ maxWidth: "100%" }}
          sx={{
            border: "1px solid #d1d5db",
          }}
        >
          <SearchInput autoFocus placeholder="Search..." />
          <SearchBtn>
            <SearchIcon />
          </SearchBtn>
        </SearchWrap>
      </Dialog>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleMobileMenu}
        sx={{ display: { xs: "block", md: "none" }}}
        slotProps={{
          paper: { sx: { width: 280 } },
        }}
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

    </AppBar >
  );
}
