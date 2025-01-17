"use client";
import Link from "next/link";
import { formatDate } from "@/_helpers/formatDate";
import { IoEyeOutline } from "react-icons/io5";

export const OrderColumns = () => [
  {
    title: "Create at",
    dataIndex: "created_at",
    key: "created_at",
    render: (created) => (
      <span className="text-blue-600 font-semibold">{formatDate(created)}</span>
    ),
  },
  {
    title: "Customer",
    dataIndex: "customer_id",
    key: "customer_id",
    render: (customer) => (
      <div>
        <p className="text-gray-800 font-semibold">{customer?.fullName}</p>
        <p className="text-slate-400">{customer?.email}</p>
      </div>
    ),
  },

  {
    render: (record) => (
      <Link
        href={`/orders/${record.id}`}
        className="flex justify-center items-center gap-1 p-2 font-semibold rounded-xl border border-gray-800"
      >
        <IoEyeOutline />
        See details
      </Link>
    ),
  },
];
