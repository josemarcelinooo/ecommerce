//identify the components that will used for this page

import { useState, useEffect } from 'react';

import Hero from './../components/Banner';
import {Form, Button, Container} from 'react-bootstrap';
import Swal from 'sweetalert2'; 

//we will declare states for our form components for us to be able to access and manage the values in each of the form elements.


const data = {
  title: 'Welcome to Login',
  content: 'Sign in your account below'
}
//create a function that will describe the structure of the page. 
export default function Login() {
    
  //Declare an 'initial'/default state for our form elements. 
  //Bind/Lock the form elements to the desired states
  //Assign the states to their respective components
  //SYNTAX: const/let [getter, setter] = useState()
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

	//Create authentication and product an access token
	const loginUser = async (event) => {
		event.preventDefault(); 

		fetch("https://protected-beyond-20929.herokuapp.com/users/login", {
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

				Swal.fire({
					icon: 'success',
					title: 'Login successful!',
					text: 'Welcome!'
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
	   <>
			<Hero bannerData={data} />

			<Container>
				<h1 className="text-center">Login Form </h1>
				<Form onSubmit={e => loginUser(e)}>
				    {/*Email Address Field*/}
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
								<h6 className="text-success"> Email is valid. </h6>
							:
								<h6 className="text-muted"> Email is invalid. </h6>
						}
					</Form.Group>

					{/*Password Field*/}
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
