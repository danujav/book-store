"use client";

import { Grid, Group, Pagination, SimpleGrid, Skeleton } from "@mantine/core";
import Card from "@/components/common/Card";
import { useFetchData } from "@/utils/useFetchData";
import { useState } from "react";
import { useChunk } from "@/utils/useChunk";
import Book from "@/utils/types/Book";

export default function Home() {
  const { data, loading, error } = useFetchData("/data/bookList.json", 2000);

  const [activePage, setPage] = useState(1);
  const chunkArray = useChunk(data, 8);
  const items = chunkArray[activePage - 1]?.map((item: Book) => (
    <Card data={item} />
  ));

  return (
    <div className="m-11">
      <Skeleton visible={loading} height={450}>
        <Grid>
          <Grid.Col span={3} className="bg-blue-400">
            1
          </Grid.Col>
          <Grid.Col span={9}>
            <SimpleGrid cols={4} spacing="xs">
              {items}
            </SimpleGrid>
            <Group justify="flex-end">
              <Pagination
                total={data.length/2}
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
