type AuthPost = {
  email: string;
  password: string;
};

export async function POST(request: Request) {
  const data = await request.json();

  const { email, password }: AuthPost = data;

  if (email === "email@teste.com" && password === "1234") {
    return new Response("email@teste.com", {
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
