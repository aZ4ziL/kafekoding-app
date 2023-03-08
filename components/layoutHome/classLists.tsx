import overlayStyles from "@/styles/Overlay.module.css";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import Image from "next/image";
import { useState } from "react";

interface Props {
  courses: [{ [key: string]: string | number }];
}

const ClassLists = ({ courses }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState<{ [key: string]: string | number }>({
    title: "",
    content: "",
    openedAt: "",
    closedAt: "",
  });

  const handleModalShow = (title: string, content: string, openedAt: string, closedAt: string) => {
    setShowModal(true);
    setModalContent({ title: title, content: content, openedAt: openedAt, closedAt: closedAt });
  };
  const handleModalClose = () => setShowModal(false);

  return (
    <>
      <section id="daftarKelas" className="new-section">
        <h1 className="fw-bold text-center text-uppercase mb-3">Daftar Kelas</h1>
        <Row>
          {courses.map((course, index) => (
            <Col key={index} lg={4} md={4} sm={12} className="mb-4 mb-lg-0">
              <Card className="shadow-sm mb-2" style={{ height: "200px" }}>
                <Card.Body className="p-0">
                  <div className={overlayStyles.overlayHeader}>
                    <Image src={course.logo.toString()} alt={course.title.toString()} width={100} height={100}
                           className="img-fluid rounded" />
                    <div className={overlayStyles.overlayItem}>
                      <div className={overlayStyles.overlayChild}>
                        <div className="d-flex flex-column">
                          <h5 className="text-white fw-bold text-uppercase">{course.title.toString()}</h5>
                          <span className="text-muted">{course.openedAt} - {course.closedAt}</span>
                          <Button variant="outline-primary" size="sm"
                                  onClick={() => handleModalShow(course.title.toString(), course.description.toString(), course.openedAt.toString(), course.closedAt.toString())}>Daftar
                            Disini</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      <Modal show={showModal} onHide={handleModalClose} backdrop="static" keyboard={false}
             fullscreen={true}>
        <Modal.Header closeButton>
          <Modal.Title>{modalContent.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalContent.content}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ClassLists;
