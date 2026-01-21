"use client";
import { useState, FormEvent } from "react";
import Image from "next/image";
import { getBaseUrl } from "@/app/lib/url";
import logo from "@/app/assets/img/stock_logo.png";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onHandleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
    setEmail("");
    setPassword("");

    if (res.ok) {
      push("/dashboard");
    } else {
      const message = await res.text();
      setError(message || "Por favor faça o login para prosseguir.");
    }
  };

  return (
    <section className="hero is-fullheight has-background-light">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4 box">
            <div className="has-text-centered mb-5">
              <figure className="image is-128x128 is-inline-block">
                <Image
                  src={logo}
                  alt="Logo"
                  width={128}
                  height={128}
                  priority
                />
              </figure>
            </div>
            <hr className="login-hr" />
            <p className="subtitle has-text-danger">{error}</p>
            <form onSubmit={onHandleSubmit}>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-large"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    className="input is-large"
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <button className="button is-block is-danger is-large is-fullwidth">
                Entrar
                <i className="fa fa-sign-in" aria-hidden="true"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
