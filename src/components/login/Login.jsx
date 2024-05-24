import React, { useState, createContext, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export const DataContext = createContext();

const url = "http://localhost:8000/users"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([])
  const router = useRouter();

  useEffect(() => {
    fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching users data');
                    }
                    return res.json();
                })
                .then(data => {
                  setUsers(data);
                })
                .catch(err => {
                    console.log(err)
                });
  }, []);
  useEffect(() => {
    // console.log()
    if(JSON.parse(localStorage.getItem("cuser")) !== null){
      router.replace("/home")
    }
  })
  const submitForm = async (e) => {
    e.preventDefault();
    const isUserExist = users.filter((user) => user.email === email)
    if(isUserExist.length !== 0){
      if(isUserExist[0].password === password){
        router.replace("/home");
        localStorage.setItem("cuser", JSON.stringify(isUserExist[0]))
      }
      else{
        console.log("User doesn't exist.")
  
      }
    } else{
      console.log("User doesn't exist.")

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
