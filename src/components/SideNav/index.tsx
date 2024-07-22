import { useCategoryStore } from "@/store/useCategoryStore";
import { usePriceStore } from "@/store/usePriceStore";
import { Books } from "@/utils/schemas/books.schema";
import {
  Stack,
  Group,
  Text,
  Grid,
  Checkbox,
  SimpleGrid,
  ScrollArea,
  Divider,
  RangeSlider as MantineRangeSlider,
} from "@mantine/core";
import { useEffect, useState } from "react";

export default function SideNav({ data }: { data: Books }) {
  return (
    <Stack
      h="auto"
      bg="var(--mantine-color-body)"
      align="stretch"
      justify="center"
      gap="xs"
    >
      <Group className="pl-3 mt-6">
        <Text fw={500}>Filter By: </Text>
      </Group>

      <Grid>
        <Grid.Col span={12}>
          <Group justify="center">
            <Text fw={500}>Category</Text>
          </Group>
        </Grid.Col>
        <Grid.Col span={12}>
          <ScrollArea h={250} type="never" scrollbarSize={8}>
            <CheckBox data={data} />
          </ScrollArea>
        </Grid.Col>
      </Grid>

      <Divider my="sm" />

      <Grid>
        <Grid.Col span={12}>
          <Group justify="center">
            <Text fw={500}>Price</Text>
          </Group>
        </Grid.Col>
        <Grid.Col span={12}>
          <Slider />
        </Grid.Col>
      </Grid>

      <Divider my="sm" />
    </Stack>
  );
}

function CheckBox({ data }: { data: Books }) {
  const [value, setValue] = useState<string[]>([]);
  const { addCategories } = useCategoryStore();

  const uniqueCategories = Array.from(
    new Set(data.map((book) => book.category))
  );

  useEffect(() => {
    const addCategoriesToStore = () => addCategories(value);

    addCategoriesToStore();
  }, [value]);

  return (
    <Checkbox.Group value={value} onChange={setValue} withAsterisk>
      <SimpleGrid cols={2}>
        {uniqueCategories.map((category, index) => (
          <Checkbox key={index} value={category} label={category} />
        ))}
      </SimpleGrid>
    </Checkbox.Group>
  );
}

function Slider() {
  const [value, setValue] = useState<[number, number]>([0, 100]);

  const { startingPrice, endingPrice, updatePrices } = usePriceStore();

  useEffect(() => {
    updatePrices(value[0], value[1]);
  }, [value]);

  return (
    <>
      <MantineRangeSlider value={value} onChange={setValue} />
      <Text mt="md" size="sm">
        Price between:{" "}
        <b>
          $ {startingPrice} - $ {endingPrice}
        </b>
      </Text>
    </>
  );
}
