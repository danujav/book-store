"use client";

import Table from "@/components/common/Table";
import { useCartStore } from "@/store/userCartStore";
import { Book } from "@/utils/schemas/books.schema";
import { Button, Grid, Image, Text, Group, CloseButton } from "@mantine/core";
import { useMemo, useState } from "react";

export default function Cart() {
  return (
    <Grid className="m-10">
      <Grid.Col span={8}>
        <TableCart />
      </Grid.Col>
      <Grid.Col span={4}>2</Grid.Col>
    </Grid>
  );
}

function TableCart() {
  const { cartProducts, removeFromCart } = useCartStore();
  const [counts, setCounts] = useState(cartProducts.map(() => 1));

  const handleIncrement = (index: number) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] += 1;
      return newCounts;
    });
  };

  const handleDecrement = (index: number) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] > 1) {
        newCounts[index] -= 1;
      }
      return newCounts;
    });
  };

  const head = ["Item", "Price", "Quantity", "Sub Total"];

  const body = cartProducts.map((product, index) => [
    <ImageColumn product={product} index={index} />,
    <PriceColumn product={product} />,
    <QuantityColumn
      count={counts[index]}
      onIncrement={() => handleIncrement(index)}
      onDecrement={() => handleDecrement(index)}
    />,
    <SubTotalColumn product={product} count={counts[index]} />,
    <CloseButton onClick={() => removeFromCart(product.id)} />,
  ]);

  return (
    <Table
      caption={`${cartProducts.length} Items in your cart`}
      head={head}
      body={body}
    />
  );
}

function ImageColumn({ product, index }: { product: Book; index: number }) {
  return (
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
    </Grid>
  );
}

function PriceColumn({ product }: { product: Book }) {
  return <Text fw={500}>{product.price.toFixed(2)}</Text>;
}

function QuantityColumn({
  count,
  onIncrement,
  onDecrement,
}: {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}) {
  return (
    <Group>
      <Button onClick={onDecrement}>-</Button>
      <Text>{count}</Text>
      <Button onClick={onIncrement}>+</Button>
    </Group>
  );
}

function SubTotalColumn({ product, count }: { product: Book; count: number }) {
  return <Text fw={500}>{(product.price * count).toFixed(2)}</Text>;
}
