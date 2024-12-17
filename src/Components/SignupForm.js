"use client";
import { signup } from "@/_lib/actions";
import FormSubmit from "./FormSubmit";
import Input from "./Input";
import { useActionState } from "react";
import FormError from "./Formerror";

function SignupForm() {
  const [formState, formAction] = useActionState(signup, { errors: {} });
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <h1 className="font-bold text-3xl text-center ">Create New Admin</h1>
      <form className="flex flex-col gap-8 p-5 " action={formAction}>
        <div>
          <Input
            id="fullname"
            type="text"
            name="fullname"
            htmlFor="fullname"
            label="Full Name*"
          />
          <div className="h-3">
            <FormError error={formState.errors.fullname} />
          </div>
        </div>
        <div>
          <Input
            type="email"
            name="email"
            id="email"
            htmlFor="email"
            label="Email adress*"
          />
          <div className="h-3">
            <FormError error={formState.errors.email} />
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center w-full h-auto">
          <div>
            <Input
              type="password"
              name="password"
              id="password"
              htmlFor="password"
              label="Password (min 8 characters)*"
            />
            <div className="h-3">
              <FormError error={formState.errors.password} />
            </div>
          </div>
          <div>
            <Input
              type="password"
              name="repeatPassword"
              id="repeatPassword"
              htmlFor="repeatPassword"
              label="Repeat Password*"
            />
            <div className="h-3">
              <FormError error={formState.errors.repeatPassword} />
            </div>
          </div>
        </div>

        <FormSubmit>Create Account</FormSubmit>
      </form>
    </div>
  );
}

export default SignupForm;
