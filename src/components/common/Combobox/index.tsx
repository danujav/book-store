import { Select } from "@mantine/core";
import { useState } from "react";

export default function Combobox({ placeholder, data, value, onChange }) {
  return (
    <Select
      placeholder={placeholder}
      data={data}
      value={value}
      onChange={onChange}
      clearable
    />
  );
}
