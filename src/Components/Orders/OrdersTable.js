"use client";
import { Table } from "antd";
import { OrderColumns } from "./OrderColumns";

function OrdersTable({ data }) {
  const columns = OrderColumns();
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5 }}
      rowKey={(record) => record.key || record.id}
    />
  );
}

export default OrdersTable;
