import { Outlet } from "react-router-dom";
import ShopNavbar from '../components/navbar/ShopNavbar';
import Footer from "../components/footer/Footer";
import { Box } from "@mui/material";

export default function ShopLayout() {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <ShopNavbar />
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>

  );
}
