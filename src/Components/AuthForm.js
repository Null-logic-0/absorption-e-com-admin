"use client";
import FormSubmit from "./FormSubmit";
import Input from "./Input";
import { useActionState } from "react";
import FormError from "./FormError";

function AuthForm({ action }) {
  const [formState, formAction] = useActionState(action, { errors: {} });
  return (
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
  );
}

export default AuthForm;
