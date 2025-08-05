import Home from "./pages/Home/Home";
import Signing from "./pages/Signing/Signing";
import SingleProduct from "./pages/SingleProduct/SingleProduct"

let routes = [
  { path: "/", element: <Home /> },
  { path: "/signing", element: <Signing /> },
  { path: "/singleProduct/:productID", element: <SingleProduct /> },
];

export default routes;
