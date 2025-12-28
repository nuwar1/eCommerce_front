import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link as RouterLink } from "react-router-dom";
import slider1Img from "../../assets/images/slider7-1.webp"
import slider2Img from "../../assets/images/slider7-2.webp"
import slider3Img from "../../assets/images/slider7-3.webp"

export default function HeroCarousel() {
  const slides = useMemo(
    () => [
      {
        tag: "Sale Up To 30%",
        title1: "Playstation",
        title2: "Controller",
        text: "Here’s a fresh take on an old favorite.",
        buttonText: "Shop Now",
        to: "/products",
        image: slider1Img,
      },
      {
        tag: "Sale Up To 60%",
        title1: "Women's",
        title2: "Clothing Sale",
        text: "Biggest promotion at the end of the year",
        buttonText: "Shop Now",
        to: "/products",
        image: slider2Img,
      },
      {
        tag: "Buy 2 Get 1 Free",
        title1: "Bluetooth",
        title2: "Speakers",
        text: "Buy 2 wireless speakers, get 1 free sticker",
        buttonText: "Shop Now",
        to: "/products",
        image: slider3Img,
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef(null);

  const active = slides[index];

  const go = (dir) => {
    setIndex((prev) => {
      const next = (prev + dir + slides.length) % slides.length;
      return next;
    });
  };

  useEffect(() => {
    const start = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % slides.length);
      }, 6000);
    };

    start();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length]);

  return (
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        border: "1px solid #e5e7eb",
        minHeight: 500,
        width: "100%",
        backgroundImage: `url(${active.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 400ms ease",
      }}
    >
      <Box
        className="navArrows"
        sx={{
          position: "absolute",
          bottom: 16,
          right: 16,
          display: "flex",
          gap: 1,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(-6px)",
          transition: "opacity 250ms ease, transform 250ms ease",
          zIndex: 2,
        }}
      >
        <IconButton
          onClick={() => go(-1)}
          sx={{
            bgcolor: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(0,0,0,0.08)",
            "&:hover": { bgcolor: "#fff" },
          }}
        >
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton>

        <IconButton
          onClick={() => go(1)}
          sx={{
            bgcolor: "rgba(255,255,255,0.9)",
            border: "1px solid rgba(0,0,0,0.08)",
            "&:hover": { bgcolor: "#fff" },
          }}
        >
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 1fr" },
          alignItems: "stretch",
          minHeight: 460,
        }}
      >
        <Box
          sx={{
            px: { xs: 3, md: 7 },
            py: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <Box
            key={index}
            sx={{
              animation: "slideUp 650ms ease both",
              "@keyframes slideUp": {
                from: { opacity: 0, transform: "translateY(28px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            <Typography
              sx={{
                color: "#e11d48",
                fontWeight: 500,
                letterSpacing: 0.4,
                fontSize: 18,
                my: 3,
              }}
            >
              {active.tag}
            </Typography>
            <Typography
              sx={{
                fontWeight: 900,
                lineHeight: 1.05,
                fontSize: { xs: 44, md: 64 },
                color: "#111827",
              }}
            >
              {active.title1}
            </Typography>
            <Typography
              sx={{
                fontWeight: 900,
                lineHeight: 1.05,
                fontSize: { xs: 44, md: 64 },
                color: "#111827",
                mb: 2,
              }}
            >
              {active.title2}
            </Typography>

            <Typography
              sx={{
                color: "#111827",
                opacity: 0.85,
                fontSize: 18,
                mb: 4,
              }}
            >
              {active.text}
            </Typography>
            <Button
              component={RouterLink}
              to={active.to}
              variant="contained"
              sx={{
                width: 160,
                bgcolor: "#fff",
                color: "#111827",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.08)",
                py: 1.4,
                borderRadius: 1.5,
                fontWeight: 700,
                "&:hover": {
                  bgcolor: "#111827",
                  color: "#fff",
                },
              }}
            >
              {active.buttonText}
            </Button>
          </Box>
          <Box sx={{ display: "flex", gap: 1.5, mt: 5, alignItems:"center" }}>
            {slides.map((_, i) => (
              <Box
                key={i}
                onClick={() => setIndex(i)}
                sx={{
                  borderRadius: "50%",
                  cursor: "pointer",
                  border: "1px solid #fff",
                  bgcolor: i === index ?  "transparent": "#fff",
                  width: i === index ?  20: 10,
                  height: i == index ? 20: 10,
                  transition: "all 200ms ease",
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
