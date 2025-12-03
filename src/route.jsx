import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },
]);
export default router;