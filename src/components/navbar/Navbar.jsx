import React from "react";
import {
  AppBar, Toolbar, Box, Container, Typography, IconButton, Badge, Button,
  Menu, MenuItem, Divider, InputBase, ListItemIcon
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Link as RouterLink } from "react-router-dom";
import { Margin } from "@mui/icons-material";

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
  fontSize: 14,
  px: 2,
  py: 1,
  borderRadius: 1,
  "&:hover": { color: "#e11d48"},
};

export default function Navbar() {
  const [accountAnchorEl, setAccountAnchorEl] = React.useState(null);
  const isAccountOpen = Boolean(accountAnchorEl);

  const handleAccountOpen = (event) => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleAccountClose = () => {
    setAccountAnchorEl(null);
  };

  return (
    <AppBar position="sticky" elevation={0}>
      <Box sx={{ bgcolor: "#111827", color: "#fff" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1.5, gap: 2 }}>
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
            <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <SearchWrap>
                <SearchInput placeholder="Search..." />
                <SearchBtn>
                  <SearchIcon />
                </SearchBtn>
              </SearchWrap>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Button
                onClick={handleAccountOpen}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                  fontWeight: 600,
                  gap: 1,
                  "&:hover": {
                    color: "#e11d48",
                    backgroundColor: "transparent"
                  },
                }}
                startIcon={<PersonOutlineIcon />}
              >
                Account
              </Button>

              <Button
                component={RouterLink}
                to="/wishlist"
                sx={{
                  color: "#fff", textTransform: "none", fontWeight: 600, gap: 0.5, "&:hover": {
                    color: "#e11d48",
                    backgroundColor: "transparent"
                  },
                }}
                startIcon={
                  <Badge
                    badgeContent={0}
                    showZero
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "#e11d48",
                        color: "#fff",
                      },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </Badge>
                }
              >
                Wishlist
              </Button>

              <Button
                component={RouterLink}
                to="/cart"
                sx={{
                  color: "#fff", textTransform: "none", fontWeight: 600, gap: 0.5, "&:hover": {
                    color: "#e11d48",
                    backgroundColor: "transparent"
                  },
                }}
                startIcon={
                  <Badge
                    badgeContent={0}
                    showZero
                    sx={{
                      "& .MuiBadge-badge": {
                        backgroundColor: "#e11d48",
                        color: "#fff",
                      },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </Badge>
                }
              >
                Cart
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </Box>
    
      <Box sx={{ bgcolor: "#111827", color: "#fff" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: 56, display: "flex", gap: 2 }}>
            <Box sx={{ minWidth: 260 }}>
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

            <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
              <Box component={RouterLink} to="/home" sx={{ ...navLinkSx, color: "#e11d48" }}>
                Home
              </Box>
              <Box component={RouterLink} to="/shop" sx={navLinkSx}>
                Shop
              </Box>
              <Box component={RouterLink} to="/products" sx={navLinkSx}>
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
                color: "#fff",
                textTransform: "none",
                fontWeight: 800,
                "&:hover": {color:"#e11d48"},
              }}
            >
              Shop today’s deal
            </Button>
          </Toolbar>
          <Menu
            anchorEl={accountAnchorEl}
            open={isAccountOpen}
            onClose={handleAccountClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem
              component={RouterLink}
              to="/auth/login"
              onClick={handleAccountClose}
            >
              Login
            </MenuItem>

            <MenuItem
              component={RouterLink}
              to="/auth/register"
              onClick={handleAccountClose}
            >
              Register
            </MenuItem>
          </Menu>
        </Container>
      </Box>
    </AppBar >
  );
}
