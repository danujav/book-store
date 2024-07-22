"use client";

import {
  Grid,
  Group,
  Pagination,
  SimpleGrid,
  Skeleton,
  Text,
} from "@mantine/core";
import Card from "@/components/common/Card";
import { useFetchData } from "@/utils/hooks/useFetchData";
import { useEffect, useState } from "react";
import { useChunk } from "@/utils/hooks/useChunk";
// import Book from "@/utils/types/Book";
import Combobox from "@/components/common/Combobox";
import SideNav from "@/components/SideNav";
import { Book, BooksSchema } from "@/utils/schemas/books.schema";

export default function Home() {
  const { data, loading, error } = useFetchData(
    "/data/bookList.json",
    2000,
    BooksSchema
  );
  const [value, setValue] = useState<string | null>("");

  const [activePage, setPage] = useState(1);
  const chunkArray = useChunk(data, 8);
  const items = chunkArray[activePage - 1]?.map((item: Book) => (
    <Card key={item.id} data={item} />
  ));

  const handleChange = (value: string | null) => {
    setValue(value);
  };

  return (
    <div className="m-11">
      <Skeleton visible={loading} height={450}>
        <Grid>
          <Grid.Col span={3}>
            <SideNav data={data} />
          </Grid.Col>
          <Grid.Col span={9}>
            <Group justify="flex-end" className="mb-5">
              <Text fw={500}>Sort By: </Text>
              <Combobox
                placeholder="Pick a sorting value"
                data={["Titile", "Author"]}
                value={value}
                onChange={handleChange}
              />
            </Group>
            <SimpleGrid cols={4} spacing="xs">
              {items}
            </SimpleGrid>
            <Group justify="flex-end">
              <Pagination
                total={data.length / 2}
                siblings={2}
                value={activePage}
                onChange={setPage}
                mt="sm"
              />
            </Group>
          </Grid.Col>
        </Grid>
      </Skeleton>
    </div>
  );
}
