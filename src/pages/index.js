import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router"; 

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    // console.log(JSON.parse(localStorage.getItem("cuser")))
    if(JSON.parse(localStorage.getItem("cuser")) !== null){
      router.replace("/home")
    } else if(localStorage.getItem("cuser") === null){
      router.replace("/")
    }
  })
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Link href={"/signup"}>Sign up</Link>
      <br />
      <Link href={"/login"}>Login</Link>
    </main>
  );
}
