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
          gridTemplateColumns: {
            xs: "1fr",
            md: "240px 1fr",  
            lg: "280px 1fr",
            xl: "300px 1fr",  
          },
          gap: 3,
          alignItems: "start",
        }}
      >
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Categories />
        </Box>

        <Box sx={{ mt: { xs: 2, md: 3 } }}>
          <HeroCarousel />
        </Box>
      </Box>
    </Container>
  );
}
