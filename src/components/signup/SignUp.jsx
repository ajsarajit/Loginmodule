import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Link from "next/link";

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const router = useRouter();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    Cookies.set("name", name);
    Cookies.set("email", email);
    Cookies.set("password", password);
    router.push("/login");
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
