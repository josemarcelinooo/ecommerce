//identify the components that will used for this page

import { useState, useEffect, useContext } from 'react';

import Hero from './../components/Banner';
import {Form, Button, Container} from 'react-bootstrap';
import Swal from 'sweetalert2'; 
import { Navigate } from "react-router-dom";
import UserContext from "../UserContext";

const data = {
  title: 'Welcome to Login',
  content: 'Sign in your account below'
}

export default function Login() {
	const { user, setUser } = useContext(UserContext);

	const [email, setEmail ] = useState('');	
	const [password, setPassword ] = useState(''); 

	let addressSign = email.search("@");
	let dns = email.search(".com");

	const [isActive, setIsActive] = useState(false);
	const [isValid, setIsValid] = useState(false);

	useEffect(() => {
	if (dns !== -1 && addressSign !== -1) {
		setIsValid(true);
		if (password !== '') {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	} else {
		setIsValid(false);
		setIsActive(false);
	}
	}, [email, password, addressSign, dns])

	const loginUser = async (event) => {
		event.preventDefault(); 

		fetch("https://fierce-retreat-87941.herokuapp.com/users/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				email: email,
				password: password
			})
		}).then(res => res.json()).then(data => {
			let token = data.accessToken;

			if (typeof token !== "undefined") {
				localStorage.setItem("accessToken", token)

				fetch("https://fierce-retreat-87941.herokuapp.com/users/profile", {
				    headers: {
				      Authorization: `Bearer ${token}`
				    }
				}).then(res => res.json()).then(convertedData => {
				  if (typeof convertedData._id !== "undefined") {
				    setUser({
				      id: convertedData._id,
				      isAdmin: convertedData.isAdmin
				    })

				    Swal.fire({
				    	icon: 'success',
				    	title: 'Login successful!',
				    	text: 'Welcome!'
				    })
				  } else {
				    setUser({
				      id: null,
				      isAdmin: null
				    })
				  }
				})
			} else {
				Swal.fire({
					icon: 'error',
					title: 'Check your credentials.',
					text: 'Contact admin if problem persists.'
				})
			}
		})
	};

	return(
		user.id ?
			<Navigate to="/" replace={true}/>
		:
			<>
				<Container className="mt-5">
					<h1 className="text-center">Login Form </h1>
					<Form onSubmit={e => loginUser(e)}>
						<Form.Group>
							<Form.Label>Email: </Form.Label>
							<Form.Control 
								type="email"
								placeholder="Enter Email Here"
								required
								value={email}
								onChange={event => {setEmail(event.target.value)} }
							/>
							{
								isValid ?
									<h6 className="text-success mt-2"> Email is valid. </h6>
								:
									<h6 className="text-muted mt-2"> Email is invalid. </h6>
							}
						</Form.Group>
						<Form.Group>
							<Form.Label>Password: </Form.Label>
							<Form.Control 
								type="password"
								placeholder="Enter Password Here"
								required
								value={password}
								onChange={e => {setPassword(e.target.value)} }
							/>
						</Form.Group>
						{
							isActive ?
								<Button
								className="btn-block" 
								variant="success"
								type="submit"
								>
								Login
								</Button>
							:
								<Button
								className="btn-block" 
								variant="secondary"
								disabled
								>
								Login
								</Button>
						}
					</Form>
				</Container>
			</>
	);
};
