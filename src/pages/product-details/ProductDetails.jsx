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
import ReviewsSection from "../../components/reviews/ReviewsSection";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const [expanded, setExpanded] = React.useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, data } = useProduct(id);
  const { mutate: addToCart, isPending: isAddingToCart } = useAddToCart();
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

          <Box>
            <Typography sx={{
              color: "text.secondary", mb: 3, display: "-webkit-box",
              WebkitLineClamp: expanded ? "none" : 5,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}>
              <b style={{ color: "#111827" }}>Description:</b> {product.description}
            </Typography>
            <Button
              onClick={() => setExpanded(!expanded)}
              sx={{ mt: 1, p: 0, textTransform: "none", fontWeight: 700, color: "#000" }}
            >
              {expanded ? "Show less" : "Read more"}
            </Button>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },   // ✅ stack on mobile
              alignItems: "stretch",
              justifyContent: "flex-start",
              gap: 2,
              py: 2,
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                fontSize: { xs: 14, md: 16 },
                py: 1.6,
                fontWeight: 800,
                textTransform: "none",
                bgcolor: "#111827",
                color: "#fff",
                borderRadius: 2,
                width: { xs: "100%", sm: "auto" },        
                minWidth: { sm: 200 },
                "&:hover": {
                  bgcolor: "#e11d48",
                },
              }}
              onClick={() => navigate("/products")}
            >
              Continue Shopping
            </Button>

            <Button
              variant="outlined"
              startIcon={<ShoppingCartOutlinedIcon />}
              disabled={!inStock}
              sx={{
                fontSize: { xs: 14, md: 16 },
                py: 1.6,
                fontWeight: 800,
                textTransform: "none",
                borderRadius: 2,
                width: { xs: "100%", sm: "auto" },        
                minWidth: { sm: 200 },
                borderColor: "#111827",
                color: "#111827",
                "&:hover": {
                  bgcolor: "#e11d48",
                  color: "#fff",
                  borderColor: "#e11d48",
                },
              }}
              onClick={() => addToCart({ ProductId: product.id, Count: 1 })}
            >
              Add to Cart
            </Button>

            <IconButton
              sx={{
                border: "1px solid #e5e7eb",
                borderRadius: 2,
                color: "#000",
                width: { xs: "100%", sm: 52 },            
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
      <Box component="section" sx={{ py: 5 }}>
        <ReviewsSection />
      </Box>
    </Container>
  );
}


