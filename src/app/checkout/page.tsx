"use client";
import { Grid } from "@mantine/core";
import BillingForm from "./BillingForm";
import OrderSummary from "./OrderSummary";

export default function Checkout() {
  return (
    <Grid className="m-10">
      <Grid.Col span={6}>
        <BillingForm />
      </Grid.Col>
      <Grid.Col span={4}>
        <OrderSummary />
      </Grid.Col>
    </Grid>
  );
}
