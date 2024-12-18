import { signup } from "@/_lib/actions";
import SignupForm from "./SignupForm";

function Signup() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center ">
      <h1 className="font-bold text-3xl text-center ">Create New Admin</h1>
      <SignupForm action={signup} />
    </div>
  );
}

export default Signup;
