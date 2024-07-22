import { Table as MantineTable, TableData } from "@mantine/core";

export default function Table({
  caption,
  head,
  body,
}: {
  caption: string;
  head: string[];
  body: any[];
}) {
  const tableData: TableData = {
    caption: caption,
    head: head,
    body: body,
  };

  return (
    <MantineTable
      striped
      highlightOnHover
      withRowBorders
      data={tableData}
      withTableBorder
    />
  );
}
