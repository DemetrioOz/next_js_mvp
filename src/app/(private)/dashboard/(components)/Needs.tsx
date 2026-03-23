export const Needs = () => {
  return (
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
  );
};
