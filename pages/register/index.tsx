import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Head from "next/head";
import Link from "next/link";
import Loader from "@/components/loader";

export default function Register() {
  return (
    <>
      <Head>
        <title>Pendaftaran Akun | Kafekoding</title>
      </Head>
      <Loader />
      <Container>
        <Row className="justify-content-center pt-5">
          <Col lg={6} md={12} sm={12}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center fw-bold text-uppercase mb-3">
                  Pendaftaran Akun
                </Card.Title>
                <Form>
                  <Row>
                    <Form.Group className="col-md-6 col-sm-6 mb-2">
                      <Form.Label>Nama depan</Form.Label>
                      <Form.Control type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group className="col-md-6 col-sm-6 mb-2">
                      <Form.Label>Nama belakang</Form.Label>
                      <Form.Control type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group className="col-md-6 col-sm-6 mb-2">
                      <Form.Label>Username</Form.Label>
                      <Form.Control type="text"></Form.Control>
                    </Form.Group>
                    <Form.Group className="col-md-6 col-sm-6 mb-2">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email"></Form.Control>
                    </Form.Group>
                    <Form.Group className="col-md-6 col-sm-6 mb-2">
                      <Form.Label>Kata sandi</Form.Label>
                      <Form.Control type="password"></Form.Control>
                    </Form.Group>
                    <Form.Group className="col-md-6 col-sm-6 mb-2">
                      <Form.Label>Konfirmasi kata sandi</Form.Label>
                      <Form.Control type="password"></Form.Control>
                    </Form.Group>
                    <div className="d-grid gap-2">
                      <Button type="submit" variant="primary">
                        Daftar
                      </Button>
                      <Link href="/login" className="text-muted">
                        Sudah mempunyai akun? Login disini.
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
