import React from "react";
import {
    Box,
    Button,
    Paper,
    Typography,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import slide1Imaage from "../../assets/images/Banner_Slide7_1.webp"
import slide2Imaage from "../../assets/images/Banner_Slide7-2.webp"
import slide3Imaage from "../../assets/images/Banner_Slide7-3.webp"
import dealImage from "../../assets/images/Banner_Deal7.webp"

const slides = [
    {
        tag: "New Arrivals",
        title: "New Generation Smart Watch",
        subtitle: "You can certainly buy and pay online",
        btnText: "Shop Now",
        image: slide1Imaage,
    },
    {
        tag: "Black Friday Sale",
        title: "Hooded Jackets For Women",
        subtitle: "10% discount for first customers",
        btnText: "Shop Now",
        image: slide2Imaage,
    },
    {
        tag: "Special Offer",
        title: "Modern Wooden Dining Chairs",
        subtitle: "Get discount code up to 20% here",
        btnText: "Shop Now",
        image: slide3Imaage
    },
];

export default function DealsSection() {
    return (
        <Box component="section" sx={{ py: { xs: 2, md: 4 } }}>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "1.65fr 1fr" },
                    gap: 2,
                    alignItems: "stretch",
                }}
            >
                <Paper
                    variant="outlined"
                    sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                    }}
                >
                    <Box
                        sx={{
                            "& .swiper-pagination": {
                                textAlign: "left",
                                px: 3,
                                pb: 2,
                            },
                            "& .swiper-pagination-bullet": {
                                width: 10,
                                height: 10,
                                opacity: 1,
                                background: "transparent",
                                border: "1px solid #111",
                                mx: "6px !important",
                            },
                            "& .swiper-pagination-bullet-active": {
                                background: "#111",
                            },
                        }}
                    >
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            loop
                        >
                            {slides.map((s, idx) => (
                                <SwiperSlide key={idx}>
                                    <Box
                                        sx={{
                                            p: { xs: 2.5, md: 3 },
                                            display: "grid",
                                            gridTemplateColumns: { xs: "1fr", md: "1.15fr 1fr" },
                                            gap: 2,
                                            alignItems: "center",
                                            minHeight: { md: 320 },
                                        }}
                                    >
                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontSize: 14,
                                                    fontWeight: 700,
                                                    color: "#ff3b7a",
                                                    mb: 1,
                                                }}
                                            >
                                                {s.tag}
                                            </Typography>

                                            <Typography
                                                component="h2"
                                                sx={{
                                                    fontWeight: 800,
                                                    letterSpacing: -0.6,
                                                    lineHeight: 1.05,
                                                    fontSize: { xs: 28, sm: 34, md: 40 },
                                                    mb: 1.2,
                                                }}
                                            >
                                                {s.title}
                                            </Typography>

                                            <Typography sx={{ color: "text.secondary", mb: 2 }}>
                                                {s.subtitle}
                                            </Typography>

                                            <Button
                                                variant="outlined"
                                                sx={{
                                                    borderColor: "#111",
                                                    color: "#111",
                                                    fontWeight: 700,
                                                    borderRadius: 2,
                                                    px: 2.2,
                                                    py: 1,
                                                    "&:hover": {
                                                        bgcolor: "#111",
                                                        borderColor: "#111",
                                                        color: "#fff",
                                                    },
                                                }}
                                            >
                                                {s.btnText}
                                            </Button>
                                        </Box>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Box
                                                component="img"
                                                src={s.image}
                                                alt={s.title}
                                                sx={{
                                                    width: "min(520px, 100%)",
                                                    height: "auto",
                                                    objectFit: "contain",
                                                    borderRadius: 2.5,
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Paper>

                <Paper
                    variant="outlined"
                    sx={{
                        borderRadius: 3,
                        overflow: "hidden",
                        backgroundImage: `url(${dealImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "bottom center",
                        backgroundRepeat: "no-repeat",
                        display: "grid",
                    }}
                >
                    <Box sx={{
                        display: "flex", flexDirection: "column", alignItems: "center",
                        gap: 2, p: { xs: 2, md: 3.5 },
                    }} textAlign="center">
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: 800 }}
                        >
                            Cyber Sale
                        </Typography>
                        <Typography sx={{ color: "#000", fontSize: 13 }}>
                            20% Off when buying and paying online
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: 2,
                                maxWidth: 200,
                                display: "flex",
                                px: 2.5,
                                py: 1,
                                fontWeight: 800,
                                textTransform: "none",
                                bgcolor: "#fff",
                                color: "#000",
                                boxShadow: "none",
                                "&:hover": {
                                    bgcolor: "#000",
                                    color: "#fff",
                                    boxShadow: "none",
                                },
                            }}
                        >
                            Shop Now
                        </Button>

                    </Box>
                </Paper>
            </Box>
        </Box>
    );
}
