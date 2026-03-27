type NavbarProps = {
  title: string;
}

export const Navbar = ({ title }: NavbarProps) => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h2 className="title is-3 m-4">{title}</h2>
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
          <div style={{ fontSize: '2rem', display: 'flex', alignItems: 'center' }}>
            <span className="icon is-large is-right" style={{ fontSize: '1.5rem' }}>
              <i className="fa-solid fa-bell"></i>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
