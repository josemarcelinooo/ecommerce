//This component will used as the hero section of our page.
//Responsive -> grid system 
import {Row, Col} from 'react-bootstrap'; 

//we will use default bootstrap utility classes to format the component

//create a function that will describe the structure of the hero section.

//'class' ->reserved keyword (HTML)
//React/JSX elements -> 'className'
export default function Banner({bannerData}) {
	return(
		<Row className="p-5" >
			<Col>
				<h1> {bannerData.title} </h1>
				<h5 className="my-4"> {bannerData.content} </h5>
				<a className="btn btn-primary" href="/">{bannerData.cta}</a>	
			</Col>
		</Row>
	);
}

//expose the component