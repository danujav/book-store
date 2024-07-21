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
} from "@mantine/core";

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

      <Button>Button 2</Button>

      <Button variant="default">2</Button>
      <Button variant="default">3</Button>
    </Stack>
  );
}

function CheckBox({ data }: { data: Book[] }) {
  const uniqueCategories = Array.from(
    new Set(data.map((book) => book.category))
  );

  return (
    <Checkbox.Group withAsterisk>
      <SimpleGrid cols={2}>
        {uniqueCategories.map((category, index) => (
          <Checkbox key={index} value={category} label={category} />
        ))}
      </SimpleGrid>
    </Checkbox.Group>
  );
}
