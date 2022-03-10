import { useState, useContext } from 'react';
import {Form, Button, Container} from 'react-bootstrap';
import Swal from 'sweetalert2'; 
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";
import { useParams } from "react-router-dom"

export default function UpdateProduct () {
	const { user } = useContext(UserContext);

	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");

	const { id } = useParams();

	const updateProduct = async (event) => {
		event.preventDefault()

		const isAdded = await fetch(`https://fierce-retreat-87941.herokuapp.com/products/${id}`, {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${localStorage.accessToken}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				name: name,
				description: description,
				price: price
			})
		}).then(response => response.json()).then(data => {
			return true;
		})

		if (isAdded) {
			await Swal.fire({
				icon: "success",
				title: "Product updated!",
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
		<div id="updateProduct">
			<Container id="updateProductContent">
				<h1 className="text-center">Update Product Form</h1>
				<Form onSubmit={e => updateProduct(e)}>
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
					<Button variant="success" className="btn-block" type="submit">Update Product
					</Button>
				</Form>
			</Container>
		</div>
		:
		<Navigate to={`/products/${id}`} replace={true}/>
		);
}