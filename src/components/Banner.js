import {Row, Col} from 'react-bootstrap'; 

export default function Banner({bannerData}) {
	return(
		<Row className="p-5" >
			<Col>
				<h1> {bannerData.title} </h1>
				<h5 className="my-4"> {bannerData.content} </h5>
				<a className="btn btn-primary" href="/">{bannerData.cta}</a>	
			</Col>
		</Row>
	);
}