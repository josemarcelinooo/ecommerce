import {Row, Col, Card, Container} from 'react-bootstrap';

export default function Highlights() {
	return(
		<Container>
			<Row className="my-3">
			   {/*1st Hightlight*/}
			   <Col xs={12} md={4}>
				  <Card className="p-4 cardHighlight">
				     <Card.Body>
				     	<Card.Title> Wide Range of Selection </Card.Title>
				     	<Card.Text>
				     		Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Iure, quo?	
				     	</Card.Text>
				     </Card.Body>
				  </Card>		      
			   </Col>

			   {/*2nd Hightlight*/}
			   <Col xs={12} md={4}>
				  <Card className="p-4 cardHighlight">
				     <Card.Body>
				     	<Card.Title> Authenticity Guaranteed </Card.Title>
				     	<Card.Text>
				     		Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Iure, quo?	
				     	</Card.Text>
				     </Card.Body>
				  </Card>		      
			   </Col>

				{/*3rd Hightlight*/}
				<Col xs={12} md={4}>
					 <Card className="p-4 cardHighlight">
					     <Card.Body>
					     	<Card.Title> Installment Options </Card.Title>
					     	<Card.Text>
					     		Lorem ipsum dolor, sit amet, consectetur adipisicing elit. Iure, quo?	
					     	</Card.Text>
					     </Card.Body>
					  </Card>		      
				</Col>
			</Row>
		</Container>
	)
}