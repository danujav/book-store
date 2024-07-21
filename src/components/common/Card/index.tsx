"use client";
import { useCartStore } from "@/store/userCartStore";
import Book from "@/utils/types/Book";
import {
  Card as MagniteCard,
  Image,
  Text,
  Badge,
  Button,
  Group,
} from "@mantine/core";

export default function Card({ data }: { data: Book }) {
  const { cartProducts, addToCart, removeFromCart } = useCartStore();

  return (
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
        <Badge color="pink">{data.price}</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {data.subtitle}
      </Text>
      <Button
        color={`${!cartProducts.includes(data) ? "blue" : "red"}`}
        fullWidth
        mt="md"
        radius="md"
        onClick={() => {
          !cartProducts.includes(data)
            ? addToCart(data)
            : removeFromCart(data.id);
        }}
      >
        {!cartProducts.includes(data) ? "Add to cart" : "Remove from cart"}
      </Button>
    </MagniteCard>
  );
}
