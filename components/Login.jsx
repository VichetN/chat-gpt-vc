"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import ChatGPTLogo from "@/assets/images/chatgpt-logo.png";

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image width={300} height={300} src={ChatGPTLogo} alt="logo" />
      <button
        className="text-white font-bold text-3xl animate-pulse"
        onClick={() => signIn("google")}
      >
        Sign in to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
