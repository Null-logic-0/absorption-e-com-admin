"use client";
import { useFormStatus } from "react-dom";
import SpinnerMini from "../SpinnerMini";
import { deleteProduct } from "@/_lib/actions";

function DeleteModalButton({ id }) {
  const { pending } = useFormStatus;
  return (
    <form action={() => deleteProduct(id)} className=" gap-8 flex flex-col">
      <h3 className="text-2xl font-semibold text-red-500 text-center">
        Are you sure you want to delete this?
      </h3>
      <div className="text-end">
        <button className="border text-white bg-black hover:bg-transparent hover:border-black p-2 hover:text-gray-800 text-lg font-semibold rounded">
          {pending ? <SpinnerMini /> : "Delete"}
        </button>
      </div>
    </form>
  );
}

export default DeleteModalButton;
