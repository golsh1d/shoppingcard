import "./App.css";
import React from "react";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { useRef, useEffect } from "react";

export default function App() {
  let allRoutes = useRoutes(routes);
  let app = useRef();
  let prevWidth = useRef(window.innerWidth)
  let timeoutRef = useRef(null)

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
      const handleResize = () => {
        const currentWidth = window.innerWidth
        if (currentWidth !== prevWidth.current) {
          prevWidth.current = currentWidth
          if (timeoutRef.current) clearTimeout(timeoutRef.current)
          timeoutRef.current = setTimeout(() => {
             window.location.reload()
          }, 100)
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
      };
  }, []);

  return (
    <section className="App-container" ref={app}>
      {allRoutes}
    </section>
  );
}
