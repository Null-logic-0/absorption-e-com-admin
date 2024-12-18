import { login } from "@/_lib/actions";
import AuthForm from "./AuthForm";

function Login() {
  return (
    <div className="min-h-screen grid grid-cols-[48rem] content-center justify-center ">
      <h1 className="font-extrabold text-white text-2xl bg-[#000000] p-2 text-center">
        The Absorption Company.
      </h1>
      <AuthForm action={login} />
    </div>
  );
}

export default Login;
