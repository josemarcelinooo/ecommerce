import { Card } from 'react-bootstrap';

import { Link } from 'react-router-dom'

export default function ProductCard({productProp}) {
	return(
		<Card className="m-4 d-md-inline-flex d-sm-inline-flex d-lg-inline-flex productCard">
			<Card.Body>
				<Card.Title>
					{productProp.name}
				</Card.Title>
				<Card.Text>
					{productProp.description}
				</Card.Text>
				<Card.Text>
					Price: {productProp.price}
				</Card.Text>
				<Link to={`view/${productProp._id}`} className="btn btn-primary">
					View Product
				</Link>
			</Card.Body>
		</Card>
	);
};
