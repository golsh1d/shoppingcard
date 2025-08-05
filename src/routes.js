import Home from "./pages/Home/Home";
import Signing from "./pages/Signing/Signing";
import Cart from "./pages/Cart/Cart";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/signing", element: <Signing /> },
  { path: "/cart", element: <Cart /> },
];

export default routes;
