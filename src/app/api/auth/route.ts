import jwt, { SignOptions } from "jsonwebtoken";
import { cookies } from "next/headers";

type AuthPost = {
  email: string;
  password: string;
};

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES || "1h";

export async function POST(request: Request) {
  const data = await request.json();

  const { email, password }: AuthPost = data;

  if (email === "teste@email.com" && password === "1234") {
    const user = {
      id: 1,
      email: "teste@email.com",
      name: "teste",
      password: "1234",
    };

    if (!JWT_SECRET) {
      return new Response("JWT secret not configured", {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES,
    } as SignOptions);

    const cookieStore = await cookies();
    cookieStore.set("token", token);

    return new Response(JSON.stringify("Sucess"), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response("Email or Password incorrect", {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
}
