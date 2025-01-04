"use client";

import Link from "next/link";

export const ContactColumns = () => [
  {
    title: "Full Name",
    dataIndex: "fullName",
    key: "fullName",
    render: (fullName) => <span className="font-semibold">{fullName}</span>,
  },
  {
    title: "E-mail adress",
    dataIndex: "email",
    key: "email",
    render: (email) => (
      <span className="text-blue-600 font-semibold">{email}</span>
    ),
  },
  {
    render: (record) => (
      <Link
        href={`/contacts/${record.id}`}
        className="font-semibold text-gray-800 border border-gray-800 p-2 rounded-md shadow-md"
      >
        See details
      </Link>
    ),
  },
];
