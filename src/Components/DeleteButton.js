"use client";
import { useFormStatus } from "react-dom";

function DeleteButton({ action, children }) {
  const { pending } = useFormStatus();
  return (
    <form action={action}>
      <button className="border-gray-800 p-2 border-2 cursor-pointer rounded-md font-semibold text-gray-800 bg-transparent hover:bg-slate-100">
        {pending ? "Is removing..." : children}
      </button>
    </form>
  );
}

export default DeleteButton;
