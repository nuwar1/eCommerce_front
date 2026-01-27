import React, { useRef } from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Brand1 from "../../assets/images/Market_1.avif"
import Brand2 from "../../assets/images/Market_2.avif"
import Brand3 from "../../assets/images/Market_3.avif"
import Brand4 from "../../assets/images/Market_4.avif"
import Brand5 from "../../assets/images/Market_5.webp"
import Brand6 from "../../assets/images/Market_6.avif"
import Brand7 from "../../assets/images/Market_7.avif"
import Brand8 from "../../assets/images/Market_8.avif"

const brands = [
  { name: "HiKOKI", src: Brand1 },
  { name: "LG", src: Brand2 },
  { name: "Samsung", src: Brand3 },
  { name: "ThinkPad", src: Brand4 },
  { name: "Vivo", src: Brand5 },
  { name: "Huawei", src: Brand6 },
  { name: "Sony", src: Brand7 },
  { name: "Xiaomi", src: Brand8 },
];

export default function Brands() {
  const swiperRef = useRef(null);

  return (
    <Box component="section" sx={{ py: { xs: 3, md: 4} }}>
      <Box>
        <Typography
          component="h2"
          sx={{ fontWeight: 700, fontSize: { xs: 20, md: 26 }, mb:3}}
        >
          Shop By Brands
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap:2 }}>
          <IconButton
            onClick={() => swiperRef.current?.slidePrev()}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 50,
              width: 40,
              height: 40,
              "&:hover": { borderColor: "#111" },
            }}
          >
            <ChevronLeftIcon />
          </IconButton>
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={12}
            slidesPerView={2.2}
            breakpoints={{
              600: { slidesPerView: 3.2 },
              900: { slidesPerView: 5.2 },
              1200: { slidesPerView: 7 },
            }}
          >
            {brands.map((b) => (
              <SwiperSlide key={b.name}>
                <Paper
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    height: 90,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 1.5,
                    transition: "transform 180ms ease, border-color 180ms ease",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      borderColor: "#111",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={b.src}
                    alt={b.name}
                    sx={{
                      maxWidth: "100%",
                      maxHeight: "100%",
                      objectFit: "contain",
                    }}
                  />
                </Paper>
              </SwiperSlide>
            ))}
          </Swiper>
          <IconButton
            onClick={() => swiperRef.current?.slideNext()}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 50,
              width: 40,
              height: 40,
              "&:hover": { borderColor: "#111" },
            }}
          >
            <ChevronRightIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
