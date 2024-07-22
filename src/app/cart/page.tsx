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

  const head = ["Item", "Price", "Quantity", "Sub Total"];

  const body = cartProducts.map((product, index) => [
    <ImageColumn product={product} index={index} />,
    <PriceColumn product={product} />,
    <QuantityColumn />,
    <SubTotalColumn index={index} />,
    <CloseButton onClick={() => removeFromCart(product.id)} />,
  ]);

  return <Table caption="Items in your cart" head={head} body={body} />;
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

function QuantityColumn() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  return (
    <Group>
      <Button onClick={handleDecrement}>-</Button>
      <Text>{count}</Text>
      <Button onClick={handleIncrement}>+</Button>
    </Group>
  );
}

function SubTotalColumn({ index }: { index: number }) {
  const { cartProducts } = useCartStore();

  const subTotal = useMemo(() => {
    let total = 0;
    return cartProducts.map((product) => {
      total += product.price;
      return total;
    });
  }, [cartProducts]);

  return <Text fw={500}>{subTotal[index].toFixed(2)}</Text>;
}
