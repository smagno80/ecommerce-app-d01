import { ReactElement } from 'react';
import Announce from '../components/Announce';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';

type Props = {};

const Home = (props: Props): ReactElement => {
	return (
		<div>
			<Announce />
			<Navbar />
			<Slider />
			<Categories />
			<Products />
			<Footer />
		</div>
	);
};

export default Home;
