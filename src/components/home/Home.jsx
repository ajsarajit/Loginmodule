import React, { useEffect, useContext, useState } from "react";
import Cookies from "js-cookie";
import { DataContext } from "../login/Login";
import { useRouter } from "next/router";
const Home = () => {
  const router = useRouter();
  const [user, setuser] = useState()

  useEffect(() => {
    setuser(JSON.parse(localStorage.getItem("cuser")))
  }, [])
  useEffect(() => {
    // if(window.location.pathname)
    if(localStorage.getItem("cuser") === null){
      router.replace("/")
    }
  },[]);

  const logoutHandle = (e) => {
    e.preventDefault()
    localStorage.removeItem("cuser")
    router.replace("/");
  };

  return (
    <div>
      <h1>Wellcome {user && user.name}</h1>
      <button onClick={logoutHandle}>Logout</button>
    </div>
  );
};

export default Home;
