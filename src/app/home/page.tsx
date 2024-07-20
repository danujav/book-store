"use client";

import { Grid, Group, SimpleGrid, Skeleton } from "@mantine/core";
import Card from "@/components/common/Card";
import { useFetchData } from "@/utils/useFetchData";
import Pagination from "@/components/common/Pagination";
import { useState } from "react";
import { useChunk } from "@/utils/useChunk";

export default function Home() {
  const { data, loading, error } = useFetchData("/data/bookList.json", 2000);

  const [activePage, setPage] = useState(1);
  const chunkArray = useChunk(data, 8);
  const items = chunkArray[activePage - 1]?.map((item: any) => <Card />);

  return (
    <div className="m-11">
      <Skeleton visible={loading} height={450}>
        <Grid>
          <Grid.Col span={3} className="bg-blue-400">
            1
          </Grid.Col>
          <Grid.Col span={9} className="bg-red-300">
            <SimpleGrid cols={4} spacing="xs">
              {items}
            </SimpleGrid>
            <Group justify="flex-end">
              <Pagination
                books={data}
                activePage={activePage}
                setPage={setPage}
              />
            </Group>
          </Grid.Col>
        </Grid>
      </Skeleton>
    </div>
  );
}
