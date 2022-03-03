import { useState, useEffect } from 'react';

import Hero from './../components/Banner';

import {Row, Col, Card, Button, Container} from 'react-bootstrap';

import Swal from 'sweetalert2';

import { Link, useParams } from 'react-router-dom'; 

const data = {
	title: `Welcome to Pandora's Box!`,
	content: 'Check out our school campus'
}

export default function ProductView(){

	// state of our course details
	const [productInfo, setProductInfo] = useState({
		name: null,
		description: null,
		price: null
	});

	const {id} = useParams()

	useEffect(() => {
		fetch(`https://fierce-retreat-87941.herokuapp.com/products/${id}`).then(res => res.json()).then(convertedData => {
			setProductInfo({
				name: convertedData.name,
				description: convertedData.description,
				price: convertedData.price
			})
		});
	}, [id])

    const enroll = () => {
    	return(
    		Swal.fire({
    		   icon: "success",
    		   title: 'Enrolled Successfully!',
    		   text: 'Thank you for enrolling to this course'
    		})
    	);
    }; 

	return(
	  <>
		<Hero bannerData={data} />
		<Row>
		   <Col>
		      <Container>
			      <Card className="text-center">
			         <Card.Body>
			            {/*<!-- Insert Comment Here --> */}
			            {/* Course Name */}
			         	<Card.Title>
			         		<h2> {productInfo.name} </h2>
			         	</Card.Title>
			         	{/*  Course Description */}
			         	<Card.Subtitle>
			         		<h6 className="my-4"> Description: </h6>
			         	</Card.Subtitle>
			         	<Card.Text>
			         		{productInfo.description}
			         	</Card.Text>
			         	{/*  Course Price */}
			         	<Card.Subtitle>
			         		<h6 className="my-4"> Price: </h6>
			         	</Card.Subtitle>
			         	<Card.Text>
			         		₱{productInfo.price}
			         	</Card.Text>
			         </Card.Body>

			         <Button variant="warning" className="btn-block" onClick={enroll}> 
			            Buy Now
			         </Button>

			         <Link className="btn btn-success btn-block mb-5" to="/login">
			         	Add to Wishlist
			         </Link>
			      </Card>
		      </Container>
		   </Col>
		</Row>
	  </>
	);
}; 
