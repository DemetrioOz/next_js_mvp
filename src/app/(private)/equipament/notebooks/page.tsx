import { Menu } from '@/app/components/menu';
import { Navbar } from '@/app/components/Navbar';

export default function Notebook() {
  return (
    <div className="columns is-gapless" style={{ minHeight: '100vh' }}>
      <Menu />
      <div className="column">
        <Navbar />
        <div className="column box">
          <div className="columns mx-1">
            <div className="column m-0 p-1">
              <input className="input" type="text" placeholder="AssertTag" autoFocus />
            </div>
            <div className="column m-0 p-1">
              <input className="input" type="text" placeholder="Serial Number" />
            </div>
          </div>
          <div className="columns mx-1">
            <div className="column m-0 p-1">
              <input className="input" type="text" placeholder="Brand" />
            </div>
            <div className="column m-0 p-1">
              <input className="input" type="text" placeholder="model" />
            </div>
            <div className="column m-0 p-1">
              <input className="input" type="text" placeholder="rentalOwner" />
            </div>
          </div>
          <div className="columns mx-1">
            <div className="column  m-0 p-1">
              <div className="select">
                <select>
                  <option>Status</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
            <div className="column  m-0 p-1">
              <div className="select">
                <select>
                  <option>Location</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
            <div className="column  m-0 p-1">
              <div className="select">
                <select>
                  <option>Type</option>
                  <option>With options</option>
                </select>
              </div>
            </div>
          </div>
          <div className="columns mx-1">
            <div className="column m-0 p-1">
              <input className="input" type="text" placeholder="cost" />
            </div>
            <div className="column m-0 p-1">
              <input className="input" type="date" placeholder="purchaseDate" />
            </div>
            <div className="column m-0 p-1">
              {/* <div className="field">
                  <div className="control"> */}
              <input className="input" type="date" placeholder="warrantyEnd" />
              {/* </div> */}
              {/* </div> */}

              {/* <input className="input" type="text" placeholder="warrantyEnd" /> */}
            </div>
          </div>
          <div className="columns mx-1">
            <table className="table is-fullwidth">
              <thead>
                <tr>
                  <th></th>
                  <th>
                    <strong>Service Tag</strong>
                  </th>
                  <th>
                    <strong>Patriomonio</strong>
                  </th>
                  <th>
                    <strong>Marca</strong>
                  </th>
                  <th>
                    <strong>Modelo</strong>
                  </th>
                  <th>
                    <strong>Locadora</strong>
                  </th>
                  <th>
                    <strong>Status</strong>
                  </th>
                  <th>
                    <strong>Localidade</strong>
                  </th>
                  <th>
                    <strong>Tipo</strong>
                  </th>
                  <th>
                    <strong>Custo</strong>
                  </th>
                  <th>
                    <strong>Aquisição</strong>
                  </th>
                  <th>
                    <strong>Vencimento</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>SRV-001</td>
                  <td>12345</td>
                  <td>Dell</td>
                  <td>PowerEdge R740</td>
                  <td>Interno</td>
                  <td>
                    <span className="tag is-success">Ativo</span>
                  </td>
                  <td>Datacenter SP</td>
                  <td>Servidor</td>
                  <td>R$ 25.000</td>
                  <td>10/01/2024</td>
                  <td>10/01/2027</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
