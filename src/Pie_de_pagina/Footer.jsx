export function Footer() {
    return (
      <>
        <footer>
          <div className="container-fluid bg-dark text-white">
            <div className="row p-3 justify-content-center align-items-center">
              <div className="col-2">
                <a className="navbar-brand" href="#">
                  <img
                    src="../../src/assets/img/footer.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="col-4 d-flex flex-column justify-content-between text-center">
                <div>
                  <h3 className="h5">Tienda de abarrotes La Esperanza</h3>
                  <h5 className="h5">Bello-Antioquia-Colombia</h5>
                  <h5 className="h6">Dirección: Cra. 46 #49a-25</h5>
                </div>
                <div className="d-flex justify-content-center align-items-center py-">
                  {/* Iconos debajo del bloque de texto */}
                  <i className="bi bi-instagram p-2 fs-3"></i>
                  <i className="bi bi-whatsapp p-2 fs-3"></i>
                  <i className="bi bi-tiktok p-2 fs-3"></i>
                </div>
                <hr />
                <div>
                  <h5 className="h6">Todos los derechos reservados &copy;</h5>
                </div>
              </div>
              <div className="col-3">
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                   Correo
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="nombre@ejemplo.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                     Comentario
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
  