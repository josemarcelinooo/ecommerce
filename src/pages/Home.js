import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
   return(
      <Container id="openingHome">
        <Row>
          <Col id="homeContent">
            <h1 className="mt-5">Anytime and anywhere, at your fingertips.</h1>
            <h5>Have access to the world's best curated repository of productivity boosters.</h5>
            <h5>At your own pace, of course.</h5>
            <a className="btn btn-primary mt-2" href="/products">Shop Now</a>
          </Col>
        </Row>
      </Container>
   );
};