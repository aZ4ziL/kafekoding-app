import { Button, Col, Row } from "react-bootstrap";
import avatarLogo1 from "@/public/images/avatar/man1.jpg";
import avatarLogo2 from "@/public/images/avatar/man2.jpg";
import Image from "next/image";
import aboutUsStyles from "@/styles/AbouUs.module.css";
import { Lightbox } from "yet-another-react-lightbox";
import { useState } from "react";
import Captions from "yet-another-react-lightbox/plugins/captions";


const AboutUs = () => {
  const [aboutIndex, setAboutIndex] = useState(-1);

  return (
    <>
      <section id="tentangKami" className="new-section">
        <h1 className="text-center fw-bold text-uppercase">Tentang Kami</h1>
        <p className="text-center w-75 mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod
          tempor
          incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.</p>
        <Row className="justify-content-center">
          <Col lg={6}>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div className={aboutUsStyles.aboutUsContainer}>
                  <Image src={avatarLogo1} alt="Azari Avatar" style={{ width: "100%", height: "300px" }} />
                  <div className={aboutUsStyles.aboutUsOverlay}>
                    <div className={aboutUsStyles.aboutUsChild}>
                      <h1 className="fw-bold">Azari</h1>
                      <h5>Ketua Kafekoding</h5>
                      <Button variant="success" size="sm" onClick={() => setAboutIndex(0)}>
                        Detail
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <div className={aboutUsStyles.aboutUsContainer}>
                  <Image src={avatarLogo2} alt="Fajri Avatar" style={{ width: "100%", height: "300px" }} />
                  <div className={aboutUsStyles.aboutUsOverlay}>
                    <div className={aboutUsStyles.aboutUsChild}>
                      <h1 className="fw-bold">Fajri Fath</h1>
                      <h5>Wakil Kafekoding</h5>
                      <Button variant="success" size="sm" onClick={() => setAboutIndex(1)}>
                        Detail
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Lightbox open={aboutIndex >= 0}
                  index={aboutIndex}
                  close={() => setAboutIndex(-1)}
                  slides={[
                    { src: "/images/avatar/man1.jpg", title: "Azari", description: "Ketua Kafekoding" },
                    { src: "/images/avatar/man2.jpg", title: "Fajri Fath", description: "Wakil Kafekoding" },
                  ]}
                  plugins={[Captions]}
        />
      </section>
    </>
  );
};

export default AboutUs;
