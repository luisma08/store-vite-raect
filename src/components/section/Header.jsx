import apiIcon from '../../assets/api.webp';

const Header = () => {

    return (
        <header className="fixed-top shadow-lg border-bottom border-light">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <img src={apiIcon} alt="" width="40" height="40"/>
            </a>
            <a className="navbar-brand" href="#">
                CRUD REACT API
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorias
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item category1" href="#lista">Mis Productos</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
    );
};

export default Header;