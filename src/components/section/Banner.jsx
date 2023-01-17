import ecoTec from '../../assets/img/technology+ecommerce.webp';
import tienOnline from '../../assets/img/tienda-online.webp';
import bussTec from '../../assets/img/ecoweb.webp';

const Banner = () => {
    return(
        <section className="banner">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
              <img src={ecoTec} className="d-flex" alt="Imagen 1"
                width="256" height="144" style={{width: 100 + '%', height: 500 + 'px', objectFit: 'cover'}} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                <h5 className="fs-1">Crear</h5>
                <p>Registra tus productos en linea</p>
                <a className="btn btn-success px-5" href='#lista'>Empezar</a>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img src={tienOnline} className="d-flex" alt="Imagen 2" width="256" height="144"
                style={{width: 100 + '%', height: 500 + 'px', objectFit: 'cover'}} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                <h5 className="fs-1">Editar</h5>
                <p>Edita los campos de tus productos</p>
                <a className="btn btn-success px-5" href='#lista'>Empezar</a>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img src={bussTec} className="d-flex" alt="Imagen 3" width="256" height="144"
                style={{width: 100 + '%', height: 500 + 'px', objectFit: 'cover'}} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                <h5 className="fs-1">Eliminar</h5>
                <p>Elimina los productos que no desees en tu lista</p>
                <a className="btn btn-success px-5" href='#lista'>Empezar</a>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    );
};
export default Banner;