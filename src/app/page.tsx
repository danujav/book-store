"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header";
import { Button } from "@mantine/core";
import Home from "./home/page";
import { useCartStore } from "@/store/userCartStore";
import { useEffect } from "react";

export default function App() {
  return <Home />;
}
