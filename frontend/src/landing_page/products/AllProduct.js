import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "./Hero";
import CategoriesPage from "./CategoriesPage";
import SkincarePage from "./SkincarePage";
import HaircarePage from "./HaircarePage";
import MakeupPage from "./MakeupPage";

function AllProduct() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <CategoriesPage />
      <SkincarePage />
      <HaircarePage />
      <MakeupPage />
    </>
  );
}

export default AllProduct;
