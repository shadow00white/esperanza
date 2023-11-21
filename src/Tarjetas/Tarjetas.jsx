import "./Tarjetas.css"
export function Tarjetas() {
  return (
    <>
      <div className="container mt-0">
        <div className="row mt-0">
          <h1 className="display-1 mt-0 text-center col-lg-12 text-white">
            Secciones principales
          </h1>
        </div>
        <div className="row">
          {/* Primera fila con tres cartas */}
          <div className="col-md-4">
            <div className="card my-5 mx-5 pb-4 shadow bg-body-tertiary rounded">
              <img
                src="../../src/assets/img/carnes frias.jpg"
                className="card-img-top tamaño"
                alt="Imagen de la carta 1"
              />
              <div className="card-body">
                <h5 className="card-title text-center">CARNES FRIAS</h5>
                <p className="card-text">Disfruta de las mejores carnes.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card my-5 mx-5 pb-1 shadow bg-body-tertiary rounded">
              <img
                src="../../src/assets/img/cereales.png"
                className="card-img-top"
                alt="Imagen de la carta 2"
              />
              <div className="card-body">
                <h5 className="card-title text-center">CEREALES</h5>
                <p className="card-text text-center">Cuida tu salud </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card my-5 mx-5 pb-4 shadow bg-body-tertiary rounded">
              <img
                src="../../src/assets/img/enlatados.jpg"
                className="card-img-top"
                alt="Imagen de la carta 3"
              />
              <div className="card-body">
                <h5 className="card-title text-center">ENLATADOS</h5>
                <p className="card-text text-center">Al mejor precio</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {/* Segunda fila con tres cartas */}
          <div className="col-md-4">
            <div className="card my-5 mx-5 pb-4 shadow bg-body-tertiary rounded">
              <img
                src="../../src/assets/img/salsamenteria.jpg"
                className="card-img-top"
                alt="Imagen de la carta 4"
              />
              <div className="card-body">
                <h5 className="card-title text-center">SALSAS</h5>
                <p className="card-text text-center">Con sabor</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card my-5 mx-5 shadow bg-body-tertiary rounded">
              <img
                src="../../src/assets/img/gaseosa.jpg"
                className="card-img-top tamaño"
                alt="Imagen de la carta 5"
              />
              <div className="card-body">
                <h5 className="card-title text-center">GASEOSAS</h5>
                <p className="card-text text-center">Siempre con las mejores ofertas.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card my-5 mx-5 pb-4 shadow bg-body-tertiary rounded">
              <img
                src="../../src/assets/img/grabis.jpg"
                className="card-img-top tamaño"
                alt="Imagen de la carta 6"
              />
              <div className="card-body">
                <h5 className="card-title text-center">GRANOS</h5>
                <p className="card-text text-center">Que alimentan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
