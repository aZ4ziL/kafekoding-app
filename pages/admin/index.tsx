import Head from "next/head";
import sidebarStyles from "@/styles/Sidebar.module.css";
import avatarPic from "@/public/images/avatar/man1.jpg";
import Image from "next/image";
import logoPic from "@/public/logo.png";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faGears,
  faBars,
  faUpload,
  faImages,
  faChalkboard,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { CardInfo } from "@/components/layoutAdmin";
import { useRouter } from "next/router";
import Loader from "@/components/loader";

export default function Admin() {
  const [showSidebar, setShowSidebar] = useState("");

  const router = useRouter();
  const redirectToHome = () => {
    router.push("/");
  };

  const handleShowSideBar = () => {
    if (showSidebar === "") {
      setShowSidebar(`${sidebarStyles.hide}`);
    } else {
      setShowSidebar("");
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.screen.width < 450) {
        setShowSidebar(`${sidebarStyles.hide}`);
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>Admin - Kafekoding Community</title>
      </Head>

      <Loader />

      <div className="d-flex">
        {/* Sidebar */}
        <div className={`${sidebarStyles.sidebar} ${showSidebar}`}>
          <div className={sidebarStyles.sidebarHeader}>
            <Link href="/" legacyBehavior>
              <a>
                <Image src={logoPic} alt="Logo" width={40} height={40} />
                <h4>Kafekoding</h4>
              </a>
            </Link>
          </div>

          <div className={sidebarStyles.sidebarBody}>
            <div className={sidebarStyles.listItems}>
              <span className={sidebarStyles.title}>MENU</span>
              <Link href="#" legacyBehavior>
                <a className={sidebarStyles.link}>
                  <FontAwesomeIcon icon={faTachometerAlt} className={sidebarStyles.icon} />
                  <span>Dashboard</span>
                </a>
              </Link>
              <Link href="#" legacyBehavior>
                <a className={sidebarStyles.link}>
                  <FontAwesomeIcon icon={faChalkboard} className={sidebarStyles.icon} />
                  <span>Kelas</span>
                </a>
              </Link>
              <Link href="#" legacyBehavior>
                <a className={sidebarStyles.link}>
                  <FontAwesomeIcon icon={faImages} className={sidebarStyles.icon} />
                  <span>Gallery</span>
                </a>
              </Link>

              <span className={sidebarStyles.title}>OTHERS</span>
              <Link href="#" legacyBehavior>
                <a className={sidebarStyles.link}>
                  <FontAwesomeIcon icon={faGears} className={sidebarStyles.icon} />
                  <span>Pengaturan</span>
                </a>
              </Link>
            </div>
          </div>

          <div className={sidebarStyles.sidebarFooter}>
            <Image src={avatarPic} alt="Avatar" className="rounded-circle" width={50} height={50} />
            <h6>Fajri Fath</h6>

            <Link href="/logout" legacyBehavior>
              <Button variant="danger" size="sm">
                Logout
              </Button>
            </Link>
          </div>
        </div>
        {/* Sidebar */}

        {/* Content */}
        <div className={sidebarStyles.mainContent}>
          {/* Navigation*/}
          <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm">
            <Container>
              <Button variant="link" onClick={() => handleShowSideBar()}>
                <FontAwesomeIcon icon={faBars} />
              </Button>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link onClick={() => redirectToHome()}>Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown" align="end">
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
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          {/* Navigation*/}
          <Container className="mt-5">
            <div className="d-flex align-items-center justify-content-between mb-3">
              <h4>Anda adalah Admin</h4>
              <Button variant="danger">
                Report
                <FontAwesomeIcon icon={faUpload} className="ms-1" />
              </Button>
            </div>
            <CardInfo />
          </Container>
        </div>
        {/* Content */}
      </div>
    </>
  );
}
