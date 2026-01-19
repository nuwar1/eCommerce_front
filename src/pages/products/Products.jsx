import React from 'react'
import PageHeader from '../../components/page-header/PageHeader'
import { useProducts } from '../../hooks/useProducts';
import { Typography, CircularProgress, Grid, Box, Card, CardMedia, CardContent, Container } from "@mui/material";

export default function Products() {
  const { isLoading, isError, data } = useProducts();
  if (isLoading) return <CircularProgress />
  if (isError) return <Typography>error</Typography>
  return (
    <>
      <PageHeader
        title="Products"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Products" },
        ]}
      />
      <Container maxWidth="xl">
        <Box sx={{py:5}}>
          <Grid container spacing={2} size={{ xs: 12, sm: 6, md: 5, lg: 3 }}>
            {data.response.data.map((product) =>
              <Card sx={{
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                boxShadow: "none",
                width: 250,
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
              </Card>)}

          </Grid>
        </Box>
      </Container>
    </>
  )
}
