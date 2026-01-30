import React from "react";
import {
    Box,
    Typography,
    Grid,
    Button,
    Stack,
} from "@mui/material";
import offer1Imaage from "../../assets/images/Offer_1_636x848.webp"
import offer2Imaage from "../../assets/images/Offer_2_636x848.webp"
import offer3Imaage from "../../assets/images/Offer_3_636x848.webp"
import offer4Imaage from "../../assets/images/Offer_4_636x848.webp"

const offers = [
    {
        title: "Save up to 25% on\n  furniture items",
        desc: "Here is your chance to upgrade...",
        img: offer1Imaage,
    },
    {
        title: "Save up to $69 on\n selected perfume items",
        desc: "Here is your chance to upgrade...",
        img: offer2Imaage,
    },
    {
        title: "Save up to 30% on\n audio items",
        desc: "Here is your chance to upgrade...",
        img: offer3Imaage,
    },
    {
        title: "Save up to $40 on\n selectced phones & tablets",
        desc: "Here is your chance to upgrade...",
        img: offer4Imaage,
    },
];

export default function OffersSection() {
    return (
        <Box component="section" sx={{ py: { xs: 4, md: 5 } }}>
            <Typography
                variant="h5"
                sx={{ fontWeight: 500, mb: { xs: 3, md: 4 } }}
            >
                Our Featured Offers
            </Typography>

            <Grid container spacing={{ xs: 3, md: 4 }}>
                {offers.map((offer, idx) => (
                    <Grid key={idx} size={{ xs: 12, sm: 6, md: 3 }}>
                        <Stack
                            alignItems="center"
                            sx={{
                                textAlign: "center",
                                height: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    width: 250,
                                    height: 250,
                                    display: "grid",
                                    placeItems: "center",
                                    mb: 2.5,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={offer.img}
                                    alt={offer.title}
                                    sx={{
                                        width: "100%",
                                        borderRadius: "50%",
                                        objectFit: "contain",
                                        userSelect: "none",
                                        pointerEvents: "none",
                                    }}
                                />
                            </Box>

                            <Typography
                                sx={{
                                    fontWeight: 800,
                                    fontSize: 18,
                                    lineHeight: 1.25,
                                    whiteSpace: "pre-line",
                                    mb: 1.25,
                                }}
                            >
                                {offer.title}
                            </Typography>

                            <Typography sx={{ color: "text.secondary", fontSize: 13, mb: 2 }}>
                                {offer.desc}
                            </Typography>

                            <Button
                                variant="outlined"
                                sx={{
                                    textTransform: "none",
                                    borderRadius: 1.5,
                                    px: 3,
                                    py: 1,
                                    fontWeight: 600,
                                    borderColor: "rgba(0,0,0,0.12)",
                                    color: "text.primary",
                                    "&:hover": {
                                        borderColor: "#e11d48",
                                        bgcolor: "#e11d48",
                                        color: "#fff"
                                    },
                                }}
                            >
                                Shop now
                            </Button>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
