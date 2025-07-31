import "./assets/sass/_main.scss";

function App() {
  return (
    <>
      <section className="hero is-primary is-fullheight">
        <div className="hero-head">
          <header className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <p className="title">LOGO</p>
                </a>
                <span className="navbar-burger" data-target="navbarMenuHeroC">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroC" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item"> Home </a>
                  <a className="navbar-item"> Examples </a>
                  <a className="navbar-item"> Documentation </a>
                  <span className="navbar-item">
                    <a className="button is-light">
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </header>
        </div>
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Title</p>
            <p className="subtitle">Subtitle</p>
          </div>
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <ul>
                <li className="navbar-item">
                  <a>Overview</a>
                </li>
                <li className="navbar-item">
                  <a>Modifiers</a>
                </li>
                <li className="navbar-item">
                  <a>Grid</a>
                </li>
                <li className="navbar-item">
                  <a>Elements</a>
                </li>
                <li className="navbar-item">
                  <a>Components</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
export default App;
