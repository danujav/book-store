"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { Button } from "@mantine/core";
import Home from "./home/page";
import { useCartStore } from "@/store/store";
import { useEffect } from "react";

export default function App() {
  const productIds = useCartStore((state) => state.cartProductIds);


  useEffect(() => {
    console.log("product id: " + productIds);
    
  }, [])

  return <Home />;
}
