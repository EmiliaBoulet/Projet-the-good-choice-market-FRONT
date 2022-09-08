import "./footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer_content">

        <div className="footer_content_icons">
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
        </div>

        <div className="footer_information">
          <p className="footer_information_title">the good choice market</p>
          <p className="footer_information_adress">12, place Iéna 75001 PARIS</p>
        </div>

        <div className="footer_information_link">
          <div className="information_link">
          <NavLink to="/cgv" >CGV</NavLink>
          </div>
          <div className="information_link">
          <NavLink to="/faq" className="information_link">FAQ</NavLink>
          </div>
          <div className="information_link">
            <a href="#" className="information_link">BLOG</a>
          </div>
          <div className="information_link">
            <a href="#" className="information_link">Nous contacter</a>
          </div>
          <div className="information_link">
            <NavLink to="/superdev" className="information_link">Nos Super Dev</NavLink>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer;
