import Banner from './../components/Banner'
import Highlights from './../components/Highlights'

const data = {
  title: `Pandora's Box`,
  content: 'You want it, we have it.',
  cta: `Shop now`
}


export default function Home() {
   return(
   	<div>
	   	 <Banner bannerData={data}/>
	   	 <Highlights />
   	</div>
   );
};