import React from 'react'
import { useProfile } from '../../hooks/useProfile';
import {
    Box,
    Container,
    Paper,
    Typography,
    CircularProgress,
    List,
    ListItemButton,
    ListItemText,
    Divider,
    Tabs,
    Tab,
} from "@mui/material";
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export default function ProfileLayout() {
    const { isLoading, isError, data } = useProfile();
    const location = useLocation();
    if (isLoading) return <CircularProgress />
    if (isError) return <Typography>error</Typography>
    const tabValue = location.pathname.includes("/profile/orders") ? 1 : 0;

    return (
        <Box component="section" sx={{ py: { xs: 2, md: 4 } }}>
            <Container maxWidth="xl">
                <Paper variant="outlined" sx={{ borderRadius: 3, overflow: "hidden" }}>
                    <Box sx={{ p: { xs: 2, md: 3 }, borderBottom: "1px solid #e5e7eb" }}>
                        <Typography variant="h5" sx={{ fontWeight: 900 }}>
                            Profile
                        </Typography>
                        <Typography sx={{ color: "text.secondary", mt: 0.5 }}>
                            Manage your info and orders.
                        </Typography>
                    </Box>

                    <Box sx={{ display: { xs: "block", md: "none" }, px: 2, pt: 1 }}>
                        <Tabs value={tabValue} variant="fullWidth">
                            <Tab
                                label="Info"
                                component={NavLink}
                                to=""
                                end
                                sx={{ textTransform: "none", fontWeight: 800 }}
                            />
                            <Tab
                                label="Orders"
                                component={NavLink}
                                to="orders"
                                sx={{ textTransform: "none", fontWeight: 800 }}
                            />
                        </Tabs>
                    </Box>

                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: { xs: "1fr", md: "280px 1fr" },
                            gap: { xs: 0, md: 0 },
                        }}
                    >
                        <Box sx={{ display: { xs: "none", md: "block" } }}>
                            <Box sx={{ p: 2 }}>
                                <List disablePadding sx={{ display: "grid", gap: 1 }}>
                                    <ListItemButton
                                        component={NavLink}
                                        to=""
                                        end
                                        sx={{
                                            borderRadius: 2,
                                            "&.active": {
                                                backgroundColor: "rgba(17, 24, 39, 0.08)",
                                            },
                                        }}
                                    >
                                        <ListItemText
                                            primary="Profile Info"
                                        />
                                    </ListItemButton>
                                    <ListItemButton
                                        component={NavLink}
                                        to="orders"
                                        sx={{
                                            borderRadius: 2,
                                            "&.active": {
                                                backgroundColor: "rgba(17, 24, 39, 0.08)",
                                            },
                                        }}
                                    >
                                        <ListItemText
                                            primary="Orders"
                                        />
                                    </ListItemButton>
                                </List>
                            </Box>
                        </Box>

                        <Box sx={{ p: { xs: 2, md: 3 } }}>
                            <Outlet context={{ profile: data }} />
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
}

