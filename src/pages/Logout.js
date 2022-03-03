import Hero from './../components/Banner';

const data = {
	title: 'Welcome to Logout',
	content: 'Logout End of the Session'
}

//create a function that will describe the structure of the page.
export default function Logout() {
	return(
		<Hero bannerData={data} />
	);
};