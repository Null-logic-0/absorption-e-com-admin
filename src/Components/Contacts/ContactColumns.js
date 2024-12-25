"use client";
import Image from "next/image";
import noImg from "../../../public/default-user.jpg";
import Link from "next/link";

export const ContactColumns = () => [
  {
    title: "User's profile",
    dataIndex: "image",
    key: "image",
    render: (image, record) => (
      <Image
        src={image || noImg}
        alt={`Image of ${record.title || "Unknown Product"}`}
        className="object-cover w-[50px] h-[50px] rounded-full shadow-md"
        width={50}
        height={50}
        quality={80}
        loading="lazy"
      />
    ),
  },
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
