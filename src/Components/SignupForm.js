"use client";
import React from "react";
import FormSubmit from "./FormSubmit";
import Input from "./Input";
import { useActionState } from "react";
import FormError from "./FormError";

function SignupForm({ action }) {
  const [formState, formAction] = useActionState(action, { errors: {} });

  return (
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
  );
}

export default SignupForm;
