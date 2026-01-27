import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { useOutletContext } from "react-router-dom";

export default function ProfileInfo() {
    const { profile } = useOutletContext();

    return (
        <Paper variant="outlined" sx={{ borderRadius: 3, p: { xs: 2, md: 3 } }}>
            <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>
                Account Details
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" },
                    gap: 1,
                    py: 1.2,
                }}
            >
                <Typography sx={{ fontWeight: 700, color: "text.secondary" }}>Full Name</Typography>
                <Typography sx={{ fontWeight: 700 }}>{profile.fullName}</Typography>
            </Box>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" },
                    gap: 1,
                    py: 1.2,
                }}
            >
                <Typography sx={{ fontWeight: 700, color: "text.secondary" }}>Email</Typography>
                <Typography sx={{ fontWeight: 700 }}>{profile.email}</Typography>
            </Box>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" },
                    gap: 1,
                    py: 1.2,
                }}
            >
                <Typography sx={{ fontWeight: 700, color: "text.secondary" }}>Phone Number</Typography>
                <Typography sx={{ fontWeight: 700 }}>{profile.phoneNumber}</Typography>
            </Box>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "180px 1fr" },
                    gap: 1,
                    py: 1.2,
                }}
            >
                <Typography sx={{ fontWeight: 700, color: "text.secondary" }}>City</Typography>
                <Typography sx={{ fontWeight: 700 }}>{profile.city}</Typography>
            </Box>
        </Paper>
    );
}
