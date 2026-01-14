"use client";
import { useState } from "react";
import { getBaseUrl } from "@/app/lib/url";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onHandleClick = async () => {
    const baseUrl = getBaseUrl();
    const res = await fetch(`${baseUrl}/api/auth`, {
      method: "POST",
      body: JSON.stringify({ email: email, password: password }),
    });
    setEmail("");
    setPassword("");
    console.log(res);
  };

  return (
    <div>
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Submit" onClick={() => onHandleClick()} />
      </form>
      <h1>{email}</h1>
      <h1>{password}</h1>
    </div>
  );
}
