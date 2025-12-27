import { Outlet } from "react-router-dom";
import ShopNavbar from '../components/navbar/ShopNavbar';
import Footer from "../components/footer/Footer";

export default function ShopLayout() {
  return (
    <>
      <ShopNavbar />
      <Outlet />
      <Footer />
    </>
  );
}
