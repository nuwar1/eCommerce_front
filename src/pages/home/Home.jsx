import React from "react";
import Categories from "../../components/categories/Categories";
import { Box, Container, Paper } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ mt: 0 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "260px 1fr" },
          gap: 3,
          alignItems: "start",
        }}
      >
        <Box>
          <Categories />
        </Box>
        <Paper
          elevation={0}
          sx={{
            mt: 3,
            border: "1px solid #e5e7eb",
            borderRadius: 2,
            minHeight: 460,
            bgcolor: "#bfe7ea",
          }}
        >
        </Paper>
      </Box>
    </Container>
  )
}
