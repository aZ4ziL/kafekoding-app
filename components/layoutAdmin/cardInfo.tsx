import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faSchool } from "@fortawesome/free-solid-svg-icons";
import borderStyles from "@/styles/Border.module.css";

const CardInfo = () => {
  return (
    <Row>
      <Col xl={3} lg={3} md={4} sm={6} className="mb-1">
        <Card className={borderStyles.borderLeftPrimary}>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title className="small fw-bold text-uppercase">Kelas</Card.Title>
                <span className="fw-bold">9</span>
              </div>
              <FontAwesomeIcon icon={faSchool} size="2x" />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={3} md={4} sm={6} className="mb-1">
        <Card className={borderStyles.borderLeftDanger}>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title className="small fw-bold text-uppercase">Peserta</Card.Title>
                <span className="fw-bold">40</span>
              </div>
              <FontAwesomeIcon icon={faUsers} size="2x" />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={3} md={4} sm={6} className="mb-1">
        <Card className={borderStyles.borderLeftInfo}>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title className="small fw-bold text-uppercase">Component</Card.Title>
                <span className="fw-bold">200</span>
              </div>
              <FontAwesomeIcon icon={faUsers} size="2x" />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={3} md={4} sm={6} className="mb-1">
        <Card className={borderStyles.borderLeftWarning}>
          <Card.Body>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title className="small fw-bold text-uppercase">Component</Card.Title>
                <span className="fw-bold">200</span>
              </div>
              <FontAwesomeIcon icon={faUsers} size="2x" />
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CardInfo;
