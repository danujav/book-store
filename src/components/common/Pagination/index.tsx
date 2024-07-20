import { Pagination as MantinePagination, Text } from "@mantine/core";
import { useState } from "react";
import { randomId } from "@mantine/hooks";
import { useChunk } from "@/utils/useChunk";

export default function Pagination({ books, activePage, setPage }) {
  return (
    <>
      <MantinePagination total={books.length} siblings={2} value={activePage} onChange={setPage} mt="sm" />
    </>
  );
}
