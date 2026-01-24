import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  IconButton,
  Divider,
  Paper,
  CircularProgress,
  Rating
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProduct";
import useAddToCart from "../../hooks/useAddToCart";

export default function ProductDetails() {
  const { id } = useParams();
  const { isLoading, isError, data } = useProduct(id);
  const { mutate: addToCart, isLoading: isAddingToCart } = useAddToCart();
  if (isLoading) return <CircularProgress />
  if (isError) return <Typography>error</Typography>
  const product = data.response;
  const quantityNum = Number(product.quantity ?? 0);
  const inStock = quantityNum > 0;

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "400px 1fr" },
          gap: { xs: 3, md: 5 },
          alignItems: "start",
        }}
      >
        <Paper
          elevation={0}
          sx={{
            border: "1px solid #e5e7eb",
            borderRadius: 2,
            overflow: "hidden",
            minHeight: { xs: 340, md: 560 },
            position: "relative",
          }}
        >
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              p: { xs: 2, md: 3 },
            }}
          />
        </Paper>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
            {product.name}
          </Typography>

          <Rating value={product.rate} readOnly sx={{ mb: 2 }}></Rating>

          <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 2 }}>
            <CheckCircleOutlineIcon sx={{ color: inStock ? "green" : "gray" }} />
            <Typography sx={{ color: inStock ? "green" : "text.secondary" }}>
              {inStock ? "In Stock" : "Out of stock"}
            </Typography>
          </Stack>

          <Typography sx={{ color: "text.secondary", mb: 1 }}>
            <b style={{ color: "#111827" }}>Price:</b> ${product.price}
          </Typography>

          <Typography sx={{ color: "text.secondary", mb: 1 }}>
            <b style={{ color: "#111827" }}>Quantity:</b> {product.quantity}
          </Typography>

          <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
            <b style={{ color: "#111827" }}>Description:</b> {product.description}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-start", gap: 2, py: 2 }}>
            <Button
              variant="outlined"
              startIcon={<ShoppingCartOutlinedIcon />}
              disabled={!inStock}
              sx={{
                minWidth: 200,
                py: 1.6,
                borderColor: "#111827",
                color: "#111827",
                fontWeight: 800,
                "&:hover": {
                  bgcolor: "#e11d48",
                  color: "#fff",
                  borderColor: "#e11d48",
                },
              }}
              onClick={() => {
                addToCart({ ProductId: product.id, Count: 1 });
              }}
            >
              Add to Cart
            </Button>
            <IconButton
              sx={{
                border: "1px solid #e5e7eb",
                borderRadius: 1.5,
                color: "#000",
                width: 52,
                height: 52,
                "&:hover": {
                  color: "#fff",
                  bgcolor: "#e11d48",
                  borderColor: "#e11d48",
                },
              }}
            >
              <FavoriteBorderIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}


