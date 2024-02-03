/* eslint-disable react/jsx-no-undef */
"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const { user, error, isLoading } = useUser();
  console.log({ user, error, isLoading });
  return (
    <div className="navbar-wrapper">
      <div className="navbar">
        <Link href="/">
          <Image
            //   className={styles.logo}
            src="/logo.svg"
            alt="zelf Logo"
            height={18}
            width={38}
          />
        </Link>
        {user?.picture ? (
          <img
            className="avatar"
            src={user?.picture}
            alt="zelf Logo"
            height={32}
            width={32}
          />
        ) : (
          <div className="flex items-center">
            <Link className="mr-4 text-primary" href="/api/auth/login">
              Sign In
            </Link>
            <Link className="btn-primary" href="/api/auth/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
