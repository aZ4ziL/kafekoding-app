import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
  faPinterest,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="text-center bg-dark text-white" style={{ marginTop: "80px" }}>
      {/* Grid container */}
      <div className="container pt-4">
        {/* Section: Social media */}
        <section className="mb-4">
          {/* Facebook */}
          <a className="btn btn-link btn-floating btn-lg text-dark m-1 text-white" href="#" role="button"
             data-mdb-ripple-color="dark">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          {/* Twitter */}
          <a className="btn btn-link btn-floating btn-lg text-dark m-1 text-white" href="#" role="button"
             data-mdb-ripple-color="dark">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          {/* Google */}
          <a className="btn btn-link btn-floating btn-lg text-dark m-1 text-white" href="#" role="button"
             data-mdb-ripple-color="dark">
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          {/* Instagram */}
          <a className="btn btn-link btn-floating btn-lg text-dark m-1 text-white" href="#" role="button"
             data-mdb-ripple-color="dark">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/* Pinterest */}
          <a className="btn btn-link btn-floating btn-lg text-dark m-1 text-white" href="#" role="button"
             data-mdb-ripple-color="dark">
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          {/* Github */}
          <a className="btn btn-link btn-floating btn-lg text-dark m-1 text-white" href="#" role="button"
             data-mdb-ripple-color="dark">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </section>
        {/* Section: Social media */}
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div className="text-center text-white p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © 2020 Copyright:
        <Link className="text-white" href="/">www.kafekoding.com</Link>
      </div>
      {/* Copyright */}
    </footer>
  );
};

export default Footer;
