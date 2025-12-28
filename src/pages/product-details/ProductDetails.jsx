import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  IconButton,
  Divider,
  Paper,
  Chip,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BoltIcon from "@mui/icons-material/Bolt";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function ProductDetails() {

  const product = {
    name: "T-Shirt",
    description: "Product one description",
    price: 200,
    discount: 0, 
    quantity: 200,
    category: "Clothes",
    images: [],
  };

  const [activeImg, setActiveImg] = useState(product.images[0]);
  const [qty, setQty] = useState(1);

  const inStock = product.quantity > 0;

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "560px 1fr" },
          gap: { xs: 3, md: 5 },
          alignItems: "start",
        }}
      >

        <Box sx={{ display: "grid", gridTemplateColumns: "90px 1fr", gap: 2 }}>

          <Stack spacing={2} sx={{ alignItems: "center" }}>
            {product.images.map((img) => (
              <Box
                key={img}
                onClick={() => setActiveImg(img)}
                sx={{
                  width: 76,
                  height: 92,
                  borderRadius: 1.5,
                  cursor: "pointer",
                  border: img === activeImg ? "2px solid #111827" : "1px solid #e5e7eb",
                  overflow: "hidden",
                  BoxShadow: "0 0 0 rgba(0,0,0,0)",
                  "&:hover": { borderColor: "#111827" },
                }}
              >
                <Box
                  component="img"
                  src={img}
                  alt="thumb"
                  sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            ))}
          </Stack>

          <Paper
            elevation={0}
            sx={{
              border: "1px solid #e5e7eb",
              borderRadius: 2,
              overflow: "hidden",
              bgcolor: "#f9fafb",
              minHeight: 560,
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={activeImg}
              alt={product.name}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                p: 3,
              }}
            />
          </Paper>
        </Box>

        <Box>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
            {product.name}
          </Typography>

          <Stack direction="row" spacing={1.2} alignItems="center" sx={{ mb: 2 }}>
            <CheckCircleOutlineIcon sx={{ color: inStock ? "green" : "gray" }} />
            <Typography sx={{ color: inStock ? "green" : "text.secondary" }}>
              {inStock ? "In Stock" : "Out of stock"}
            </Typography>
          </Stack>

          <Divider sx={{ my: 2 }} />

          <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography sx={{ color: "text.secondary" }}>
              <b style={{ color: "#111827" }}>Category:</b> {product.category}
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              <b style={{ color: "#111827" }}>Available:</b> {product.quantity}
            </Typography>

            <Typography sx={{ color: "text.secondary" }}>
              <b style={{ color: "#111827" }}>Discount:</b> {product.discount}%
            </Typography>
          </Stack>

          <Typography sx={{ fontWeight: 700, mb: 1 }}>Description</Typography>
          <Typography sx={{ color: "text.secondary", lineHeight: 1.8, mb: 3 }}>
            {product.description}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Stack spacing={2.2}>
            <Typography sx={{ fontWeight: 700 }}>Quantity</Typography>

            <Stack direction="row" spacing={2} alignItems="center">

              <Paper
                elevation={0}
                sx={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 1.5,
                  display: "flex",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <Button
                  disabled={!inStock || qty <= 1}
                  sx={{ minWidth: 48, color: "#111827" }}
                >
                  −
                </Button>

                <Box sx={{ px: 2.2, minWidth: 52, textAlign: "center", fontWeight: 700 }}>
                  {qty}
                </Box>

                <Button
                  disabled={!inStock || qty >= product.quantity}
                  sx={{ minWidth: 48, color: "#111827" }}
                >
                  +
                </Button>
              </Paper>

              <Button
                variant="outlined"
                startIcon={<ShoppingCartOutlinedIcon />}
                sx={{
                  flex: 1,
                  py: 1.6,
                  borderColor: "#111827",
                  color: "#111827",
                  fontWeight: 800,
                  "&:hover": {
                    bgcolor: "#e11d48" ,
                    color: "#fff",
                    borderColor: "#e11d48",
                  },
                }}
              >
              </Button>

              <IconButton
                sx={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 1.5,
                  color:"#000",
                  width: 52,
                  height: 52,
                  "&:hover": {color:"#fff", bgcolor: "#e11d48", borderColor: "#e11d48"},
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>
            </Stack>

            <Button
              variant="contained"
              sx={{
                py: 2,
                bgcolor: "#111827",
                fontWeight: 900,
                "&:hover": { bgcolor: "#000" },
              }}
              fullWidth
            >
              Buy It Now
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

