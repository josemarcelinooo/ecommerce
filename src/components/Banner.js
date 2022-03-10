import {Row, Col, Container} from 'react-bootstrap'; 

export default function Banner({bannerData}) {
	return(
		<Container id="productsOpening">
			<Row className="p-5 mt-5 text-center text-dark" >
				<Col className="mt-4">
					<h1> {bannerData.title} </h1>
					<h5 className="my-4"> {bannerData.content} </h5>
				</Col>
			</Row>
		</Container>
	);
}