import "./App.css";
import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";

export default function App() {
  let allRoutes = useRoutes(routes);

  return <>{allRoutes}</>;
}
