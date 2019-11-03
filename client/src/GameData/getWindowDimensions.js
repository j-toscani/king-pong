import { useState, useEffect } from "react";

// Source: https://stackoverflow.com/questions/36862334/get-viewport-window-height-in-reactjs

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
