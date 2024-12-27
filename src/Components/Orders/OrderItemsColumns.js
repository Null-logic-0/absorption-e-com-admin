"use client";
import { formatCurrency } from "@/_helpers/formatCurrency";
import Image from "next/image";
import noImg from "../../../public/no-img.jpg";

export const OrderItemsColumns = () => [
  {
    title: "Image",
    dataIndex: "product_id",
    key: "image",
    render: (product, record) => (
      <Image
        src={product?.image || noImg}
        alt={`Image of ${record.title || "Unknown Product"}`}
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
    dataIndex: "product_id",
    key: "title",

    render: (product) => <span className="font-semibold">{product.title}</span>,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    render: (quantity) => (
      <span className="text-gray-800 font-semibold">{quantity}</span>
    ),
  },
  {
    title: "Price",
    dataIndex: "product_id",
    key: "price",
    render: (product, record) => {
      const totalPrice = product.price * record.quantity;
      return (
        <span className="text-green-800 font-semibold">
          {formatCurrency(totalPrice)}
        </span>
      );
    },
  },
];
