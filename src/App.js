import "./App.css";
import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function App() {
  let allRoutes = useRoutes(routes);
  let app = useRef();

  function getLocalStorage() {
    let webAppereance = localStorage.getItem("mode");
    if (webAppereance === "dark") {
      app.current.classList.add("App-container-dark");
    } else {
      app.current.classList.remove("App-container-dark");
    }
  }

  useEffect(() => {
    const handleStorageUpdate = () => {
      getLocalStorage();
    };

    getLocalStorage();

    window.addEventListener("lsUpdated", handleStorageUpdate);

    return () => {
      window.removeEventListener("lsUpdated", handleStorageUpdate);
    };
  }, []);

  useEffect(() => {
      const updateSwiper = () => {
        window.location.reload()
      };
  
      window.addEventListener("resize", updateSwiper);
  
      return () => {
        window.removeEventListener("resize", updateSwiper);
      };
  }, []);

  return (
    <section className="App-container" ref={app}>
      {allRoutes}
    </section>
  );
}
