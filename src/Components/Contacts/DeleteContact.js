"use client";
import { useFormStatus } from "react-dom";

function DeleteContact({ action }) {
  const { pending } = useFormStatus();
  return (
    <form action={action}>
      <button className="border-gray-800 p-2 border-2 cursor-pointer rounded-md font-semibold text-gray-800 bg-transparent hover:bg-slate-100">
        {pending ? "Is removing..." : "Remove contact"}
      </button>
    </form>
  );
}

export default DeleteContact;
