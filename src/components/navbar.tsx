function Navbar(){
    return(
        <>
        <section className="hero is-primary is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">LOGO</p>
            <p className="subtitle">alguna leyenda</p>
          </div>
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div id="navbarMenuHeroC" className="container">
              <ul>
                <li className="navbar-item">
                  <a>Home</a>
                </li>
                <li className="navbar-item">
                  <a>Ofertas</a>
                </li>
                <li className="navbar-item">
                  <a>Calzado</a>
                </li>
                <li className="navbar-item">
                  <a>Indumentaria</a>
                </li>
                <li className="navbar-item">
                  <a>Contacto</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
        </>
    );
}
export default Navbar;