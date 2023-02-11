"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import ChatGPTLogo from "@/assets/images/chatgpt-logo.png";
import GoogleIcon from "@/assets/images/google-icon.png";

function Login() {
  return (
    <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
      <Image width={300} height={300} src={ChatGPTLogo} alt="logo" />
      <button
        className="text-black font-bold text-3xl flex justify-center items-center bg-white p-4 gap-3 rounded-lg shadow-lg hover:shadow-none"
        onClick={() => signIn("google")}
      >
        <Image src={GoogleIcon} width={40} height={40} alt="Google logo" />
        Sign in to use ChatGPT
      </button>
    </div>
  );
}

export default Login;
