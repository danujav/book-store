import Book from "@/utils/types/Book";
import {
  Stack,
  Button,
  Group,
  Text,
  Flex,
  Center,
  Box,
  Grid,
  Checkbox,
  SimpleGrid,
  ScrollArea,
  Divider,
  RangeSlider as MantineRangeSlider,
  NumberFormatter,
} from "@mantine/core";
import { useEffect, useState } from "react";

export default function SideNav({ data }: { data: Book[] }) {
  return (
    <Stack
      h="auto"
      bg="var(--mantine-color-body)"
      align="stretch"
      justify="center"
      gap="xl"
    >
      <Group className="pl-3">
        <Text fw={500}>Filter By: </Text>
      </Group>

      <Divider my="sm" />

      <Grid>
        <Grid.Col span={12}>
          <Group justify="center">
            <Text fw={500}>Category</Text>
          </Group>
        </Grid.Col>
        <Grid.Col span={12}>
          <ScrollArea h={250} type="auto" scrollbarSize={8}>
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

function CheckBox({ data }: { data: Book[] }) {
  const [value, setValue] = useState<string[]>([]);

  const uniqueCategories = Array.from(
    new Set(data.map((book) => book.category))
  );
  
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
  const [value, setValue] = useState<[number, number]>([20, 100]);

  return (
    <>
      <MantineRangeSlider value={value} onChange={setValue} />
        <Text mt="md" size="sm">
          Price between:{" "}
          <b>
            $ {value[0]} - $ {value[1]}
          </b>
        </Text>
    </>
  );
}
