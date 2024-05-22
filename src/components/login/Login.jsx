import React, { useState, createContext } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export const DataContext = createContext();

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();
  const submitForm = (e) => {
    e.preventDefault();
    const dbEmail = Cookies.get("email");
    const dbPass = Cookies.get("password");

    if (email === dbEmail && password === dbPass) {
      router.push("/home");
    } else {
      alert("No account on this id password");
      setEmail("");
      setPassword("");
    }
  };
  return (
    <DataContext.Provider value={{ email, password }}>
      <form onSubmit={submitForm}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </DataContext.Provider>
  );
};

export default Login;
