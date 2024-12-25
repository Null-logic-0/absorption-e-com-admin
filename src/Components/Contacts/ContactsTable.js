"use client";
import { Table } from "antd";
import { ContactColumns } from "./ContactColumns";

function ContactsTable({ data }) {
  const columns = ContactColumns();
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5 }}
      rowKey={(record) => record.key || record.id}
    />
  );
}

export default ContactsTable;
