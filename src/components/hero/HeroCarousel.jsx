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
import { useTranslation } from "react-i18next";

export default function HeroCarousel() {
  const { t } = useTranslation();
  const slides = useMemo(
    () => [
      {
        tag: t("hero.sale1"),
        title: t("hero.title1"),
        text: t("hero.subtitle1"),
        buttonText: t("hero.shopNow"),
        to: "/products",
        image: slider1Img,
      },
      {
        tag: t("hero.sale2"),
        title: t("hero.title3"),  
        text: t("hero.subtitle3"),
        buttonText: t("hero.shopNow"),
        to: "/products",
        image: slider2Img,
      },
      {
        tag: t("hero.sale3"),
        title: t("hero.title2"),
        text: t("hero.subtitle2"),
        buttonText: t("hero.shopNow"),
        to: "/products",
        image: slider3Img,
      },
    ],
    [t]
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
    <Box dir="ltr" sx={{ textAlign: "left" }}>
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 2,
          border: "1px solid #e5e7eb",
          minHeight: { xs: 200, sm: 250, md: 300 },
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
            display: { xs: "none", sm: "flex" },
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
                  fontSize: { xs: 14, sm: 16, md: 18 },
                  my: 3,
                }}
              >
                {active.tag}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 900,
                  lineHeight: 1.05,
                  fontSize: { xs: 34, sm: 44, md: 64 },
                  color: "#111827",
                }}
              >
                {active.title}
              </Typography>
              <Typography
                sx={{
                  color: "#111827",
                  opacity: 0.85,
                  fontSize: { xs: 14, sm: 16, md: 18 },
                  maxWidth: 520,
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
            <Box sx={{ display: "flex", gap: 1.5, mt: 5, alignItems: "center" }}>
              {slides.map((_, i) => (
                <Box
                  key={i}
                  onClick={() => setIndex(i)}
                  sx={{
                    borderRadius: "50%",
                    cursor: "pointer",
                    border: "1px solid #fff",
                    bgcolor: i === index ? "transparent" : "#fff",
                    width: i === index ? 20 : 10,
                    height: i == index ? 20 : 10,
                    transition: "all 200ms ease",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
