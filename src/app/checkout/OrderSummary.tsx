"use client";

import { useCartStore } from "@/store/userCartStore";
import { Grid, Image, Text } from "@mantine/core";

export default function OrderSummary() {
  const { cartProducts } = useCartStore();

  return (
    <div className="bg-blue-200 p-5">
      <Grid>
        <Grid.Col span={12}>
          <Text size="lg" fw={450}>
            Order Summary
          </Text>
        </Grid.Col>
        {cartProducts.map((product, index) => (
          <Grid.Col span={12}>
            <Grid>
              <Grid.Col span={4}>
                <Image
                  src={product.image}
                  height={160}
                  alt={"No image preview"}
                />
              </Grid.Col>
              <Grid.Col span={8}>
                <Text fw={450}>{product.title}</Text>
                <Text size="sm" fw={400}>
                  $ {product.price}
                </Text>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
}
