import React from 'react'
import PageHeader from '../../components/page-header/PageHeader'
import { useProducts } from '../../hooks/useProducts';
import { Typography, CircularProgress, Grid, Box, Card, CardMedia, CardContent, Container } from "@mui/material";
import { Link } from 'react-router-dom';

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
        <Box sx={{ py: 5 }}>
          <Grid container spacing={1}>
            {data.response.data.map((product) => (
              <Grid
                key={product.id}
                item
                size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              >
                <Link
                  to={`/product/${product.id}`}
                  style={{
                    display: "block",
                    textDecoration: "none",
                    width: "100%",                 
                  }}
                >
                  <Card
                    sx={{
                      border: "1px solid #e5e7eb",
                      borderRadius: 2,
                      boxShadow: "none",
                      width: "100%",              
                      maxWidth: { xs: "100%", sm: 280 }, 
                      mx: "auto",                   
                      transition: "transform 200ms ease, box-shadow 200ms ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderColor: "#000",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={product.image}
                      alt={product.title}
                      sx={{ objectFit: "contain", height: 200, p: 3 }}
                    />

                    <CardContent
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.5,
                        pt: 2,
                      }}
                    >
                      <Typography
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          "&:hover": { color: "#e11d48" },
                        }}
                      >
                        {product.name}
                      </Typography>

                      <Typography component="span" sx={{ fontWeight: 400 }}>
                        ${product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

    </>
  )
}
