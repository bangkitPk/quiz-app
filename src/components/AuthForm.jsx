import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { getUsers } from "../services/UsersService";

export default function AuthForm({ isRegister }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { isAuth, setIsAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isRegister) {
      // proses register
      let user = {
        username: userName,
        password: password,
      };

      const users = await getUsers();
      console.log(users);
    } else {
      // proses login
      const users = await getUsers();
      const user = users.find((user) => user.username === userName);
      if (user) {
        if (user.password === password) {
          setIsAuth(true);
          localStorage.setItem("isLogin", true);
          if (errorMessage !== "") {
            setErrorMessage("");
          }
          navigate("/");
        } else {
          setErrorMessage("Incorrect password!");
        }
      } else {
        setErrorMessage("User not found!");
      }
    }
  };

  return (
    <div className="w-1/2 h-full bg-light-grey text-dark-navy flex flex-col justify-center items-center gap-10">
      <h1 className="text-xl text-center font-bold">
        {isRegister ? "Register" : "Log In"}
      </h1>
      <form onSubmit={handleSubmit} className="w-[60%]">
        <label htmlFor="username">
          Username
          <input
            type="text"
            name="username"
            value={userName}
            className="w-full pl-2 mt-2 mb-5 h-8 border border-light-bluish border-opacity-50 rounded-sm"
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={password}
            className="w-full pl-2 mt-2 mb-10 h-8 border border-light-bluish border-opacity-50 rounded-sm"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="w-full text-light-grey bg-light-bluish border border-light-bluish p-2 rounded-md duration-200 hover:text-light-bluish hover:bg-light-grey"
        >
          {isRegister ? "Register" : "Log In"}
        </button>
      </form>
      {errorMessage ? <p>{errorMessage}</p> : <p></p>}
      {isRegister ? (
        <p>
          Sudah memiliki akun?{" "}
          <Link to="/login">
            <span className="text-blue-600 underline">Log In</span>
          </Link>
        </p>
      ) : (
        <p>
          Belum memiliki akun?{" "}
          <Link to="/register">
            <span className="text-blue-600 underline">Register</span>
          </Link>
        </p>
      )}
    </div>
  );
}
