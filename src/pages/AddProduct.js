import { useState, useContext } from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import Swal from 'sweetalert2'; 
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";

export default function Add () {
	const { user } = useContext(UserContext);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	const addProduct = async (event) => {
		event.preventDefault()

		const isAdded = await fetch("https://fierce-retreat-87941.herokuapp.com/products/", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.accessToken}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price,
				imageUrl: imageUrl
			})
		}).then(response => response.json()).then(data => {
			if (data.name) {
				return true;
			} else {
				return false;
			}
		})

		if (isAdded) {
			await Swal.fire({
				icon: "success",
				title: "Product added!",
				text: "Changes will be reflected immediately."
			})

			setName("");
			setDescription("");
			setPrice("");

			window.location.href = "/products";
		} else {
			Swal.fire({
				icon: "error",
				title: "Something went wrong.",
				text: "Please try again later."
			})
		}
	};

	return(
		user.isAdmin ?
		<div id="addProduct">
			<Container id="addProductContent">
				<h1 className="text-center mt-5">Add Product Form</h1>
				<Form onSubmit={e => addProduct(e)}>
					<Form.Group>
						<Form.Label>Product Name: </Form.Label>
						<Form.Control type="text" placeholder="Enter Product Name" required value={name} onChange={e => setName(e.target.value)} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Description: </Form.Label>
						<Form.Control type="text" placeholder="Enter Description" required value={description} onChange={e => setDescription(e.target.value)} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Price: </Form.Label>
						<Form.Control type="number" placeholder="Enter Price" required value={price} onChange={e => setPrice(e.target.value)} />
					</Form.Group>
					<Form.Group>
						<Form.Label>Image URL: </Form.Label>
						<Form.Control type="text" placeholder="Enter Image URL" required value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
					</Form.Group>
					<Button variant="success" className="btn-block" type="submit">Add Product
					</Button>
				</Form>
			</Container>
		</div>
		:
		<Navigate to="/" replace={true}/>
		);
}