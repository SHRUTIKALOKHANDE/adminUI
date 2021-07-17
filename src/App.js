import { useLocation } from "react-router-dom";
import React, { useLayoutEffect } from "react";
import Home from "./components/Home";

export default function App(props) {
  const location = useLocation();
  // Scroll to top if path changes
  useLayoutEffect(() => {
    window && window.scrollTo(0, 0);
  }, [location.pathname]);
 
  return (
      <div className="App">
          <Home />
      </div>
  );
}
