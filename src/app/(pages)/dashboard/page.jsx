import About from "@/app/components/AboutUs/about";
import Header from "@/app/components/Header/header";
import ProductCard from "@/app/components/produtcCard/productcard";
import Productstext from "@/app/components/RichText/productstxt";
import Richtext from "@/app/components/RichText/richtext";
import React from "react";

function Dashboard() {
  return (
    <div className=" flex items-center justify-center flex-col">
      <Richtext />
      <Productstext />
      <ProductCard />
      <About />
    </div>
  );
}

export default Dashboard;
