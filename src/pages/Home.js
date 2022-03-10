import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";

export default function Home() {
   return(
      <>
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
        <Card id="cardHome" className="mt-5 mb-5 d-inline-flex border-0">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  It's a treat to purchase products from Pandora's Box, as they provide the best experience from the moment you click.{' '}
                </p>
                <footer className="blockquote-footer">
                  Tim Cook, <cite title="Source Title">Apple</cite>
                </footer>
              </blockquote>
            </Card.Body>
        </Card>
        <Card id="cardHome" className="mt-5 mb-5 d-inline-flex border-0">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  For the past 3 years, I have been able to count on Pandora's Box to always have the technology that I need at a reasonable price.{' '}
                </p>
                <footer className="blockquote-footer">
                  Elon Musk, <cite title="Source Title">Tesla</cite>
                </footer>
              </blockquote>
            </Card.Body>
        </Card>
        <h1 className="text-center mb-5">Featured Categories</h1>
        <CardGroup className="m-5">
          <Card>
            <Card.Img variant="top" src="https://images.macrumors.com/t/3q1wCX8q2ny5ej3QuD9ERZJsWDA=/800x0/smart/article-new/2019/10/iphone12-lineup-wide.jpg?lossy" />
            <Card.Body>
              <Card.Title>Phones</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a className="btn btn-primary mt-2" href="/products">Browse Collections</a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://images.idgesg.net/images/article/2020/09/ipad-pro-ipad-air-2020-100857621-large.jpg?auto=webp&quality=85,70" />
            <Card.Body>
              <Card.Title>Tablets</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to additional
                content.{' '}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a className="btn btn-primary mt-2" href="/products">Browse Collections</a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202112130444" />
            <Card.Body>
              <Card.Title>Computers</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to
                additional content. This card has even longer content than the first to
                show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <a className="btn btn-primary mt-2" href="/products">Browse Collections</a>
            </Card.Footer>
          </Card>
        </CardGroup>
        <div class="footer"> 
          <p className="ml-5" id="footerContent">© Pandora's Box 2022. All rights reserved.</p>
        </div>
      </>
   );
};