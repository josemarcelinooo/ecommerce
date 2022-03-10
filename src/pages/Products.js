import { useState, useEffect, useContext } from 'react'
import Hero from './../components/Banner'; 
import ProductCard from './../components/ProductCard';
import { Container } from 'react-bootstrap';
import UserContext from "../UserContext";

const bannerDetailsUser = {
   title: 'Product Catalog',
   content: 'Always available, anywhere.',
}

const bannerDetailsAdmin = {
	title: 'Product Catalog',
	content: 'List of Products',
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
		user.isAdmin ?
			<>
				<Hero bannerData={bannerDetailsAdmin} />
				<Container id="productSection">
					{productsCollection}
				</Container>
				<div className="footer"> 
          			<p className="ml-5" id="footerContent">© Pandora's Box 2022. All rights reserved.</p>
        		</div>
			</>
		:
			<>
				<Hero bannerData={bannerDetailsUser} />
				<Container id="productSection">
					{productsCollection}
				</Container>
				<div className="footer"> 
          			<p className="ml-5 mt-3" id="footerContent">© Pandora's Box 2022. All rights reserved.</p>
        		</div>
			</>
	);
};