import React from "react";
import { Box, Container, Typography, CircularProgress, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { useParams, Link as RouterLink } from "react-router-dom";
import useCategoryProducts from "../../hooks/useCategoryProducts";
import PageHeader from "../../components/page-header/PageHeader";
import { Link } from "react-router-dom";
import { useCategories } from "../../hooks/useCategories";

export default function CategoryProducts() {
    const { id } = useParams();
    const { isLoading, isError, data } = useCategoryProducts(id);
    const { data: categoryData } = useCategories();

    if (isLoading) return <CircularProgress />;
    if (isError) return <Typography>Error</Typography>;

    const product = data.response;
    const category = categoryData.response.find((c) => c.id === Number(id));
    const categoryName = category.name;

    return (
        <>
            <PageHeader
                title={categoryName}
                crumbs={[
                    { label: "Home", to: "/" },
                    { label: categoryName },
                ]}
            />

            <Container maxWidth="xl" sx={{ py: 3 }}>
                <Box component="section" sx={{ py: 5 }}>
                    <Grid container spacing={3}>
                        {product.map((product) => (
                            <Grid
                                key={product.id}
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
                                                p: 3
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
    );
}
