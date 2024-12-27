"use client";
import { Table } from "antd";
import { OrderItemsColumns } from "./OrderItemsColumns";
import GobackButton from "../GobackButton";
import DeleteButton from "../DeleteButton";
import { deleteOrder } from "@/_lib/actions";
import { formatCurrency } from "@/_helpers/formatCurrency";

function OrderItemsTable({ data, totalPrice, id }) {
  const columns = OrderItemsColumns();
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowKey={(record) => record.key || record.id}
      />

      <p className="font-bold text-lg ">
        Total Price :
        <span className="text-green-800">{formatCurrency(totalPrice)}</span>
      </p>
      <div className="flex gap-4 items-center justify-end">
        <GobackButton />
        <DeleteButton action={() => deleteOrder(id)}>Remove Order</DeleteButton>
      </div>
    </>
  );
}

export default OrderItemsTable;
