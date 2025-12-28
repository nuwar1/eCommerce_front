import React from "react";
import Categories from "../../components/categories/Categories";
import { Box, Container } from "@mui/material";
import HeroCarousel from "../../components/hero/HeroCarousel";

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ mt: 0 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "300px 1fr" },
          gap: 3,
          alignItems: "start",
        }}
      >
        <Box>
          <Categories />
        </Box>

        <Box sx={{ mt: 3 }}>
          <HeroCarousel />
        </Box>
      </Box>
    </Container>
  );
}
