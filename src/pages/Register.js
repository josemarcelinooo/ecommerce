//identify the components needed to create the register page.
import { useState, useEffect } from 'react';
import Hero from '../components/Banner';
import { Container, Form, Button } from 'react-bootstrap';
import Swal from 'sweetalert2'; 

const data = {
  title: 'Welcome to the Register Page',
  content: 'Create an Account to Enroll'
}

// declare a state for the input fields in the register page. 

export default function Register() {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [mobileNo, setMobileNo] = useState('');
	const [password1, setPassword1] = useState('');
	const [password2, setPassword2] = useState(''); //password confirmation

	const [isActive, setIsActive] = useState(false);
	const [isMatched, setIsMatched] = useState(false);
	const [isValidNumber, setIsValidNumber] = useState(false);
	const [isAllowed, setIsAllowed] = useState(false);

	useEffect(() => {
			if (mobileNo.length === 11) {
					setIsValidNumber(true);
					if (
						(password1 !== "") &&
						(password2 !== "") &&
						(password1 === password2)
					) {
						setIsMatched(true);
						if (firstName !== "" && lastName !== "" && email !== "") {
								setIsAllowed(true);
								setIsActive(true);
						} else {
								setIsAllowed(false);
								setIsActive(false);
						}
					} else {
						setIsMatched(false);
						setIsAllowed(false);
						setIsActive(false);
					}
			} else if (password1 !== "" && password2 !== "" &&password1 === password2) {
					setIsMatched(true);
			} else {
					setIsActive(false);
					setIsMatched(false);
					setIsValidNumber(false);
					setIsAllowed(false);
			};
	},[firstName, lastName, email, password1, password2, mobileNo]);

    //catch the 'click' event that will happen on the button component
	const registerUser = async (eventSubmit) => {
		eventSubmit.preventDefault()

		const isRegistered = await fetch("https://protected-beyond-20929.herokuapp.com/users/register", {
				method: "POST",
				headers: {
						"Content-Type": "application/json"
				},
				body: JSON.stringify({
				    firstName: firstName,
				    lastName: lastName,
				    email: email,
				    password: password1,
				    mobileNo: mobileNo
				})
		}).then(response => response.json()).then(data => {
			if (data.email) {
					return true;
			} else {
					return false;
			}
		})

		if (isRegistered) {
			await Swal.fire({
				icon: 'success',
				title: 'Registration Successful',
				text: 'Thank you for creating an account!'
			})

			setFirstName('');
			setLastName('');
			setEmail('');
			setMobileNo('');
			setPassword1('');
			setPassword2('');

			window.location.href = "/login";
		} else {
			Swal.fire({
				icon: "error",
				title: "Something went wrong.",
				text: "Try again later."
			})
		}
	};

	return(
	  <div>
		<Hero bannerData={data}/>
		
		<Container>
			{/*Form Heading*/}
			{
				isAllowed ?
					<h1 className="text-center text-success">You May Now Register!</h1>
				:
					<h1 className="text-center">Register Form</h1>
			}
			<h6 className="text-center mt-3 text-secondary">Fill Up the Form Below</h6>

			{/*Form*/}
			<Form onSubmit={e => registerUser(e)}>
			   {/*First Name Field*/}
			   <Form.Group>
			   		<Form.Label>First Name: </Form.Label>
			   		<Form.Control type="text" 
			   		   placeholder="Enter your First Name"
			   		   required 
			   		   value={firstName}
			   		   onChange={event => setFirstName(event.target.value)}
			   		/>
			   </Form.Group>

			   {/*Last Name Field*/}
			   <Form.Group>
			   		<Form.Label>Last Name:</Form.Label>
			   		<Form.Control 
			   			type="text"
			   			placeholder="Enter your Last Name"
			   			required
			   			value={lastName}
			   			onChange={e => setLastName(e.target.value)}
			   		/>
			   </Form.Group>

         {/*Email Address Field*/}
			   <Form.Group>
			   		<Form.Label>Email:</Form.Label>
			   		<Form.Control
			   		   type="email" 
			   		   placeholder="Insert your Email Address"
			   		   required
			   		   value={email}
			   		   onChange={e => setEmail(e.target.value)}
			   		/>
			   </Form.Group>

			   {/*Mobile Number Field*/}
			   {/*Customize this component so that you will get the correct format for the mobile Number*/}
			   <Form.Group>
			   		<Form.Label>Mobile Number:</Form.Label>
			   		<Form.Control 
			   			type="number"
			   			placeholder="Insert your Mobile No."
			   			required
			   			value={mobileNo}
			   			onChange={e => setMobileNo(e.target.value)}
			   		/>
			   		{
			   			isValidNumber ?
			   				<span className="text-success">
			   					Mobile number is valid!
			   				</span>
			   			:
			   				<span className="text-muted">
			   					Mobile number should be 11 digits.
			   				</span>
			   		}
			   </Form.Group>

			   {/*Password Field*/}
			   <Form.Group>
			   	  <Form.Label>Password:</Form.Label>
			   	  <Form.Control 
			   	  	 type="password"
			   	  	 placeholder="Enter your password"
			   	  	 required
			   	  	 value={password1}
			   	  	 onChange={e => setPassword1(e.target.value)}
			   	  />
			   </Form.Group>

			   {/*Confirm Password Field*/}
			   <Form.Group>
			   	  <Form.Label>Confirm Password:</Form.Label>
			   	  <Form.Control 
			   	  	 type="password"
			   	  	 placeholder="Confirm your password"
			   	  	 required
			   	  	 value={password2}
			   	  	 onChange={e => setPassword2(e.target.value)}
			   	  />
			   	  {
			   	  	isMatched ?
			   	  		<span className="text-success">
			   	  			Passwords match!
			   	  		</span>
			   	  	:
			   	  		<span className="text-danger">
			   	  			Passwords should match!
			   	  		</span>
			   	  }
			   </Form.Group>

			   {/*Register Button*/}
			   {
				   	isActive ? 
		   				<Button 
		   			   className="btn-success btn-block"
		   			   type="submit"
		   			 	> 
		   			   Register 
		   			 	</Button>
				   	:
			   			<Button 
			   		   className="btn-secondary btn-block"
			   		   disabled
			   		 	> 
			   		   Register 
			   		 	</Button>
			   }
			</Form>
		</Container>
	  </div>
	);
};