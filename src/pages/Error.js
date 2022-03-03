//Identify the components that we will use to build the page
import Header from './../components/Banner';

//Pass down 'Props'
const data = {
	title: '404 Page Not Found',
	content: 'The page you are looking for Does Not Exist'
}

export default function ErrorPage(){
	return(
		<Header bannerData={data} />
	);
}; 