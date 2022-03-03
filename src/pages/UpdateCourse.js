//identify the components needed to create the register page

import Hero from './../components/Banner';
import {Container, Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
const data = {
	title: 'Welcome to the Update Course Page',
	content: 'Update Course on this page'
};

export default function Update () {

	const updateCourse = (event) => {
		event.preventDefault()
		return(
			
			Swal.fire(
					{
						icon:"success",
						title:"Successfully updated course!",
						text: "Thank you for updating course!"

					}
				) 
			);
	};

	return(
		<div>
			<Hero bannerData={data}/>
			<Container>
				<h1 className="text-center">Update Course Form</h1>
				<Form onSubmit={e => updateCourse(e)}>
					{/*Course Name Field*/}
					<Form.Group>
						<Form.Label>Course Name: </Form.Label>
						<Form.Control type="text" placeholder="Enter Course Name" required />
					</Form.Group>

					{/*Description Field*/}
					<Form.Group>
						<Form.Label>Description: </Form.Label>
						<Form.Control type="text" placeholder="Enter Description" required />
					</Form.Group>

					
					{/*Price*/}
					<Form.Group>
						<Form.Label>Price: </Form.Label>
						<Form.Control type="number" placeholder="Enter Price" required />
					</Form.Group>

					{/*isActive Switch*/}
					<Form class='mb-4'>
					  <Form.Check 
					    type="switch"
					    id="custom-switch"
					    label="Active"
					  />
					</Form>

					{/*Update Course Button*/}
					<Button variant="success" className="btn-block" type="submit">Update
					</Button>
				</Form>
			</Container>
		</div>
		);
}