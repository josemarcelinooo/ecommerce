import { useState, useEffect } from 'react'
import Hero from './../components/Banner'; 
import ProductCard from './../components/ProductCard';
import { Container } from 'react-bootstrap';

const bannerDetails = {
   title: 'Product Catalog',
   content: 'Browse through our Catalog of Products',
   cta: 'See Items on Sale'
}

export default function Products() {
	const [productsCollection, setProductsCollection] = useState([]);

	useEffect(() => {
		fetch("https://fierce-retreat-87941.herokuapp.com/products/").then(res => res.json()).then(convertedData => {
			setProductsCollection(convertedData.map(product => {
				return(
					<ProductCard key={product._id} productProp={product}/>	
				)
			})) 
		});
	}, []);

	return(
		<>
			<Hero bannerData={bannerDetails} />
			<Container>
				{productsCollection}
			</Container>
		</>
	);
};