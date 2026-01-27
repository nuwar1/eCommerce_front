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
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import i18n from "../../i18n"
import useThemeStore from "../../store/useThemeStore";
import Switch from "@mui/material/Switch";

const SearchWrap = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#fff",
  borderRadius: 8,
  overflow: "hidden",
  width: "100%",
  maxWidth: 600,
}));

const SearchInput = styled(InputBase)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1, 1)
}));

const SearchBtn = styled(IconButton)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(1, 1),
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

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

export default function Navbar() {
  const { t } = useTranslation();
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

  const [langAnchorEl, setLangAnchorEl] = React.useState(null);
  const isLangOpen = Boolean(langAnchorEl);

  const openLangMenu = (e) => setLangAnchorEl(e.currentTarget);
  const closeLangMenu = () => setLangAnchorEl(null);

  const changeLang = (lng) => {
    const newLng = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLng);
    closeLangMenu();
  };

  const navItems = [
    { label: "Home", to: "/home" },
    { label: "Shop", to: "/products" },
    { label: "Pages", to: "/pages" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  const { mode, toggleTheme } = useThemeStore();

  return (
    <AppBar position="sticky" elevation={0}>
      <Box
        sx={{
          bgcolor: "#0b1220",
          color: "#ffffffd9",
          borderBottom: "1px solid #ffffff14",
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              py: 0.8,
              fontSize: 13,
            }}
          >
            <Typography sx={{ fontSize: 13, display: { xs: "none", md: "block" } }}>
              {t("nav.orderByPhone")}{" "}
              <Box component="span" sx={{ color: "#fff", fontWeight: 700 }}>
                (84) 943 446 000
              </Box>{" "}
              |{" "}
              <Box component="span" sx={{ color: "#fff" }}>
                {t("nav.saleText")}
              </Box>
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Button
                onClick={openLangMenu}
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  color: "rgba(255,255,255,0.9)",
                  textTransform: "none",
                  fontWeight: 600,
                  fontSize: 13,
                  "&:hover": { color: "#fff", bgcolor: "transparent" },
                }}
              >
                {i18n.language === "ar" ? "العربية" : "English"}
              </Button>

              <MaterialUISwitch
                checked={mode === "dark"}
                onChange={toggleTheme}
              />
            </Box>

            <Menu
              anchorEl={langAnchorEl}
              open={isLangOpen}
              onClose={closeLangMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <MenuItem onClick={() => changeLang("en")}>English</MenuItem>
              <MenuItem onClick={() => changeLang("ar")}>العربية</MenuItem>
            </Menu>
          </Box>
        </Container>
      </Box>
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
                  {t("nav.welc")}{" "}{user?.name}
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
                <SearchInput placeholder={t("nav.searchPlaceholder")} />
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
                  {t("nav.account")}
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
                  {t("nav.wishlist")}
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
                  {t("nav.cart")}
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
                {t("nav.all")}
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
                {t("nav.home")}
              </Box>
              <Box component={RouterLink} to="/products" sx={navLinkSx}>
                {t("nav.shop")}
              </Box>
              <Box component={RouterLink} to="/pages" sx={navLinkSx}>
                {t("nav.pages")}
              </Box>
              <Box component={RouterLink} to="/blog" sx={navLinkSx}>
                {t("nav.blog")}
              </Box>
              <Box component={RouterLink} to="/contact" sx={navLinkSx}>
                {t("nav.contact")}
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
              {t("nav.deal")}
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
            {t("auth.logout")}
          </MenuItem>
          : <MenuItem
            component={RouterLink}
            to="/auth/login"
            onClick={handleAccountClose}
          >
            {t("auth.login")}
          </MenuItem>}
        <MenuItem
          component={RouterLink}
          to="/auth/register"
          onClick={handleAccountClose}
        >
          {t("auth.register")}
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
        sx={{ display: { xs: "block", md: "none" } }}
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
