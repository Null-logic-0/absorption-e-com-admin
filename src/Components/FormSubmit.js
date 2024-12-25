"use client";

import { useFormStatus } from "react-dom";
import SpinnerMini from "./SpinnerMini";

function FormSubmit({ children }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-[#000000] p-2  rounded-md w-full text-white font-semibold text-lg hover:bg-[#4557ff] cursor-pointer"
    >
      {pending ? (
        <span className="flex justify-center">
          <SpinnerMini />
        </span>
      ) : (
        children
      )}
    </button>
  );
}

export default FormSubmit;
