import React from "react";
import Categories from "../../components/categories/Categories";
import { Typography, Container, CircularProgress, Grid, Box, Card, CardMedia, CardContent } from "@mui/material";
import HeroCarousel from "../../components/hero/HeroCarousel";
import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DealsSection from "../../components/deals-section/DealsSection";
import Brands from "../../components/brands/Brands";
import ProductsSection from "../products/ProductsSection";

export default function Home() {
  const { t } = useTranslation();
  const { isLoading, isError, data } = useProducts();
  if (isLoading) return <CircularProgress />
  if (isError) return <Typography>error</Typography>

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

      <Box>
        <Typography component={"h2"} variant={'h5'} sx={{ pt: 3, fontWeight: 500 }}>{t("products.products")}</Typography>
        <ProductsSection />
      </Box>

      <DealsSection />

      <Brands />

    </Container>
  );
}
