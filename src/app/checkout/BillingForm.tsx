"use client";
import { Grid, Select, Text, Textarea, TextInput } from "@mantine/core";

export default function BillingForm() {
  return (
    <Grid>
      <Grid.Col span={12}>
        <Text size="lg" fw={450}>
          Billing Details
        </Text>
      </Grid.Col>
      <Grid.Col span={12}>
        <Grid>
          <Grid.Col span={6}>
            <TextInput
              size="md"
              radius="md"
              label="First name"
              withAsterisk
              placeholder="Your first name"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <TextInput
              size="md"
              radius="md"
              label="Second name"
              withAsterisk
              placeholder="Your second name"
            />
          </Grid.Col>
        </Grid>
      </Grid.Col>
      <Grid.Col span={12}>
        <TextInput
          size="md"
          radius="md"
          label="Email address"
          withAsterisk
          placeholder="Your email address"
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <TextInput
          size="md"
          radius="md"
          label="Telephone"
          withAsterisk
          placeholder="Your telephone"
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Select
          size="md"
          radius="md"
          label="Country"
          placeholder="Your country"
          data={["Sri Lanka", "Australia", "United Emirates", "India"]}
          defaultValue="Sri Lanka"
          clearable
          withAsterisk
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Select
          size="md"
          radius="md"
          label="City"
          placeholder="Your city"
          data={["Elpitiya", "Galle", "Panadura", "Beruwala"]}
          clearable
          withAsterisk
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <TextInput
          size="md"
          radius="md"
          label="Street address"
          withAsterisk
          placeholder="Your street address"
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <TextInput
          size="md"
          radius="md"
          label="Postal/Zip code"
          withAsterisk
          placeholder="Your postal/zip code"
        />
      </Grid.Col>
      <Grid.Col span={12}>
        <Textarea
          size="md"
          radius="md"
          label="Other notes(optional)"
          placeholder="Your message"
        />
      </Grid.Col>
    </Grid>
  );
}
