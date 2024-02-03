'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Login() {
    const router = useRouter()
  return (
    <div className="login-wrapper">
      <Image
        //   className={styles.logo}
        src="/assets/login-img.png"
        alt="zelf Logo"
        height={563}
        width={505}
        priority
      />
      <div className="login-form">
        <h2 className="register">Register Your Account</h2>
        <div className="continue-box">
          <div className=" w-full represent-brand">I Represent a Brand</div>
          <button onClick={()=>{
            router.push('/dashboard')
          }} className="btn-primary w-full continue-btn">Continue</button>
        </div>
        <div>
          <span className="already-member">Already a member?</span>
          <Link className="ml-2 text-primary" href="/api/auth/login">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
