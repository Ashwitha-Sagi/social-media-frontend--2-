// app/page.js

'use client';

import { useRouter } from "next/navigation"; // for client-side navigation
import { useState } from "react";

const MainContent = () => {
  const router = useRouter();

  return (
    <div>
      <h1>Welcome to My App</h1>
      <button onClick={() => router.push("/login")}>Login</button>
      <button onClick={() => router.push("/register")}>Register</button>
    </div>
  );
};

export default MainContent;
