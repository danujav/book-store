"use client";

import { BillingFormSchema } from "@/utils/schemas/billingform.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid, Select, Text, Textarea, TextInput } from "@mantine/core";
import { FieldValues, useForm } from "react-hook-form";

export default function BillingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = useForm({
    resolver: zodResolver(BillingFormSchema),
  });

  const handleCountryChange = (value: any) => {
    setValue("country", value);
  };
  const handleCityChange = (value: any) => {
    setValue("city", value);
  };

  const onSubmit = async (data: FieldValues) => {
    // TODO: submit to server
    //...

    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register("firstname")}
              />
              {errors.firstname && (
                <p className="text-red-500">{`${errors.firstname.message}`}</p>
              )}
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                size="md"
                radius="md"
                label="Second name"
                withAsterisk
                placeholder="Your second name"
                {...register("secondname")}
              />
              {errors.secondname && (
                <p className="text-red-500">{`${errors.secondname.message}`}</p>
              )}
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
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{`${errors.email.message}`}</p>
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            size="md"
            radius="md"
            label="Telephone"
            withAsterisk
            placeholder="Your telephone"
            {...register("telephone")}
          />
          {errors.telephone && (
            <p className="text-red-500">{`${errors.telephone.message}`}</p>
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          <Select
            size="md"
            radius="md"
            label="Country"
            placeholder="Your country"
            data={["Sri Lanka", "Australia", "United Emirates", "India"]}
            clearable
            withAsterisk
            onChange={handleCountryChange}
          />
          {errors.country && (
            <p className="text-red-500">{`${errors.country.message}`}</p>
          )}
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
            onChange={handleCityChange}
          />
          {errors.city && (
            <p className="text-red-500">{`${errors.city.message}`}</p>
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            size="md"
            radius="md"
            label="Street address"
            withAsterisk
            placeholder="Your street address"
            {...register("streetaddress")}
          />
          {errors.streetaddress && (
            <p className="text-red-500">{`${errors.streetaddress.message}`}</p>
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          <TextInput
            size="md"
            radius="md"
            label="Postal/Zip code"
            withAsterisk
            placeholder="Your postal/zip code"
            {...register("postalcode")}
          />
          {errors.postalcode && (
            <p className="text-red-500">{`${errors.postalcode.message}`}</p>
          )}
        </Grid.Col>
        <Grid.Col span={12}>
          <Textarea
            size="md"
            radius="md"
            label="Other notes(optional)"
            placeholder="Your message"
            {...register("othernotes")}
          />
          {errors.othernotes && (
            <p className="text-red-500">{`${errors.othernotes.message}`}</p>
          )}
        </Grid.Col>

        <Grid.Col span={12}>
          <Button
            fullWidth
            variant="filled"
            size="md"
            radius="xs"
            onClick={close}
            loading={isSubmitting}
            type="submit"
          >
            PROCEED TO PAYMENT
          </Button>
        </Grid.Col>
      </Grid>
    </form>
  );
}
