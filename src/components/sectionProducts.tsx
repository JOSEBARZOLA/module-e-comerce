const SectionProducts = () => {
  return (
    <section className="hero is-medium is-link ">
      <div className="hero-body p-5">
        <section className="section">
          <div className="container">
            <div className="container is-max-widescreen">
              <h3 className="title has-text-start is-size-4 has-text-dark">
                Ofertas del mes
              </h3>
            </div>
          </div>

          <nav
            className="pagination is-small is-right"
            role="navigation"
            aria-label="pagination"
          >
            <ul className="pagination-list">
              <li>
                <a
                  href="#"
                  className="pagination-link"
                  aria-label="Goto page 1"
                >
                  1
                </a>
              </li>
              <li>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
              <li>
                <a
                  href="#"
                  className="pagination-link"
                  aria-label="Goto page 45"
                >
                  45
                </a>
              </li>
              <li>
                <a
                  className="pagination-link is-current"
                  aria-label="Page 46"
                  aria-current="page"
                >
                  46
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="pagination-link"
                  aria-label="Goto page 47"
                >
                  47
                </a>
              </li>
              <li>
                <span className="pagination-ellipsis">&hellip;</span>
              </li>
              <li>
                <a
                  href="#"
                  className="pagination-link"
                  aria-label="Goto page 86"
                >
                  86
                </a>
              </li>
            </ul>
          </nav>
          <div className="container">
            <button></button>
            <div className="container">
              <div className="container columns">
                <div className="card column is-3 has-background-white has-text-dark">
                  <div className="card-image has-background-white has-text-centered">
                    <img
                      src="https://http2.mlstatic.com/D_NQ_NP_763349-MLA84856613035_052025-OO.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-content has-text-dark has-background-white">
                    <p className="title has-text-dark is-size-7">monopatin1</p>
                    <p>$143,99</p>
                  </div>
                  <footer className="card-footer">
                    <p className="card-footer-item">
                      <button className="button is-success is-small">
                        agregar
                      </button>
                    </p>
                  </footer>
                </div>

                <div className="card column is-3 has-background-white has-text-dark">
                  <div className="card-image has-background-white has-text-centered">
                    <img
                      src="https://http2.mlstatic.com/D_NQ_NP_763349-MLA84856613035_052025-OO.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-content has-text-dark has-background-white">
                    <p className="title has-text-dark is-size-7">monopatin1</p>
                    <p>$143,99</p>
                  </div>
                  <footer className="card-footer">
                    <p className="card-footer-item">
                      <button className="button is-success is-small">
                        agregar
                      </button>
                    </p>
                  </footer>
                </div>
                <div className="card column is-3 has-background-white has-text-dark">
                  <div className="card-image has-background-white has-text-centered">
                    <img
                      src="https://http2.mlstatic.com/D_NQ_NP_763349-MLA84856613035_052025-OO.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-content has-text-dark has-background-white">
                    <p className="title has-text-dark is-size-7">monopatin1</p>
                    <p>$143,99</p>
                  </div>
                  <footer className="card-footer">
                    <p className="card-footer-item">
                      <button className="button is-success is-small">
                        agregar
                      </button>
                    </p>
                  </footer>
                </div>

                <div className="card column is-3 has-background-white has-text-dark">
                  <div className="card-image has-background-white has-text-centered">
                    <img
                      src="https://http2.mlstatic.com/D_NQ_NP_763349-MLA84856613035_052025-OO.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-content has-text-dark has-background-white">
                    <p className="title has-text-dark is-size-7">monopatin1</p>
                    <p>$143,99</p>
                  </div>
                  <footer className="card-footer">
                    <p className="card-footer-item">
                      <button className="button is-success is-small">
                        agregar
                      </button>
                    </p>
                  </footer>
                </div>
              </div>
            </div>
            <button></button>
          </div>
        </section>
      </div>
    </section>
  );
};
export default SectionProducts;
