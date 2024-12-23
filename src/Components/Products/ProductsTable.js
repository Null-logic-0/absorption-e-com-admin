"use client";
import { Table } from "antd";
import { getColumns } from "./ProductColumns";

export default function ProductsTable({ filteredData }) {
  const columns = getColumns();

  return (
    <Table
      columns={columns}
      dataSource={filteredData}
      pagination={{ pageSize: 5 }}
      rowKey={(record) => record.key || record.id}
    />
  );
}
