"use client";
import Link from "next/link";
import { formatDate } from "@/_helpers/formatDate";
import { IoEyeOutline } from "react-icons/io5";
import { CiCreditCard1 } from "react-icons/ci";
import { TbBrandCashapp } from "react-icons/tb";
import { MdOutlineTimer } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";

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
    dataIndex: "customers",
    key: "customers",
    render: (customer) => (
      <div>
        <p className="text-gray-800 font-semibold">{customer.fullName}</p>
        <p className="text-slate-400">{customer.email}</p>
      </div>
    ),
  },
  {
    title: "Order status",
    dataIndex: "order_status",
    key: "order_status",
    render: (status) => (
      <span
        className={`flex items-center justify-center gap-1 p-2 font-semibold rounded-xl ${
          status === "completed"
            ? "bg-green-100 text-green-700"
            : "bg-blue-100 text-blue-700"
        }`}
      >
        {status === "completed" ? <IoMdDoneAll /> : <MdOutlineTimer />}
        {status}
      </span>
    ),
  },
  {
    title: "Payment method",
    dataIndex: "payment_method",
    key: "payment_method",
    render: (payment_method) => (
      <span
        className={`flex justify-center items-center gap-1 p-2 font-semibold rounded-xl ${
          payment_method === "credit-card"
            ? "bg-blue-100 text-blue-700"
            : "bg-green-100 text-green-700"
        }`}
      >
        {payment_method === "credit-card" ? (
          <CiCreditCard1 />
        ) : (
          <TbBrandCashapp />
        )}
        {payment_method}
      </span>
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
