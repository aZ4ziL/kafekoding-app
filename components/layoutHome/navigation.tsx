import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import logoPic from "@/public/logo.png";
import { useRouter } from "next/router";

const Navigation = () => {
  const [transparent, setTransparent] = useState("navbar-transparent");

  const router = useRouter();
  const redirectToAdmin = () => router.push("/admin")

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = function() {
        if (window.scrollY > 500) {
          setTransparent("bg-dark shadow-sm");
        } else {
          setTransparent("navbar-transparent");
        }
      };
    }
  });
  return (
    <Navbar expand="lg" variant="dark" className={`${transparent}`} fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logoPic} alt="Logo Kafekoding" width={30} height={30} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#daftarKelas">Kelas</Nav.Link>
            <Nav.Link href="#tentangKami">Tentang</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link onClick={redirectToAdmin}>Admin</Nav.Link>
          </Nav>
          <div className="d-flex align-items center gap-2">
            <Link href="/logout" className="btn btn-outline-danger">
              Logout
              <FontAwesomeIcon icon={faSignOut} className="ms-1" />
            </Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
