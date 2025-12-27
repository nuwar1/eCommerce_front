import React from "react";
import {
    AppBar, Toolbar, Box, Container, Typography, IconButton, Badge, Button,
    Menu, MenuItem, InputBase,
} from "@mui/material";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link as RouterLink } from "react-router-dom";

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

    const handleAccountOpen = (event) => {
        setAccountAnchorEl(event.currentTarget);
    };

    const handleAccountClose = () => {
        setAccountAnchorEl(null);
    };
    return (
        <AppBar position="sticky" elevation={0}>
            <Box sx={{ bgcolor: "#fff", color: "#000", py: 4 }}>
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
                        <Box sx={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 2 }}>
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
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.2 }}>
                            <IconButton
                                onClick={handleAccountOpen}
                                sx={{
                                    color: "#000",
                                    "&:hover": {
                                        color: "#e11d48",
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
                                <PersonOutlineIcon sx={{ fontSize: 28 }} />
                            </IconButton>

                            <IconButton
                                component={RouterLink}
                                to="/wishlist"
                                sx={{
                                    color: "#000",
                                    "&:hover": {
                                        color: "#e11d48",
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
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
                                    <FavoriteBorderIcon sx={{ fontSize: 28 }} />
                                </Badge>
                            </IconButton>

                            <IconButton
                                component={RouterLink}
                                to="/cart"
                                sx={{
                                    color: "#000",
                                    "&:hover": {
                                        color: "#e11d48",
                                        backgroundColor: "transparent",
                                    },
                                }}
                            >
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
        </AppBar >
    );

}
