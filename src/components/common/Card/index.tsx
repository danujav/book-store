"use client";

import { useCartStore } from "@/store/userCartStore";
import { Book } from "@/utils/schemas/books.schema";
import {
  Card as MagniteCard,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Tooltip,
} from "@mantine/core";

export default function Card({ data }: { data: Book }) {
  const { cartProducts, addToCart, removeFromCart } = useCartStore();
  const isInCart = cartProducts.some((product) => product.id === data.id);

  return (
    <Tooltip label={data.category}>
      <MagniteCard
        shadow="sm"
        padding="lg"
        radius="md"
        withBorder
        className="hover:shadow-xl hover:bg-slate-100"
        key={data.id}
      >
        <MagniteCard.Section>
          <Image src={data.image} height={160} alt={"No image preview"} />
        </MagniteCard.Section>
        <Group justify="space-between" mt="md" mb="xs">
          <Text fw={500}>{data.title}</Text>
          <Text size="sm" fw={400}>
            Author: {data.author}
          </Text>
          <Badge size="lg" color="pink">
            $ {data.price}
          </Badge>
        </Group>
        <Text size="sm" c="dimmed">
          {data.subtitle}
        </Text>
        <Button
          color={`${!isInCart ? "blue" : "red"}`}
          fullWidth
          mt="md"
          radius="xs"
          onClick={() => {
            !isInCart ? addToCart(data) : removeFromCart(data.id);
          }}
        >
          {!isInCart ? "Add to cart" : "Remove from cart"}
        </Button>
      </MagniteCard>
    </Tooltip>
  );
}
