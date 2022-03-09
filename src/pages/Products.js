import { useState, useEffect, useContext } from 'react'
import Hero from './../components/Banner'; 
import ProductCard from './../components/ProductCard';
import { Container } from 'react-bootstrap';
import UserContext from "../UserContext";

const bannerDetails = {
   title: 'Product Catalog',
   content: 'Browse through our Catalog of Products',
   cta: 'See Items on Sale'
}

export default function Products() {
	const { user } = useContext(UserContext);

	const [productsCollection, setProductsCollection] = useState([]);

	useEffect(() => {
		if (user.isAdmin) {
			fetch("https://fierce-retreat-87941.herokuapp.com/products/all", {
				headers: {
					Authorization: `Bearer ${localStorage.accessToken}`
				}
			}).then(res => res.json()).then(convertedData => {
				setProductsCollection(convertedData.map(product => {
					return(
						<ProductCard key={product._id} productProp={product}/>	
					)
				})) 
			});
		} else {
			fetch("https://fierce-retreat-87941.herokuapp.com/products/").then(res => res.json()).then(convertedData => {
				setProductsCollection(convertedData.map(product => {
					return(
						<ProductCard key={product._id} productProp={product}/>	
					)
				})) 
			});
		}
	}, [user.isAdmin]);

	return(
		<>
			<Hero bannerData={bannerDetails} />
			<Container id="productSection">
				{productsCollection}
			</Container>
		</>
	);
};