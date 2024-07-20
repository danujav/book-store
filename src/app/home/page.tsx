"use client";

import { Grid, SimpleGrid, Skeleton } from "@mantine/core";
import Card from "@/components/common/Card";
import { useFetchData } from "@/utils/useFetchData";

export default function Home() {
  const { data, loading, error } = useFetchData("/data/bookList.json", 2000);

  return (
    <div className="m-11">
      <Skeleton visible={loading}>
        <Grid>
          <Grid.Col span={3} className="bg-blue-400">
            1
          </Grid.Col>
          <Grid.Col span={9} className="bg-red-300">
            <SimpleGrid cols={5} spacing="xs">
              {data.map((book, index) => (
                <Card />
              ))}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Skeleton>
    </div>
  );
}
