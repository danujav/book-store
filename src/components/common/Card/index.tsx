"use client";
import { useCartStore } from "@/store/store";
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
  const { cartProductIds, addToCart, removeFromCart } = useCartStore();

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
      {/* {!cartProductIds.includes(data.id) && } */}
      <Button
        color={`${!cartProductIds.includes(data.id) ? "blue" : "red"}`}
        fullWidth
        mt="md"
        radius="md"
        onClick={() => {
          !cartProductIds.includes(data.id)
            ? addToCart(data.id)
            : removeFromCart(data.id);
        }}
      >
        {!cartProductIds.includes(data.id) ? "Add to cart" : "Remove from cart"}
      </Button>
    </MagniteCard>
  );
}
