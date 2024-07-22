"use client";

import Table from "@/components/common/Table";
import { useCartStore } from "@/store/userCartStore";
import { Book } from "@/utils/schemas/books.schema";
import {
  Button,
  Grid,
  Image,
  Text,
  Group,
  CloseButton,
  TextInput,
} from "@mantine/core";
import { useMemo, useState } from "react";

export default function Cart() {
  return (
    <Grid className="m-10">
      <Grid.Col span={8}>
        <TableCart />
      </Grid.Col>
      <Grid.Col span={4}>
        <ProceedToCheck />
      </Grid.Col>
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

function ProceedToCheck() {
  return (
    <div className="bg-blue-200 ">
      <Grid className="p-8">
        <Grid.Col span={12}>
          <Text size="lg" fw={450}>
            Apply Coupons
          </Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text size="xs" fw={350}>
            If You Have A Promotion Code, Please Enter It Here.
          </Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            size="lg"
            radius="md"
            placeholder="Enter your coupon code here..."
          />
        </Grid.Col>
        <Grid.Col className="mt-8" span={12}>
          <Text size="lg" fw={800}>
            Price Details
          </Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid>
            <Grid.Col span={6}>
              <Text size="md" fw={500}>
                Total
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group justify="flex-end">
                <Text size="md" fw={500}>
                  $ 456.15
                </Text>
              </Group>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
          <Button
            fullWidth
            variant="filled"
            size="md"
            radius="xs"
            onClick={close}
          >
            PROCEED TO CHECKOUT
          </Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}
