import { Card } from 'react-bootstrap';

import { Link } from 'react-router-dom'

export default function ProductCard({productProp}) {
	return(
		<Card style={{ width: '18rem'}} className="d-inline-flex m-5 border-0" id="productCard">
			<Card.Img variant="top" src={productProp.imageUrl} />
			<Card.Body>
				<Card.Title>{productProp.name}</Card.Title>
					<Card.Text>{productProp.description}</Card.Text>
					<Card.Text>Price: {productProp.price}</Card.Text>
				<Link to={`view/${productProp._id}`} className="btn btn-primary">View Product</Link>
			</Card.Body>
		</Card>
	);
};
