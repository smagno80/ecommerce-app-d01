import { ReactElement } from 'react';
import { ApiTopPropduct } from '../apifolder/TopProductsApi';
import Product from './Product';

type Props = {};

const Products = (props: Props): ReactElement => {
	return (
		<div className='p-5 flex flex-wrap'>
			{ApiTopPropduct.map(
				(product, index): ReactElement => (
					<Product item={product} key={index} />
				)
			)}
		</div>
	);
};

export default Products;
