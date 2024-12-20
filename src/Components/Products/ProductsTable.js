"use client";
import { formatCurrency } from "@/_helpers/formatCurrency";
import { Table } from "antd";
import Image from "next/image";
import noImg from "../../../public/no-img.jpg";

export default function ProductsTable({ data }) {
  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <Image
          src={text || noImg}
          alt="Product"
          className="object-cover border border-black"
          width={50}
          height={50}
          quality={80}
          loading="lazy"
        />
      ),
    },
    {
      title: "Product Name",
      dataIndex: "title",
      key: "title",
      render: (name) => <span className="font-semibold">{name}</span>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => (
        <span className="text-blue-600 font-semibold">
          {formatCurrency(price)}
        </span>
      ),
    },

    {
      title: "Discount",
      dataIndex: "discount",
      key: "discount",
      render: (discount) => (
        <span
          className={`font-medium ${
            discount > 0 ? "text-green-500" : "text-gray-500"
          }`}
        >
          {discount > 0 ? `${formatCurrency(discount)}` : "No Discount"}
        </span>
      ),
    },

    {
      render: (text) => (
        <div className="flex gap-2">
          <button>delete</button>
          <button>Edit</button>
        </div>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5 }}
      rowKey={(record) => record.key || record.id}
    />
  );
}
