//acquire all the component that will make up the home page. (hero section, highlights)
import Banner from './../components/Banner'
import Highlights from './../components/Highlights'
import About from './../components/About'

//Lets create a data object that will describe the content of the hero section
const data = {
  title: 'Welcome to the Home Page',
  content: 'Opportunities for everyone, everywhere'
}


export default function Home() {
   return(
   	<div>
	   	 <Banner bannerData={data}/>
	   	 <Highlights />
       <About />
   	</div>
   );
};