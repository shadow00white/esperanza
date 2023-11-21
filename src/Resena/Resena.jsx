import "./Resena.css";
export function Resena() {
  return (
    <>
      <div className="container margin">
        <div className="row ">
          <div className="col-6">
            <strong className="text-primary-emphasis">
              Acerca de mi
            </strong>
            <h3 className="mb-0">Maria Angélica</h3>
            <div className="mb-1 text-body-secondary">
              Nunca dejen de soñar.
              <hr />
              <div>
                <p className="card-text mb-auto h6">
              Actualmente, me pueden encontrar todos los días en la Calle
              Comercial Plaza de Bello. Mi espacio de trabajo soñado se
              materializa en una tienda de mercado que ofrece una amplia
              variedad de productos. Siempre estoy dispuesta a recibir a todos
              con alegría y amor.
              </p>
              </div>
            </div>
          </div>
          <div className="col-6 d-none d-lg-block ">
            <img
              src="../../src/assets/img/woman-431957_1280.jpg"
              alt="Descripción de la imagen"
              className="img-fluid size" 
            />
          </div>
        </div>
      </div>
    </>
  );
}
