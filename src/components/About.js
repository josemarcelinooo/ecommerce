//[ACTIVITY]
import {Row, Col,} from 'react-bootstrap';

export default function About() {
	return(
		<Row className="p-5 aboutMe">
				<Col xs={12} md={4}>
					<h1 className="my-4"> About Me </h1>
					<h2>Jose Marcelino Catacutan</h2>
					<h2>Full Stack Web Developer</h2>
					<p>Full Stack Web Developer from Zuitt Coding Bootcamp</p>
					<h2>Contact Me</h2>
					<ul>
						<li>Email: josemarcelinocatacutan@gmail.com</li>
						<li>Mobile No. 0915-375-3335</li>
						<li>Address: 026 Purok 2A, San Juan, Apalit, Pampanga</li>
					</ul>
				</Col>
		</Row>
	
			
		
	);
};

