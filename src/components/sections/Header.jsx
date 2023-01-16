import { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoEAKON from '../../assets/react.svg';
import { BsList, BsXCircle } from "react-icons/bs";

const Header = () => {
    const header = useRef();
    const modal = useRef();

    const showModal = () => {
      header.current.classList.add('header--move');
      modal.current.classList.add('modal--show');
    }

    const removeModal = () => {
      header.current.classList.remove('header--move');
      modal.current.classList.remove('modal--show');
    }
    return (
        <header className="header" 
        ref={header}
        >
          <nav className="nav">
            <div className="container f-elements f-elements--header">
              <Link to="/">
                <img src={logoEAKON} alt="Logo de EAKON" className="nav__logo" width="32" height="32" />
              </Link>
              <div className="modal modal--header" 
              ref={modal}
              onClick={removeModal}
              >
                <ul className="list list--header" 
                onClick={e => e.stopPropagation()}
                >
                  <li>
                    <NavLink to="/productos" 
                    className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                    onClick={removeModal}>Productos</NavLink>
                  </li>
                  <li>
                    <NavLink to="/servicios" 
                    className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                    onClick={removeModal}>Servicios</NavLink>
                  </li>
                  <li>
                    <NavLink to="/nosotros" 
                    className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                    onClick={removeModal}>Nosotros</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contacto" 
                    className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                    onClick={removeModal}>Contacto</NavLink>
                  </li>
                  <li className='icon icon--close' onClick={removeModal}>
                    <BsXCircle />
                  </li>
                </ul>
              </div>
              <div className="f-elements f-elements--center">
                <select name="" id="">
                    <option value="value1">🌑</option>
                    <option value="value2">☀</option>
                    <option value="value3">💻</option>
                </select>
                <button className='icon' onClick={showModal}>
                    <BsList />
                </button>
              </div>
            </div>
          </nav>
        </header>
    );
};

export default Header;