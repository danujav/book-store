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
import Combobox from "@/components/common/Combobox";
import SideNav from "@/components/SideNav";
import { Book, BooksSchema } from "@/utils/schemas/books.schema";
import { useSearchStore } from "@/store/useSearchStore";
import { useCategoryStore } from "@/store/useCategoryStore";
import { usePriceStore } from "@/store/usePriceStore";

export default function Home() {
  const { data, loading, error } = useFetchData(
    "/data/bookList.json",
    2000,
    BooksSchema
  );
  const { searchValue } = useSearchStore();
  const { categories } = useCategoryStore();
  const { startingPrice, endingPrice } = usePriceStore();

  const [value, setValue] = useState<string | null>("");
  const [filteredData, setFilteredData] = useState<Book[]>([]);

  const [activePage, setPage] = useState(1);
  const chunkArray = useChunk(filteredData, 8);
  const items = chunkArray[activePage - 1]?.map((item: Book) => (
    <Card key={item.id} data={item} />
  ));

  useEffect(() => {
    let filteredData = data
      .filter(
        (book: Book) =>
          book.author.toLowerCase().includes(searchValue.toLowerCase()) ||
          book.title.toLowerCase().includes(searchValue.toLowerCase())
      )
      .filter((book) => {
        return book.price >= startingPrice && book.price <= endingPrice;
      })
      .sort((book1: Book, book2: Book) => {
        if (value === "Title") {
          return book1.title.localeCompare(book2.title);
        } else if (value === "Author") {
          return book1.author.localeCompare(book2.author);
        } else {
          return 0;
        }
      });

    if (categories && categories.length > 0) {
      filteredData = filteredData.filter((book) =>
        categories.includes(book.category)
      );
    }

    // filteredData = filteredData.;

    setFilteredData(filteredData);
  }, [data, searchValue, value, categories, startingPrice, endingPrice]);

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
          <Grid.Col className="mt-3" span={9}>
            <Group justify="flex-end" className="mb-5">
              <Text fw={500}>Sort By: </Text>
              <Combobox
                placeholder="Pick a sorting value"
                data={["Title", "Author"]}
                value={value}
                onChange={handleChange}
              />
            </Group>
            <SimpleGrid cols={4} spacing="xs">
              {items}
            </SimpleGrid>
            <Group justify="flex-end">
              <Pagination
                total={Math.ceil(filteredData.length / 8)}
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
