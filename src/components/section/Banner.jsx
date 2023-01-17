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
              <img src="" className="d-flex" alt="Imagen 1"
                width="256" height="144" style={{width: '100%', height: '100vh', objectFit: cover}} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                <h5 className="fs-1">TECNOLOGIAS</h5>
                <p>Encuentra lo mejor de lo mejor en tecnologia.</p>
                <button className="btn btn-success px-5">COMPRAR</button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img src="" className="d-flex" alt="Imagen 2" width="256" height="144"
                style={{width: '100%', height: '100vh', objectFit: cover}} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                <h5 className="fs-1">Moda y ROPA</h5>
                <p>Encuentra lo mejor de lo mejor en Moda y ROPA.</p>
                <button className="btn btn-success px-5">COMPRAR</button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="5000">
              <img src="" className="d-flex" alt="Imagen 3" width="256" height="144"
                style={{width: '100%', height: '100vh', objectFit: cover}} />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50">
                <h5 className="fs-1">GADGETS</h5>
                <p>Encuentra lo mejor de lo mejor en Gadgets.</p>
                <button className="btn btn-success px-5">COMPRAR</button>
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