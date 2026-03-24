import { Menu } from '@/app/components/menu';
import { getBaseUrl } from '@/app/lib/url';
import { GraphicDash } from './(components)/GraphicDash';
import { Needs } from './(components)/Needs';
import { DataViewer } from './(components)/DataViewer';
import { getDashboardData } from './(services)';
import { Navbar } from '@/app/components/Navbar';

export default async function Dashboard() {
  const data = await getDashboardData();
  console.log(data);

  return (
    <div className="columns is-gapless" style={{ minHeight: '100vh' }}>
      <Menu />
      <main className="column">
        <Navbar title='Visão Geral' />
        <DataViewer />
        <div className="columns">
          <GraphicDash />
          <Needs />
        </div>
      </main>
    </div>
  );
}
