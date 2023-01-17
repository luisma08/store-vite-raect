import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";

const Footer = () => {
    return(
        <footer className="text-center text-lg-start text-white bg-dark shadow-lg mt-auto">
    
    <section className="d-flex justify-content-between p-4 bg-success">
      
      <div className="me-5">
        <span>Conéctate con nosotros en nuestras redes sociales:</span>
      </div>
      

      
      <div>
        <a href="https://www.facebook.com/jorgeluis.maytaavalos" className="text-light me-4 text-decoration-none">
            <BsFacebook />
        </a>
        <a href="https://www.instagram.com/luis.m.a96/" className="text-light me-4 text-decoration-none">
          <BsInstagram />
        </a>
        <a href="https://github.com/luisma08/" className="text-light me-4 text-decoration-none">
            <BsGithub />
        </a>
      </div>
      
    </section>
    

    
    <section className="">
      <div className="container text-center text-md-start mt-5">
        
        <div className="row mt-3">
          
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">E-COMMERCE</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60 + 'px', backgroundColor: '#198754', height: 2 + 'px'}} />
            <p>
              SOMOS UNA COMPAÑIA QUE OFRECE PRODUCTOS DE CALIDAD AL MEJOR PRECIO.
            </p>
          </div>

          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 className="text-uppercase fw-bold">Contactos</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{width: 60 + 'px', backgroundColor: '#198754', height: 2 + 'px'}} />
            <p><i className="fas fa-home mr-3"></i> lIMA, PERÚ</p>
            <p><i className="fas fa-envelope mr-3"></i> contacto@ecommerce.com</p>
            <p><i className="fas fa-phone mr-3"></i> +51 999 999 999</p>
          </div>
          
        </div>
        
      </div>
    </section>
    

    
    <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      © 2022 Copyright:
      <a className="text-white" style={{ textDecoration: 'none' }}> Jorge Mayta</a>
    </div>
    
  </footer>
    );
};
export default Footer;