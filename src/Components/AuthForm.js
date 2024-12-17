"use client";

import { login } from "@/_lib/actions";
import FormSubmit from "./FormSubmit";
import Input from "./Input";
import { useActionState } from "react";
import FormError from "./FormError";

function AuthForm() {
  const [formState, formAction] = useActionState(login, { errors: {} });
  return (
    <div className="min-h-screen grid grid-cols-[48rem] content-center justify-center ">
      <h1 className="font-extrabold text-white text-2xl bg-[#000000] p-2 text-center">
        The Absorption Company.
      </h1>
      <form
        className="bg-[#fafafa] flex flex-col gap-8 p-5 rounded-b"
        action={formAction}
      >
        <div>
          <Input
            type="email"
            name="email"
            id="email"
            htmlFor="email"
            label="Email adress"
          />
          <div className="h-3">
            <FormError error={formState.errors.email} />
          </div>
        </div>

        <div>
          <Input
            type="password"
            name="password"
            id="password"
            htmlFor="password"
            label="Password"
          />
          <div className="h-3">
            <FormError error={formState.errors.password} />
          </div>
        </div>

        <FormSubmit>Login</FormSubmit>
      </form>
    </div>
  );
}

export default AuthForm;
