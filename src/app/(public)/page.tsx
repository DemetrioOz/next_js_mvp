"use client";
import { useState } from "react";
import { getBaseUrl } from "@/app/lib/url";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) return;

    const baseUrl = getBaseUrl();

    const res = await fetch(`${baseUrl}/api/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    console.log(res);

    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <form onSubmit={onHandleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
