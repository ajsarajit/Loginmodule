import React, { useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { DataContext } from "../login/Login";
import { useRouter } from "next/router";
const Home = () => {
  const router = useRouter();
  const value = useContext(DataContext);
  console.log(value);
  useEffect(() => {
    const cokies = Cookies.get();
    if (!cokies) {
      router.push("/login");
    }
  });

  const logoutHandle = () => {
    Cookies.remove();
    router.push("/login");
  };

  return (
    <div>
      <h1>Well come to home page</h1>
      <button onClick={logoutHandle}>Logout</button>
    </div>
  );
};

export default Home;
