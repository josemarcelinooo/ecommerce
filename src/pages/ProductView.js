import { useState, useEffect, useContext } from 'react';
import UserContext from "../UserContext";
import {Row, Col, Card, Button, Container} from 'react-bootstrap';
import Swal from 'sweetalert2';
import { Link, useParams } from 'react-router-dom'; 

export default function ProductView(){
	const { user } = useContext(UserContext);

	const [productInfo, setProductInfo] = useState({
		name: null,
		description: null,
		price: null,
		imageUrl: null,
		isActive: null,
	});

	const {id} = useParams()

	useEffect(() => {
		fetch(`https://fierce-retreat-87941.herokuapp.com/products/${id}`).then(res => res.json()).then(convertedData => {
			setProductInfo({
				name: convertedData.name,
				description: convertedData.description,
				price: convertedData.price,
				imageUrl: convertedData.imageUrl,
				isActive: convertedData.isActive
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

	const addToCart = async () => {
		await fetch(`https://fierce-retreat-87941.herokuapp.com/users/add-to-cart`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.accessToken}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				productId: id,
				quantity: 1
			})
		})
		await Swal.fire({
			icon: "success",
			title: "Successfully added to cart.",
			text: "Continue to browse and add more!"
		})
		window.location.href = "/products"
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

	const archiveProduct = async () => {
		await fetch(`https://fierce-retreat-87941.herokuapp.com/products/${id}/archive`, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${localStorage.accessToken}`,
				"Content-Type": "application/json"
			}
		})
		await Swal.fire({
			icon: "success",
			title: "Successfully archived product.",
			text: "Product will not be visible to regular users."
		})
		window.location.href = "/products";
	}

	const unarchiveProduct = async () => {
		await fetch(`https://fierce-retreat-87941.herokuapp.com/products/${id}/unarchive`, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${localStorage.accessToken}`,
				"Content-Type": "application/json"
			}
		})
		await Swal.fire({
			icon: "success",
			title: "Successfully unarchived product.",
			text: "Product will now be visible to regular users."
		})
		window.location.href = "/products";
	}

	return(
	  <>
		<Row className="mt-5" id="productViewRow">
		   <Col id="productContainer">
		      <Container className="mt-5">
			    <Card className="text-center border-0 pt-3">
			        <Card.Body>
						<Card.Img id="viewProductImage" variant="top" src={productInfo.imageUrl} />
						<Card.Title>
							<h2> {productInfo.name} </h2>
						</Card.Title>
						<Card.Text>
							{productInfo.description}
						</Card.Text>
						<Card.Text>
							₱{productInfo.price}
						</Card.Text>
			        </Card.Body>

					{
						user.id ?
							user.isAdmin ?
								<>
									<Button variant="info" className="btn-block" onClick={() => window.location.href = `/products/${id}`}> 
										Update
									</Button>
									<Button variant="danger" className="btn-block" onClick={deleteProduct}>
										Delete
									</Button>
									{
									productInfo.isActive ?
										<Button variant="warning" className="btn-block" onClick={archiveProduct}>
											Archive
										</Button>
									:
										<Button variant="success" className="btn-block" onClick={unarchiveProduct}>
											Unarchive
										</Button>
									}
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
