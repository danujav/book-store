"use client";

import { useCartStore } from "@/store/userCartStore";
import { Button, Grid, Image, Text, Table, TableData } from "@mantine/core";
import { useEffect, useMemo } from "react";

export default function Cart() {
  const { cartProducts, removeFromCart, clearAllItems } = useCartStore();

  const runningTotals = useMemo(() => {
    let total = 0;
    return cartProducts.map((product) => {
      total += product.price;
      return total;
    });
  }, [cartProducts]);

  const tableData: TableData = {
    caption: "Items in your cart",
    head: ["Item", "Price", "Quantity", "Sub Total"],
    body: cartProducts.map((product, index) => [
      <Grid key={index}>
        <Grid.Col span={4}>
          <Image src={product.image} height={10} alt={"No image preview"} />
        </Grid.Col>
        <Grid.Col span={8}>
          <Text fw={450}>{product.title}</Text>
          <Text className="mt-3" fw={400}>
            {product.subtitle}
          </Text>
          <Text size="sm" className="mt-3" fw={350}>
            Author: {product.author}
          </Text>
          <Text size="sm" fw={350}>
            Category: {product.category}
          </Text>
        </Grid.Col>
      </Grid>,
      product.price.toFixed(2),
      2,
      runningTotals[index].toFixed(2),
    ]),
  };

  return (
    <Grid className="m-10">
      <Grid.Col span={8}>
        <Table
          striped
          highlightOnHover
          withRowBorders
          data={tableData}
          withTableBorder
        />
      </Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
    </Grid>
  );
}
