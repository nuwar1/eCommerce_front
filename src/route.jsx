import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import ResetPassword from "./pages/reset/ResetPassword";
import SendCode from "./pages/send-code/SendCode";
import ShopLayout from "./layout/ShopLayout";
import ProductDetails from "./pages/product-details/ProductDetails";
import Products from "./pages/products/products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "home",
                element: <Home />
            },
        ]
    },
    {
        path: "/",
        element: <ShopLayout />,
        children: [
            {
                path: "cart",
                element: <Cart />
            },
            {
                path: "product",
                element: <ProductDetails />
            },
            {
                path: "products",
                element: <Products />
            },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [{
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register />
        },
        {
            path: "reset-password",
            element: <ResetPassword />
        },
        {
            path: "send-code",
            element: <SendCode />
        }
        ]
    }
]);
export default router;