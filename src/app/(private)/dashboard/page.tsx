import { ChartLineal } from '@/app/components/chartLineal';
import { Menu } from '@/app/components/menu';
import { getBaseUrl } from '@/app/lib/url';

async function getDashboardData() {
  const baseUrl = getBaseUrl();
  const res = await fetch(`${baseUrl}/api/dashboard`, {
    cache: 'no-store',
  });
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function Dashboard() {
  const data = await getDashboardData();

  return (
    <div className="columns is-gapless" style={{ minHeight: '100vh' }}>
      <Menu />
      <main className="column">
        <h2 className="title is-4">Visão Geral</h2>
        {/* <div className="columns">
          <div className="column">
            <div className="box">
              <p className="heading">Colaboradores</p>
              <p className="title">1.245</p>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <p className="heading">Notebooks</p>
              <p className="title">R$ 32k</p>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <p className="heading">Smartphones</p>
              <p className="title">4,8%</p>
            </div>
          </div>
        </div> */}
        <div className="columns">
          <div className="column">
            <div className="box">
              <ChartLineal obj={data} />
            </div>
          </div>
          <div className="column">
            <div className="box">
              <h3 className="title is-6">Atividade recente</h3>
              <table className="table is-fullwidth is-striped">
                <thead>
                  <tr>
                    <th>PERIFERICO</th>
                    <th>LOCALIDADE</th>
                    <th>QUANTIDADE</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="has-text-weight-medium">Carregador Notebook</td>
                    <td className="has-text-weight-medium has-text-grey">Campo Bom</td>
                    <td className="has-text-weight-extrabold">20</td>
                    <td>
                      <span className="icon has-text-danger">
                        <i className="fa-solid fa-circle-exclamation"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="has-text-weight-medium">Notebook</td>
                    <td className="has-text-weight-medium has-text-grey">Campo Bom</td>
                    <td className="has-text-weight-extrabold">30</td>
                    <td>
                      <span className="icon has-text-warning">
                        <i className="fas fa-exclamation-triangle"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="has-text-weight-medium">Carregador Notebook</td>
                    <td className="has-text-weight-medium has-text-grey">Campo Bom</td>
                    <td className="has-text-weight-extrabold">40</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
