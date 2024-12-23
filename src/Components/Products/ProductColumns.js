"use client";
import { formatCurrency } from "@/_helpers/formatCurrency";
import Image from "next/image";
import noImg from "../../../public/no-img.jpg";
import { MdModeEdit } from "react-icons/md";

import Modal from "../Modal";
import ProductsForm from "./ProductsForm";
import DeleteButton from "./DeleteButton";
import { FaTrashCan } from "react-icons/fa6";

export const getColumns = () => [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
    render: (image, record) => (
      <Image
        src={image || noImg}
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
    render: (text, record) => (
      <div>
        <Modal>
          <Modal.Open>
            <button className="bg-transparent p-2 text-blue-500">
              <MdModeEdit className="h-4 w-4" />
            </button>
          </Modal.Open>
          <Modal.Window>
            <ProductsForm product={record} />
          </Modal.Window>
        </Modal>
        <Modal>
          <Modal.Open>
            <button className="bg-transparent p-2 text-red-500">
              <FaTrashCan className="h-4 w-4" />
            </button>
          </Modal.Open>
          <Modal.Window>
            <DeleteButton id={record.id} />
          </Modal.Window>
        </Modal>
      </div>
    ),
  },
];
