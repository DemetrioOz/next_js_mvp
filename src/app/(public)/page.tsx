import Link from 'next/link';

export default async function Home() {
  return (
    <div>
      <Link href="/sign-in">Ir para Login</Link>
    </div>
  );
}
