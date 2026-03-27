export const TableView = () => {
  return (
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
  )
}