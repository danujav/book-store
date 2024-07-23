import { Select } from "@mantine/core";

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
