"use client";
import { updateUser } from "@/_lib/actions";
import FormSubmit from "../FormSubmit";
import Input from "../Input";
import AvatarImagePicker from "./AvatarImagePicker";
import { useActionState } from "react";
import FormError from "../FormError";

function Account({ email, fullName, avatar }) {
  const [formState, formAction] = useActionState(updateUser, { errors: {} });
  return (
    <form
      className=" bg-[#fcfcfc] shadow-md p-5 rounded-md"
      action={formAction}
    >
      <AvatarImagePicker name="avatar" avatar={avatar} />
      <div className="flex flex-col items-end  gap-8">
        <Input
          id="fullname"
          type="text"
          name="fullname"
          htmlFor="fullname"
          label="Full Name*"
          defaultValue={fullName}
        />
        <Input
          type="email"
          name="email"
          id="email"
          htmlFor="email"
          disabled={true}
          label="Email adress*"
          defaultValue={email}
        />

        <Input
          type="password"
          name="password"
          id="password"
          htmlFor="password"
          label="Update Password (min 8 characters)*"
        />

        <FormError error={formState.errors?.password} />
        <Input
          type="password"
          name="repeatPassword"
          id="repeatPassword"
          htmlFor="repeatPassword"
          label="Repeat Password*"
        />
        <FormError error={formState.errors?.repeatPassword} />
        <div>
          <FormSubmit>Update Profile</FormSubmit>
        </div>
      </div>
    </form>
  );
}

export default Account;
