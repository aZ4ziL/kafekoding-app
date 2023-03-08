import { Card, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey, faSignIn } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Head from "next/head";
import Loader from "@/components/loader";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login Akun | Kafekoding Community</title>
      </Head>
      <Loader />
      <Container>
        <Row className="justify-content-center pt-5">
          <Col lg={6} md={12} sm={12}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center fw-bold text-uppercase mb-3">Selamat Datang</Card.Title>
                <Form>
                  <Row>
                    <Col sm={6} className="mb-3">
                      <InputGroup>
                        <InputGroup.Text id="basic-addon-username">
                          <FontAwesomeIcon icon={faUser} />
                        </InputGroup.Text>
                        <Form.Control type="text" placeholder="Username" aria-label="Username"
                                      aria-describedby="basic-addon-username" />
                      </InputGroup>
                    </Col>
                    <Col sm={6} className="mb-3">
                      <InputGroup>
                        <InputGroup.Text id="basic-addon-password">
                          <FontAwesomeIcon icon={faKey} />
                        </InputGroup.Text>
                        <Form.Control type="password" placeholder="Password" aria-label="Password"
                                      aria-describedby="basic-addon-password" />
                      </InputGroup>
                    </Col>
                    <div className="d-grid gap-2">
                      <Link href="/" className="btn btn-primary">
                        Login
                        <FontAwesomeIcon icon={faSignIn} className="ms-1" />
                      </Link>
                      <Link href="/register" className="text-muted">
                        Belum mempunyai akun? Silahkan daftar disini.
                      </Link>
                    </div>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
