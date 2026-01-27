import React from "react";
import AuthNavbar from "../components/navbar/AuthNavbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function AuthLayout() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <AuthNavbar />
      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

