import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-col">
        <div className="footer-sub-col">
          <div className="footer-link">
            <Link to="mailto:contact@stergiospappos.me">
              &#x2192; contact@stergiospappos.me
            </Link>
          </div>
          <div className="footer-link">
            <Link to="#.">&#x2192; Enquiries</Link>
          </div>
        </div>
        <div className="footer-sub-col">
          <div className="footer-link">
            <Link to="https://instagram.com/s_pappos">&#x2192; Instagram</Link>
          </div>
          <div className="footer-link">
            <Link to="https://api.whatsapp.com/send?phone=+306946063828">
              &#x2192; WhatsApp
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-col">
        <div className="footer-link">
          <p>&copy; Stergios Pappos 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
