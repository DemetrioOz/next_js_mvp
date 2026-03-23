import { getBaseUrl } from '@/app/lib/url';

export async function getDashboardData() {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/dashboard`, {
    cache: 'no-store',
  });
  const data = await res.json();
  console.log(data);
  return data;
}
