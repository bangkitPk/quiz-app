import { useLocation } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function AuthPage() {
  const location = useLocation();
  const { pathname } = location;

  const isRegister = pathname === "/register";

  return (
    <div className="font-rubik w-screen h-screen bg-navy text-light-grey flex">
      <div className="w-1/2 h-full flex items-center justify-center text-5xl">
        <h1>
          Welcome to the <b>Quiz!</b>
        </h1>
      </div>
      <AuthForm isRegister={isRegister} />
    </div>
  );
}
