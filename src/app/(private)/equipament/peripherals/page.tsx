import { getBaseUrl } from "@/app/lib/url";

async function getDashboardData() {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/equipament/peripherals`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function Peripherals() {
  const data = await getDashboardData();
  return (
    <div>
      <h1>Peripherals</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
