import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import Collection from "../pages/collection/Collection";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Product from "../pages/product/Product";
import Cart from "../pages/cart/Cart";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Orders from "../pages/place_order/Orders";
import PlaceOrder from "../pages/place_order/PlaceOrder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/collection",
        element: <Collection />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: '/place-order',
        element: <PlaceOrder/>
      }
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
]);
