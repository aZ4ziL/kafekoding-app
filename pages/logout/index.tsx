import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Logout() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  });
  return (
    <>
      <Head>
        <title>Logout User...</title>
      </Head>
      <Container>
        <div className="position-absolute top-50 start-50 translate-middle">
          <h1>Logout....</h1>
        </div>
      </Container>
    </>
  );
}
