"use client"

import { useCartStore } from "@/store/store";
import { useEffect } from "react";

export default function Cart() {
    const {cartProductIds, addToCart, removeFromCart, clearAllItems} = useCartStore();

    useEffect(() => {
        console.log("product ids: " + cartProductIds);
    }, [])

    return (
        <h1>Cart Item Count: {cartProductIds.length}</h1>
    );
}