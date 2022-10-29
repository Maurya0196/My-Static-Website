import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(-1, -1);
    console.log(pathname);
  }, [pathname]);

  return null;
};