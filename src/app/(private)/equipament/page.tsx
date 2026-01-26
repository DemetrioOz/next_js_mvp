import { getBaseUrl } from '@/app/lib/url';

async function getDashboardData() {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/equipament`, {
    cache: 'no-store',
  });
  const data = await res.json();
  return data;
}

export default async function Equipament() {
  const data = await getDashboardData();
  return (
    <div>
      <h1>Equipament</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
