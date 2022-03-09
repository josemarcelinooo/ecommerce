import { useState, useEffect, useContext } from 'react';
import UserContext from "../UserContext";
import Hero from './../components/Banner';
import {Row, Col, Card, Button, Container} from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Link, useParams } from 'react-router-dom'; 

const data = {
	title: `Welcome to Pandora's Box!`,
	content: 'Check out our school campus',
	cta: 'Buy Now'
}

export default function ProductView(){
	const { user } = useContext(UserContext);

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

    const buy = () => {
    	return(
    		Swal.fire({
    		   icon: "success",
    		   title: 'Product has been purchased!',
    		   text: 'Thank you for your purchase.'
    		})
    	);
    }; 

	const addToCart = () => {
		return(
			Swal.fire({
				icon: "success",
				title: "Successfully added to cart!",
				text: "Add more products and earn more points!"
			})
		)
	}

	const deleteProduct = async () => {
		await fetch(`https://fierce-retreat-87941.herokuapp.com/products/${id}`, {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${localStorage.accessToken}`
			}
		})
		await Swal.fire({
			icon: "success",
			title: "Successfully deleted product.",
			text: "Product has now been removed from the database."
		})
		window.location.href = "/products";
	}

	return(
	  <>
		<Hero bannerData={data} />
		<Row>
		   <Col>
		      <Container>
			    <Card className="text-center">
			        <Card.Body>
						<Card.Title>
							<h2> {productInfo.name} </h2>
						</Card.Title>
						<Card.Subtitle>
							<h6 className="my-4"> Description: </h6>
						</Card.Subtitle>
						<Card.Text>
							{productInfo.description}
						</Card.Text>
						<Card.Subtitle>
							<h6 className="my-4"> Price: </h6>
						</Card.Subtitle>
						<Card.Text>
							₱{productInfo.price}
						</Card.Text>
			        </Card.Body>

					{
						user.id ?
							user.isAdmin ?
								<>
									<Button variant="warning" className="btn-block" onClick={() => window.location.href = `/products/${id}`}> 
										Update
									</Button>
									<Button variant="danger" className="btn-block" onClick={deleteProduct}>
										Delete
									</Button>
								</>
							:
								<>
									<Button variant="success" className="btn-block" onClick={buy}> 
										Buy Now
									</Button>
									<Button variant="info" className="btn-block" onClick={addToCart}>
										Add to Cart
									</Button>
								</>
						:
							<>
								<Link className="btn btn-success btn-block" to="/register"> 
			        				Register
			        			</Link>
								<Link className="btn btn-info btn-block" to="/login">
									Login
								</Link>
							</>
					}
			    </Card>
		      </Container>
		   </Col>
		</Row>
	  </>
	);
}; 
