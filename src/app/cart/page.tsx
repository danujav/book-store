"use client";

import { useCartStore } from "@/store/userCartStore";
import { useEffect } from "react";

export default function Cart() {
  const { cartProducts } = useCartStore();

  return <h1>Cart Item Count: {cartProducts.length}</h1>;
}
