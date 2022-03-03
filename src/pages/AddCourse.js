//identify the components needed to create the register page

import Hero from './../components/Banner';
import {Container, Form, Button} from 'react-bootstrap';
import Swal from 'sweetalert2';
const data = {
	title: 'Welcome to the Create Course Page',
	content: 'Create Course on this page'
};

export default function Create () {

	const createCourse = (event) => {
		event.preventDefault()
		return(
			
			Swal.fire(
					{
						icon:"success",
						title:"Successfully created course!",
						text: "Thank you for creating course!"

					}
				) 
			);
	};

	return(
		<div>
			<Hero bannerData={data}/>
			<Container>
				<h1 className="text-center">Create Course Form</h1>
				<Form onSubmit={e => createCourse(e)}>
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

					{/*Create Course Button*/}
					<Button variant="success" className="btn-block" type="submit">Create
					</Button>
				</Form>
			</Container>
		</div>
		);
}
