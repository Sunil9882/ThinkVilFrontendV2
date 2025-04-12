// app/auth/callback/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const jwtToken = new URLSearchParams(window.location.search).get("token");

    if (jwtToken) {
        localStorage.setItem("jwtToken", jwtToken);
        router.replace("/");
      } else {
        router.replace("/login");
      }
  }, []);

  return <div className="text-center mt-10 text-xl">Logging you in...</div>;
}
