export const Navbar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h2 className="title is-3 m-4">Visão Geral</h2>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start"></div>
        <div className="navbar-end m-4">
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Pesquisa" />
            <span className="icon is-small is-right">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
