import { signup } from "@/_lib/actions";
import SignupForm from "./SignupForm";
import Heading from "./Heading";

function Signup() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center ">
      <Heading>Create New Admin</Heading>
      <SignupForm action={signup} />
    </div>
  );
}

export default Signup;
