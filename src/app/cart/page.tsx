"use client";

import { Button, Grid, Text, Group, TextInput } from "@mantine/core";
import { Metadata } from "next";
import TableCart from "./TableCart";

export default function Cart() {
  return (
    <Grid className="m-10">
      <Grid.Col span={8}>
        <TableCart />
      </Grid.Col>
      <Grid.Col span={4}>
        <ProceedToCheck />
      </Grid.Col>
    </Grid>
  );
}

function ProceedToCheck() {
  return (
    <div className="bg-blue-200 ">
      <Grid className="p-8">
        <Grid.Col span={12}>
          <Text size="lg" fw={450}>
            Apply Coupons
          </Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Text size="xs" fw={350}>
            If You Have A Promotion Code, Please Enter It Here.
          </Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            size="lg"
            radius="md"
            placeholder="Enter your coupon code here..."
          />
        </Grid.Col>
        <Grid.Col className="mt-8" span={12}>
          <Text size="lg" fw={800}>
            Price Details
          </Text>
        </Grid.Col>
        <Grid.Col span={12}>
          <Grid>
            <Grid.Col span={6}>
              <Text size="md" fw={500}>
                Total
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group justify="flex-end">
                <Text size="md" fw={500}>
                  $ 456.15
                </Text>
              </Group>
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={12}>
          <Button
            fullWidth
            variant="filled"
            size="md"
            radius="xs"
            onClick={close}
          >
            PROCEED TO CHECKOUT
          </Button>
        </Grid.Col>
      </Grid>
    </div>
  );
}
