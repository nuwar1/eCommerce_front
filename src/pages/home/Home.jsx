import React from "react";
import Categories from "../../components/categories/Categories";
import { Typography, Container, CircularProgress, Grid, Box, Card, CardMedia, CardContent } from "@mui/material";
import HeroCarousel from "../../components/hero/HeroCarousel";
import { useProducts } from "../../hooks/useProducts";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import DealsSection from "../../components/deals-section/DealsSection";
import Brands from "../../components/brands/Brands";

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

      <Box sx={{ py: 5 }}>
        <Typography component={"h2"} variant={'h5'} sx={{ py: 3, fontWeight: 500 }}>{t("products.products")}</Typography>
        <Grid container spacing={1}>
          {data.response.data.map((product) =>
            <Grid
              key={product.id}
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Link
                to={`/product/${product.id}`}
                style={{ display: "block", textDecoration: "none" }}
              >
                <Card sx={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 2,
                  boxShadow: "none",
                  width: "100%",
                  maxWidth: { xs: "100%", sm: 280 },
                  transition: "transform 200ms ease, box-shadow 200ms ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "#000"
                  },
                }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.title}
                    sx={{ objectFit: "contain", height: 200, p: 3 }}>
                  </CardMedia>
                  <CardContent sx={{ display: "flex-column", gap: 3, pt: 2 }}>
                    <Typography component={"h3"} sx={{
                      "&:hover": {
                        color: "#e11d48",
                        cursor: 'pointer'
                      }
                    }}>
                      {product.name}
                    </Typography>
                    <Typography component={"span"}>
                      ${product.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>)}
        </Grid>
      </Box>

      <Box>
        <DealsSection />
      </Box>

      <Box>
        <Brands />
      </Box>
    </Container>
  );
}
