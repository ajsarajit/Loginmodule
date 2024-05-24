import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect } from "react";

const url = "http://localhost:8000/users"

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    // console.log()
    if(JSON.parse(localStorage.getItem("cuser")) !== null){
      router.replace("/home")
    }
  })

  const submitForm = (e) => {
    e.preventDefault();
    fetch(url, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify({
         'name': name,
         'email': email,
         'password': password
      })
  }).then(response => response.json())
  .then(newPerson => console.log(newPerson))
    router.replace("/login");
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
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
      <br />
      <Link href="login">Already have an account</Link>
    </div>
  );
}

export default SignUp;
